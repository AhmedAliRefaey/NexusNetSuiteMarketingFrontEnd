import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Unified data model across plants, warehouses, and HQ",
  "Real-time KPIs: OEE, throughput, scrap, on-time delivery",
  "Native AI for demand forecasting and anomaly detection",
  "Pre-built connectors for SCADA, MES, IoT, and EDI",
  "Configurable for discrete, process, and mixed-mode manufacturing",
];

export const FeatureSplit = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why NetSuite Industrial</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
            From the shop floor to the boardroom — instantly.
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Built on Oracle's enterprise cloud, NetSuite Industrial gives operators,
            planners, and executives the same real-time picture of the business.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-white/85">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" size="lg">Talk to an expert</Button>
            <Button variant="outlineLight" size="lg">Read the datasheet</Button>
          </div>
        </div>

        {/* Right: KPI mock dashboard */}
        <div className="relative">
          <div className="rounded-xl bg-navy-deep border border-white/10 p-6 shadow-navy">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Plant Performance · Live</div>
                <div className="font-display text-lg font-semibold mt-1">Detroit Assembly · Line 03</div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" /> Online
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { l: "OEE", v: "87.4%", t: "+2.1%" },
                { l: "Throughput", v: "1,284", t: "/hr" },
                { l: "Scrap", v: "0.42%", t: "-0.3%" },
              ].map((k) => (
                <div key={k.l} className="rounded-lg bg-white/5 p-4 border border-white/10">
                  <div className="text-[10px] uppercase tracking-wider text-white/50">{k.l}</div>
                  <div className="mt-1 font-display text-2xl font-bold">{k.v}</div>
                  <div className="text-xs text-primary mt-0.5">{k.t}</div>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="mt-6 rounded-lg bg-white/5 p-4 border border-white/10">
              <div className="flex items-end justify-between h-32 gap-1.5">
                {[40, 55, 48, 70, 62, 80, 75, 92, 85, 78, 95, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-white/40 uppercase tracking-wider">
                <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
