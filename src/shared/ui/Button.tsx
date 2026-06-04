import { cn } from "@/shared/lib/cn";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 border border-indigo-600 hover:border-indigo-500",
  secondary:
    "bg-transparent text-indigo-400 border border-indigo-400 hover:bg-indigo-400/10",
  ghost:
    "bg-transparent text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
