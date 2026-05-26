import { infraSteps } from "@/lib/portfolio-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Infrastructure() {
  return (
    <section id="infra" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <div className="container relative">
        <Reveal>
          <SectionHeading eyebrow="DevOps / Infrastructure" title="Deployment workflows designed like products.">
            I think about release systems as user experiences for engineers: fast feedback, clear failures, safe promotion, and visible runtime behavior.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-5">
          {infraSteps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.08}>
              <div className="glass premium-border relative h-full rounded-lg p-5 transition duration-300 hover:-translate-y-1">
                <span className="absolute -right-2 top-10 hidden h-4 w-4 rotate-45 border-r border-t border-cyan-300/40 lg:block" />
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-cyan-300/10 text-cyan-100">
                  <step.icon className="h-6 w-6" />
                </div>
                <p className="font-mono text-xs text-violet-200">step {index + 1}</p>
                <h3 className="mt-2 text-xl font-black text-white">{step.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass premium-border rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                pipeline.yml
              </p>
              <div className="mt-5 space-y-3 font-mono text-sm">
                {[
                  "on: pull_request -> build_preview",
                  "jobs: typecheck, lint, test, scan",
                  "image: docker build && signed push",
                  "deploy: kubernetes rollout with health gates",
                  "observe: logs, metrics, alerts, rollback signal",
                ].map((line) => (
                  <div key={line} className="rounded-md border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-300">
                    <span className="text-cyan-200">+</span> {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                operations console
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  ["SLO target", "99.9%"],
                  ["Rollback path", "< 5 min"],
                  ["Deploy style", "health-gated"],
                  ["Runtime signal", "logs + metrics"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-3 rounded-md bg-white/[0.04] p-3">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="font-mono text-sm font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {["Automate the repeatable", "Measure the invisible", "Design for rollback", "Document operational intent"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-glow" />
                    <span className="text-sm font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
