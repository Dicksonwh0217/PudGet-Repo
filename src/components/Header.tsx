import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import PudGetLogo from '../assets/PudGetLogo.png'
import PudGetIcon from '@/assets/PudGetIcon.webp'
import './Header.css'
import { Button } from './animate-ui/components/buttons/button'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className='absolute left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-full border border-[#E6E49F]/30 bg-background backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.35)]'>
            <nav aria-label='Global' className='mx-auto flex items-center justify-between px-4 py-3 lg:px-8'>
                <div className='flex lg:flex-1'>
                    <NavLink to=''>
                        <span className='sr-only'>PudGet Logo</span>
                        <img src={PudGetIcon} alt="Website_Logo" className='h-8 w-auto' />
                    </NavLink>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                    >
                        <span className='sr-only'>Open Main Menu</span>
                        <Bars3Icon aria-hidden="true" className='size-6' />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <NavLink to="/" className="text-sm/6 font-semibold text-foreground header-link">
                        Home
                    </NavLink>

                    <NavLink to="/features" className="text-sm/6 font-semibold text-foreground header-link">
                        Features
                    </NavLink>
                    <NavLink to="/company" className="text-sm/6 font-semibold text-foreground header-link">
                        Company
                    </NavLink>
                    <NavLink to="/about" className="text-sm/6 font-semibold text-foreground header-link">
                        About
                    </NavLink>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink to="/auth" className="text-sm/6 font-bold text-foreground">
                        <Button className='cursor-pointer'>
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Button>
                    </NavLink>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background text-[#E3E7D3] p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <NavLink to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src={PudGetLogo}
                                className="h-8 w-auto"
                            />
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-200"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                <NavLink
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 header-link"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/features"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 header-link"
                                >
                                    Features
                                </NavLink>
                                <NavLink
                                    to="/company"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 header-link"
                                >
                                    Company
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 header-link"
                                >
                                    About
                                </NavLink>
                            </div>
                            <div className="py-6">
                                <NavLink
                                    to="/auth"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                                >
                                    Log in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
