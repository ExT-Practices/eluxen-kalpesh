import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogLoadMore() {
    const [blogs, setBlogs] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5050/api/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blogs:', err);
                setLoading(false);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20 bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFCD29]"></div>
            </div>
        );
    }

    const visibleBlogs = blogs.slice(0, visibleCount);

    return (
        <section className="w-full py-20 bg-black relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
                    {visibleBlogs.map((blog, idx) => (
                        <article 
                            key={blog._id || idx}
                            className="flex flex-col group animate-fade-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {}
                            <div className="relative overflow-hidden rounded-[30px] mb-6 aspect-[16/10]">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>

                            {}
                            <div className="flex items-center gap-4 mb-3 px-2 text-gray-400 text-xs font-semibold tracking-wider">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-[#FFCD29]" />
                                    <span className="uppercase">{blog.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={14} className="text-[#FFCD29]" />
                                    <span className="uppercase">By {blog.author}</span>
                                </div>
                            </div>

                            {}
                            <div className="px-2">
                                <Link to={`/blog/${blog._id}`}>
                                    <h3 className="text-white text-[22px] font-bold mb-3 group-hover:text-[#FFCD29] transition-colors leading-[1.3]">
                                        {blog.title}
                                    </h3>
                                </Link>
                                
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {blog.description}
                                </p>

                                <div className="relative inline-block pb-1">
                                    <Link to={`/blog/${blog._id}`} className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[12px] group/btn">
                                        Read More
                                        <ArrowRight size={16} className="text-[#FFCD29] transform transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                    <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#FFCD29] transition-all duration-300 group-hover:w-full"></div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {}
                {visibleCount < blogs.length && (
                    <div className="flex justify-center mt-8">
                        <button 
                            onClick={handleLoadMore}
                            className="bg-[#FFCD29] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(255,205,41,0.3)] hover:shadow-none"
                        >
                            Load More
                        </button>
                    </div>
                )}

                {}
                {blogs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl italic">No blogs found.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
