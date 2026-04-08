import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, msg: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, msg: "Form Submitted Successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, msg: data.error || "Something went wrong" });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({ loading: false, msg: "Error connecting to server" });
    }
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto bg-blue-600 rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* LEFT: Form Content */}
          <div className="text-white">
            <div className="mb-8">
              <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Let’s Connect Reach <br /> Out to Our Team
              </h2>
            </div>

            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Name" 
                required
                className="w-full bg-white text-gray-800 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder:text-gray-400 text-[15px]"
              />
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="Email" 
                required
                className="w-full bg-white text-gray-800 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder:text-gray-400 text-[15px]"
              />
              <input 
                type="text" 
                placeholder="Phone" 
                className="w-full bg-white text-gray-800 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder:text-gray-400 text-[15px]"
              />
              <select 
                className="w-full bg-white text-gray-400 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none cursor-pointer text-[15px]"
                defaultValue=""
              >
                <option value="" disabled>Select Service</option>
                <option value="wash">Car Wash</option>
                <option value="paint">Car Painting</option>
                <option value="oil">Oil Change</option>
              </select>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message" 
                rows="3"
                required
                className="w-full bg-white text-gray-800 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder:text-gray-400 md:col-span-2 resize-none text-[15px]"
              ></textarea>
              
              <div className="md:col-span-2 mt-2 flex flex-col gap-3">
                <button 
                  disabled={status.loading}
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-[#ffcc4d] text-black pl-6 pr-2 py-2 rounded-xl font-bold hover:bg-[#ffd670] transition-all w-max shadow-lg disabled:opacity-50"
                >
                  <span className="text-base uppercase tracking-wide">
                    {status.loading ? "Sending..." : "Send Message"}
                  </span>
                  <span className="bg-black p-2 rounded-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </span>
                </button>
                {status.msg && (
                  <p className={`text-sm ${status.msg.includes("Successfully") ? "text-yellow-400" : "text-red-400 font-bold"}`}>
                    {status.msg}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT: Image */}
          <div className="relative h-full min-h-[400px] lg:min-h-0">
            <img 
              src="https://html.designingmedia.com/eluxen/assets/images/send-us-img.jpg" 
              alt="Professional Detailing" 
              className="w-full h-full object-cover rounded-[32px] shadow-2xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
