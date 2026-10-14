'use client'

import type { MouseEvent, ReactNode } from 'react'
import { profile } from '@/data/profile'

const fileName = 'Mohammed-Haris-A-P-Resume.pdf'

export function ResumeDownload({
  className,
  children,
  onDone,
}: {
  className?: string
  children: ReactNode
  onDone?: () => void
}) {
  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    onDone?.()

    // Sandboxed iframes (like embedded previews) often block downloads, so open the PDF in a new tab instead.
    if (window.self !== window.top) {
      window.open(profile.resumePath, '_blank', 'noopener,noreferrer')
      return
    }

    try {
      const res = await fetch(profile.resumePath)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const url = URL.createObjectURL(await res.blob())
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      link.remove()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch {
      window.open(profile.resumePath, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a href={profile.resumePath} download={fileName} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
