import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import { WordsReveal } from '@/components/motion-effects'
import { ResumeDownload } from '@/components/resume-download'
import { profile } from '@/data/profile'

export function Hero() {
  const { hero } = profile
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 md:pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="tech-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[360px] w-[480px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="grid-floor absolute inset-x-0 bottom-0 h-[45%]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent anim-sweep" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 md:px-8">
        <div className="anim-fade-up flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-mint" />
            </span>
            SYSTEM ONLINE // OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-14">
          <p
            className="anim-fade-up mb-6 font-mono text-[11px] tracking-[0.22em] text-cyan md:text-xs"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="text-muted-foreground">[</span> {hero.label} <span className="text-muted-foreground">]</span>
          </p>
          <h1
            id="hero-title"
            className="text-balance text-5xl font-semibold leading-[0.98] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <WordsReveal text={hero.headline[0]} className="block" delay={0.1} />
            <WordsReveal text={hero.headline[1]} className="text-gradient text-glow block" delay={0.35} />
          </h1>

          <p
            className="anim-fade-up mt-8 font-mono text-sm text-muted-foreground md:text-base"
            style={{ animationDelay: '0.18s' }}
          >
            <span className="text-cyan">{'>'}</span> whoami{' '}
            <span className="text-foreground">
              {profile.name} — {profile.title}
            </span>
            <span className="cursor-blink ml-1 inline-block h-[1.1em] w-2 translate-y-[3px] bg-cyan" aria-hidden="true" />
          </p>

          <div className="anim-fade-up mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '0.26s' }}>
            <a
              href="#projects"
              className="btn-glow group inline-flex h-12 items-center gap-2 rounded-sm bg-gradient-to-r from-violet to-cyan px-6 font-mono text-xs font-semibold tracking-[0.15em] text-background"
            >
              EXPLORE MY WORK
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <ResumeDownload className="hud-corners inline-flex h-12 items-center gap-2 rounded-sm border border-border bg-card/40 px-6 font-mono text-xs tracking-[0.15em] backdrop-blur transition-colors hover:border-cyan/50 hover:text-cyan">
              <Download className="size-4" aria-hidden="true" />
              DOWNLOAD RESUME
            </ResumeDownload>
            <a
              href="#contact"
              className="inline-flex h-12 items-center px-3 font-mono text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-cyan"
            >
              {"LET'S CONNECT →"}
            </a>
          </div>
        </div>

        <div className="anim-fade-up relative mb-8" style={{ animationDelay: '0.34s' }}>
          <span aria-hidden="true" className="hud-corners pointer-events-none absolute inset-0 z-10" />
          <ul className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
            {hero.meta.map((m, i) => (
              <li
                key={m}
                style={{ animationDelay: `${0.5 + i * 0.08}s` }}
                className="anim-fade-up flex items-center bg-background/90 p-4 transition-colors duration-300 hover:bg-cyan/5 hover:text-cyan font-mono text-[11px] tracking-wide text-foreground/90 backdrop-blur-md"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#about"
          className="mx-auto mb-6 hidden w-fit items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground hover:text-cyan md:flex"
        >
          SCROLL <ArrowDown className="size-3 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
