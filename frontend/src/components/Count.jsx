import { useEffect, useRef } from 'react';

const StatCounter = ({ end, suffix, label }) => {
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    const count = countRef.current;
                    const target = parseInt(end);
                    const duration = 2000; // ms
                    let startTime = null;

                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const value = Math.min(Math.floor((progress / duration) * target), target);
                        if (count) {
                            count.textContent = value;
                        }
                        if (progress < duration) {
                            requestAnimationFrame(step);
                        }
                    };
                    requestAnimationFrame(step);
                    hasAnimated.current = true;
                    observer.unobserve(count);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, suffix]);

    return (
        <div className="text-center px-4 py-8 md:py-0 border-b md:border-b-0 md:border-r border-white/10 last:border-0 grow basis-0">
            <div className="flex items-baseline justify-center gap-1 mb-2">
                <span ref={countRef} className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                    0
                </span>
                <sup className="text-2xl md:text-3xl font-bold text-[#FFCD29]">{suffix}</sup>
            </div>
            <span className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-widest">{label}</span>
        </div>
    );
};

const Count = () => {
    return (
        <section className="w-full relative py-20">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col md:flex-row items-stretch justify-around gap-8 md:gap-4">
                        <StatCounter end="350" suffix="+" label="Hours of Works" />
                        <StatCounter end="80" suffix="+" label="Happy Customers" />
                        <StatCounter end="50" suffix="+" label="Experienced Workers" />
                        <StatCounter end="30" suffix="+" label="Years of Experience" />
                        <StatCounter end="100" suffix="%" label="Satisfaction Rate" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Count;