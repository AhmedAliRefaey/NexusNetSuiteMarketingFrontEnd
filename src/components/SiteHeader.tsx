import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type NavItem = { label: string; slug: string };
type NavGroup = { label: string; path: string; items?: NavItem[] };

const nav: NavGroup[] = [
  {
    label: "Products",
    path: "/products",
    items: [
      { label: "ERP", slug: "erp" },
      { label: "Financials", slug: "financials" },
      { label: "CRM", slug: "crm" },
      { label: "Inventory", slug: "inventory" },
      { label: "Manufacturing", slug: "manufacturing" },
      { label: "Supply Chain", slug: "supply-chain" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    items: [
      { label: "Manufacturing", slug: "manufacturing" },
      { label: "Wholesale", slug: "wholesale" },
      { label: "Energy", slug: "energy" },
      { label: "Automotive", slug: "automotive" },
    ],
  },
  {
    label: "Solutions",
    path: "/solutions",
    items: [
      { label: "Supply Chain", slug: "supply-chain" },
      { label: "Procurement", slug: "procurement" },
      { label: "Analytics", slug: "analytics" },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    items: [
      { label: "Documentation", slug: "documentation" },
      { label: "Customer Stories", slug: "customer-stories" },
      { label: "Webinars", slug: "webinars" },
    ],
  },
  { label: "Pricing", path: "/pricing" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl font-bold tracking-tight text-secondary">
            Oracle<span className="text-primary"> NetSuite</span>
          </span>
          <span className="hidden sm:inline-block rounded-sm border border-border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Industrial
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <div key={n.label} className="relative group">
              <Link
                to={n.path}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-secondary/80 transition-colors hover:text-primary"
              >
                {n.label}
                {n.items && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {n.items && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-2 min-w-[220px] z-50">
                  <div className="rounded-lg border border-border bg-popover shadow-lg p-2">
                    {n.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`${n.path}/${item.slug}`}
                        className="block rounded-md px-3 py-2 text-sm text-secondary/80 hover:text-primary hover:bg-muted transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/contact">
            <Button variant="ghost" size="sm" className="text-secondary">Sign in</Button>
          </Link>
          <Link to="/contact">
            <Button variant="primary" size="sm">Request a demo</Button>
          </Link>
        </div>

        <button className="lg:hidden text-secondary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <div key={n.label} className="py-1">
                <Link
                  to={n.path}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-secondary"
                >
                  {n.label}
                </Link>
                {n.items && (
                  <div className="pl-4 flex flex-col">
                    {n.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`${n.path}/${item.slug}`}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-sm text-muted-foreground hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button variant="primary" size="sm" className="mt-3 w-full">Request a demo</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
