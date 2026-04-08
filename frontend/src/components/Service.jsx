import React, { useEffect, useState } from 'react';

export default function ServicesSection() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error('Error fetching services:', err));
    }, []);
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* HEADER SECTION */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="lg:w-1/2">
                        <span className="text-[#ffcc4d] font-semibold tracking-wider uppercase text-sm mb-4 block">
                            Best Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Our Best Car <br /> Detailing Services.
                        </h2>
                    </div>

                    <div className="lg:w-1/2 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            Explore our complete range of detailing solutions, designed to restore,
                            protect, and enhance your vehicle’s finish. Experience unmatched quality,
                            care, and attention in every detail.
                        </p>
                        <a
                            href="/pricing"
                            className="group flex items-center gap-4 bg-[#ffcc4d] text-black pl-6 pr-2 py-2 rounded-xl font-bold hover:bg-[#ffd670] transition-all self-start md:self-auto shrink-0"
                        >
                            View all
                            <span className="bg-black p-2 rounded-lg">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H8M17 7V16" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient (Matches the blue-ish tint in your screenshot) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Service Number */}
                            <span className="absolute top-6 left-6 text-2xl font-bold text-white/50">
                                {service.id}
                            </span>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between">
                                <div>
                                    <h5 className="text-xl font-bold mb-1">{service.title}</h5>
                                    <p className="text-sm text-gray-300">{service.description}</p>
                                </div>

                                {/* Small Arrow Button */}
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl group-hover:bg-[#ffcc4d] group-hover:text-black transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H8M17 7V16" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}