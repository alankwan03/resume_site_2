import { Download, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { CopyButton } from '@/components/copy-button'
import { LinkedinIcon } from '@/components/linkedin-icon'
import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-[32rem] rounded-full bg-highlight/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-16 md:px-8 md:pt-24 md:pb-24">
        <div className="min-w-0">
        <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono font-medium tracking-wide text-primary uppercase">
            {profile.availability.headline}
          </span>
          <span className="text-muted-foreground">{profile.availability.detail}</span>
        </p>

        <div className="mt-6 flex items-center gap-4 md:gap-6">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border bg-card shadow-sm ring-1 ring-highlight/40 ring-offset-2 ring-offset-background md:size-28 md:ring-offset-4">
            <Image
              src={profile.photo || '/placeholder.svg'}
              alt={`Portrait of ${profile.name}`}
              width={224}
              height={224}
              priority
              sizes="(min-width: 768px) 112px, 64px"
              className="size-full object-cover object-[50%_20%]"
            />
          </div>
          <h1 className="font-serif text-5xl font-medium tracking-tight text-balance md:text-7xl">
            {profile.name}
          </h1>
        </div>
        <p className="mt-4 max-w-3xl text-lg font-medium text-primary text-pretty md:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            <Download className="size-4" />
            Download Full CV (PDF)
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Mail className="size-4" />
            Get in Touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alan Kwan on LinkedIn (opens in new tab)"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Contact details">
          <li className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card/80 px-3 text-sm">
            <MapPin className="size-3.5 text-muted-foreground" aria-hidden="true" />
            {profile.location}
          </li>
          <li className="inline-flex h-9 items-center gap-1 rounded-lg border border-border bg-card/80 pr-1 pl-3 text-sm">
            <Mail className="size-3.5 text-muted-foreground" aria-hidden="true" />
            <a href={`mailto:${profile.email}`} className="ml-1 hover:underline">
              {profile.email}
            </a>
            <CopyButton value={profile.email} label="email address" />
          </li>
          <li className="inline-flex h-9 items-center gap-1 rounded-lg border border-border bg-card/80 pr-1 pl-3 text-sm">
            <Phone className="size-3.5 text-muted-foreground" aria-hidden="true" />
            <a href={`tel:${profile.phoneHref}`} className="ml-1 font-mono tabular-nums hover:underline">
              {profile.phone}
            </a>
            <CopyButton value={profile.phone} label="phone number" />
          </li>
        </ul>
        </div>
      </div>
    </section>
  )
}
