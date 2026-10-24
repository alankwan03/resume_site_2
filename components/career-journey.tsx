'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { career } from '@/lib/profile'
import { cn } from '@/lib/utils'

export function CareerJourney() {
  const [openId, setOpenId] = useState<string | null>(career[0].id)

  return (
    <section id="career" aria-labelledby="career-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="career-title"
          index="03"
          eyebrow="Career Journey"
          title="Two decades of operational leadership"
          description="From national construction operations to vocational education and multinational CX — select an organisation to expand the outcomes."
        />

        <ol className="relative">
          {career.map((employer, idx) => {
            const isOpen = openId === employer.id
            const panelId = `career-panel-${employer.id}`
            const isLast = idx === career.length - 1
            return (
              <li key={employer.id} className="relative grid grid-cols-[1.5rem_1fr] gap-4 md:grid-cols-[10rem_1.5rem_1fr] md:gap-6">
                <p className="hidden pt-6 text-right font-mono text-sm text-muted-foreground tabular-nums md:block">
                  {employer.span}
                </p>

                <div className="relative flex justify-center" aria-hidden="true">
                  {!isLast && <span className="absolute top-8 bottom-0 w-px bg-border" />}
                  {idx !== 0 && <span className="absolute top-0 h-8 w-px bg-border" />}
                  <span
                    className={cn(
                      'relative mt-7 size-3 rounded-full border-2 transition-colors',
                      isOpen ? 'border-primary bg-primary' : 'border-border bg-background',
                    )}
                  />
                </div>

                <div className="pb-6">
                  <div
                    className={cn(
                      'rounded-xl border bg-card transition-colors',
                      isOpen ? 'border-primary/50 shadow-sm' : 'border-border hover:border-primary/30',
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenId(isOpen ? null : employer.id)}
                        className="flex w-full items-start justify-between gap-4 rounded-xl p-5 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:p-6"
                      >
                        <span className="flex flex-col gap-1">
                          <span className="font-mono text-xs text-muted-foreground tabular-nums md:hidden">
                            {employer.span}
                          </span>
                          <span className="text-lg font-semibold tracking-tight md:text-xl">{employer.company}</span>
                          <span className="text-sm text-muted-foreground">{employer.sector}</span>
                          <span className="mt-2 text-sm leading-relaxed text-pretty">{employer.focus}</span>
                        </span>
                        <ChevronDown
                          className={cn(
                            'mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200',
                            isOpen && 'rotate-180 text-primary',
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      hidden={!isOpen}
                      className="border-t border-border px-5 pt-5 pb-6 md:px-6"
                    >
                      <div className="flex flex-col gap-7">
                        {employer.roles.map((role) => (
                          <div key={role.title}>
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                              <h4 className="font-medium">{role.title}</h4>
                              <p className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                                {role.period}
                              </p>
                            </div>
                            <ul className="mt-3 flex flex-col gap-2">
                              {role.highlights.map((h) => (
                                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
