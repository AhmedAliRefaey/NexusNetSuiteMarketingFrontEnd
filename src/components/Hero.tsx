import { ArrowRight, PlayCircle, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Mesh + grid background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--red)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--red)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center py-20 lg:py-28">
        <div className="lg:col-span-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            New • AI-powered Industrial Cloud release 2026
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
            The Industrial Cloud built on{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Oracle NetSuite</span>
              <span className="absolute inset-x-0 bottom-1 h-2 bg-primary/20 -z-0" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
            One unified ERP, financials, supply chain and manufacturing platform —
            engineered for industrial operators who can't afford downtime.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" size="xl">
              Request a demo <ArrowRight className="ml-1" />
            </Button>
            <Button variant="outlineLight" size="xl">
              <PlayCircle /> Watch the platform tour
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8">
            {[
              { v: "37,000+", l: "Industrial customers" },
              { v: "99.98%", l: "Uptime SLA" },
              { v: "215", l: "Countries served" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold text-white">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/55">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-navy">
            <img
              src={heroImage}
              alt="Industrial NetSuite ERP dashboard overlay on smart factory floor"
              width={1600}
              height={1100}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/60 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-lg bg-white text-secondary p-4 shadow-lg max-w-[240px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Real-time OEE</div>
              <div className="text-xs text-muted-foreground">+24% line efficiency</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -top-6 -right-6 items-center gap-3 rounded-lg bg-white text-secondary p-4 shadow-lg max-w-[240px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">SOC 2 + ISO 27001</div>
              <div className="text-xs text-muted-foreground">Enterprise-grade security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
