import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import BlogList from "../components/BlogList";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="relative bg-black">
                <Navbar />

                <SubBanner
                    title="Blog"
                    description={
                        <>
                            We offer expert car detailing using premium products to restore your vehicle’s shine inside
                            <br className="hidden md:block" />
                            and out. Expect showroom-quality results every time.
                        </>
                    }
                />

                <BlogList />
                <CTA />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
