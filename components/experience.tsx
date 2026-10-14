import { Info } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience, leadership } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-border bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="experience-title" label="04 / EXPERIENCE" title="Technology is also about execution." />

        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <ol className="relative border-l border-border">
            {experience.map((e, i) => (
              <li key={e.id} className="relative pb-12 pl-8 last:pb-0 md:pl-10">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-1.5 size-[9px] rounded-full border border-cyan bg-background"
                />
                <Reveal delay={i * 0.05}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide">
                    <span className="text-cyan">{e.period}</span>
                    <span className="rounded border border-border px-1.5 py-0.5 text-muted-foreground">{e.kind}</span>
                    {e.status && (
                      <span className="rounded border border-violet/40 px-1.5 py-0.5 text-violet">{e.status}</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{e.role}</h3>
                  <p className="text-muted-foreground">{e.organization}</p>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-foreground/85">{e.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {e.highlights.map((h) => (
                      <li key={h} className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
                        {h}
                      </li>
                    ))}
                  </ul>
                  {e.note && (
                    <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Info className="size-3.5 shrink-0 text-mint" aria-hidden="true" />
                      {e.note}
                    </p>
                  )}
                  {e.initiative && (
                    <div className="mt-5 rounded-md border border-border bg-card p-5">
                      <p className="font-mono text-[10px] tracking-[0.18em] text-mint">INITIATIVE</p>
                      <h4 className="mt-1.5 font-medium">{e.initiative.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.initiative.detail}</p>
                      <dl className="mt-4 grid gap-3">
                        {e.initiative.facts.map((f) => (
                          <div key={f.label}>
                            <dt className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{f.label}</dt>
                            <dd className="mt-0.5 text-sm">{f.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <h3 className="mb-5 font-mono text-xs tracking-[0.2em] text-muted-foreground">LEADERSHIP &amp; INITIATIVES</h3>
            <ul className="divide-y divide-border rounded-lg border border-border bg-background">
              {leadership.map((l) => (
                <li key={l.title} className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">{l.title}</p>
                    {l.period && <span className="shrink-0 font-mono text-[11px] text-cyan">{l.period}</span>}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{l.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
