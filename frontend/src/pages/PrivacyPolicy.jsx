import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="relative bg-black text-white">
                <Navbar />

                <SubBanner
                    title="Privacy Policy"
                    description="We provide expert car detailing using top-tier products and techniques to bring out the best in your vehicle—inside and out."
                />

                <section className="py-20 px-4 bg-black min-h-screen font-sans">
                    <div className="max-w-7xl mx-auto px-4 leading-[1.6] text-white">

                        {/* Section 1 */}
                        <div className="mb-8">
                            <h4 className="text-[22px] font-bold mb-3 text-white">
                                Duis Aute Irurein Rearederit:
                            </h4>
                            <p className="text-gray-300 text-[15px] leading-relaxed">
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                                id quod maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
                                rerum necessitatibus saepe eveniet ut et voluptates
                                repudiandae sint et molestiae non recusandae.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-8">
                            <h4 className="text-[22px] font-bold mb-3 text-white">
                                Maiores Alias Sonsequatur:
                            </h4>
                            <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
                                Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat quo voluptas
                                nulla pariatur molestiae non recusandae.
                            </p>

                            <ul className="space-y-3 p-0 list-none mb-6">
                                <li className="flex items-center gap-2 text-gray-300 text-[15px]">
                                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#FFCD29] flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    We use your personal information to fulfill orders, process payments, and provide customer support.
                                </li>
                                <li className="flex items-center gap-2 text-gray-300 text-[15px]">
                                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#FFCD29] flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Non-personal information helps us analyze how users interact with our site, allowing us to enhance our product.
                                </li>
                                <li className="flex items-center gap-2 text-gray-300 text-[15px]">
                                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#FFCD29] flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    We use your information to detect and prevent fraudulent activities on our site.
                                </li>
                            </ul>

                            <p className="text-gray-300 text-[15px] leading-relaxed">
                                Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                                omnis voluptas assumenda est, omnis dolor repellen
                                temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                                voluptates repudiandae sint et molestiae non
                                recusandae. Itaque earum rerum hic tenetur.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h4 className="text-[22px] font-bold mb-3 text-white">
                                Quisquam Ester Rui Dolorem:
                            </h4>
                            <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
                                Gam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                                id quod maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
                                rerum necessitatibus saepe eveniet ut et voluptates
                                repudiandae sint et molestiae non recusandae.
                            </p>
                            <p className="text-gray-300 text-[15px] leading-relaxed">
                                Nutem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                                nulla pariatur molestiae non recusandae.
                            </p>
                        </div>
                    </div>
                </section>

                <Contact />
                <Footer />
            </main>
        </>
    );
}