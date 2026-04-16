import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20 px-6 animate-fade-up">
            <div
                className="max-w-7xl mx-auto relative min-h-[400px] lg:h-[500px] rounded-[40px] md:rounded-[50px] overflow-hidden flex items-center justify-center text-center bg-cover bg-center shadow-2xl"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://picsum.photos/1200/500")',
                }}
            >
                <div className="relative z-10 px-6 py-12">
                    <span className="text-[#ffcc4d] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
                        Premium Care
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 max-w-4xl mx-auto leading-[1.2]">
                        Elevate Your Drive with <br className="hidden md:block"/> Our Premium Detailing
                    </h2>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-[#0066FF] text-white pl-8 pr-2 py-2 rounded-2xl font-bold hover:bg-white hover:text-[#0066FF] transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                    >
                        <span className="uppercase tracking-wider text-sm">Get a free quote</span>
                        <span className="bg-black/20 p-3 rounded-xl">
                            <ArrowRight className="w-5 h-5 text-current" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}   