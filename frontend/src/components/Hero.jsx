export default function Hero() {
    return (
        <section className="relative w-full h-[700px] flex items-center">

            {/* Background Image */}
            <img
                src="https://html.designingmedia.com/eluxen/assets/images/banner-img.jpg"
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 items-center pt-28">

                {/* LEFT CONTENT */}
                <div className="text-white">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        High-Quality <br />
                        Car Detailing.
                    </h1>

                    <p className="mt-4 text-gray-300 max-w-lg">
                        Premium inside & out auto detailing services with a 100% satisfaction guarantee.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-4">

                        <a
                            href="/contact"
                            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Book now →
                        </a>

                        <a
                            href="/about"
                            className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                        >
                            Read more →
                        </a>

                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="hidden lg:block">
                    <div className="bg-blue-600 p-8 rounded-2xl text-white max-w-sm ml-auto">

                        {/* Users */}
                        <div className="flex -space-x-3 mb-4">
                            <img src="https://html.designingmedia.com/eluxen/assets/images/user2.png" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://html.designingmedia.com/eluxen/assets/images/user2.png" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://html.designingmedia.com/eluxen/assets/images/user2.png" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://html.designingmedia.com/eluxen/assets/images/user2.png" className="w-10 h-10 rounded-full border-2 border-white" />
                        </div>

                        {/* Counter */}
                        <div className="flex items-end gap-1">
                            <span className="text-4xl font-bold">4</span>
                            <span className="text-4xl font-bold">k</span>
                            <sup className="text-lg">+</sup>
                        </div>

                        <p className="mt-2 text-gray-200">
                            Happy Satisfied Clients.
                        </p>

                        {/* Bottom Section */}
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm">
                                Easily make an appointment <br />
                                with us for car detailing.
                            </p>

                            <a
                                href="/contact"
                                className="bg-white text-black p-3 rounded-full"
                            >
                                →
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}