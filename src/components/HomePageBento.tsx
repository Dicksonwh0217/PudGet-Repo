import { motion } from "motion/react"

export function HomePageBento() {
  return (
    <div className="bg-[color:var(--background)] py-24 sm:py-32 transition-colors duration-500">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: { duration: 5 },
          }}
          viewport={{
            once: true
          }}
        >
          <h2 className="text-center text-base/7 font-semibold text-[#e47a1e]">Quick & Simple</h2>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -100
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
          viewport={{
            once: true
          }}
        >
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold text-balance leading-tight text-foreground sm:text-5xl">
            Everything you need, Just in one App
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
          viewport={{
            once: true
          }}
        >
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2 transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-px rounded-lg bg-[(--background)]/80 lg:rounded-l-4xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-500" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] border border-white/5">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">User Friendly</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center transition-colors duration-500">
                    Don't know how to start? Just record one transaction and you are in the track of success!
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-white/10 bg-[color:var(--background)]/60 outline outline-white/15 transition-colors duration-500">
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl transition-colors duration-500" />
            </div>
            <div className="relative max-lg:row-start-1 transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-px rounded-lg bg-[#DB6906] max-lg:rounded-t-4xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-500" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] border border-white/5">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Goal-Driven</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center transition-colors duration-500">
                    AI consultant will give you get the right advice until your goals are met.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl transition-colors duration-500" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-px rounded-lg bg-[(--background)]/80  shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-500" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border border-white/5">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">Financial Indicator</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center transition-colors duration-500">
                    Three types of financial indicator show the healthiness of your financial condition.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 transition-colors duration-500" />
            </div>
            <div className="relative lg:row-span-2 transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-px rounded-lg bg-background/80  max-lg:rounded-b-4xl lg:rounded-r-4xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-500" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] border border-white/5">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">Analysis and Adjustment</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center transition-colors duration-500">
                    As a responsible personal consulant, our AI will track transaction and advice to improve in every aspects
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-[color:var(--background)]/60 outline outline-white/10 transition-colors duration-500">
                    <div className="flex bg-[color:var(--background)]/70 outline outline-white/5">
                    </div>
                    <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl transition-colors duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
