import { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const ProductShowcase = () => {
    const [mainImage, setMainImage] = useState('/camera1.png')
    const [selectedColor, setSelectedColor] = useState('Black')

    // Sample data
    const thumbnails = [
        '/camera1.png',
        '/camera2.png',
        '/camera3.png',
        '/camera4.png',
    ]

    const colors = ['Black', 'Silver', 'Graphite']
    const reviews = [
        {
            rating: 5,
            name: 'Alex K.',
            comment: 'The image quality is phenomenal. Worth every penny!',
        },
        {
            rating: 4,
            name: 'Sarah M.',
            comment: 'Great camera, but the battery life could be better.',
        },
    ]

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    {/* Image Gallery */}
                    <div className="mb-10 lg:mb-0">
                        {/* Main Image */}
                        <div className="mb-4 flex justify-center rounded-lg bg-gray-50 p-8 shadow-sm">
                            <img
                                src={mainImage}
                                alt="Professional DSLR Camera"
                                className="h-80 w-full object-contain"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-3">
                            {thumbnails.map((thumbnail, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMainImage(thumbnail)}
                                    className={`overflow-hidden rounded-md border-2 transition-all ${
                                        mainImage === thumbnail
                                            ? 'border-amber-500'
                                            : 'border-transparent hover:border-gray-300'
                                    }`}
                                >
                                    <img
                                        src={thumbnail}
                                        alt={`Camera angle ${index + 1}`}
                                        className="h-20 w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="font-mono">
                        {/* Name & Rating */}
                        <h1 className="text-3xl font-bold text-gray-900">
                            Professional DSLR Camera X2000
                        </h1>
                        <div className="mt-3 flex items-center">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={`h-5 w-5 ${
                                            rating <= 4
                                                ? 'text-amber-400'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">
                                (42 reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-4">
                            <span className="text-3xl font-bold text-gray-900">
                                $1,299
                            </span>
                            <span className="ml-2 text-sm text-gray-500">
                                + $99 shipping
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <h2 className="text-sm font-medium text-gray-900">
                                Description
                            </h2>
                            <p className="mt-2 text-gray-600">
                                The X2000 professional DSLR delivers stunning
                                24.2MP resolution with exceptional low-light
                                performance. Featuring 4K/60fps video, 5-axis
                                stabilization, and weather-sealed magnesium
                                alloy construction. Includes dual SD slots
                                (128GB card included), 7fps continuous shooting,
                                and 425-point AF system. The 3.2" tilting
                                touchscreen and 4K output make it ideal for
                                professionals and enthusiasts demanding top-tier
                                image quality and durability.
                            </p>
                        </div>

                        {/* Color Selector */}
                        <div className="mt-6">
                            <h2 className="text-sm font-medium text-gray-900">
                                Color
                            </h2>
                            <div className="mt-2 flex space-x-2">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`rounded-full px-4 py-2 text-sm font-medium ring-1 ring-offset-2 transition-all ${
                                            selectedColor === color
                                                ? 'bg-amber-100 text-amber-800 ring-amber-300'
                                                : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
                                        }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="mt-8">
                            <button className="w-full rounded-md bg-amber-600 px-6 py-3 text-lg font-medium text-white shadow-lg hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none">
                                Add to Cart
                            </button>
                        </div>

                        {/* Reviews Preview */}
                        <div className="mt-10 border-t border-gray-200 pt-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Customer Reviews
                            </h2>
                            <div className="mt-4 space-y-4">
                                {reviews.map((review, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-gray-100 pb-4 last:border-0"
                                    >
                                        <div className="flex items-center">
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map(
                                                    (rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            className={`h-5 w-5 ${
                                                                rating <=
                                                                review.rating
                                                                    ? 'text-amber-400'
                                                                    : 'text-gray-300'
                                                            }`}
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <span className="ml-2 font-medium">
                                                {review.name}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-gray-600">
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                                <button className="text-sm font-medium text-amber-600 hover:text-amber-500">
                                    View all reviews →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase
