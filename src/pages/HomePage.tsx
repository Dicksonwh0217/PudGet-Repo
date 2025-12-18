import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import { Header } from "@/components/Header"
import { HomePageBento } from "@/components/HomePageBento"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { FeaturesSectionContent } from "@/components/FeaturesSection"

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#25291C] text-[#99a177]">
            <Header />
            <section id="home" className="scroll-mt-32">
                <Hero />
            </section>
            <section id="features" className="relative scroll-mt-32 overflow-hidden">
                <GravityStarsBackground />
                <FeaturesSectionContent />
            </section>
            <section id="capabilities" className="relative scroll-mt-32 overflow-hidden">
                <HomePageBento />
            </section>
            <section id="company" className="relative scroll-mt-32 overflow-hidden">
                <Footer />
            </section>
        </div >
    )
}
