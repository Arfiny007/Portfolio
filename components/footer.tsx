import { navItems, socials } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm text-cyan-200">systems portfolio</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind, Framer Motion, and a production-first mindset.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-cyan-100">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          {socials.slice(0, 3).map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-muted-foreground transition hover:text-cyan-100"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
