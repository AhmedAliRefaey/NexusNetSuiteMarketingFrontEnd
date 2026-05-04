const industries = [
  { name: "Discrete Manufacturing", stat: "32% faster", label: "production cycle time" },
  { name: "Process & Chemicals", stat: "$4.2M", label: "average annual savings" },
  { name: "Industrial Equipment", stat: "99.4%", label: "on-time delivery" },
  { name: "Automotive Tier-1/2", stat: "18%", label: "inventory reduction" },
  { name: "Energy & Utilities", stat: "2.1x", label: "asset uptime ROI" },
  { name: "Wholesale Distribution", stat: "65%", label: "faster order-to-cash" },
];

export const Industries = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Industries we power</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-secondary text-balance">
              Outcomes you can measure on day one.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Real results from real industrial operators running on Oracle NetSuite.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <article
              key={i.name}
              className="group relative bg-background border border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-tl-xl group-hover:w-full transition-all duration-500" />
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {i.name}
              </div>
              <div className="mt-6 font-display text-4xl md:text-5xl font-bold text-secondary">
                {i.stat}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{i.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
