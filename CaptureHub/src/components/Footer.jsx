function Footer() {
    return (
        <footer className="bg-black px-6 py-12 font-serif text-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-3">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight text-amber-500 transition-colors duration-300 hover:text-amber-400">
                            CaptureHub
                        </h2>
                        <p className="leading-relaxed text-gray-400">
                            Your premier destination for professional
                            photography equipment and expert advice.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-400 transition-colors duration-300 hover:text-white">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span>+1 (555) 123-4567</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="border-b border-gray-700 pb-2 text-lg font-semibold text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                'Products',
                                'About Us',
                                'Contact',
                                'Support',
                                'Blog',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="relative text-gray-400 transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:h-px before:w-0 before:bg-amber-400 before:transition-all before:duration-300 hover:text-amber-400 hover:before:w-full"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="border-b border-gray-700 pb-2 text-lg font-semibold text-white">
                                Follow Us
                            </h3>
                            <div className="mt-4 flex space-x-4">
                                {[
                                    {
                                        name: 'Facebook',
                                        icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                                    },
                                    {
                                        name: 'Instagram',
                                        icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
                                    },
                                    {
                                        name: 'Twitter',
                                        icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                                    },
                                    {
                                        name: 'YouTube',
                                        icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                                    },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-amber-400"
                                        aria-label={social.name}
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="border-b border-gray-700 pb-2 text-lg font-semibold text-white">
                                Newsletter
                            </h3>
                            <form className="mt-4 flex transition-all duration-300 hover:shadow-lg">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 rounded-l-md border border-gray-700 bg-gray-800 px-4 py-2 text-white transition-all duration-300 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="rounded-r-md bg-amber-600 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        <span>
                            &copy; {new Date().getFullYear()} CaptureHub. All
                            rights reserved.
                        </span>
                        <a
                            href="#"
                            className="text-gray-400 transition-all duration-300 hover:text-amber-400 hover:underline"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 transition-all duration-300 hover:text-amber-400 hover:underline"
                        >
                            Terms of Service
                        </a>
                    </div>
                    <p className="mt-3 text-gray-500 transition-all duration-300 hover:text-gray-400">
                        Designed and built with passion for photography
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
