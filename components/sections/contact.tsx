"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, Send } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Use a valid email"),
  role: z.string().min(2, "Tell me the role or company"),
  message: z.string().min(20, "Add a little more context"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nRole/Company: ${values.role}\n\n${values.message}`,
    );
    window.open(`<mailto:Arfiny007@gmail.com>?subject=${subject}&body=${body}`, "_self");
    setSent(true);
    reset();
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Ready for software, DevOps, and infrastructure roles.">
            Recruiters and engineering teams can use this form to start a focused conversation about internships, graduate roles, or junior engineering positions.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass h-full rounded-lg p-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-300" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </span>
                Available for interviews
              </div>
              <h3 className="text-3xl font-black text-white">Let us build the next system together.</h3>
              <p className="mt-5 leading-8 text-muted-foreground">
                I am especially interested in teams that care about product quality, deployment discipline, developer experience, and resilient infrastructure.
              </p>
              <a
                href="mailto:hello@example.com"
                className="mt-8 inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50"
              >
                <Mail className="h-4 w-4 text-cyan-200" />
                Arfiny007@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-lg p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <Input placeholder="Recruiter name" {...register("name")} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <Input placeholder="name@company.com" {...register("email")} />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Role / Company" error={errors.role?.message}>
                  <Input placeholder="Software Engineer at..." {...register("role")} />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Message" error={errors.message?.message}>
                  <Textarea placeholder="Tell me what you are hiring for..." {...register("message")} />
                </Field>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button type="submit" disabled={isSubmitting}>
                  Send message <Send className="h-4 w-4" />
                </Button>
                {sent ? (
                  <span className="inline-flex items-center gap-2 text-sm text-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    Email draft opened
                  </span>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}
