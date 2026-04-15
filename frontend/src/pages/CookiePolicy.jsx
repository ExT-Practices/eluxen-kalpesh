import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import Footer from "../components/Footer";
import React from 'react';

export default function CookiePolicy() {
    return (
        <>
            <Header />
            <main className="relative bg-black">
                <Navbar />

                <SubBanner
                    title="Cookie Policy"
                    description="We offer expert car detailing using premium products to restore your vehicle’s shine inside and out. Expect showroom-quality results every time."
                />

                <section className="py-20 px-4 bg-black min-h-screen font-sans">
                    <div className="max-w-7xl mx-auto px-4 leading-[1.6] text-white">
                        
                        <div className="mb-8 animate-fade-up">
                            <h4 className="text-[22px] font-bold mb-3 text-white">
                                Cookie Policy:
                            </h4>
                            <p className="text-gray-300 text-[15px] leading-relaxed">
                                Protecting your privacy is important to us. This Privacy Policy outlines how
                                we collect, use, and disclose personal information when you use our website.
                            </p>
                        </div>

                        <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                            <div>
                                <h5 className="text-[19px] font-bold mb-2 text-white">1. Information We Collect:</h5>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    We collect personal information such as your name, email address, and
                                    payment details when you create an account or make a purchase.
                                    We also collect usage data such as IP address, browser type, and pages visited.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[19px] font-bold mb-2 text-white">2. How We Use Your Information:</h5>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    We use your personal information to provide and improve our services.
                                    Your information may also be used for communication purposes, such as sending newsletters or updates.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[19px] font-bold mb-2 text-white">3. Information Sharing:</h5>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    We do not sell, trade, or otherwise transfer your personal information to
                                    third parties without your consent.
                                    We may share your information with trusted third-party service providers who assist us in
                                    operating our website.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[19px] font-bold mb-2 text-white">4. Security:</h5>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    We implement security measures to protect your personal information against
                                    unauthorized access or alteration.
                                    However, no method of transmission over the Internet or electronic storage is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-[19px] font-bold mb-2 text-white">5. Your Choices:</h5>
                                <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
                                    You have the right to access, update, or delete your personal
                                    information at any time.
                                    You can opt out of receiving promotional emails by following the instructions provided in the email.
                                </p>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    By using our website, you consent to the terms of this Privacy Policy. 
                                    If you have any questions or concerns, please contact us.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
