import { Link } from "react-router-dom";

type Col = { title: string; basePath: string; links: { label: string; to: string }[] };

const cols: Col[] = [
  {
    title: "Products",
    basePath: "/products",
    links: [
      { label: "ERP", to: "/products/erp" },
      { label: "Financials", to: "/products/financials" },
      { label: "CRM", to: "/products/crm" },
      { label: "Inventory", to: "/products/inventory" },
      { label: "Manufacturing", to: "/products/manufacturing" },
      { label: "Supply Chain", to: "/products/supply-chain" },
    ],
  },
  {
    title: "Industries",
    basePath: "/industries",
    links: [
      { label: "Manufacturing", to: "/industries/manufacturing" },
      { label: "Wholesale Distribution", to: "/industries/wholesale" },
      { label: "Energy", to: "/industries/energy" },
      { label: "Automotive", to: "/industries/automotive" },
    ],
  },
  {
    title: "Resources",
    basePath: "/resources",
    links: [
      { label: "Documentation", to: "/resources/documentation" },
      { label: "Customer Stories", to: "/resources/customer-stories" },
      { label: "Webinars", to: "/resources/webinars" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Company",
    basePath: "/contact",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Pricing", to: "/pricing" },
      { label: "Solutions", to: "/solutions" },
    ],
  },
];

export const SiteFooter = () => {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="font-display text-xl font-bold tracking-tight text-white">
              Oracle<span className="text-primary"> NetSuite</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              The unified industrial cloud platform for ERP, financials, and supply chain —
              trusted by 37,000+ industrial enterprises worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs">
              <span className="rounded border border-white/15 px-2 py-1 uppercase tracking-wider">SOC 2</span>
              <span className="rounded border border-white/15 px-2 py-1 uppercase tracking-wider">ISO 27001</span>
              <span className="rounded border border-white/15 px-2 py-1 uppercase tracking-wider">GDPR</span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row gap-4 justify-between text-xs">
          <p>© 2026 Oracle NetSuite Industrial. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary">Privacy</Link>
            <Link to="/contact" className="hover:text-primary">Terms</Link>
            <Link to="/contact" className="hover:text-primary">Cookies</Link>
            <Link to="/contact" className="hover:text-primary">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
