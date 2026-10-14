import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/data/profile'

export function About() {
  const { about, education } = profile
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="about-title" label="01 / ABOUT" title={about.heading} />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {about.bio.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-foreground' : undefined}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hud-corners rounded-sm border border-border bg-card/60 backdrop-blur">
              <div className="flex items-start gap-3 border-b border-border p-5">
                <GraduationCap className="mt-0.5 size-5 shrink-0 text-violet" aria-hidden="true" />
                <div>
                  <h3 className="font-medium leading-snug">{education.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{education.minor}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {education.institution}, {education.place}
                  </p>
                  <p className="text-sm text-muted-foreground">{education.university}</p>
                  <p className="mt-2 font-mono text-xs text-cyan">{education.years}</p>
                </div>
              </div>
              <dl className="grid grid-cols-2">
                {education.credentials.map((c, i) => (
                  <div
                    key={c.label}
                    className={`p-5 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border-border`}
                  >
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">{c.label}</dt>
                    <dd className="mt-1.5 text-lg font-semibold">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground">AREAS I EXPLORE</h3>
          <ul className="flex flex-wrap gap-2">
            {about.areas.map((a) => (
              <li
                key={a}
                className="rounded-md border border-border bg-surface px-3.5 py-2 text-sm transition-colors hover:border-violet/50"
              >
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
