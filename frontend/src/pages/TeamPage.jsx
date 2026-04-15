import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import Teams from "../components/Teams";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function TeamPage() {
    return (
        <>
            <Header />
            <main className="relative bg-black">
                <Navbar />

                <SubBanner
                    title="Our Team"
                    description="Meet the passionate experts behind every flawless detail. Our skilled professionals are dedicated to delivering showroom-quality results with precision and care."
                />

                <Teams />
                <CTA />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
