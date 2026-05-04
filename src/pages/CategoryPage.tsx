import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

type Item = { slug: string; title: string; description: string };

const data: Record<string, { eyebrow: string; title: string; description: string; items: Item[] }> = {
  products: {
    eyebrow: "Products",
    title: "A unified suite for industrial operations.",
    description: "From the shop floor to the boardroom — one platform, one data model, one source of truth.",
    items: [
      { slug: "erp", title: "Cloud ERP", description: "Core enterprise resource planning unified across every plant." },
      { slug: "financials", title: "Financials", description: "Multi-entity accounting, tax, and revenue recognition at scale." },
      { slug: "crm", title: "CRM", description: "End-to-end customer lifecycle from quote to renewal." },
      { slug: "inventory", title: "Inventory", description: "Real-time stock visibility across warehouses and 3PLs." },
      { slug: "manufacturing", title: "Manufacturing", description: "MRP, work orders, shop floor control, and quality." },
      { slug: "supply-chain", title: "Supply Chain", description: "Demand planning, procurement, and global logistics." },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Built for the industries that build the world.",
    description: "Pre-configured industry editions accelerate time to value with proven workflows.",
    items: [
      { slug: "manufacturing", title: "Manufacturing", description: "Discrete, process, and mixed-mode production." },
      { slug: "wholesale", title: "Wholesale Distribution", description: "Multi-channel order management and fulfillment." },
      { slug: "energy", title: "Energy", description: "Asset-intensive operations, MRO, and field service." },
      { slug: "automotive", title: "Automotive", description: "Tier 1–3 supplier compliance and EDI." },
    ],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "Solutions for every industrial workflow.",
    description: "Composable solutions that span departments and scale globally.",
    items: [
      { slug: "supply-chain", title: "Supply Chain", description: "Plan, source, make, and deliver — end to end." },
      { slug: "procurement", title: "Procurement", description: "Source-to-pay automation with supplier portals." },
      { slug: "analytics", title: "Analytics", description: "Embedded BI with industrial KPI dashboards." },
    ],
  },
  resources: {
    eyebrow: "Resources",
    title: "Learn, connect, and accelerate.",
    description: "Documentation, webinars, and customer stories to help you get the most out of the platform.",
    items: [
      { slug: "documentation", title: "Documentation", description: "Technical guides, API references, and admin manuals." },
      { slug: "customer-stories", title: "Customer Stories", description: "How leading manufacturers transformed operations." },
      { slug: "webinars", title: "Webinars", description: "Live and on-demand sessions from product experts." },
    ],
  },
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const page = category ? data[category] : null;
  if (!page) return <NotFound />;

  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {page.items.map((item) => (
          <Card key={item.slug} className="group hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="mt-2">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to={`/${category}/${item.slug}`}>
                <Button variant="ghost" size="sm" className="px-0 text-primary hover:text-primary hover:bg-transparent">
                  Learn more <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
