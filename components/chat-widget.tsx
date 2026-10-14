'use client'

import { useChat } from '@ai-sdk/react'
import { ArrowUp, Bot, RotateCcw, Square, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const suggestions = [
  'What is AirBridge?',
  'What are his core skills?',
  'Tell me about his research',
  'Is he open to internships?',
]

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage, status, stop, error, setMessages } = useChat()
  const reduce = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const busy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduce ? 'auto' : 'smooth' })
  }, [messages, status, reduce])

  useEffect(() => {
    if (open) inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const submit = (text: string) => {
    const value = text.trim()
    if (!value || busy) return
    sendMessage({ text: value.slice(0, 1000) })
    setInput('')
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with HARIS.AI"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'bottom right' }}
            className="hud-corners fixed inset-x-3 bottom-24 z-50 flex h-[min(560px,calc(100svh-8rem))] flex-col overflow-hidden rounded-md border border-cyan/25 bg-background/90 shadow-[0_0_60px_-15px_var(--cyan)] backdrop-blur-xl sm:inset-x-auto sm:right-5 sm:w-[390px]"
          >
            <div aria-hidden="true" className="scan-overlay pointer-events-none absolute inset-0" />
            <header className="relative flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="relative flex size-8 items-center justify-center rounded-sm border border-cyan/40 bg-cyan/10 text-cyan">
                  <Bot className="size-4" aria-hidden="true" />
                  <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-mint shadow-[0_0_8px_var(--mint)]" />
                </span>
                <div>
                  <p className="font-mono text-xs font-semibold tracking-[0.2em]">HARIS.AI</p>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                    {busy ? 'PROCESSING…' : 'ONLINE // ASK ME ANYTHING'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      stop()
                      setMessages([])
                    }}
                    aria-label="Reset conversation"
                    className="inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-cyan"
                  >
                    <RotateCcw className="size-3.5" aria-hidden="true" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-cyan"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
            </header>

            <div ref={scrollRef} className="relative flex-1 space-y-4 overflow-y-auto px-4 py-5" aria-live="polite">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="space-y-5"
                >
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    <span className="font-mono text-cyan">{'> '}</span>
                    {"Hi! I'm Haris's AI assistant. Ask me about his projects, research, skills, or experience."}
                  </p>
                  <div className="flex flex-col gap-2">
                    {suggestions.map((s, i) => (
                      <motion.button
                        key={s}
                        type="button"
                        initial={reduce ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.07 }}
                        onClick={() => submit(s)}
                        className="group flex items-center justify-between rounded-sm border border-border bg-card/50 px-3 py-2.5 text-left font-mono text-xs text-foreground/85 transition-all hover:border-cyan/50 hover:bg-cyan/5 hover:text-cyan"
                      >
                        {s}
                        <ArrowUp className="size-3 rotate-45 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((m) => {
                const text = m.parts.map((p) => (p.type === 'text' ? p.text : '')).join('')
                const isUser = m.role === 'user'
                return (
                  <motion.div
                    key={m.id}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn('flex', isUser ? 'justify-end' : 'justify-start')}
                  >
                    <div
                      className={cn(
                        'max-w-[85%] whitespace-pre-wrap text-pretty rounded-sm px-3.5 py-2.5 text-sm leading-relaxed',
                        isUser
                          ? 'bg-gradient-to-r from-violet/90 to-cyan/80 text-background'
                          : 'border border-border bg-card/70 text-foreground/90',
                      )}
                    >
                      <span className="sr-only">{isUser ? 'You: ' : 'HARIS.AI: '}</span>
                      {text}
                    </div>
                  </motion.div>
                )
              })}

              {status === 'submitted' && (
                <div className="flex items-center gap-1.5 px-1" aria-label="Assistant is typing">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="size-1.5 animate-bounce rounded-full bg-cyan"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              )}

              {error && (
                <p className="rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2 font-mono text-xs text-destructive">
                  Signal lost. Please try again.
                </p>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                submit(input)
              }}
              className="relative border-t border-border p-3"
            >
              <div className="flex items-end gap-2 rounded-sm border border-border bg-card/60 p-1.5 transition-colors focus-within:border-cyan/50">
                <label htmlFor="chat-input" className="sr-only">
                  Message
                </label>
                <textarea
                  id="chat-input"
                  ref={inputRef}
                  rows={1}
                  value={input}
                  maxLength={1000}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing || e.keyCode === 229) return
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      submit(input)
                    }
                  }}
                  placeholder="Ask about Haris…"
                  className="max-h-28 min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                {busy ? (
                  <button
                    type="button"
                    onClick={() => stop()}
                    aria-label="Stop generating"
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-cyan/50"
                  >
                    <Square className="size-3.5 fill-current" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    aria-label="Send message"
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-gradient-to-r from-violet to-cyan text-background transition-opacity disabled:opacity-40"
                  >
                    <ArrowUp className="size-4" aria-hidden="true" />
                  </button>
                )}
              </div>
              <p className="mt-2 text-center font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
                AI RESPONSES MAY BE IMPERFECT
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Chat with HARIS.AI'}
        initial={reduce ? false : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={reduce ? undefined : { scale: 1.05 }}
        whileTap={reduce ? undefined : { scale: 0.95 }}
        className="group fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-2 rounded-full border border-cyan/40 bg-background/80 pl-4 pr-5 font-mono text-xs tracking-[0.15em] text-foreground shadow-[0_0_30px_-8px_var(--cyan)] backdrop-blur-xl transition-colors hover:border-cyan"
      >
        <span aria-hidden="true" className="chat-ring pointer-events-none absolute inset-0 rounded-full" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'x' : 'bot'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-cyan"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Bot className="size-5" aria-hidden="true" />}
          </motion.span>
        </AnimatePresence>
        <span className="hidden sm:inline">{open ? 'CLOSE' : 'ASK HARIS.AI'}</span>
      </motion.button>
    </>
  )
}
