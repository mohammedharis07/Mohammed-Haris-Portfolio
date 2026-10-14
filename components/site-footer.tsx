import { profile } from '@/data/profile'
import { navItems, socials } from '@/data/socials'

export function SiteFooter({ isHome = true }: { isHome?: boolean }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[0.3em]">
            {profile.shortName}
            <span className="text-cyan">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Built with curiosity, engineering, and code.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={isHome ? `#${n.id}` : `/#${n.id}`} className="hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-foreground/80 hover:text-cyan"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumePath} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-cyan">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <p className="font-mono text-xs text-muted-foreground">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}
