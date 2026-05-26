const levels = ["bg-white/5", "bg-cyan-300/20", "bg-cyan-300/40", "bg-blue-400/50", "bg-violet-400/60"];

export function ContributionGraph() {
  return (
    <div className="glass rounded-lg p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Build consistency</p>
        <p className="font-mono text-xs text-cyan-200">52 weeks</p>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(26, minmax(0, 1fr))" }}>
        {Array.from({ length: 130 }).map((_, index) => (
          <span
            key={index}
            className={`h-2.5 rounded-[2px] ${levels[(index * 7 + index) % levels.length]}`}
          />
        ))}
      </div>
    </div>
  );
}
