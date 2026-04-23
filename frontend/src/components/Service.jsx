import React, { useEffect, useState } from 'react';

export default function ServicesSection({ limit }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/api/services')
            .then(res => res.json())
            .then(data => {
                if (limit) {
                    setServices(data.slice(0, limit));
                } else {
                    setServices(data);
                }
            })
            .catch(err => console.error('Error fetching services:', err));
    }, []);
    return (
        <section className="bg-black text-white py-20 px-6 animate-fade-up">
            <div className="max-w-7xl mx-auto">

                {}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="text-[#ffcc4d] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
                            Best Services
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
                            Our Best Car <br className="hidden md:block" /> Detailing Services.
                        </h2>
                    </div>

                    <div className="lg:w-1/2 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base text-center lg:text-left mx-auto lg:mx-0">
                            Explore our complete range of detailing solutions, designed to restore,
                            protect, and enhance your vehicle’s finish. Experience unmatched quality.
                        </p>
                        <a
                            href="/services"
                            className="group flex items-center gap-4 bg-[#ffcc4d] text-black pl-8 pr-2 py-2 rounded-2xl font-bold hover:bg-[#ffd670] transition-all self-center lg:self-auto shrink-0 shadow-lg shadow-yellow-400/10"
                        >
                            <span className="uppercase tracking-wider text-sm">View all</span>
                            <span className="bg-black p-3 rounded-xl transition-transform group-hover:rotate-45">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H8M17 7V16" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                {}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service._id}
                            className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
                        >
                            {}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {}
                            <span className="absolute top-6 left-6 text-2xl font-bold text-white/50">
                                {service.id}
                            </span>

                            {}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between">
                                <div>
                                    <h5 className="text-xl font-bold mb-1">{service.title}</h5>
                                    <p className="text-sm text-gray-300">{service.description}</p>
                                </div>

                                {}
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