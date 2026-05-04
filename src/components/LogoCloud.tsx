export const LogoCloud = () => {
  const logos = ["SIEMENS", "HONEYWELL", "ABB", "BOSCH", "CATERPILLAR", "EMERSON"];
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by industrial leaders worldwide
        </p>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-display text-base md:text-lg font-bold tracking-widest text-secondary/40 hover:text-secondary transition-colors"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
