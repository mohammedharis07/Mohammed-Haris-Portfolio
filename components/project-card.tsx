import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ProjectIllustrationView } from '@/components/illustrations/project-illustrations'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

export function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  return (
    <article
      className={cn(
        'hud-corners card-lift group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card/60 hover:border-cyan/40 hover:shadow-[0_0_40px_-12px_rgb(56_221_248/0.45)]',
        featured && 'lg:grid lg:grid-cols-[1.25fr_1fr]',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden border-b border-border bg-[#0A0D16]',
          featured && 'lg:flex lg:items-center lg:border-b-0 lg:border-r',
        )}
      >
        <div className="aspect-[60/34] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProjectIllustrationView kind={project.illustration} title={project.imageAlt} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[10px] tracking-[0.18em] text-cyan uppercase">
            <span className="text-muted-foreground">FIG.{String(index + 1).padStart(2, '0')} · </span>
            {project.category}
          </p>
          <span className="rounded-full border border-mint/30 px-2 py-0.5 font-mono text-[10px] text-mint">
            {project.status}
          </span>
        </div>
        <h3 className={cn('font-semibold tracking-tight', featured ? 'text-2xl md:text-3xl' : 'text-xl')}>
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.fullTitle}
          </Link>
        </h3>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

        {featured && (
          <dl className="mt-5 space-y-3 border-l border-violet/40 pl-4 text-sm">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">CHALLENGE</dt>
              <dd className="mt-1 text-foreground/90">{project.challenge}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">APPROACH</dt>
              <dd className="mt-1 text-foreground/90">{project.approach}</dd>
            </div>
          </dl>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.stack.map((s) => (
            <li key={s} className="rounded border border-border bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground">
              {s}
            </li>
          ))}
        </ul>

        <p className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-foreground transition-colors group-hover:text-cyan">
          Read case study
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </p>
      </div>
    </article>
  )
}
