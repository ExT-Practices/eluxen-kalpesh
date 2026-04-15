import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Count from '../components/Count';
import Footer from "../components/Footer";

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="relative">
                <Navbar />
                <SubBanner
                    title="Pricing"
                    description="All our packages use top-quality products and proven techniques to deliver exceptional results, inside and out."
                />

                <Pricing />
                <CTA />
                <Count />
                <Gallery />

                <Contact />

                <Footer />
            </main>
        </>
    );
}
