import { SectionHeading } from "./section-heading"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03 / Experience"
          title="Where I've worked"
          subtitle="Seven years growing from intern to senior developer, leading financial and enterprise systems."
        />

        <ol className="relative border-l border-border">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${i}`} className="relative ml-6 pb-12 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+7px)] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-accent">
                {exp.company} <span className="text-muted-foreground">· {exp.location}</span>
              </p>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
