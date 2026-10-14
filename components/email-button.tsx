'use client'

import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { profile } from '@/data/profile'

const subject = encodeURIComponent('Hello Haris — reaching out from your portfolio')
const mailto = `mailto:${profile.email}?subject=${subject}`
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}`

export function EmailButton() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const input = document.createElement('textarea')
      input.value = profile.email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function openMail() {
    // Embedded/sandboxed frames can't hand off mailto: links, so route those through a new tab.
    if (window.self !== window.top) {
      window.open(gmail, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = mailto
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={mailto}
        onClick={(e) => {
          e.preventDefault()
          openMail()
        }}
        className="inline-flex h-12 items-center gap-2 rounded-md bg-gradient-to-r from-violet to-cyan px-6 font-medium text-background transition-opacity hover:opacity-90"
      >
        <Mail className="size-4" aria-hidden="true" />
        Email Me
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-card/60 px-4 font-mono text-xs tracking-wide transition-colors hover:border-cyan/50 hover:text-cyan"
      >
        {copied ? (
          <Check className="size-4 text-mint" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
        <span>{copied ? 'Copied' : profile.email}</span>
        <span className="sr-only" aria-live="polite">
          {copied ? 'Email address copied to clipboard' : ''}
        </span>
      </button>
      <a
        href={gmail}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center px-2 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-cyan"
      >
        OPEN IN GMAIL ↗<span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  )
}
