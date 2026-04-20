import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ["All", "Advices", "Announcements", "News", "Consultation", "Development"];

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5050/api/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setFilteredBlogs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blogs:', err);
                setLoading(false);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(blogs.filter(blog => blog.category === category));
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20 bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFCD29]"></div>
            </div>
        );
    }

    return (
        <section className="w-full py-20 bg-black relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                                activeCategory === cat 
                                ? "bg-[#FFCD29] text-black" 
                                : "text-white hover:text-[#FFCD29]"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {filteredBlogs.map((blog, idx) => (
                        <article 
                            key={blog._id || idx}
                            className="flex flex-col group animate-fade-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {/* Image Wrapper */}
                            <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-[16/10]">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center gap-6 mb-4 px-4 text-gray-400 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#FFCD29]" />
                                    <span>{blog.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#FFCD29]" />
                                    <span>By {blog.author}</span>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="px-4">
                                <Link to={`/blog/${blog._id}`}>
                                    <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-4 group-hover:text-[#FFCD29] transition-colors leading-[1.2]">
                                        {blog.title}
                                    </h3>
                                </Link>
                                
                                <p className="text-gray-400 text-[16px] leading-relaxed mb-8 line-clamp-2 max-w-xl">
                                    {blog.description}
                                </p>

                                <div className="relative inline-block">
                                    <Link to={`/blog/${blog._id}`} className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[14px] group/btn">
                                        Read More
                                        <ArrowRight size={20} className="text-[#FFCD29] transform transition-transform group-hover/btn:translate-x-2" />
                                    </Link>
                                    <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#FFCD29] transition-all duration-300 group-hover:w-full"></div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredBlogs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl italic">No blogs found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
