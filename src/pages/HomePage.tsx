import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import { Header } from "@/components/Header"
import { HomePageBento } from "@/components/HomePageBento"
import { HomePageP1 } from "@/components/HomePageP1"
import { Footer } from "@/components/Footer"

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#25291C] text-[#E3E7D3]">
            <Header />
            <HomePageP1 />
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
            <Footer />
        </div >
    )
}
