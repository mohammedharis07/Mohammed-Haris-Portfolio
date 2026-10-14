import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { profile, siteUrl } from '@/data/profile'
import { socials } from '@/data/socials'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const description =
  "Explore Mohammed Haris A P's portfolio of AI engineering, computer vision, autonomous drone research, software development, and technology innovation."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mohammed Haris A P | AI Engineer & Developer',
    template: '%s | Mohammed Haris A P',
  },
  description,
  authors: [{ name: profile.name }],
  keywords: [
    'Mohammed Haris A P',
    'AI Engineer',
    'Data Science',
    'Computer Vision',
    'Autonomous Systems',
    'Drone',
    'Portfolio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Mohammed Haris A P | AI Engineer & Developer',
    description,
    siteName: 'Mohammed Haris A P',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Haris A P | AI Engineer & Developer',
    description,
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#070910',
  colorScheme: 'dark',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: socials.filter((s) => s.external).map((s) => s.href),
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: profile.education.institution,
  },
  knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Autonomous Systems', 'Sensor Fusion'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <div aria-hidden="true" className="scanlines pointer-events-none fixed inset-0 z-[60]" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
