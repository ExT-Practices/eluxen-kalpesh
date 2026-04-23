import React, { useState, useEffect } from 'react';

const SocialIcon = ({ type }) => {
    const icons = {
        fb: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        ig: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        li: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        )
    };
    return icons[type];
};

export default function Teams() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5050/api/team')
            .then(res => res.json())
            .then(data => {
                setTeamMembers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching team:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return null;

    return (
        <section className="w-full py-20 bg-black relative overflow-hidden font-sans animate-fade-up">
            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {}
                <div className="text-center mb-12">
                    <span className="text-[#c19b66] font-medium text-[15px] mb-3 inline-block">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Meet the Experts – Passionate, <br className="hidden md:block" />
                        Precise, Reliable
                    </h2>
                </div>

                {}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center group bg-[#111] p-6 rounded-[32px] border border-white/5 hover:border-[#c19b66]/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                        >
                            {}
                            <figure className="mb-6 w-full overflow-hidden rounded-[24px] relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[320px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </figure>

                            {}
                            <h5 className="text-white text-[22px] font-bold mb-1 tracking-tight">
                                {member.name}
                            </h5>
                            <span className="text-[#c19b66] text-[14px] font-medium mb-6 block uppercase tracking-wider">
                                {member.role}
                            </span>

                            {}
                            <ul className="flex justify-center gap-3">
                                <li>
                                    <a href={member.socials?.fb || '#'} className="w-[38px] h-[38px] bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#3b66f5] hover:scale-110 transition-all duration-300 border border-white/10">
                                        <SocialIcon type="fb" />
                                    </a>
                                </li>
                                <li>
                                    <a href={member.socials?.ig || '#'} className="w-[38px] h-[38px] bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#e4405f] hover:scale-110 transition-all duration-300 border border-white/10">
                                        <SocialIcon type="ig" />
                                    </a>
                                </li>
                                <li>
                                    <a href={member.socials?.li || '#'} className="w-[38px] h-[38px] bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#0a66c2] hover:scale-110 transition-all duration-300 border border-white/10">
                                        <SocialIcon type="li" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}