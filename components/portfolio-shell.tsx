"use client";

import { useState, type ReactNode } from "react";
import { CommandPalette } from "@/components/command-palette";
import { CursorGlow } from "@/components/cursor-glow";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";

export function PortfolioShell({ children }: { children: ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      {children}
    </>
  );
}
