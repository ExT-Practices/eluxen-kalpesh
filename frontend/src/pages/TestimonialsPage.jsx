import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function TestimonialsPage() {
    return (
        <>
            <Header />
            <main className="relative bg-black">
                <Navbar />

                <SubBanner
                    title="Testimonials"
                    description="Learn how our expert team, premium products, and proven techniques deliver unbeatable results."
                />

                <Testimonials />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
