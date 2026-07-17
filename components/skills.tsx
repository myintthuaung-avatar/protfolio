import { SectionHeading } from "./section-heading"
import { skillGroups } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02 / Skills"
          title="Technologies I work with"
          subtitle="A full-stack toolkit spanning backend architecture, modern frontends, data, and DevOps."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="font-mono text-sm text-accent">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
