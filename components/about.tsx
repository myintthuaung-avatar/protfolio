import { GraduationCap, Languages, Flag } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { profile, education } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01 / About" title="A bit about me" />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-pretty text-lg leading-relaxed text-foreground">{profile.objective}</p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Over the past 7+ years I have specialized in building secure, scalable systems for the
              fintech and enterprise sectors — from cross-border remittance and loan management
              platforms to national digital libraries and personnel systems. I enjoy owning features
              end to end: designing normalized database schemas, writing performant stored procedures,
              architecting clean APIs, and crafting responsive UIs.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <Flag size={18} className="text-accent" />
                <p className="mt-3 text-xs text-muted-foreground">Nationality</p>
                <p className="text-sm font-medium">{profile.nationality}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <Languages size={18} className="text-accent" />
                <p className="mt-3 text-xs text-muted-foreground">Language</p>
                <p className="text-sm font-medium">{profile.languages}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <GraduationCap size={18} className="text-accent" />
                <p className="mt-3 text-xs text-muted-foreground">Focus</p>
                <p className="text-sm font-medium">Full-Stack .NET</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 font-mono text-sm text-muted-foreground">Education</h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree} className="rounded-xl border border-border bg-card p-5">
                  <p className="font-mono text-xs text-accent">{e.period}</p>
                  <p className="mt-2 font-medium leading-snug">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
