"use client"

import { motion } from "motion/react"
import { ColourfulText } from "@/components/ui/shadcn-io/colourful-text"
import TrackingSpending from "@/assets/TrackingSpending.webp"
import BudgetInsight from "@/assets/BudgetInsight.webp"

export function FeaturesSectionContent() {
  return (
    <div className="relative z-10 flex flex-col items-center p-14 gap-14">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#E3E7D3]">
          Build Your{" "}
          <ColourfulText text="AI-Powered" className="inline" />{" "}
          Personal
          <br />
          Financial Consultant in Malaysia
        </h1>
      </motion.div>

      {/* block 1 */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ margin: "0px 0px -200px 0px", amount: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={TrackingSpending}
            className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl max-h-120 object-contain mt-4 md:mt-10 rounded-3xl"
            alt="Tracking Spending"
          />
        </motion.div>

        <div className="flex flex-col items-center md:items-start gap-4 mt-8 md:mt-12 w-full md:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ margin: "200px 0px -100px 0px", amount: 0.5 }}
          >
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Tracking Spending
            </h2>
          </motion.div>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ margin: "200px 0px 0px 0px", amount: 0.5 }}
            className="text-lg sm:max-w-xl leading-relaxed text-foreground"
          >
            Record all of your financial transactions including income and expenses. Your AI consultant will analyze your
            situation and help you achieve your goals.
          </motion.p>
        </div>
      </div>

      {/* block 2 */}
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-10 mt-12 text-center md:text-right">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ margin: "0px 0px -200px 0px", amount: 0.3 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src={BudgetInsight}
            className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl max-h-120 object-contain rounded-3xl"
            alt="Budget Insights"
          />
        </motion.div>

        <div className="flex flex-col items-center md:items-end gap-4 mb-8 md:mb-16 w-full md:w-1/2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ margin: "200px 0px -100px 0px", amount: 0.5 }}
          >
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Budget Insights
            </h2>
          </motion.div>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ margin: "200px 0px -50px 0px", amount: 0.5 }}
            className="text-lg sm:max-w-xl leading-relaxed text-foreground"
          >
            Get proactive alerts on upcoming bills, track savings goals, and see what pushes you over budget. Your AI
            consultant prioritizes what to tackle first so you stay on track every month.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
