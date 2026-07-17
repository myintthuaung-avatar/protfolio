export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
