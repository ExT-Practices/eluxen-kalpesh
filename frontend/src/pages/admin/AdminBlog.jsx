import { useState, useEffect } from "react";
import { Edit3, Trash2, Plus, X, Save, ExternalLink, Calendar, User, Tag, Image as ImageIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  const initialFormState = {
    title: "",
    date: new Date().toISOString().split('T')[0],
    author: "Admin",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
    description: "",
    category: "Advices",
  };

  const [formData, setFormData] = useState(initialFormState);

  // FETCH BLOGS
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // HANDLE CREATE OR UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: isEditing ? "Updating..." : "Publishing...", type: "info" });

    const url = isEditing 
      ? `http://localhost:5050/api/blogs/${editId}` 
      : "http://localhost:5050/api/blogs";
    
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, msg: `Blog ${isEditing ? "Updated" : "Created"} Successfully!`, type: "success" });
        resetForm();
        fetchBlogs();
      } else {
        setStatus({ loading: false, msg: data.error || "Operation failed", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, msg: "Server connection error", type: "error" });
    }
  };

  // HANDLE EDIT CLICK
  const handleEdit = (blog) => {
    setIsEditing(true);
    setEditId(blog._id);
    setFormData({
      title: blog.title,
      date: blog.date,
      author: blog.author,
      image: blog.image,
      description: blog.description,
      category: blog.category,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // HANDLE DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const response = await fetch(`http://localhost:5050/api/blogs/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ loading: false, msg: "Blog Deleted Successfully!", type: "success" });
        fetchBlogs();
      }
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      
      {/* Spacer for Navbar */}
      <div className="h-24"></div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 animate-fade-up">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter mb-2 bg-gradient-to-r from-[#ffcc4d] to-yellow-200 bg-clip-text text-transparent">
              ADMIN DASHBOARD
            </h1>
            <p className="text-zinc-400 font-medium tracking-wide">Manage your stories and project announcements.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/blog" className="px-6 py-3 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-all flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
              <ExternalLink size={16} />
              View Site
            </Link>
            {!isEditing && (
                <button onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })} className="px-6 py-3 rounded-xl bg-[#ffcc4d] text-black hover:bg-yellow-500 transition-all flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
                  <Plus size={16} />
                  New Post
                </button>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FORM COLUMN */}
          <div className="lg:col-span-1">
            <div className={`sticky top-32 bg-zinc-900/40 border border-zinc-800 rounded-[40px] p-8 backdrop-blur-xl transition-all duration-500 ${isEditing ? 'ring-2 ring-[#ffcc4d]/50 shadow-2xl shadow-[#ffcc4d]/10' : ''}`}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold italic">
                  {isEditing ? "EDIT POST" : "CREATE POST"}
                </h2>
                {isEditing && (
                  <button onClick={resetForm} className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400">
                    <X size={20} />
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="E.g. The Future of Detailing"
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#ffcc4d] focus:border-transparent outline-none transition-all placeholder:text-zinc-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#ffcc4d] outline-none transition-all appearance-none text-zinc-300"
                    >
                        <option value="Advices">Advices</option>
                        <option value="Announcements">Announcements</option>
                        <option value="News">News</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Development">Development</option>
                    </select>
                    </div>
                    <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#ffcc4d] outline-none transition-all text-zinc-300"
                    />
                    </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Thumbnail URL</label>
                  <div className="relative">
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 pl-12 focus:ring-2 focus:ring-[#ffcc4d] outline-none transition-all"
                    />
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Content</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Write your article content here..."
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#ffcc4d] outline-none transition-all resize-none placeholder:text-zinc-700"
                  ></textarea>
                </div>

                <button
                  disabled={status.loading}
                  type="submit"
                  className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                    isEditing 
                    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-500/20" 
                    : "bg-[#ffcc4d] text-black hover:bg-yellow-500 shadow-xl shadow-yellow-500/20"
                  } disabled:opacity-50`}
                >
                  {status.loading ? (
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {isEditing ? <Save size={18} /> : <Plus size={18} />}
                      {isEditing ? "Update Post" : "Publish Post"}
                    </>
                  )}
                </button>

                {status.msg && (
                  <div className={`text-center p-4 rounded-2xl font-bold text-xs uppercase tracking-widest animate-fade-up ${
                    status.type === "success" 
                    ? "text-[#ffcc4d] bg-[#ffcc4d]/10 border border-[#ffcc4d]/20" 
                    : status.type === "error" 
                    ? "text-red-400 bg-red-400/10 border border-red-400/20" 
                    : "text-blue-400 bg-blue-400/10 border border-blue-400/20"
                  }`}>
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* LIST COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold italic tracking-wider flex items-center gap-3">
                    ALL BLOG POSTS
                    <span className="bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full text-xs font-black not-italic">{blogs.length}</span>
                </h3>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ffcc4d]"></div>
                    <p className="text-zinc-500 font-bold tracking-widest uppercase text-[10px]">Loading Database...</p>
                </div>
            ) : blogs.length === 0 ? (
                <div className="bg-zinc-900/30 border border-dashed border-zinc-800 rounded-[40px] py-32 text-center">
                    <p className="text-zinc-500 italic">No blog posts found. Start by creating one!</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="group bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 rounded-[32px] p-4 flex flex-col md:flex-row gap-6 transition-all duration-300">
                            {/* Small Preview Image */}
                            <div className="w-full md:w-48 h-48 md:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            <div className="flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-wider">{blog.category}</span>
                                        <div className="flex items-center gap-1 text-zinc-500 text-[10px] font-bold">
                                            <Calendar size={12} className="text-[#ffcc4d]" />
                                            {blog.date}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold group-hover:text-[#ffcc4d] transition-colors line-clamp-1">{blog.title}</h4>
                                    <p className="text-zinc-500 text-sm line-clamp-1 mt-1 font-medium">{blog.description}</p>
                                </div>

                                <div className="flex items-center gap-3 mt-6">
                                    <button 
                                        onClick={() => handleEdit(blog)}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-widest transition-all"
                                    >
                                        <Edit3 size={14} />
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(blog._id)}
                                        className="p-3 rounded-xl bg-red-950/20 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 transition-all"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                    <Link 
                                        to={`/blog/${blog._id}`}
                                        className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
                                    >
                                        <ExternalLink size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
