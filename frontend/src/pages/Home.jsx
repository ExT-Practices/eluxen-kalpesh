import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="relative">
                <Navbar />
                <Hero />
                <Service limit={4} />
                <AboutUs />
                <Pricing />
                <Testimonials />
                <FAQ />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
