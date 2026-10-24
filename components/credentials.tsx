import { BadgeCheck, GraduationCap, HardHat, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { credentials } from '@/lib/profile'

const icons = [GraduationCap, BadgeCheck, Sparkles, HardHat]

export function Credentials() {
  return (
    <section id="credentials" aria-labelledby="credentials-title" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="credentials-title"
          index="05"
          eyebrow="Education & Licensing"
          title="Credentials"
          description="Formal management education, nationally recognised vocational qualifications, micro-credentials and industry accreditations."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {credentials.map((group, i) => {
            const Icon = icons[i]
            return (
              <div key={group.category} className="flex flex-col rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-6 flex flex-col divide-y divide-border">
                  {group.items.map((item) => (
                    <li key={item.name} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-sm font-medium leading-snug">{item.name}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{item.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
