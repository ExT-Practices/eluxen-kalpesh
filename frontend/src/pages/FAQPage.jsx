import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import FAQGrid from "../components/FAQGrid";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="relative">
                <Navbar />
                <SubBanner
                    title="Faq's"
                    description="Learn how our expert team, premium products, and proven techniques deliver unbeatable results."
                />
                
                <FAQGrid />
                <CTA />
                <Contact />

                <Footer />
            </main>
        </>
    );
}
