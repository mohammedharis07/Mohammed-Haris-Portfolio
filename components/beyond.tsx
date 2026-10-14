import { Reveal } from '@/components/reveal'
import { profile } from '@/data/profile'

export function Beyond() {
  return (
    <section aria-labelledby="beyond-title" className="border-t border-border py-20 md:py-24">
      <Reveal className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_1.4fr] md:px-8">
        <div>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-muted-foreground">BEYOND THE CODE</p>
          <h2 id="beyond-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Recharge. Stay curious.
          </h2>
        </div>
        <div>
          <p className="text-pretty leading-relaxed text-muted-foreground">{profile.interests.copy}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {profile.interests.items.map((i) => (
              <li key={i} className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground/85">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
