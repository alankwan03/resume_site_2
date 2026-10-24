import { ArrowUpRight, Check, FlaskConical } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/profile'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="projects-title"
          index="04"
          eyebrow="Work in Progress"
          title="Current Projects"
          description="Products I am actively designing and building. These are works in progress, not finished releases — features, content and design are still evolving through ongoing testing and feedback."
        />
        <ul className="grid gap-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
            >
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary uppercase">
                    <FlaskConical className="size-3" aria-hidden="true" />
                    {project.status}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {project.version}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-3xl font-medium tracking-tight md:text-4xl">{project.name}</h3>
                <p className="mt-1 text-primary">{project.tagline}</p>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <div className="mt-8">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    Try the alpha
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">{project.displayUrl}</p>
                  <p className="mt-4 max-w-md border-l-2 border-highlight/60 pl-3 text-sm leading-relaxed text-muted-foreground">
                    Currently in development and alpha testing — expect rough edges and frequent changes. Feedback is
                    welcome.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/40 p-6">
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Highlights</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-highlight/15 text-highlight">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
