import { DecryptText, DrawLine, WordsReveal } from '@/components/motion-effects'

export function SectionHeading({ label, title, id }: { label: string; title: string; id: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-cyan">
        <span className="size-1.5 rotate-45 animate-pulse bg-cyan shadow-[0_0_10px_var(--cyan)]" aria-hidden="true" />
        <p>
          <span className="text-muted-foreground">[ </span>
          <DecryptText text={label} />
          <span className="text-muted-foreground"> ]</span>
        </p>
        <DrawLine className="h-px flex-1 bg-gradient-to-r from-cyan/50 via-border to-transparent" />
      </div>
      <h2 id={id} className="max-w-3xl text-balance text-3xl font-semibold tracking-tighter md:text-5xl">
        <WordsReveal text={title} />
      </h2>
    </div>
  )
}
