import { cn } from "@/shared/lib/cn";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  label: string;
}

export function Section({ id, label, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}
