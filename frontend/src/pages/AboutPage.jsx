import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import CTA from "../components/CTA";
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

                <AboutUs />
                <Team />
                <CTA />
                <Contact />

                <Footer />
            </main>
        </>
    );
}
