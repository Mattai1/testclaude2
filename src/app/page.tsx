import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { IDEPreview } from "@/components/ide-preview";
import { MarqueeLogos } from "@/components/marquee-logos";
import { Statement } from "@/components/statement";
import { Features } from "@/components/features";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />

      {/* IDE Preview */}
      <section className="py-16 md:py-24">
        <IDEPreview />
      </section>

      <MarqueeLogos />
      <Statement />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}
