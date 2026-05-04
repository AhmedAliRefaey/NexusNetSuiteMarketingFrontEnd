import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CtaBand } from "@/components/CtaBand";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  showCta?: boolean;
}

export const PageShell = ({ eyebrow, title, description, children, showCta = true }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-hero text-white">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--red)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--red)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container relative py-20 md:py-28 max-w-4xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            )}
            <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">{description}</p>
            )}
          </div>
        </section>
        <div className="container py-16 md:py-24">{children}</div>
        {showCta && <CtaBand />}
      </main>
      <SiteFooter />
    </div>
  );
};
