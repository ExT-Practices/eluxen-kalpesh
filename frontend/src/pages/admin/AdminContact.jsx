import { useState, useEffect } from "react";
import { 
  Trash2, ExternalLink, X, Menu, ChevronRight,
  MessageSquare, Star, Mail, Clock, ShieldCheck, User
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
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
  const [selectedContact, setSelectedContact] = useState(null);

  
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/contact");
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      const response = await fetch(`http://localhost:5050/api/contact/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ loading: false, msg: "Inquiry Deleted Successfully!", type: "success" });
        fetchContacts();
        if (selectedContact?._id === id) setSelectedContact(null);
      }
    } catch (error) {
      console.error("Delete Error:", error);
    }
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
              <span className="text-white">Contact Inquiries</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-all flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest text-zinc-400">
              <ExternalLink size={14} />
              View Contact Page
            </Link>
          </div>
        </header>

        <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          
          {}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter mb-2 text-white uppercase">
              INQUIRY <span className="text-[#ffcc4d]">DESK</span>
            </h1>
            <p className="text-zinc-500 font-medium tracking-wide">Review and manage the messages sent by potential clients via the contact form.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {}
            <div className="lg:col-span-12 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold italic text-white flex items-center gap-3 tracking-wide">
                  RECENT MESSAGES
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full text-[10px] font-black not-italic">{contacts.length}</span>
                </h3>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#ffcc4d]"></div>
                  <p className="text-zinc-600 font-bold tracking-widest uppercase text-[10px]">Retrieving Messages...</p>
                </div>
              ) : contacts.length === 0 ? (
                <div className="bg-[#111111] border border-dashed border-zinc-800 rounded-[32px] py-32 text-center">
                  <p className="text-zinc-500 italic">The inbox is empty. No inquiries found.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {contacts.map((contact) => (
                    <div 
                      key={contact._id} 
                      className={`group bg-[#111111] border ${selectedContact?._id === contact._id ? 'border-[#ffcc4d]/50 shadow-lg shadow-[#ffcc4d]/5' : 'border-zinc-800/50'} hover:border-zinc-600 rounded-[24px] md:rounded-[32px] p-6 md:p-8 transition-all duration-300 relative overflow-hidden`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      {}
                      <MessageSquare size={120} className="absolute -right-8 -bottom-8 text-white/[0.02] -rotate-12" />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700 text-[#ffcc4d]">
                              <User size={24} />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-[#ffcc4d] transition-colors italic leading-none">{contact.name}</h4>
                              <div className="flex items-center gap-2 mt-2">
                                <Mail size={12} className="text-zinc-500" />
                                <span className="text-sm text-zinc-500 font-medium">{contact.email}</span>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleDelete(contact._id); }}
                            className="p-3 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl border border-red-500/10 transition-all"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="mb-6 p-6 bg-black/40 border border-zinc-800/50 rounded-2xl">
                          <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                            {contact.message}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-zinc-800/50 pt-6">
                          <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                            <Clock size={12} />
                            {new Date(contact.createdAt).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-[#ffcc4d]/5 border border-[#ffcc4d]/20 rounded-full">
                            <ShieldCheck size={10} className="text-[#ffcc4d]" />
                            <span className="text-[9px] font-black text-[#ffcc4d] uppercase tracking-widest">Verified Inquiry</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {}
          {status.msg && (
            <div className={`fixed bottom-8 right-8 p-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-2xl animate-fade-up border z-50 ${status.type === "success"
              ? "text-[#ffcc4d] bg-black border-[#ffcc4d]/20"
              : "text-red-400 bg-black border-red-400/20"
              }`}>
              {status.msg}
              <button onClick={() => setStatus({ ...status, msg: "" })} className="ml-4 text-zinc-500 hover:text-white">
                <X size={14} />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
