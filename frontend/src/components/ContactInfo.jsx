import React from 'react';
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
    const infoItems = [
        {
            icon: <MapPin className="w-8 h-8 text-white" />,
            bgColor: "bg-[#FFCD29]",
            title: "Our Location",
            details: "121 King Street, Melbourne Victoria 3000 Australia",
            isLink: false
        },
        {
            icon: <Mail className="w-8 h-8 text-white" />,
            bgColor: "bg-[#3B66F5]",
            title: "Email us at",
            details: ["support@eluxen.com", "eluxen@gmail.com"],
            isLink: true,
            href: "mailto:"
        },
        {
            icon: <Phone className="w-8 h-8 text-white" />,
            bgColor: "bg-[#FFCD29]",
            title: "Phone Number",
            details: ["+012 (345) 678 99", "+12345678 478 58"],
            isLink: true,
            href: "tel:"
        },
        {
            icon: <Clock className="w-8 h-8 text-white" />,
            bgColor: "bg-[#3B66F5]",
            title: "Business Hours",
            details: "Mon–Fri: 9 am–6 pm Sat-Sun: 12 pm - 5pm",
            isLink: false
        }
    ];

    return (
        <section className="bg-black py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#FFCD29] font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-left">
                        Contact Info
                    </span>
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fade-right">
                        Our Contact Information
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 backdrop-blur-sm p-10 rounded-[60px] text-center animate-fade-up"
                            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                        >
                            <div className={`w-20 h-20 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                                {item.icon}
                            </div>
                            <h5 className="text-white text-xl font-bold mb-4">{item.title}</h5>
                            {Array.isArray(item.details) ? (
                                <div className="space-y-2">
                                    {item.details.map((detail, idx) => (
                                        item.isLink ? (
                                            <a 
                                                key={idx} 
                                                href={`${item.href}${detail.replace(/\s+/g, '')}`} 
                                                className="block text-gray-400 hover:text-[#FFCD29] transition-colors duration-300"
                                            >
                                                {detail}
                                            </a>
                                        ) : (
                                            <p key={idx} className="text-gray-400 leading-relaxed">{detail}</p>
                                        )
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                                    {item.details}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
