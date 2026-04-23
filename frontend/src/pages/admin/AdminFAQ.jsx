import { useState, useEffect } from "react";
import { 
  Edit3, Trash2, Plus, X, Save, ExternalLink, 
  Menu, ChevronRight, MessageSquareQuote, HelpCircle, 
  ChevronDown, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminFAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialFormState = {
    question: "",
    answer: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  
  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/faqs");
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: isEditing ? "Updating..." : "Creating...", type: "info" });

    const url = isEditing
      ? `http://localhost:5050/api/faqs/${editId}`
      : "http://localhost:5050/api/faqs";

    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, msg: `FAQ ${isEditing ? "Updated" : "Created"} Successfully!`, type: "success" });
        resetForm();
        fetchFaqs();
      } else {
        setStatus({ loading: false, msg: data.error || "Operation failed", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, msg: "Server connection error", type: "error" });
    }
  };

  
  const handleEdit = (faq) => {
    setIsEditing(true);
    setEditId(faq._id);
    setFormData({
      question: faq.question,
      answer: faq.answer,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this FAQ?")) return;

    try {
      const response = await fetch(`http://localhost:5050/api/faqs/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ loading: false, msg: "FAQ Deleted Successfully!", type: "success" });
        fetchFaqs();
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
    <div className="flex min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans overflow-x-hidden">
      <AdminSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-64' : 'pl-0'}`}>
        
        {}
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-800/50 px-4 md:px-8 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 bg-zinc-900 rounded-xl">
              <Menu size={20} />
            </button>
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              <span>Admin</span>
              <ChevronRight size={12} />
              <span className="text-white">FAQ Database</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/faq" className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-all flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest text-zinc-400">
              <ExternalLink size={14} />
              View Site
            </Link>
            <button onClick={resetForm} className="px-5 py-2.5 rounded-xl bg-[#ffcc4d] text-black hover:bg-yellow-500 transition-all flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest">
              <Plus size={14} />
              Add FAQ
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          
          {}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter mb-2 text-white uppercase">
              FAQ <span className="text-[#ffcc4d]">MANAGER</span>
            </h1>
            <p className="text-zinc-500 font-medium tracking-wide">Manage your customers most common inquiries and support content.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">

            {}
            <div className="lg:col-span-5">
              <div className={`bg-[#111111] border border-zinc-800/50 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-2xl transition-all duration-500 ${isEditing ? 'ring-2 ring-[#ffcc4d]/30 shadow-[#ffcc4d]/5' : ''}`}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold italic text-white flex items-center gap-3">
                    {isEditing ? <Edit3 size={20} className="text-[#ffcc4d]" /> : <Plus size={20} className="text-[#ffcc4d]" />}
                    {isEditing ? "EDIT QUESTION" : "NEW QUESTION"}
                  </h2>
                  {isEditing && (
                    <button onClick={resetForm} className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-500 transition-all">
                      <X size={20} />
                    </button>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">The Question</label>
                    <textarea
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      required
                      placeholder="E.g. What services are included in basic detailing?"
                      className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all placeholder:text-zinc-700 text-white font-medium resize-none"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">The Answer</label>
                    <textarea
                      name="answer"
                      value={formData.answer}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Detailed response for the customer..."
                      className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all resize-none placeholder:text-zinc-700 text-white font-medium"
                    ></textarea>
                  </div>

                  <button
                    disabled={status.loading}
                    type="submit"
                    className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm transition-all transform hover:translate-y-[-2px] active:translate-y-[0] ${isEditing
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-[#ffcc4d] text-black hover:bg-yellow-500"
                      } disabled:opacity-50 disabled:transform-none`}
                  >
                    {status.loading ? (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        {isEditing ? <Save size={18} /> : <Plus size={18} />}
                        {isEditing ? "Update content" : "Publish FAQ"}
                      </>
                    )}
                  </button>

                  {status.msg && (
                    <div className={`p-4 rounded-2xl font-bold text-xs uppercase tracking-widest animate-fade-up text-center border ${status.type === "success"
                      ? "text-[#ffcc4d] bg-[#ffcc4d]/5 border-[#ffcc4d]/20"
                      : status.type === "error"
                        ? "text-red-400 bg-red-400/5 border-red-400/20"
                        : "text-blue-400 bg-blue-400/5 border-blue-400/20"
                      }`}>
                      {status.msg}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold italic text-white flex items-center gap-3 tracking-wide">
                  PUBLISHED Q&A
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full text-[10px] font-black not-italic">{faqs.length}</span>
                </h3>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#ffcc4d]"></div>
                  <p className="text-zinc-600 font-bold tracking-widest uppercase text-[10px]">Syncing Knowledge...</p>
                </div>
              ) : faqs.length === 0 ? (
                <div className="bg-[#111111] border border-dashed border-zinc-800 rounded-[32px] py-32 text-center">
                  <p className="text-zinc-500 italic">No FAQs found. Build your support base.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {faqs.map((faq) => (
                    <div key={faq._id} className="group bg-[#111111] border border-zinc-800/50 hover:border-zinc-700 rounded-[28px] overflow-hidden transition-all duration-300">
                      
                      <div className="flex items-start justify-between gap-4 p-6 bg-zinc-900/20">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <HelpCircle size={14} className="text-[#ffcc4d]" />
                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Question</span>
                          </div>
                          <h4 className="text-base font-bold text-white group-hover:text-[#ffcc4d] transition-colors italic leading-relaxed">
                            {faq.question}
                          </h4>
                        </div>
                        <div className="flex gap-2">
                           <button
                            onClick={() => handleEdit(faq)}
                            className="p-3 rounded-xl bg-zinc-800 hover:bg-[#ffcc4d] hover:text-black text-zinc-400 transition-all shadow-lg"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(faq._id)}
                            className="p-3 rounded-xl bg-zinc-800 hover:bg-red-500 text-zinc-400 hover:text-white transition-all shadow-lg"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="p-6 border-t border-zinc-800/30">
                        <div className="flex items-center gap-2 mb-3">
                           <MessageSquareQuote size={14} className="text-zinc-600" />
                           <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Resolution</span>
                        </div>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed italic">
                          {faq.answer}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
