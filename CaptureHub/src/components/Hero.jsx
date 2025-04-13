export default function Hero() {
    return (
        <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden bg-stone-800">
            <div className="absolute h-[80%] w-[80%] max-w-4xl">
                <img
                    src="/img1.jpg"
                    alt="Professional Camera Equipment"
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl"
                    loading="eager"
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        Pro Camera Gear
                    </h1>
                    <p className="mt-4 text-stone-200 md:text-lg">
                        Premium equipment for photographers who demand
                        excellence
                    </p>
                    <button className="mt-6 rounded-md bg-amber-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-amber-500 sm:text-base">
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="absolute top-0 left-1/2 hidden h-full w-px bg-white/20 lg:block" />
        </section>
    )
}
