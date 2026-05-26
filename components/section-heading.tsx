import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{children}</p> : null}
    </div>
  );
}
