import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20 px-6">
            <div 
                className="max-w-7xl mx-auto relative h-[500px] rounded-[50px] overflow-hidden flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://html.designingmedia.com/eluxen/assets/images/cta-bg.jpg")',
                }}
            >
                <div className="relative z-10 px-4">
                    <span className="text-[#ffcc4d] font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Premium Care
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 max-w-4xl mx-auto leading-tight">
                        Elevate Your Drive with Our Premium Detailing
                    </h2>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-[#0066FF] text-white pl-8 pr-2 py-2 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
                    >
                        Get a free quote
                        <span className="bg-white/20 p-2 rounded-xl">
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
