import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export function Footer() {
    return (
        <footer className="relative isolate overflow-hidden bg-[color:var(--background)] text-foreground py-16 sm:py-20 lg:py-24 rounded-t-4xl border-t-2 border-foreground">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-foreground/5 transition-colors duration-500" />
            <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute right-[-6rem] bottom-[-4rem] h-80 w-80 rounded-full bg-foreground/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground/70">
                            Stay in the loop
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                            Subscribe for product updates and finance tips
                        </h2>
                        <p className="text-foreground/80 max-w-2xl">
                            Get concise updates on new releases, smarter budgeting features, and curated advice to keep your money on track.
                        </p>
                        <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                autoComplete="email"
                                className="min-w-0 flex-1 rounded-full border border-foreground/20 bg-[color:var(--background)]/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/50 shadow-[0_0_0_1px_rgba(230,228,159,0.06)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/60 transition-colors duration-500"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-full bg-[#E06D06] px-6 py-3 text-sm font-semibold text-[#25291C] shadow-[0_15px_40px_rgba(224,109,6,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(224,109,6,0.45)] cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-[color:var(--background)]/60 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-500">
                            <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <CalendarDaysIcon aria-hidden="true" className="size-5" />
                            </div>
                            <dt className="text-lg font-semibold">Weekly digest</dt>
                            <dd className="text-sm leading-relaxed text-foreground/80">
                                Short, actionable emails with feature drops and spending insights to keep you ahead.
                            </dd>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-[color:var(--background)]/60 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-500">
                            <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <HandRaisedIcon aria-hidden="true" className="size-5" />
                            </div>
                            <dt className="text-lg font-semibold">No spam promise</dt>
                            <dd className="text-sm leading-relaxed text-foreground/80">
                                We only send essentials. Unsubscribe anytime with one click—no clutter, ever.
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-foreground/10 pt-6 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between transition-colors duration-500">
                    <span>© {new Date().getFullYear()} Pudget. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms</a>
                        <a className="hover:text-primary transition-colors" href="#">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
