import { About } from '@/components/about'
import { BackToTop } from '@/components/back-to-top'
import { Beyond } from '@/components/beyond'
import { ChatWidget } from '@/components/chat-widget'
import { CursorGlow, ScrollProgress } from '@/components/motion-effects'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Learning } from '@/components/learning'
import { ProjectsSection } from '@/components/projects-section'
import { Research } from '@/components/research'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Experience />
        <Research />
        <Learning />
        <Beyond />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
      <ChatWidget />
    </>
  )
}
