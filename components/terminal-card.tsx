"use client";

import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";

const lines = [
  "$ whoami",
  "cs_graduate --focus software --ops --infra",
  "$ deploy --target recruiter-attention",
  "build passed: typed, tested, observable",
  "$ status",
  "open_to_work=true latency=fast mindset=production",
];

export function TerminalCard() {
  return (
    <div className="glass overflow-hidden rounded-lg">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <TerminalSquare className="h-4 w-4 text-cyan-200" />
          command center
        </div>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="space-y-3 p-4 font-mono text-xs text-slate-300 md:text-sm">
        {lines.map((line, index) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.12 }}
            className={line.startsWith("$") ? "text-cyan-200" : "text-slate-300"}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
