import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Standard",
    price: "Custom",
    tagline: "For growing industrial teams",
    features: ["Core ERP & Financials", "Up to 5 entities", "Standard support", "Inventory & Order Mgmt"],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "For multi-plant operations",
    features: [
      "Everything in Standard",
      "Unlimited entities",
      "Manufacturing & MRP",
      "Advanced analytics",
      "24/7 priority support",
    ],
    highlight: true,
  },
  {
    name: "Industrial+",
    price: "Custom",
    tagline: "For global manufacturers",
    features: [
      "Everything in Enterprise",
      "Dedicated CSM",
      "Custom integrations",
      "Premier SLAs",
      "On-prem connectors",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Pricing built for industrial scale."
      description="Modular licensing that grows with your operation. Talk to sales for a tailored quote."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={
              t.highlight
                ? "border-primary border-2 shadow-red relative"
                : "border-border"
            }
          >
            {t.highlight && (
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{t.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{t.tagline}</p>
              <p className="pt-4 font-display text-4xl font-bold text-secondary">{t.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block mt-6">
                <Button variant={t.highlight ? "primary" : "outlineNavy"} className="w-full">
                  Contact sales
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
