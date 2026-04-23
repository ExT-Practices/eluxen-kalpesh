import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import React from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
    const [blogOpen, setBlogOpen] = useState(false);
    
    
    const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
    const [mobileBlogOpen, setMobileBlogOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 mt-6">

                {}
                <div className="flex items-center justify-between">

                    {}
                    <div className="flex-shrink-0">
                        <img
                            src="https://html.designingmedia.com/eluxen/assets/images/logo.png"
                            className="h-12 w-auto"
                            alt="ELUXEN Car Detailing"
                        />
                    </div>

                    {}
                    <nav className="hidden lg:flex items-center gap-6 text-white font-medium backdrop-blur-md bg-black/40 rounded-2xl px-8 py-3 border border-white/10">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-[#3b66f5]' : 'hover:text-blue-400'}`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-[#3b66f5]' : 'hover:text-blue-400'}`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-[#3b66f5]' : 'hover:text-blue-400'}`
                            }
                        >
                            Services
                        </NavLink>

                        {}
                        <div className="relative group px-2">
                            <button
                                onClick={() => setPagesOpen(!pagesOpen)}
                                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                            >
                                Pages <span className="text-[10px]">▼</span>
                            </button>
                            {pagesOpen && (
                                <div className="absolute top-full left-0 mt-4 w-48 bg-white text-black rounded-lg shadow-xl overflow-hidden flex flex-col py-2">
                                    {}
                                    <Link to="/about" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">About</Link>
                                    <Link to="/contact" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Contact</Link>
                                    <Link to="/services" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Services</Link>
                                    <Link to="/faq" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Faq's</Link>
                                    <Link to="/pricing" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Pricing</Link>
                                    <Link to="/team" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Team</Link>
                                    <Link to="/404" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">404</Link>
                                    <Link to="/coming-soon" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Coming Soon</Link>
                                    <Link to="/testimonials" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Testimonial</Link>
                                    <Link to="/privacy-policy" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Privacy Policy</Link>
                                    <Link to="/cookie-policy" className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600">Cookie Policy</Link>
                                </div>
                            )}
                        </div>

                        <a href="/pricing" className="hover:text-blue-400 transition-colors px-2">
                            Pricing
                        </a>

                        {}
                        <div className="relative px-2">
                            <button
                                onClick={() => setBlogOpen(!blogOpen)}
                                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                            >
                                Blog <span className="text-[10px]">▼</span>
                            </button>
                            {blogOpen && (
                                <div className="absolute top-full left-0 mt-4 w-40 bg-white text-black rounded-lg shadow-xl overflow-hidden py-2">
                                    <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setBlogOpen(false)}>Blog List</Link>
                                    <Link to="/blog-load-more" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setBlogOpen(false)}>Load More</Link>
                                    <Link to="/blog/latest" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setBlogOpen(false)}>Single Blog</Link>
                                </div>
                            )}

                        </div>
                    </nav>

                    {}
                    <div className="hidden lg:flex items-center gap-5">
                        <Link
                            to="/contact"
                            className="group flex items-center gap-4 bg-[#ffcc4d] text-black pl-6 pr-2 py-2 rounded-xl font-bold hover:bg-[#ffd670] transition-all"
                        >
                            Contact us
                            <span className="bg-black p-2 rounded-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                                </svg>
                            </span>
                        </Link>

                        {}
                        <div className="flex items-center gap-3 text-white pl-2">
                            <div className="text-[#ffcc4d]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2H8C4.68629 2 2 4.68629 2 8V14C2 17.3137 4.68629 20 8 20H9L12 22L15 20H16C19.3137 20 22 17.3137 22 14V8C22 4.68629 19.3137 2 16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 9H17M7 13H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold tracking-tight">+5689 2589 6325</span>
                        </div>
                    </div>

                    {}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>

                {}
                {menuOpen && (
                    <div className="lg:hidden mt-4 bg-black/95 backdrop-blur-xl rounded-2xl p-6 space-y-4 text-white border border-white/10 max-h-[80vh] overflow-y-auto">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `block py-2 ${isActive ? 'text-[#ffcc4d] font-bold' : ''}`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block py-2 ${isActive ? 'text-[#ffcc4d] font-bold' : ''}`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `block py-2 ${isActive ? 'text-[#ffcc4d] font-bold' : ''}`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </NavLink>

                        {}
                        <div>
                            <button 
                                onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                                className="flex items-center justify-between w-full py-2 font-medium"
                            >
                                Blog
                                <span className={`transform transition-transform ${mobileBlogOpen ? 'rotate-180 text-[#ffcc4d]' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            
                            {mobileBlogOpen && (
                                <div className="pl-4 py-2 space-y-3 text-gray-300 border-l border-white/20 ml-2 mt-1">
                                    <Link to="/blog" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Blog List</Link>
                                    <Link to="/blog-load-more" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Load More</Link>
                                    <Link to="/blog/latest" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Single Blog</Link>
                                </div>
                            )}
                        </div>

                        {}
                        <div>
                            <button 
                                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                                className="flex items-center justify-between w-full py-2 font-medium"
                            >
                                Pages
                                <span className={`transform transition-transform ${mobilePagesOpen ? 'rotate-180 text-[#ffcc4d]' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            
                            {}
                            {mobilePagesOpen && (
                                <div className="pl-4 py-2 space-y-3 text-gray-300 border-l border-white/20 ml-2 mt-1">
                                    <Link to="/about" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>About</Link>
                                    <Link to="/contact" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Contact</Link>
                                    <Link to="/services" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Services</Link>
                                    <Link to="/faq" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Faq's</Link>
                                    <Link to="/pricing" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Pricing</Link>
                                    <Link to="/team" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Team</Link>
                                    <Link to="/404" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>404</Link>
                                    <Link to="/coming-soon" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Coming Soon</Link>
                                    <Link to="/testimonials" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Testimonial</Link>
                                    <Link to="/privacy-policy" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
                                    <Link to="/cookie-policy" className="block hover:text-[#ffcc4d]" onClick={() => setMenuOpen(false)}>Cookie Policy</Link>
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/pricing"
                            className={({ isActive }) =>
                                `block py-2 ${isActive ? 'text-[#ffcc4d] font-bold' : ''}`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Pricing
                        </NavLink>
                        
                        <div className="pt-4 border-t border-white/10">
                            <Link 
                                to="/contact" 
                                className="block bg-[#ffcc4d] text-black px-4 py-3 rounded-xl text-center font-bold"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}