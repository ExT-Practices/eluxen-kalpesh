import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AdminBlog() {
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().split('T')[0],
    author: "Admin",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
    description: "",
    category: "Car Detailing",
  });

  const [status, setStatus] = useState({ loading: false, msg: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "" });

    try {
      const response = await fetch("http://localhost:5050/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, msg: "Blog Post Created Successfully!" });
        setFormData({
          title: "",
          date: new Date().toISOString().split('T')[0],
          author: "Admin",
          image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
          description: "",
          category: "Car Detailing",
        });
      } else {
        setStatus({ loading: false, msg: data.error || "Failed to create blog" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, msg: "Server connection error" });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent italic">
              ADMIN DASHBOARD
            </h1>
            <p className="text-zinc-400 mb-8 font-medium">Create a new blog post instantly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter blog title"
                    className="w-full bg-white/5 border border-zinc-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-zinc-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                  >
                    <option value="Car Detailing">Car Detailing</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Exterior Wash">Exterior Wash</option>
                    <option value="Paint Protection">Paint Protection</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-zinc-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Image URL</label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-zinc-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider ml-1">Description / Content</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell your story..."
                  className="w-full bg-white/5 border border-zinc-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  disabled={status.loading}
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-lg uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50"
                >
                  {status.loading ? "Publishing..." : "Publish Post"}
                </button>
              </div>

              {status.msg && (
                <div className={`text-center p-4 rounded-xl font-bold ${status.msg.includes("Successfully") ? "text-cyan-400 bg-cyan-400/10" : "text-red-400 bg-red-400/10"}`}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
