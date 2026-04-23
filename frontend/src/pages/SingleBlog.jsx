import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronRight, MessageSquare, Search, ArrowRight, ArrowLeft } from 'lucide-react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function SingleBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchTarget = id === 'latest'
            ? 'http://localhost:5050/api/blogs'
            : `http://localhost:5050/api/blogs/${id}`;

        fetch(fetchTarget)
            .then(res => res.json())
            .then(data => {
                if (id === 'latest') {
                    setBlog(data[0]);
                } else {
                    setBlog(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blog:', err);
                setLoading(false);
            });

        fetch('http://localhost:5050/api/blogs')
            .then(res => res.json())
            .then(data => {
                setRecentBlogs(data.slice(0, 4));
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFCD29]"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Not Found</h1>
                <Link to="/blog" className="text-[#FFCD29] hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Blogs
                </Link>
            </div>
        );
    }

    const socialLinks = [
        { icon: <svg size={18} fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>, href: "#" },
        { icon: <svg size={18} fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>, href: "#" },
        { icon: <svg size={18} fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>, href: "#" },
        { icon: <svg size={18} fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>, href: "#" }
    ];

    return (
        <>
            <Header />
            <main className="relative bg-black font-sans text-white overflow-x-hidden">
                <Navbar />
                <SubBanner
                    title="Single Blog"
                    description={<>Expert car detailing to restore your vehicle’s shine.<br className="hidden md:block" />Showroom-quality results every time.</>}
                />

                <section className="py-12 md:py-24 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                            {}
                            <div className="lg:col-span-8 space-y-8 md:space-y-12">
                                <div className="bg-[#111111] rounded-3xl md:rounded-[40px] border border-white/5 overflow-hidden">
                                    <figure className="relative aspect-video lg:aspect-[16/9] overflow-hidden">
                                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                                    </figure>

                                    <div className="p-6 md:p-12">
                                        <div className="mb-8">
                                            <h2 className="text-white text-2xl md:text-5xl font-extrabold mb-6 leading-tight">
                                                {blog.title}
                                            </h2>
                                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-wider border-b border-white/10 pb-8">
                                                <div className="flex items-center gap-2">
                                                    <User size={16} className="text-[#FFCD29]" />
                                                    <span>By: {blog.author}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} className="text-[#FFCD29]" />
                                                    <span>{blog.date}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-6 md:space-y-8">
                                            <p>{blog.description}</p>
                                            <p>Professional detailing involves a deep cleaning process that goes far beyond what a standard car wash provides.</p>
                                        </div>

                                        {}
                                        <div className="my-8 md:my-12 relative bg-white/5 p-6 md:p-10 rounded-3xl border-l-4 border-[#FFCD29]">
                                            <p className="text-white text-lg md:text-2xl italic font-medium relative z-10">
                                                “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”
                                            </p>
                                        </div>

                                        {}
                                        <div className="flex flex-col md:flex-row justify-between gap-8 py-10 border-y border-white/10">
                                            <div className="w-full">
                                                <h4 className="text-white text-xl font-bold mb-6">Related Tags</h4>
                                                <div className="flex flex-wrap gap-2 md:gap-3">
                                                    {["Advice", "Expert", "Detailing"].map(tag => (
                                                        <span key={tag} className="bg-white/5 text-gray-400 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-[#FFCD29] hover:text-black cursor-pointer transition-all">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="w-full md:text-right">
                                                <h4 className="text-white text-xl font-bold mb-6">Social Share</h4>
                                                <div className="flex gap-4 md:justify-end">
                                                    {socialLinks.map((social, i) => (
                                                        <a key={i} href={social.href} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#FFCD29] hover:text-black transition-all">
                                                            {social.icon}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {}
                                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-10">
                                            <Link to="/blog" className="w-full sm:w-auto flex justify-center items-center gap-3 bg-white/5 text-white px-8 py-3 rounded-full font-bold hover:bg-[#FFCD29] hover:text-black transition-all">
                                                <ArrowLeft size={20} /> Prev
                                            </Link>
                                            <Link to="/blog" className="w-full sm:w-auto flex justify-center items-center gap-3 bg-[#FFCD29] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all">
                                                Next <ArrowRight size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {}
                            <aside className="lg:col-span-4 space-y-8 md:space-y-12">
                                {}
                                <div className="bg-[#111111] p-6 md:p-8 rounded-3xl border border-white/5">
                                    <h5 className="text-white text-xl font-bold mb-6 border-l-4 border-[#FFCD29] pl-4">Search News</h5>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search Here..."
                                            className="w-full bg-black border border-white/10 rounded-xl py-4 px-4 text-white focus:border-[#FFCD29] outline-none"
                                        />
                                        <button className="absolute right-2 top-2 bottom-2 px-3 bg-[#FFCD29] text-black rounded-lg">
                                            <Search size={18} />
                                        </button>
                                    </div>
                                </div>

                                {}
                                <div className="bg-[#111111] p-6 md:p-8 rounded-3xl border border-white/5">
                                    <h5 className="text-white text-xl font-bold mb-6 border-l-4 border-[#FFCD29] pl-4">Categories</h5>
                                    <ul className="space-y-4">
                                        {["Business", "Consulting", "Finance"].map(cat => (
                                            <li key={cat}>
                                                <Link to="/blog" className="text-gray-400 hover:text-[#FFCD29] flex justify-between items-center">
                                                    {cat} <ChevronRight size={16} />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {}
                                <div className="bg-[#111111] p-6 md:p-8 rounded-3xl border border-white/5">
                                    <h5 className="text-white text-xl font-bold mb-6 border-l-4 border-[#FFCD29] pl-4">Recent Feeds</h5>
                                    <div className="space-y-6">
                                        {recentBlogs.map((rBlog) => (
                                            <Link to={`/blog/${rBlog._id}`} key={rBlog._id} className="flex gap-4 group">
                                                <figure className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:border-[#FFCD29]">
                                                    <img src={rBlog.image} alt="" className="w-full h-full object-cover" />
                                                </figure>
                                                <h4 className="text-white text-sm font-bold group-hover:text-[#FFCD29] line-clamp-2 leading-snug">
                                                    {rBlog.title}
                                                </h4>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <CTA />
                <Contact />
                <Footer />
            </main>
        </>
    );
}