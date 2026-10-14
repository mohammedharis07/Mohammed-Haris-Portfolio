import { Award, Trophy } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { certifications } from '@/data/certifications'
import { profile } from '@/data/profile'

export function Learning() {
  return (
    <section id="learning" aria-labelledby="learning-title" className="border-t border-border bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="learning-title" label="06 / LEARNING" title="Achievements, certifications, and milestones." />

        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {profile.achievements.map((a, i) => (
            <li key={a.label} className="bg-background p-6">
              <Reveal delay={i * 0.05}>
                <p className="flex items-baseline gap-1.5">
                  <span className="text-gradient text-4xl font-semibold tracking-tight">{a.value}</span>
                  <span className="font-mono text-xs text-muted-foreground">{a.unit}</span>
                </p>
                <p className="mt-3 font-medium">{a.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground">CERTIFICATIONS</h3>
            <ul className="divide-y divide-border rounded-lg border border-border bg-background">
              {certifications.map((c) => (
                <li key={c.id} className="flex items-center gap-4 p-4">
                  <Award className="size-4 shrink-0 text-cyan" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{c.title}</p>
                    {c.issuer && <p className="text-sm text-muted-foreground">{c.issuer}</p>}
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{c.category}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground">HACKATHONS</h3>
            <ul className="divide-y divide-border rounded-lg border border-border bg-background">
              {profile.hackathons.map((h) => (
                <li key={h.title} className="flex items-center gap-4 p-4">
                  <Trophy className="size-4 shrink-0 text-violet" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{h.title}</p>
                    <p className="text-sm text-muted-foreground">{h.result}</p>
                  </div>
                  <span className="font-mono text-xs text-cyan">{h.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
