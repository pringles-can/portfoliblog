import { cn } from "@/shared/lib/cn";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight";
}

export function Card({ variant = "default", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 transition-colors",
        variant === "default" && "border-slate-800 bg-slate-900 hover:border-slate-700",
        variant === "highlight" && "border-indigo-800/50 bg-slate-900 hover:border-indigo-700/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
