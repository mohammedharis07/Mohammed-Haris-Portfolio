import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProjectIllustrationView } from '@/components/illustrations/project-illustrations'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getProject, projects } from '@/data/projects'
import { publications } from '@/data/publications'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.fullTitle,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.fullTitle, description: project.description, url: `/projects/${project.slug}` },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.indexOf(project)
  const next = projects[(idx + 1) % projects.length]
  const related = publications.filter((p) => project.publications?.includes(p.id))

  return (
    <>
      <SiteHeader isHome={false} />
      <main id="main" className="pt-24 md:pt-28">
        <article className="mx-auto max-w-5xl px-5 md:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            ALL PROJECTS
          </Link>

          <header className="mt-8">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">{project.category}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">{project.fullTitle}</h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          </header>

          <div className="mt-10 overflow-hidden rounded-lg border border-border">
            <div className="aspect-[60/34]">
              <ProjectIllustrationView kind={project.illustration} title={project.imageAlt} />
            </div>
          </div>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            <div className="bg-background p-5">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">STATUS</dt>
              <dd className="mt-1.5">{project.status}</dd>
            </div>
            <div className="bg-background p-5 sm:col-span-2">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">STACK</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-mono text-[10px] tracking-[0.18em] text-violet">ENGINEERING CHALLENGE</h2>
              <p className="mt-3 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-mono text-[10px] tracking-[0.18em] text-cyan">APPROACH</h2>
              <p className="mt-3 leading-relaxed">{project.approach}</p>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            {project.caseStudy.map((section, i) => (
              <section key={section.title} className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
                <h2 className="flex items-baseline gap-3 text-lg font-semibold">
                  <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                <div className="text-pretty leading-relaxed text-muted-foreground">
                  {section.body && <p>{section.body}</p>}
                  {section.points && (
                    <ul className="mt-2 space-y-2">
                      {section.points.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-cyan" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          {related.length > 0 && (
            <section className="mt-16 rounded-lg border border-border bg-surface p-6 md:p-8" aria-labelledby="related-pubs">
              <h2 id="related-pubs" className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                RELATED PUBLICATIONS
              </h2>
              <ul className="mt-4 divide-y divide-border">
                {related.map((p) => (
                  <li key={p.id} className="py-4">
                    <p className="font-medium">{p.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.type} · {p.venue}
                      {p.year ? ` · ${p.year}` : ''}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/#research" className="mt-2 inline-flex items-center gap-1 text-sm text-cyan hover:underline">
                View research <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </section>
          )}

          {(project.repoUrl || project.demoUrl) && (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-border px-4 py-2.5 text-sm">
                  Repository
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-border px-4 py-2.5 text-sm">
                  Live demo
                </a>
              )}
            </div>
          )}

          <nav aria-label="Next project" className="mt-20 border-t border-border py-10">
            <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-4">
              <span>
                <span className="block font-mono text-[10px] tracking-[0.2em] text-muted-foreground">NEXT PROJECT</span>
                <span className="mt-2 block text-2xl font-semibold tracking-tight group-hover:text-cyan md:text-3xl">
                  {next.fullTitle}
                </span>
              </span>
              <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </nav>
        </article>
      </main>
      <SiteFooter isHome={false} />
    </>
  )
}
