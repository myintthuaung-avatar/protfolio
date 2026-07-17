import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { profile } from "@/lib/data"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
          />
          <div className="relative">
            <span className="font-mono text-sm text-accent">05 / Contact</span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I&apos;m open to senior full-stack and backend roles. Whether you have a project in mind or
              just want to connect, my inbox is always open.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent"
              >
                <Mail size={20} className="text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm font-medium break-all">
                    {profile.email}
                    <ArrowUpRight size={14} className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent"
              >
                <Phone size={20} className="text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="mt-0.5 text-sm font-medium">{profile.phone}</p>
                </div>
              </a>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-5">
                <MapPin size={20} className="text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="mt-0.5 text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
