import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import AboutUs from "../components/AboutUs";
import Teams from "../components/Teams";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Count from "../components/Count";
import React from 'react';


export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="relative">
                <Navbar />
                <SubBanner
                    title="About Us"
                    description="We offer expert car detailing using premium products to restore your vehicle’s shine inside and out. Expect showroom-quality results every time."
                />

                <AboutUs />
                <Count />
                <Teams />
                <CTA />
                <Contact />

                <Footer />
            </main>
        </>
    );
}