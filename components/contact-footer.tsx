import { ArrowUpRight, CalendarClock, Download, Mail, MapPin, Phone } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'
import { LinkedinIcon } from '@/components/linkedin-icon'
import { profile } from '@/lib/profile'

const meetingHref = `mailto:${profile.email}?subject=${encodeURIComponent(
  'Meeting request — Alan Kwan',
)}&body=${encodeURIComponent(
  'Hi Alan,\n\nI would like to schedule a conversation. Some times that suit me are:\n\n- \n- \n\nRegards,\n',
)}`

export function ContactFooter() {
  const year = new Date().getFullYear()

  const rows = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: 'email address' },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}`, copy: 'phone number' },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  return (
    <>
      <section id="contact" aria-labelledby="contact-title">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 rounded-2xl border border-border bg-card p-6 md:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <span className="text-primary">06</span>
                <span className="h-px w-8 bg-border" aria-hidden="true" />
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance md:text-5xl"
              >
                {"Let's discuss your next leadership priority."}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground text-pretty">
                Currently available for full-time senior roles in Operations, Organisational Development,
                Compliance and Program Management, or for contracted services through AK Professional
                Services. References provided on request.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={meetingHref}
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <CalendarClock className="size-4" />
                  Schedule a Conversation
                </a>
                <a
                  href={profile.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Download className="size-4" />
                  Download CV
                </a>
              </div>
            </div>

            <ul className="flex flex-col divide-y divide-border self-center rounded-xl border border-border">
              {rows.map((row) => (
                <li key={row.label} className="flex items-center gap-4 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <row.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-muted-foreground uppercase">{row.label}</p>
                    {row.href ? (
                      <a href={row.href} className="block truncate font-medium hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      <p className="font-medium">{row.value}</p>
                    )}
                  </div>
                  {row.copy && <CopyButton value={row.value} label={row.copy} className="size-9" />}
                </li>
              ))}
              <li className="flex items-center gap-4 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <LinkedinIcon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs text-muted-foreground uppercase">LinkedIn</p>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    in/kwanaj
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <a href="#top" className="hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
    </>
  )
}
