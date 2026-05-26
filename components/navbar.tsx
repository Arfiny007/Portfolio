"use client";

import { Menu, X, Command } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

type NavbarProps = {
  onCommandOpen: () => void;
};

export function Navbar({ onCommandOpen }: NavbarProps) {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section instanceof Element);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-40 px-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/10 bg-slate-950/55 px-3 py-2 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3 rounded-md px-2 py-1">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-cyan-300 to-violet-400 font-mono text-sm font-black text-slate-950">
            CS
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Arfiny's Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/8 hover:text-white",
                active === item.href.slice(1) && "bg-white/10 text-white",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onCommandOpen} className="hidden sm:flex">
            <Command className="h-4 w-4" />
            Palette
          </Button>
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-navigation"
          className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-lg border border-white/10 bg-slate-950/90 p-2 backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" onClick={onCommandOpen}>
            <Command className="h-4 w-4" />
            Open command palette
          </Button>
        </div>
      ) : null}
    </motion.header>
  );
}
