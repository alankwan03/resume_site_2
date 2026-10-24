import { Globe, TrendingDown, TrendingUp, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { metrics } from '@/lib/profile'
import { cn } from '@/lib/utils'

const icons = [TrendingDown, TrendingUp, Zap, Globe]
const spans = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4']

export function ImpactMetrics() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="impact-title"
          index="01"
          eyebrow="Executive Impact"
          title="Verified, measurable career outcomes"
          description="A track record of commercial results, rapid delivery under pressure, and governance at multinational scale."
        />
        <ul className="grid gap-4 md:grid-cols-6">
          {metrics.map((m, i) => {
            const Icon = icons[i]
            const featured = i === 0
            return (
              <li
                key={m.label}
                className={cn(
                  'group flex flex-col justify-between gap-10 rounded-xl border p-6 transition-colors md:p-8',
                  spans[i],
                  featured
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card hover:border-primary/40',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      'flex size-10 items-center justify-center rounded-lg',
                      featured ? 'bg-primary-foreground/10' : 'bg-highlight/15 text-highlight',
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      'font-mono text-xs tracking-wide uppercase',
                      featured ? 'text-primary-foreground/70' : 'text-muted-foreground',
                    )}
                  >
                    {m.org}
                  </span>
                </div>
                <div>
                  <p className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-serif text-4xl font-medium tracking-tight md:text-5xl">{m.value}</span>
                    <span
                      className={cn(
                        'text-sm font-medium',
                        featured ? 'text-primary-foreground/80' : 'text-muted-foreground',
                      )}
                    >
                      {m.unit}
                    </span>
                  </p>
                  <h3 className="mt-3 font-semibold">{m.label}</h3>
                  <p
                    className={cn(
                      'mt-1.5 text-sm leading-relaxed',
                      featured ? 'text-primary-foreground/80' : 'text-muted-foreground',
                    )}
                  >
                    {m.detail}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
