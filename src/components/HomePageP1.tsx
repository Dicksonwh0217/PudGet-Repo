import PudGetPreview from "@/assets/PudGetPreview.webp"
import { motion } from "motion/react"
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text"

const firstLine = ["Track spending, give advise, and grow your wealth.", "Use an AI Consultant to help you get rich."]

export function HomePageP1() {
    return (
        <main className="relative isolate overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-[#70795b] to-background opacity-90" />
            <div className="absolute -left-40 -top-32 h-72 w-72 rounded-full bg-[#E06D06]/20 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#E6E49F]/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-46">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:overflow-visible">
                    <div className="space-y-7">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: { duration: 5 }
                            }}
                            viewport={{
                                once: true
                            }}
                        >
                            <span className="inline-flex items-center mt-4 gap-2 rounded-full border border-background bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-background">
                                AI Personal Financial Consultant
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -80 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 2 }
                            }}
                            viewport={{
                                once: true
                            }}

                        >
                            <h1 className="text-4xl font-semibold leading-tight text-[#E3E7D3] sm:text-7xl">
                                Pudget
                            </h1>
                        </motion.div>
                        <SplittingText
                            className="text-lg text-[#E3E7D3]/80 sm:max-w-xl"
                            text={firstLine}
                            type="lines"
                            inView={true}
                            motionVariants={{
                                transition: { duration: 0.8 }
                            }}
                        />
                        <div className="flex flex-wrap gap-4 mt-4">
                            <button className="rounded-full bg-[#E06D06] px-6 py-3 text-sm font-semibold text-[#25291C] shadow-[0_15px_40px_rgba(224,109,6,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(224,109,6,0.45)]">
                                Get started
                            </button>
                            <button className="rounded-full border border-[#E3E7D3]/30 px-6 py-3 text-sm font-semibold text-[#E6E49F] transition hover:border-[#E6E49F] hover:bg-[#E6E49F]/10">
                                See how it works
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-sm text-[#E3E7D3]/80">
                            <div>
                                <div className="text-2xl font-semibold text-[#E6E49F]">24/7</div>
                                <p className="mt-1">Live insights</p>
                            </div>
                            <div>
                                <div className="text-2xl font-semibold text-[#E6E49F]">100%</div>
                                <p className="mt-1">User-friendly</p>
                            </div>
                            <div>
                                <div className="text-2xl font-semibold text-[#E6E49F]">3 types</div>
                                <p className="mt-1">Financial Indicator</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:relative lg:-mr-24">
                        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#E06D06]/12 via-transparent to-[#E6E49F]/12 blur-2xl" />
                        <div className="relative w-full max-w-[640px] overflow-hidden rounded-3xl border border-[#E3E7D3]/10 bg-[#25291C]/80 backdrop-blur shadow-xl lg:ml-auto">
                            <img src={PudGetPreview} alt="" className="block w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}