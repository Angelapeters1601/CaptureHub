import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    }

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    }

    return (
        <motion.section
            className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden bg-stone-800"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Background Image */}
            <motion.div
                className="absolute h-[80%] w-[80%] max-w-4xl"
                variants={imageVariants}
            >
                <img
                    src="/img1.jpg"
                    alt="Professional Camera Equipment"
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl"
                    loading="eager"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <motion.div
                    className="w-full text-center lg:w-1/2 lg:text-left"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                        variants={itemVariants}
                    >
                        Pro Camera Gear
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-stone-200 md:text-lg"
                        variants={itemVariants}
                    >
                        Premium equipment for photographers who demand
                        excellence
                    </motion.p>
                    <motion.button
                        className="mt-6 rounded-md bg-amber-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-amber-500 sm:text-base"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Shop Now
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative Line */}
            <motion.div
                className="absolute top-0 left-1/2 hidden h-full w-px bg-white/20 lg:block"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { delay: 0.6 },
                    },
                }}
            />
        </motion.section>
    )
}
