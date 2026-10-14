'use client'

import { FileText, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ResumeDownload } from '@/components/resume-download'
import { profile } from '@/data/profile'
import { navItems } from '@/data/socials'
import { cn } from '@/lib/utils'

export function SiteHeader({ isHome = true }: { isHome?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('home')
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-card focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href={href('home')}
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-[0.3em]"
          aria-label="HARIS — home"
        >
          <span className="flex size-6 items-center justify-center border border-cyan/50 text-[10px] text-cyan shadow-[0_0_12px_-2px_var(--cyan)]" aria-hidden="true">
            H
          </span>
          <span>
            {profile.shortName}
            <span className="text-cyan">.</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isHome && active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={href(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative block px-3 py-2 text-sm transition-colors',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-violet to-cyan transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ResumeDownload className="hidden items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs tracking-wider text-foreground transition-colors hover:border-cyan/50 hover:text-cyan lg:inline-flex">
            <FileText className="size-3.5" aria-hidden="true" />
            RESUME
          </ResumeDownload>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4">
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={href(item.id)}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center gap-4 border-b border-border py-3.5 text-base',
                      isHome && active === item.id ? 'text-cyan' : 'text-foreground',
                    )}
                  >
                    <span className="font-mono text-xs text-muted-foreground">{String(i).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <ResumeDownload
                  onDone={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-md border border-border py-3 font-mono text-sm tracking-wider"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  DOWNLOAD RESUME
                </ResumeDownload>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-violet to-cyan"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  )
}
