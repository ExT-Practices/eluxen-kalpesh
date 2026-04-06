// components/Header.jsx

export default function Header() {
    return (
        <header className="bg-[#262626] border-b border-white/5 py-3 relative z-[60]">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Left - Logo */}
                <div className="flex items-center gap-1">
                    <span className="text-[#82b440] text-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.28 3c-1.72 0-3.12 1.39-3.12 3.1 0 .15.01.29.04.43-2.58.56-4.52 2.85-4.52 5.58 0 3.14 2.55 5.7 5.7 5.7s5.7-2.56 5.7-5.7c0-2.73-1.94-5.02-4.52-5.58.03-.14.04-.28.04-.43 0-1.71-1.39-3.1-3.12-3.1z"/>
                        </svg>
                    </span>
                    <span className="text-white text-lg font-bold tracking-tight">envato<span className="font-normal text-white/70">market</span></span>
                </div>

                {/* Right - Actions */}
                <div>
                    <a
                        href="#"
                        className="bg-[#82b440] hover:bg-[#72a332] text-white px-4 py-1.5 rounded text-sm font-semibold transition-all duration-300 shadow-lg shadow-green-900/20"
                    >
                        Buy now
                    </a>
                </div>

            </div>
        </header>
    );
}