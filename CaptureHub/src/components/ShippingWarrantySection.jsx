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

const ShippingWarrantySection = () => {
    return (
        <section className="bg-amber-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 font-mono lg:grid-cols-2">
                    {/* Shipping Information */}
                    <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <div className="flex items-start space-x-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                                <TruckIcon className="h-6 w-6 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    Fast & Reliable Shipping
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">
                                                Free shipping
                                            </span>{' '}
                                            on all orders over $99
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                                            <ClockIcon className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">
                                                Express delivery
                                            </span>{' '}
                                            available (1-2 business days)
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                                            <GlobeAltIcon className="h-4 w-4 text-purple-600" />
                                        </div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">
                                                International shipping
                                            </span>{' '}
                                            to 50+ countries
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-lg bg-gray-50 p-4">
                            <h4 className="text-sm font-medium text-gray-900">
                                Shipping Calculator
                            </h4>
                            <div className="mt-2 flex">
                                <input
                                    type="text"
                                    placeholder="Enter ZIP code"
                                    className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-sm focus:border-amber-500 focus:ring-amber-500"
                                />
                                <button className="rounded-r-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none">
                                    Calculate
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Warranty Information */}
                    <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <div className="flex items-start space-x-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    Worry-Free Warranty
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                                            <ShieldCheckIcon className="h-4 w-4 text-amber-600" />
                                        </div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">
                                                3-year warranty
                                            </span>{' '}
                                            on all camera bodies
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                                            <ArrowPathIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">
                                                30-day returns
                                            </span>{' '}
                                            for any reason
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                                            <LifebuoyIcon className="h-4 w-4 text-red-600" />
                                        </div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">
                                                24/7 support
                                            </span>{' '}
                                            from our photography experts
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center space-x-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-600" />
                                </div>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">
                                        Need help?
                                    </span>{' '}
                                    <a
                                        href="#"
                                        className="text-amber-600 hover:text-amber-700 hover:underline"
                                    >
                                        Chat with our support team
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShippingWarrantySection
