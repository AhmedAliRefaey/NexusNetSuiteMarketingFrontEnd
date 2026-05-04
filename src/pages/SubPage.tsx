import { useParams, Link } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

const titleize = (slug: string) =>
  slug.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join(" ");

const eyebrowMap: Record<string, string> = {
  products: "Products",
  industries: "Industries",
  solutions: "Solutions",
  resources: "Resources",
};

export default function SubPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const eyebrow = category ? eyebrowMap[category] ?? category : "";
  const title = slug ? titleize(slug) : "Overview";

  const benefits = [
    "Real-time operational visibility across plants",
    "Pre-built industry workflows and best practices",
    "Native integration with the full Oracle NetSuite suite",
    "Enterprise-grade security: SOC 2, ISO 27001, GDPR",
    "Global scale with multi-entity, multi-currency support",
    "AI-driven recommendations and anomaly detection",
  ];

  return (
    <PageShell
      eyebrow={eyebrow}
      title={`${title} for industrial enterprises.`}
      description={`Discover how ${title} from Oracle NetSuite Industrial helps you streamline operations, reduce cost, and accelerate growth.`}
    >
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-3xl font-bold text-secondary">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {title} is part of the Oracle NetSuite Industrial platform — a unified cloud suite trusted by
            37,000+ industrial enterprises. It connects every department on a single data model so your
            teams can plan, execute, and analyze without switching systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Deploy in weeks, not months. Configure once, scale globally. Built on Oracle Cloud Infrastructure
            with the reliability and performance industrial operations demand.
          </p>

          <h3 className="font-display text-2xl font-bold text-secondary pt-6">Key benefits</h3>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-secondary/90">{b}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Link to={`/${category}`}>
              <Button variant="outlineNavy" size="sm">
                <ArrowLeft /> Back to {eyebrow}
              </Button>
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-border bg-muted/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Get started</p>
            <h4 className="mt-2 font-display text-xl font-bold text-secondary">
              Talk to a {title} specialist
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              30-minute tailored demo focused on your industrial workflows.
            </p>
            <Link to="/contact" className="block mt-5">
              <Button variant="primary" size="lg" className="w-full">Request a demo</Button>
            </Link>
            <Link to="/contact" className="block mt-2">
              <Button variant="outlineNavy" size="lg" className="w-full">Contact sales</Button>
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
