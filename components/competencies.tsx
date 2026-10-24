'use client'

import { Cpu, ShieldCheck, Users } from 'lucide-react'
import { useId, useState, type KeyboardEvent } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { competencies } from '@/lib/profile'
import { cn } from '@/lib/utils'

const icons = { leadership: Users, compliance: ShieldCheck, systems: Cpu }

export function Competencies() {
  const [active, setActive] = useState(0)
  const baseId = useId()
  const current = competencies[active]

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1
    const next = (active + dir + competencies.length) % competencies.length
    setActive(next)
    document.getElementById(`${baseId}-tab-${next}`)?.focus()
  }

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="expertise-title"
          index="02"
          eyebrow="Core Competencies"
          title="Expertise matrix"
          description="Three pillars that connect strategy to execution in regulated, people-intensive environments."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_1fr]">
          <div role="tablist" aria-label="Competency categories" aria-orientation="vertical" className="flex flex-col gap-2">
            {competencies.map((c, i) => {
              const Icon = icons[c.id]
              const selected = i === active
              return (
                <button
                  key={c.id}
                  id={`${baseId}-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border p-4 text-left transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                    selected
                      ? 'border-primary bg-card shadow-sm'
                      : 'border-border bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-lg',
                      selected ? 'bg-primary text-primary-foreground' : 'bg-muted',
                    )}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium">{c.label}</span>
                </button>
              )
            })}
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            className="rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold tracking-tight">{current.label}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{current.summary}</p>
            <ul key={current.id} className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.skills.map((s) => (
                <li
                  key={s.name}
                  className="animate-in fade-in slide-in-from-bottom-1 rounded-lg border border-border bg-background p-4 duration-300"
                >
                  <p className="font-medium">{s.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
