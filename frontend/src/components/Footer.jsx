import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="inline-block">
                            <img
                                src="https://html.designingmedia.com/eluxen/assets/images/footer-logo.png"
                                alt="Eluxen Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                            We specialize in premium detailing services
                            for drivers who demand perfection. Your car
                            deserves more than clean...
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    icon: (
                                        <svg size={18} fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    ),
                                    href: "https://facebook.com"
                                },
                                {
                                    icon: (
                                        <svg size={18} fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    ),
                                    href: "https://instagram.com"
                                },
                                {
                                    icon: (
                                        <svg size={18} fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    ),
                                    href: "https://linkedin.com"
                                }
                            ].map(({ icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#ffcc4d] hover:text-black transition-all duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Navigation
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ffcc4d] rounded-full"></span>
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {['About', 'Services', 'Faq', 'Pricing', 'Testimonials', 'Contact'].map((link) => (
                                <li key={link} className="group">
                                    <Link
                                        to={`/${link.toLowerCase()}`}
                                        className="flex items-center gap-3 text-gray-400 group-hover:text-[#ffcc4d] transition-colors"
                                    >
                                        <ArrowRight size={14} className="text-[#ffcc4d] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ffcc4d] rounded-full"></span>
                        </h4>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#ffcc4d] group-hover:bg-[#ffcc4d] group-hover:text-black transition-all duration-300 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <a href="tel:+61383766284" className="text-gray-400 hover:text-white transition-colors mt-2">
                                    +61 3 8376 6284
                                </a>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#ffcc4d] group-hover:bg-[#ffcc4d] group-hover:text-black transition-all duration-300 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:info@eluxen.com" className="text-gray-400 hover:text-white transition-colors mt-2 text-sm break-all">
                                    info@eluxen.com
                                </a>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#ffcc4d] group-hover:bg-[#ffcc4d] group-hover:text-black transition-all duration-300 shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=551+Swanston+Street+Melbourne+Victoria+3053+Australia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors mt-1 text-sm leading-relaxed"
                                >
                                    551 Swanston Street, Melbourne Victoria 3053 Australia
                                </a>
                            </li>
                        </ul>
                    </div>

                    {}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Newsletter Signup
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ffcc4d] rounded-full"></span>
                        </h4>
                        <div className="flex flex-col gap-6">
                            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="w-full bg-[#121212] border border-white/5 rounded-xl px-6 py-4 focus:outline-none focus:border-[#ffcc4d]/50 transition-all text-sm pr-14"
                                />
                                <button className="absolute right-2 top-2 bottom-2 w-10 bg-[#ffcc4d] text-black rounded-lg flex items-center justify-center hover:bg-[#ffd670] transition-colors">
                                    <svg size={18} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative mt-1">
                                    <input type="checkbox" id="footer-term" className="peer sr-only" />
                                    <div className="w-5 h-5 border-2 border-white/10 rounded-md peer-checked:bg-[#ffcc4d] peer-checked:border-[#ffcc4d] transition-all"></div>
                                    <svg className="absolute top-1 left-1 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                    I agree to the <Link to="/privacy-policy" className="text-gray-300 hover:text-[#ffcc4d] underline underline-offset-4">Privacy Policy</Link>
                                </span>
                            </label>
                        </div>
                    </div>

                </div>

                {}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>Copyright © 2025 Eluxen. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/terms" className="hover:text-[#ffcc4d] transition-colors">Terms of Use</Link>
                        <Link to="/privacy-policy" className="hover:text-[#ffcc4d] transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
