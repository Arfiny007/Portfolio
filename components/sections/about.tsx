import { Code2, Cpu, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="About" title="A builder with a production mindset.">
            I care about the full path from idea to interface to deployment. The best software is not just functional; it is understandable, observable, maintainable, and pleasant to use.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Product-quality engineering",
              text: "I build responsive interfaces, typed components, clean APIs, and workflows that help users move quickly without confusion.",
            },
            {
              icon: Cpu,
              title: "Systems thinking",
              text: "I like tracing how data, services, networks, deployments, and people interact so solutions stay durable under pressure.",
            },
            {
              icon: ShieldCheck,
              title: "Operational discipline",
              text: "I value automation, monitoring, rollback paths, security boundaries, and documentation that makes future work easier.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="glass h-full rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40">
                <item.icon className="mb-5 h-8 w-8 text-cyan-200" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
