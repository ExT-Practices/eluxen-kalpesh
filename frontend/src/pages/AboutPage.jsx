import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";

import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
                <div className="py-12">

                </div>
                <Contact />

                <Footer />
            </main>
        </>
    );
}
