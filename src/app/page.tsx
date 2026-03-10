import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MarqueeLogos } from "@/components/marquee-logos";
import { EnterpriseSection } from "@/components/enterprise-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <MarqueeLogos />
      <EnterpriseSection />
      <Footer />
    </div>
  );
}
