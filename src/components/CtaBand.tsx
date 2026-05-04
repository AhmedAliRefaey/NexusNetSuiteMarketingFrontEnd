import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CtaBand = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--red)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--red)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container relative text-center max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ready when you are</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
          See Oracle NetSuite Industrial in your environment.
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Tailored 30-minute demo with one of our industrial solution architects.
          No slides — just your workflows, live.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact">
            <Button variant="primary" size="xl">
              Book your demo <ArrowRight />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outlineLight" size="xl">Contact sales</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
