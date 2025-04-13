import { useState } from 'react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="border-b border-neutral-800 bg-neutral-900">
            <div className="container mx-auto px-4 py-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="rounded-full border border-neutral-700/50 bg-neutral-800 p-1.5">
                            <img
                                src="/logo.png"
                                alt="CaptureHub Logo"
                                className="h-8 w-8"
                                // contrast-125 grayscale-[85%] filter"
                            />
                        </div>
                        <h1 className="font-mono text-xl font-semibold tracking-wider text-neutral-100 uppercase">
                            CaptureHub
                        </h1>
                    </div>

                    {/* Desktop Navigation (hidden on mobile) */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        <ul className="flex space-x-8">
                            {[
                                'Products',
                                'Solutions',
                                'Pricing',
                                'Contact',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="absolute relative font-mono font-medium text-neutral-400 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 after:content-[''] hover:text-amber-400 hover:after:w-full"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop CTA Button */}
                        <button className="ml-6 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 font-medium text-neutral-900 transition-all duration-300 hover:from-amber-400 hover:to-amber-500">
                            Get Started
                        </button>
                    </nav>

                    {/* Mobile Menu Button (visible only on small screens) */}
                    <button
                        className="text-neutral-400 hover:text-amber-400 focus:outline-none md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu (shown when toggled) */}
                {mobileMenuOpen && (
                    <div className="pb-4 md:hidden">
                        <div className="space-y-2 pt-4">
                            {[
                                'Products',
                                'Solutions',
                                'About Us',
                                'Contact',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block rounded-md px-3 py-2 font-mono text-neutral-300 hover:bg-neutral-800 hover:text-amber-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button className="mt-4 w-full rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 font-medium text-neutral-900 transition-all duration-300 hover:from-amber-400 hover:to-amber-500">
                            Get Started
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}
