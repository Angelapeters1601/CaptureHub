import React from 'react'
import {
    TruckIcon,
    ShieldCheckIcon,
    ArrowPathIcon,
    CheckIcon,
    GlobeAltIcon,
    LifebuoyIcon,
    ChatBubbleLeftRightIcon,
    ClockIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.4 },
    }),
}

const ShippingWarrantySection = () => {
    return (
        <section className="bg-amber-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 font-mono lg:grid-cols-2">
                    {/* Shipping Info */}
                    <motion.div
                        className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex items-start space-x-4">
                            <motion.div
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100"
                                whileHover={{ scale: 1.1 }}
                            >
                                <TruckIcon className="h-6 w-6 text-amber-600" />
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    Fast & Reliable Shipping
                                </h3>
                                <div className="mt-4 space-y-4">
                                    {[
                                        {
                                            Icon: CheckIcon,
                                            bg: 'bg-green-100',
                                            color: 'text-green-600',
                                            text: (
                                                <>
                                                    <span className="font-medium">
                                                        Free shipping
                                                    </span>{' '}
                                                    on all orders over $99
                                                </>
                                            ),
                                        },
                                        {
                                            Icon: ClockIcon,
                                            bg: 'bg-blue-100',
                                            color: 'text-blue-600',
                                            text: (
                                                <>
                                                    <span className="font-medium">
                                                        Express delivery
                                                    </span>{' '}
                                                    available (1-2 business
                                                    days)
                                                </>
                                            ),
                                        },
                                        {
                                            Icon: GlobeAltIcon,
                                            bg: 'bg-purple-100',
                                            color: 'text-purple-600',
                                            text: (
                                                <>
                                                    <span className="font-medium">
                                                        International shipping
                                                    </span>{' '}
                                                    to 50+ countries
                                                </>
                                            ),
                                        },
                                    ].map(({ Icon, bg, color, text }, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start space-x-3"
                                            variants={itemVariants}
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <motion.div
                                                className={`flex h-6 w-6 items-center justify-center rounded-full ${bg}`}
                                                whileHover={{ scale: 1.15 }}
                                            >
                                                <Icon
                                                    className={`h-4 w-4 ${color}`}
                                                />
                                            </motion.div>
                                            <p className="text-gray-600">
                                                {text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="mt-8 rounded-lg bg-gray-50 p-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-sm font-medium text-gray-900">
                                Shipping Calculator
                            </h4>
                            <div className="mt-2 flex">
                                <input
                                    type="text"
                                    placeholder="Enter ZIP code"
                                    className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-sm focus:border-amber-500 focus:ring-amber-500"
                                />
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-r-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
                                >
                                    Calculate
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Warranty Info */}
                    <motion.div
                        className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex items-start space-x-4">
                            <motion.div
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100"
                                whileHover={{ scale: 1.1 }}
                            >
                                <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    Worry-Free Warranty
                                </h3>
                                <div className="mt-4 space-y-4">
                                    {[
                                        {
                                            Icon: ShieldCheckIcon,
                                            bg: 'bg-amber-100',
                                            color: 'text-amber-600',
                                            text: (
                                                <>
                                                    <span className="font-medium">
                                                        3-year warranty
                                                    </span>{' '}
                                                    on all camera bodies
                                                </>
                                            ),
                                        },
                                        {
                                            Icon: ArrowPathIcon,
                                            bg: 'bg-green-100',
                                            color: 'text-green-600',
                                            text: (
                                                <>
                                                    <span className="font-medium">
                                                        30-day returns
                                                    </span>{' '}
                                                    for any reason
                                                </>
                                            ),
                                        },
                                        {
                                            Icon: LifebuoyIcon,
                                            bg: 'bg-red-100',
                                            color: 'text-red-600',
                                            text: (
                                                <>
                                                    <span className="font-medium">
                                                        24/7 support
                                                    </span>{' '}
                                                    from our photography experts
                                                </>
                                            ),
                                        },
                                    ].map(({ Icon, bg, color, text }, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start space-x-3"
                                            variants={itemVariants}
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <motion.div
                                                className={`flex h-6 w-6 items-center justify-center rounded-full ${bg}`}
                                                whileHover={{ scale: 1.15 }}
                                            >
                                                <Icon
                                                    className={`h-4 w-4 ${color}`}
                                                />
                                            </motion.div>
                                            <p className="text-gray-600">
                                                {text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="mt-8 flex items-center space-x-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                                <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-600" />
                            </div>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Need help?</span>{' '}
                                <a
                                    href="#"
                                    className="text-amber-600 hover:text-amber-700 hover:underline"
                                >
                                    Chat with our support team
                                </a>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ShippingWarrantySection
