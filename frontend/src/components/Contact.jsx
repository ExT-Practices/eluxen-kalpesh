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
      const response = await fetch("http://localhost:5050/api/contact", {
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
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 animate-fade-up">
  <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl sm:rounded-[40px] lg:rounded-[50px] p-6 sm:p-10 md:p-14 lg:p-20 relative overflow-hidden shadow-2xl">

    {}
    <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl -mr-20 sm:-mr-32 -mt-20 sm:-mt-32"></div>

    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center relative z-10">

      {}
      <div className="text-white animate-fade-left">
        <div className="mb-8 sm:mb-10 text-center lg:text-left">
          <span className="text-yellow-400 font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block">
            Get in Touch
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Let’s Connect <br /> Reach Out
          </h2>
        </div>

        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
            className="w-full bg-white text-gray-800 px-4 sm:px-5 py-3 rounded-lg sm:rounded-xl text-sm sm:text-[15px] focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
            className="w-full bg-white text-gray-800 px-4 sm:px-5 py-3 rounded-lg sm:rounded-xl text-sm sm:text-[15px] focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full bg-white text-gray-800 px-4 sm:px-5 py-3 rounded-lg sm:rounded-xl text-sm sm:text-[15px] focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <select
            className="w-full bg-white text-gray-400 px-4 sm:px-5 py-3 rounded-lg sm:rounded-xl text-sm sm:text-[15px] focus:ring-2 focus:ring-yellow-400 outline-none cursor-pointer"
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
            className="w-full bg-white text-gray-800 px-4 sm:px-5 py-3 rounded-lg sm:rounded-xl text-sm sm:text-[15px] focus:ring-2 focus:ring-yellow-400 outline-none sm:col-span-2 resize-none"
          />

          <div className="sm:col-span-2 mt-2 flex flex-col gap-3">

            <button
              disabled={status.loading}
              type="submit"
              className="w-full sm:w-fit flex items-center justify-center gap-3 bg-[#ffcc4d] text-black px-6 py-3 rounded-lg sm:rounded-xl font-bold hover:bg-[#ffd670] transition-all shadow-lg disabled:opacity-50"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.msg && (
              <p className={`text-sm ${
                status.msg.includes("Successfully")
                  ? "text-yellow-400"
                  : "text-red-400 font-bold"
              }`}>
                {status.msg}
              </p>
            )}

          </div>
        </form>
      </div>

      {}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] shadow-2xl animate-fade-right">
        <img
          src="https://html.designingmedia.com/eluxen/assets/images/send-us-img.jpg"
          alt="Professional Detailing"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

    </div>
  </div>
</section>
  );
}
