import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full relative py-20 bg-black animate-fade-up">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center">
                {}
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
                    <figure className="relative group">
                        <div className="absolute -inset-4 bg-blue-600/20 rounded-[40px] blur-2xl group-hover:bg-blue-600/30 transition-all duration-700"></div>
                        <img 
                            src="https://html.designingmedia.com/eluxen/assets/images/main-about-us-img.jpg" 
                            alt="Car Detailing" 
                            className="relative w-full h-auto rounded-[30px] shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </figure>
                </div>
                
                {}
                <div className="w-full lg:w-1/2">
                    <div className="about-content-con">
                        <div className="heading-title-con mb-0">
                            <span className="text-[#FFCD29] uppercase font-bold tracking-[0.2em] text-sm mb-4 inline-block">
                                About Us
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] text-center lg:text-left">
                                Committed to Clarity, <br />
                                Driven by Detail
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                                At the heart of our car detailing service is a dedication to
                                precision and perfection. We don’t just clean cars — we restore clarity,
                                enhance shine, and bring out the true beauty of every vehicle. From meticulous interior
                                care to flawless exterior finishes, our team is driven by a passion for detail
                                that ensures your car looks its absolute best, every time.
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-start gap-4 text-white group">
                                    <div className="mt-1 bg-white/10 p-1 rounded-full group-hover:bg-[#FFCD29]/20 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-[#FFCD29]" />
                                    </div>
                                    <span className="text-lg text-gray-200">Restores shine & clarity with meticulous interior and exterior detailing.</span>
                                </li>
                                <li className="flex items-start gap-4 text-white group">
                                    <div className="mt-1 bg-white/10 p-1 rounded-full group-hover:bg-[#FFCD29]/20 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-[#FFCD29]" />
                                    </div>
                                    <span className="text-lg text-gray-200">Delivers consistent, quality results through a detail-driven approach.</span>
                                </li>
                            </ul>
                            <div className="flex justify-center lg:justify-start">
                                <a href="/pricing" className="inline-flex items-center gap-6 bg-[#FFCD29] text-black pl-10 pr-3 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all group scale-100 hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/10">
                                    Read more
                                    <div className="bg-black p-3 rounded-full group-hover:rotate-45 transition-transform duration-300">
                                        <img src="https://html.designingmedia.com/eluxen/assets/images/up-right-arrow.png" alt="arrow" className="w-4 h-4 invert" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
