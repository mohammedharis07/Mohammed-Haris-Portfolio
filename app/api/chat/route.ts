import { convertToModelMessages, createUIMessageStreamResponse, streamText, toUIMessageStream, type UIMessage } from 'ai'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { certifications } from '@/data/certifications'
import { experience, leadership } from '@/data/experience'
import { profile } from '@/data/profile'
import { experiments, projects } from '@/data/projects'
import { publications, researchInterests } from '@/data/publications'
import { skillGroups } from '@/data/skills'
import { socials } from '@/data/socials'

export const maxDuration = 30

const MAX_MESSAGES = 20
const MAX_CHARS = 1000

const knowledge = JSON.stringify({
  profile,
  skills: skillGroups,
  projects,
  experiments,
  experience,
  leadership,
  publications,
  researchInterests,
  certifications,
  socials,
})

const system = `You are HARIS.AI, the assistant on the portfolio website of ${profile.name}.
Answer visitors' questions (recruiters, collaborators, engineers) about Haris using ONLY the knowledge base below.
Rules:
- Speak about Haris in the third person, in a confident, friendly, concise tone. Keep answers under 120 words unless asked for detail.
- Reply in plain text. Short bullet lines starting with "- " are fine. No markdown headings, bold, or tables.
- If something is not in the knowledge base, say you don't have that information and suggest contacting Haris at ${profile.email}.
- Never invent facts, numbers, employers, or links. Politely decline requests unrelated to Haris or his work.

KNOWLEDGE BASE (JSON):
${knowledge}`

export async function POST(req: Request) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY
  if (!apiKey) {
    return new Response('Gemini API key is not configured. Please set GEMINI_API_KEY in .env.local', {
      status: 500,
    })
  }

  let messages: UIMessage[]
  try {
    const body = await req.json()
    messages = body?.messages
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response('Missing messages', { status: 400 })
  }

  const trimmed = messages.slice(-MAX_MESSAGES).filter((m) => m.role === 'user' || m.role === 'assistant')
  const tooLong = trimmed.some((m) =>
    m.parts?.some((p) => p.type === 'text' && typeof p.text === 'string' && p.text.length > MAX_CHARS * 4),
  )
  const last = trimmed.at(-1)
  const lastText = last?.parts?.find((p) => p.type === 'text')
  if (tooLong || !last || last.role !== 'user' || !lastText || (lastText.type === 'text' && lastText.text.length > MAX_CHARS)) {
    return new Response('Message too long or invalid', { status: 400 })
  }

  const google = createGoogleGenerativeAI({
    apiKey,
  })

  const modelName = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite'

  try {
    const result = streamText({
      model: google(modelName),
      system,
      messages: await convertToModelMessages(trimmed),
    })

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
