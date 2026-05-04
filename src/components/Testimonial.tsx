import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-12 -left-4 text-primary/10">
            <Quote className="h-48 w-48" strokeWidth={1} />
          </div>
          <div className="relative">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-secondary text-balance">
              "We consolidated seven legacy systems onto Oracle NetSuite Industrial in
              under nine months. We now close the books in 3 days, and our plant
              managers see live OEE on their phones."
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
              <div className="h-12 w-12 rounded-full bg-gradient-red flex items-center justify-center font-display font-bold text-white">
                MK
              </div>
              <div>
                <div className="font-semibold text-secondary">Marcus Klein</div>
                <div className="text-sm text-muted-foreground">CIO, Heinrich Industrial Group · 14 plants, 6 countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
