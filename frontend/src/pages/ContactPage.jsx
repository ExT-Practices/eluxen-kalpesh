import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import ContactInfo from "../components/ContactInfo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="relative">
                <Navbar />

                <SubBanner
                    title="Contact"
                    description="Our skilled team uses top-tier products and trusted techniques to bring out the best in every vehicle."
                />

                <ContactInfo />

                <section className="pb-10 bg-black">
                    <Contact />
                </section>



                {}
                <div className="w-full h-[450px] animate-fade-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.367176743588!2d144.95736461590413!3d-37.81813957974638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cbce858f6d7%3A0x9cc486b305ba3fb1!2s21%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1669200882885!5m2!1sen!2s"
                        className="w-full h-full border-0 grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <Footer />
            </main>
        </>
    );
}
