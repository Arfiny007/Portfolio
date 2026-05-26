"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, ExternalLink, Github, Layers3, Maximize2, Route } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const filters = ["All", "Full Stack", "DevOps", "Infrastructure"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(projects[0].name);
  const visible = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Projects" title="Three flagship builds, framed for recruiters.">
            Each card is structured to show not only what was built, but how it was designed, deployed, and improved.
          </SectionHeading>
        </Reveal>
        <Reveal>
          <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project filters">
            {filters.map((item) => (
              <Button
                key={item}
                variant={filter === item ? "default" : "outline"}
                size="sm"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => {
              const isExpanded = expanded === project.name;
              return (
                <motion.article
                  layout
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="glass overflow-hidden rounded-lg"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-80 overflow-hidden border-b border-white/10 bg-slate-950 lg:border-b-0 lg:border-r">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.22),transparent_28%)]" />
                      <div className="absolute inset-6 rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-2xl backdrop-blur">
                        <div className="mb-4 flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-rose-400" />
                          <span className="h-3 w-3 rounded-full bg-amber-300" />
                          <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <div className="relative h-[calc(100%-2rem)] overflow-hidden rounded-md border border-cyan-300/10 bg-slate-950/80 p-5">
                          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-300/10 to-transparent" />
                          <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
                            <div className="space-y-3">
                              <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                                <Layers3 className="mb-3 h-6 w-6 text-cyan-200" />
                                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">
                                  system view
                                </p>
                                <p className="mt-2 text-lg font-black text-white">{project.name}</p>
                              </div>
                              <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                                <Route className="mb-2 h-5 w-5 text-violet-200" />
                                <p className="text-xs leading-5 text-slate-300">{project.architecture}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              {project.outcomes.map((outcome, outcomeIndex) => (
                                <div key={outcome} className="flex items-center gap-3 rounded-md bg-cyan-300/[0.08] p-3">
                                  <BarChart3 className="h-4 w-4 shrink-0 text-cyan-200" />
                                  <span className="text-xs font-semibold text-slate-200">
                                    {String(outcomeIndex + 1).padStart(2, "0")} {outcome}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="absolute left-5 top-5 rounded-md bg-white/10 px-3 py-1 font-mono text-xs text-cyan-100">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                            {project.category}
                          </p>
                          <h3 className="mt-3 text-3xl font-black text-white">{project.name}</h3>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${project.name} details`}
                          onClick={() => setExpanded(isExpanded ? "" : project.name)}
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="mt-5 leading-8 text-muted-foreground">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="rounded-md bg-cyan-300/10 px-2.5 py-1.5 text-xs text-cyan-100">
                            {item}
                          </span>
                        ))}
                      </div>
                      <AnimatePresence initial={false}>
                        {isExpanded ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 grid gap-4 md:grid-cols-4">
                              <Detail title="Architecture" items={[project.architecture]} />
                              <Detail title="Features" items={project.features} />
                              <Detail title="Challenges solved" items={project.challenges} />
                              <Detail title="Outcome signal" items={project.outcomes} />
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <Button asChild variant="outline">
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                        <Button asChild>
                          <a href={project.demo} target="_blank" rel="noreferrer">
                            Live demo
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Detail({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <h4 className="text-sm font-bold text-white">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
