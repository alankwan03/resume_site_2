import { CareerJourney } from '@/components/career-journey'
import { Competencies } from '@/components/competencies'
import { ContactFooter } from '@/components/contact-footer'
import { Credentials } from '@/components/credentials'
import { Hero } from '@/components/hero'
import { ImpactMetrics } from '@/components/impact-metrics'
import { Projects } from '@/components/projects'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ImpactMetrics />
        <Competencies />
        <CareerJourney />
        <Projects />
        <Credentials />
        <ContactFooter />
      </main>
    </>
  )
}
