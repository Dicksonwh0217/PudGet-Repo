import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import { Header } from "@/components/Header"
import { HomePageBento } from "@/components/HomePageBento"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#25291C] text-[#99a177]">
            <Header />
            <section id="home" className="scroll-mt-32">
                <Hero />
            </section>
            <section id="features" className="scroll-mt-32">
                <GravityStarsBackground
                    className="w-full min-h-[1600px] md:min-h-[1200px] lg:min-h-[1300px]"
                    starsCount={110}
                    starsOpacity={0.45}
                    starsSize={2}
                    glowIntensity={12}
                    mouseInfluence={70}
                    gravityStrength={60}
                />
                <HomePageBento />
            </section>
            <Footer />
        </div >
    )
}
