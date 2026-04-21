import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ErrorPage from "./pages/404";
import FAQPage from "./pages/FAQPage";
import ComingSoon from "./pages/ComingSoon";
import TeamPage from "./pages/TeamPage";
import CookiePolicy from "./pages/CookiePolicy";
import BlogPage from "./pages/BlogPage";
import BlogLoadMorePage from "./pages/BlogLoadMorePage";
import SingleBlog from "./pages/SingleBlog";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminService from "./pages/admin/AdminService";
import AdminPricing from "./pages/admin/AdminPricing";
import AdminFAQ from "./pages/admin/AdminFAQ";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog-load-more" element={<BlogLoadMorePage />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
      <Route path="/admin-blog" element={<AdminBlog />} />
      <Route path="/admin-service" element={<AdminService />} />
      <Route path="/admin-pricing" element={<AdminPricing />} />
      <Route path="/admin-faq" element={<AdminFAQ />} />

      <Route path="*" element={<ErrorPage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;