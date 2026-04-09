import React from 'react';
import { Calendar, User, Package, Smile } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Book Your Service",
        description: "Choose your detailing package and schedule a time that works best for you—online or by phone.",
        icon: <Calendar className="w-8 h-8 text-white" />,
        bgColor: "bg-[#ffcc4d]"
    },
    {
        id: "02",
        title: "We Arrive or You Visit",
        description: "Depending on your preference, bring your vehicle to us or let our mobile team come to your location.",
        icon: <User className="w-8 h-8 text-white" />,
        bgColor: "bg-[#0066FF]"
    },
    {
        id: "03",
        title: "We Detail Your Car",
        description: "Our trained professionals get to work —inside and out—using premium products and meticulous techniques.",
        icon: <Package className="w-8 h-8 text-white" />,
        bgColor: "bg-[#ffcc4d]"
    },
    {
        id: "04",
        title: "Enjoy the Results",
        description: "Drive away with a spotless, so your protected vehicle that looks and feels like new.",
        icon: <Smile className="w-8 h-8 text-white" />,
        bgColor: "bg-[#0066FF]"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
            {/* Blue Glow/Vignette Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-900/20 blur-[120px] rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-900/20 blur-[120px] rounded-full translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#ffcc4d] font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
                        How It Works – Simple, <br /> Transparent, Hassle-Free
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Dashed Connection Line (Visible on LG screens) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] border-t-2 border-dashed border-white/20 -z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative z-10">
                            <div className={`${step.bgColor} w-[120px] h-[120px] rounded-full flex items-center justify-center mb-8 relative border-8 border-black shadow-lg`}>
                                {step.icon}
                                <span className="absolute -bottom-2 -right-2 bg-white text-black text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center border-4 border-black">
                                    {step.id}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
