import React from 'react';
import { User, Mail, Globe } from 'lucide-react';

const teamMembers = [
    {
        name: "Jason Reed",
        role: "Senior Detailer",
        image: "https://html.designingmedia.com/eluxen/assets/images/team-img1.jpg",
    },
    {
        name: "Samantha Lee",
        role: "Interior Specialist",
        image: "https://html.designingmedia.com/eluxen/assets/images/team-img2.jpg",
    },
    {
        name: "Miguel Torres",
        role: "Paint Specialist",
        image: "https://html.designingmedia.com/eluxen/assets/images/team-img3.jpg",
    },
    {
        name: "Ava Thompson",
        role: "Detailing Expert",
        image: "https://html.designingmedia.com/eluxen/assets/images/team-img4.jpg",
    },
];

export default function Team() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <span className="text-[#ffcc4d] font-semibold tracking-wider uppercase text-sm mb-4 block">
                    Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                    Meet the Experts – Passionate, <br /> Precise, Reliable
                </h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="group">
                        <div className="relative overflow-hidden rounded-[40px] mb-6 aspect-[4/5]">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Social Icons Overlay */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ffcc4d] transition-colors">
                                    <User size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ffcc4d] transition-colors">
                                    <Mail size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ffcc4d] transition-colors">
                                    <Globe size={18} />
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-black mb-1">{member.name}</h4>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
