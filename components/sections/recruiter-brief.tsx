import { capabilityMatrix, recruiterSignals } from "@/lib/portfolio-data";
import { Reveal } from "@/components/motion/reveal";

export function RecruiterBrief() {
  return (
    <section id="main" aria-label="Recruiter summary" className="relative -mt-8 pb-10">
      <div className="container">
        <Reveal>
          <div className="glass grid overflow-hidden rounded-lg lg:grid-cols-[1fr_1.2fr]">
            <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                5-second recruiter read
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-white md:text-4xl">
                Product polish plus infrastructure discipline.
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                This portfolio is optimized to show a rare early-career blend: frontend taste, backend fundamentals, deployment automation, and production awareness.
              </p>
            </div>
            <div className="grid sm:grid-cols-3">
              {recruiterSignals.map((signal) => (
                <div key={signal.label} className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <signal.icon className="mb-4 h-6 w-6 text-cyan-200" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {signal.label}
                  </p>
                  <p className="mt-3 text-lg font-black text-white">{signal.value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {capabilityMatrix.map(([area, detail]) => (
              <div key={area} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-sm font-bold text-white">{area}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
