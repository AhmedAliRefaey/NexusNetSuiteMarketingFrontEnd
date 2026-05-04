import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Modules } from "@/components/Modules";
import { FeatureSplit } from "@/components/FeatureSplit";
import { Industries } from "@/components/Industries";
import { Testimonial } from "@/components/Testimonial";
import { CtaBand } from "@/components/CtaBand";
import { SiteFooter } from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <main>
        <Hero />
        <LogoCloud />
        <Modules />
        <FeatureSplit />
        <Industries />
        <Testimonial />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
