import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { AboutUsSection } from "@/components/about-us-section"
import { RatingSystemSection } from "@/components/rating-system-section"
import { TopSitesPortugalSection } from "@/components/top-sites-portugal-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopCasinoPopup } from "@/components/top-casino-popup"
import { OurChoiceSection } from "@/components/our-choice-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050808] via-[#0a0f0a] to-[#080a08]" />

        {/* Subtle emerald glow accents */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-900/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-800/5 rounded-full blur-[120px]" />

        {/* Gold accent glow */}
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-900/3 rounded-full blur-[100px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />

          <div id="rankings">
            <RankingsSection />
          </div>
          <AboutUsSection />
          <RatingSystemSection />
          <TopSitesPortugalSection />
                    <OurChoiceSection />
          <div id="faq">
            <FAQSection />
          </div>
        </main>
        <Footer />
      </div>

      {/* Interactive Elements */}
      <CookieBanner />
      <TopCasinoPopup />
    </div>
  )
}
