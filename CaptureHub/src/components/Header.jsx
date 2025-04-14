import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const menuVariants = {
        hidden: { x: '100%' },
        visible: {
            x: 0,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
        exit: { x: '100%' },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <header className="border-b border-neutral-800 bg-neutral-900">
            <div className="container mx-auto px-4 py-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="rounded-full border border-neutral-700/50 bg-neutral-800 p-1.5">
                            <motion.img
                                src="/logo.png"
                                alt="Logo"
                                className="h-8 w-8"
                                whileHover={{ rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        </div>
                        <h1 className="font-mono text-xl font-semibold text-neutral-100 uppercase">
                            CaptureHub
                        </h1>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        {['Products', 'Solutions', 'Pricing', 'Contact'].map(
                            (item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href="#"
                                        className="font-mono font-medium text-neutral-400 hover:text-amber-400"
                                    >
                                        <motion.span className="block">
                                            {item}
                                        </motion.span>
                                        <motion.div
                                            className="h-px bg-amber-400"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </a>
                                </motion.div>
                            )
                        )}
                        <motion.button
                            className="ml-6 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 font-medium text-neutral-900"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            Get Started
                        </motion.button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="text-neutral-400 hover:text-amber-400 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
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
                    </motion.button>
                </div>

                {/* Mobile Menu (Right Side) */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                className="fixed inset-0 z-40 bg-black/50"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={overlayVariants}
                                onClick={() => setMobileMenuOpen(false)}
                            />

                            {/* Side Panel */}
                            <motion.div
                                className="fixed top-0 right-0 z-50 h-full w-64 border-l border-neutral-800 bg-neutral-900"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={menuVariants}
                            >
                                <div className="flex h-full flex-col p-6">
                                    {/* Close Button */}
                                    <div className="flex justify-end">
                                        <motion.button
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="mb-8 text-neutral-400 hover:text-amber-400"
                                        >
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </motion.button>
                                    </div>

                                    {/* Menu Items */}
                                    <motion.div className="space-y-6">
                                        {[
                                            'Products',
                                            'Solutions',
                                            'Pricing',
                                            'Contact',
                                        ].map((item) => (
                                            <motion.a
                                                key={item}
                                                href="#"
                                                className="block font-mono text-xl text-neutral-300 hover:text-amber-400"
                                                variants={itemVariants}
                                                whileHover={{ x: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                            >
                                                {item}
                                            </motion.a>
                                        ))}
                                    </motion.div>

                                    {/* CTA Button */}
                                    <motion.div
                                        className="mt-auto"
                                        variants={itemVariants}
                                    >
                                        <motion.button
                                            className="w-full rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-medium text-neutral-900"
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow:
                                                    '0 4px 12px rgba(245, 158, 11, 0.3)',
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Get Started
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
