import {
  Factory, Boxes, LineChart, Truck, Wrench, ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const modules = [
  { icon: Factory, title: "Manufacturing Execution", desc: "Schedule production, track WIP, and orchestrate the shop floor in real time." },
  { icon: Boxes, title: "Inventory & Warehouse", desc: "Multi-location inventory, demand planning, and barcode-enabled WMS." },
  { icon: Truck, title: "Supply Chain", desc: "End-to-end visibility from supplier to dock with predictive replenishment." },
  { icon: LineChart, title: "Financials & ERP", desc: "Close books faster with multi-entity, multi-currency cloud financials." },
  { icon: Wrench, title: "Asset Maintenance", desc: "Preventive and predictive maintenance to maximize uptime and asset life." },
  { icon: ShieldCheck, title: "Quality & Compliance", desc: "ISO, FDA, and industry-specific compliance built into every workflow." },
];

export const Modules = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Suite</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-secondary text-balance">
            One platform. Every industrial workflow.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Replace disconnected systems with a single source of truth across operations,
            finance, and supply chain — purpose-built for industrial enterprises.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {modules.map((m) => (
            <div
              key={m.title}
              className="group relative bg-background p-8 hover:bg-surface transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <m.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-secondary">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
