export type Social = {
  id: 'email' | 'github' | 'linkedin'
  label: string
  handle: string
  href: string
  external: boolean
}

export const socials: Social[] = [
  {
    id: 'email',
    label: 'Email',
    handle: 'mohammedharis2021@gmail.com',
    href: 'mailto:mohammedharis2021@gmail.com',
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'github.com/mohammedharis07',
    href: 'https://github.com/mohammedharis07',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/mohammed-haris-a-p-320390257',
    href: 'https://linkedin.com/in/mohammed-haris-a-p-320390257',
    external: true,
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
] as const
