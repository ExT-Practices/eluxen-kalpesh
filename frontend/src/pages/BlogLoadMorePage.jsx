import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import BlogLoadMore from "../components/BlogLoadMore";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function BlogLoadMorePage() {
    return (
        <>
            <Header />
            <main className="relative bg-black">
                <Navbar />

                <SubBanner
                    title="Load More"
                    description={
                        <>
                            We offer expert car detailing using premium products to restore your vehicle’s shine inside
                            <br className="hidden md:block" />
                            and out. Expect showroom-quality results every time.
                        </>
                    }
                />

                <BlogLoadMore />
                <CTA />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
