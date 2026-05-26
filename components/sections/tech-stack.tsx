import { techCategories } from "@/lib/portfolio-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function TechStack() {
  return (
    <section id="stack" className="section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Stack" title="A practical toolkit for modern teams.">
            The stack is intentionally balanced across product development, backend systems, cloud operations, automation, and production support.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 4) * 0.05}>
              <div className="group glass h-full rounded-lg p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50">
                <div className="mb-5 flex items-center justify-between">
                  <category.icon className="h-7 w-7 text-cyan-200 transition group-hover:scale-110" />
                  <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-300 transition group-hover:border-cyan-300/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
