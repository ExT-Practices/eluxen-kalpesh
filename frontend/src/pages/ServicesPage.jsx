import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import Service from "../components/Service";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="relative">
                <Navbar />
                <SubBanner
                    title="Our Services"
                    description="We provide expert car detailing using top-tier products and techniques to bring out the best in your vehicle—inside and out."
                />
                
                <Service />
                <HowItWorks />
                <CTA />
                <Contact />

                <Footer />
            </main>
        </>
    );
}
