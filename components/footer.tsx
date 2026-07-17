import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-accent">{"<"}</span>MTA<span className="text-accent">{" />"}</span>
          {" "}— {profile.name}
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} · Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
