import { journey } from "@/lib/portfolio-data";
import { ContributionGraph } from "@/components/contribution-graph";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Journey" title="Growth shaped by fundamentals and operations.">
            A timeline built around the signal hiring teams care about: learning velocity, delivery discipline, and systems awareness.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ContributionGraph />
          </Reveal>
          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent" />
            <div className="space-y-5">
              {journey.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-md border border-cyan-300/30 bg-slate-950 text-cyan-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="glass rounded-lg p-5">
                      <p className="font-mono text-xs text-cyan-200">{item.year}</p>
                      <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
