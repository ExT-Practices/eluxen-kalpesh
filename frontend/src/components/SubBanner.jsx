import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SubBanner({ title, description, breadcrumbs }) {
    return (
        <section className="relative w-full min-h-[450px] flex items-center justify-center text-center overflow-hidden">
            {}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: `url('https://html.designingmedia.com/eluxen/assets/images/sub-banner-img.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {}
            <div className="relative z-10 max-w-4xl px-4 mt-20">
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                    {title}
                </h1>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                    {description}
                </p>

                {}
                <nav className="inline-flex items-center backdrop-blur-md bg-white/10 px-6 py-3 rounded-2xl border border-white/20">
                    <ol className="flex items-center gap-2 text-white">
                        <li>
                            <Link to="/" className="text-[#FFCD29] hover:text-white transition-colors font-semibold">
                                Home
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-white/50">-</span>
                            <span className="font-semibold">{title}</span>
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    );
}
