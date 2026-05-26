"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Download, Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { roles, socials, stats } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { TerminalCard } from "@/components/terminal-card";
import { StatusWidget } from "@/components/status-widget";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 md:pt-40">
      <div className="absolute inset-0 grid-mask animate-grid-drift" aria-hidden="true" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl animate-aurora" />
      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              className="mb-5 inline-flex rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Software x DevOps x Infrastructure
            </motion.p>
            <motion.h1
              className="max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Full-stack builder with a DevOps brain.
            </motion.h1>
            <motion.div
              className="mt-5 flex flex-wrap items-center gap-3 text-lg font-semibold text-muted-foreground md:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
            >
              <span>Currently positioning as</span>
              <span
                aria-live="polite"
                className="rounded-md bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text font-black text-transparent"
              >
                {roles[roleIndex]}
              </span>
            </motion.div>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
            >
              Computer Science graduate focused on shipping reliable software, automating deployment paths, and designing systems that stay fast, secure, observable, and easy to operate.
            </motion.p>
            <motion.div
              className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {["Production mindset", "Cloud-ready workflows", "Recruiter-friendly proof"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
            >
              <Magnetic>
                <Button asChild size="lg">
                  <a href="#projects">
                    View projects <ArrowDown className="h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="outline" size="lg">
                  <a href="/resume.pdf" download>
                    Resume <Download className="h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="secondary" size="lg">
                  <a href="#contact">
                    Hire me <Send className="h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/5 text-muted-foreground transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-100"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-300/20 to-violet-500/20 blur-3xl" />
            <div className="glass premium-border relative rounded-lg p-3 sm:p-5">
              <div
                className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/20 sm:aspect-square"
                style={{ position: "relative" }}
              >
                <Image
                  src="/profile-headshot.png"
                  alt="Professional headshot of the portfolio owner"
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, 92vw"
                  className="object-cover object-[50%_28%] sm:object-[50%_34%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-cyan-200/10" />
                <div className="absolute left-4 top-4 rounded-md border border-cyan-300/20 bg-slate-950/55 px-3 py-2 font-mono text-xs text-cyan-100 backdrop-blur">
                  open_to_work=true
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/10 bg-slate-950/78 p-4 backdrop-blur">
                  <p className="font-mono text-xs text-cyan-200">Yeasin Arfin</p>
                  <p className="mt-1 text-sm text-slate-300">Software, DevOps, and infrastructure-ready engineering graduate.</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <TerminalCard />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-lg p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
              <p className="mt-2 font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <StatusWidget />
        </div>
      </div>
    </section>
  );
}
