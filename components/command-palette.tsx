"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command, Github, Linkedin, Mail, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, socials } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const actions = useMemo(
    () => [
      ...navItems.map((item) => ({ label: `Go to ${item.label}`, href: item.href, icon: Command })),
      { label: "Download resume", href: "/resume.pdf", icon: Search },
      { label: "Email recruiter note", href: "mailto:hello@example.com", icon: Mail },
      { label: "Open GitHub", href: socials[0].href, icon: Github },
      { label: "Open LinkedIn", href: socials[1].href, icon: Linkedin },
    ],
    [],
  );
  const visible = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-slate-950/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-24 z-[71] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-lg border border-white/10 bg-slate-950/92 p-2 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
          <Dialog.Title className="sr-only">Command palette</Dialog.Title>
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
            <Search className="h-4 w-4 text-cyan-200" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search sections, links, resume..."
              className="h-10 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="max-h-96 overflow-y-auto p-2">
            {visible.map((action) => (
              <a
                key={action.label}
                href={action.href}
                onClick={() => onOpenChange(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <action.icon className="h-4 w-4 text-cyan-200" />
                {action.label}
              </a>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
