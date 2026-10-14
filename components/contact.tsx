import type { ComponentType, SVGProps } from 'react'
import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { EmailButton } from '@/components/email-button'
import { ResumeDownload } from '@/components/resume-download'
import { profile } from '@/data/profile'
import { socials, type Social } from '@/data/socials'

const icons: Record<Social['id'], ComponentType<SVGProps<SVGSVGElement>>> = { email: Mail, github: Github, linkedin: Linkedin }

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-cyan">
            <span className="h-px w-8 bg-gradient-to-r from-violet to-cyan" aria-hidden="true" />
            07 / CONNECT
          </p>
          <h2 id="contact-title" className="max-w-4xl text-balance text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {profile.contact.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">{profile.contact.copy}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <EmailButton />
            <ResumeDownload className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-card/60 px-6 font-medium transition-colors hover:border-cyan/50">
              <FileText className="size-4" aria-hidden="true" />
              Download Resume
            </ResumeDownload>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {socials.map((s) => {
              const Icon = icons[s.id]
              return (
                <li key={s.id}>
                  <a
                    href={s.href}
                    {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex h-full items-center gap-4 bg-background p-5 transition-colors hover:bg-card"
                  >
                    <Icon className="size-5 shrink-0 text-cyan" aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                        {s.label}
                      </span>
                      <span className="block truncate text-sm">{s.handle}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                    {s.external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
