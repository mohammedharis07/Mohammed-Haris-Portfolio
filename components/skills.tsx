import { BarChart3, Brain, Code2, Database, Globe, Layers, ScanEye, Wrench, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups, type SkillIcon } from '@/data/skills'

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  brain: Brain,
  scan: ScanEye,
  layers: Layers,
  chart: BarChart3,
  database: Database,
  globe: Globe,
  wrench: Wrench,
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative border-t border-border bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="skills-title" label="02 / TOOLKIT" title="The technologies behind my ideas." />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <Reveal
                key={group.id}
                delay={(i % 4) * 0.05}
                className="group bg-background p-6 transition-colors hover:bg-card"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="size-5 text-cyan transition-colors group-hover:text-violet" aria-hidden="true" />
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, '0')} · {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-4 font-medium">{group.title}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
