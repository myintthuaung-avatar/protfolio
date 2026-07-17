import { ExternalLink } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04 / Projects"
          title="Selected work"
          subtitle="A selection of production systems I have designed and built across fintech, government, and enterprise."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{project.name}</h3>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
