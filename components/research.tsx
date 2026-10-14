import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { publications, researchInterests } from '@/data/publications'

export function Research() {
  return (
    <section id="research" aria-labelledby="research-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="research-title" label="05 / RESEARCH" title="Researching what comes next." />

        <ol className="border-t border-border">
          {publications.map((p, i) => (
            <li key={p.id} className="border-b border-border">
              <Reveal className="grid gap-4 py-8 md:grid-cols-[120px_1fr_200px] md:gap-8 md:py-10">
                <div className="font-mono text-xs text-muted-foreground">
                  <span className="text-2xl font-semibold text-foreground md:text-3xl">{p.year ?? '—'}</span>
                  <p className="mt-1">[{String(i + 1).padStart(2, '0')}]</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-cyan uppercase">{p.type}</p>
                  <h3 className="mt-2 text-balance text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.areas.map((a) => (
                      <li key={a} className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <dl className="space-y-3 text-sm md:border-l md:border-border md:pl-6">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">VENUE</dt>
                    <dd className="mt-0.5">{p.venue}</dd>
                  </div>
                  {p.indexing && (
                    <div>
                      <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">INDEXING</dt>
                      <dd className="mt-0.5">{p.indexing}</dd>
                    </div>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan hover:underline">
                      View publication <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {p.relatedProject && (
                    <Link
                      href={`/projects/${p.relatedProject}`}
                      className="inline-flex items-center gap-1 text-cyan underline-offset-4 hover:underline"
                    >
                      Related project <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </dl>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3">
          <h3 className="mr-2 font-mono text-xs tracking-[0.2em] text-muted-foreground">RESEARCH INTERESTS</h3>
          <ul className="flex flex-wrap gap-2">
            {researchInterests.map((r) => (
              <li key={r} className="rounded-md border border-violet/30 bg-violet/5 px-3 py-1.5 text-sm">
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
