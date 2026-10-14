'use client'

import { FlaskConical } from 'lucide-react'
import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experiments, projectFilters, projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const visible = projects.filter((p) => filter === 'All' || p.filters.includes(filter))

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="projects-title"
          label="03 / SELECTED WORK"
          title="Built through experimentation. Refined through engineering."
        />

        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                'h-9 rounded-md border px-3.5 font-mono text-xs tracking-wide transition-colors',
                filter === f
                  ? 'border-cyan/60 bg-cyan/10 text-cyan'
                  : 'border-border text-muted-foreground hover:border-white/20 hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} projects
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((project) => {
            const index = projects.indexOf(project)
            return (
              <div key={project.slug} className={cn('animate-in fade-in duration-500', project.featured && 'md:col-span-2')}>
                <ProjectCard project={project} index={index} featured={project.featured} />
              </div>
            )
          })}
        </div>

        <Reveal className="mt-16">
          <div className="rounded-lg border border-dashed border-border p-6 md:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 font-medium">
                <FlaskConical className="size-4 text-violet" aria-hidden="true" />
                Research &amp; Experiments
              </h3>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                EXPLORATIONS · CONCEPTS · IN PROGRESS
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2 lg:grid-cols-4">
              {experiments.map((e) => (
                <li key={e.title} className="bg-background p-4">
                  <p className="font-mono text-[10px] tracking-[0.15em] text-cyan uppercase">{e.area}</p>
                  <p className="mt-2 text-sm font-medium">{e.title}</p>
                  <p className="mt-2 font-mono text-[10px] text-muted-foreground">STATUS · {e.note.toUpperCase()}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
