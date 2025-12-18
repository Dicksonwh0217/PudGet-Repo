import { motion } from "motion/react"
import DashboardPreview from "@/assets/DashboardPreview.png"
import AI_InsightPreview from "@/assets/AI_InsightPreview.png"

export function Hero() {

    return (
        <section className="relative isolate overflow-hidden rounded-b-4xl border-b-2 border-foreground/40 bg-gradient-to-br from-[#1B2118] via-[#25291C] to-[#1B2118] scroll-mt-28 ">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#303824]/40 to-[#1B2118]/90" />
            <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[rgba(224,109,6,0.18)] blur-3xl" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[rgba(230,228,159,0.12)] blur-3xl" />
            <div className="absolute left-16 bottom-0 h-64 w-64 rounded-full bg-[rgba(112,121,91,0.15)] blur-3xl" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24">
                <motion.span
                    className="mb-6 mt-4 inline-flex items-center gap-2 rounded-full border border-[#2F3527] bg-[#E3E7D3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2118]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 3, delay: 2.5 } }}
                    viewport={{ once: true }}
                >
                    AI Personal Financial Consultant
                </motion.span>

                <h1
                    className="text-center text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl"
                >
                    <motion.span
                        className="block"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        Living paycheck to paycheck?
                    </motion.span>
                    <motion.span
                        className="block text-[#ff8010]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1, delay: 2 } }}
                        viewport={{ once: true }}
                    >
                        Meet Pudget.
                    </motion.span>
                </h1>

                <motion.p
                    className="mt-4 max-w-3xl text-center text-base text-[#E3E7D3]/80 sm:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.9, delay: 0.15 } }}
                    viewport={{ once: true }}
                >
                    An AI-powered personal finance assistant built for Malaysians—track spending, plan budgets, and improve
                    your financial health without the hassle.
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.25, staggerChildren: 0.08 } }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="rounded-full bg-[#E06D06] px-6 py-3 text-sm font-semibold text-[#25291C] shadow-[0_15px_40px_rgba(224,109,6,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(224,109,6,0.45)]"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        viewport={{ once: true }}
                    >
                        Get started
                    </motion.button>
                    <motion.button
                        className="rounded-full border border-[#E3E7D3]/30 px-6 py-3 text-sm font-semibold text-[#E6E49F] transition hover:border-[#E6E49F] hover:bg-[#E6E49F]/10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }}
                        viewport={{ once: true }}
                    >
                        See how it works
                    </motion.button>
                </motion.div>

                <motion.p
                    className="mt-10 text-center text-xs uppercase tracking-[0.16em] text-[#E3E7D3]/60"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.35 } }}
                    viewport={{ once: true }}
                >
                    Private by design • Data encrypted • Not investment advice.
                </motion.p>

                <motion.div
                    className="relative mt-12 w-full max-w-5xl"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5, delay: 0.5 } }}
                    viewport={{ once: true }}
                >
                    {/* Frame: controls height so the image always reaches the bottom */}
                    <div
                        className="relative overflow-hidden rounded-t-3xl h-[200px] sm:h-[320px] lg:h-[380px]"
                    >
                        {/* Dashboard fills the frame (no “floating” above the bottom) */}
                        <img
                            src={DashboardPreview}
                            alt="Pudget dashboard preview"
                            className="absolute inset-0 h-full w-full object-cover object-top"
                            draggable={false}
                        />

                        {/* Bottom fade-out into the page background */}
                        <div className="pointer-events-none absolute -bottom-px inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#1B2118]/60 to-[#1B2118]" />
                    </div>

                    {/* AI Insight overlay (top-right) */}
                    <motion.div
                        className="pointer-events-none absolute -right-4 -top-8 lg:-right-10 lg:-top-10 w-[150px] sm:w-[240px] lg:w-[280px]"
                        initial={{ opacity: 0, scale: 0.9, y: 12 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 420, damping: 26, delay: 2.5, duration: 6 }}
                    >
                        <div className="rounded-2xl border-2 border-black">
                            <img
                                src={AI_InsightPreview}
                                alt="AI insight preview"
                                className="block w-full h-auto rounded-xl"
                                draggable={false}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
