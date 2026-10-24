export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  id,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
  id: string
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        <span className="text-highlight">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-highlight to-primary/40" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  )
}
