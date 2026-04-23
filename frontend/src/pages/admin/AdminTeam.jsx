import { useState, useEffect } from "react";
import { 
  Edit3, Trash2, Plus, X, Save, ExternalLink, 
  User, Image as ImageIcon, Menu, ChevronRight,
  Globe, Activity, Circle
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminTeam() {
  const [members, setMembers] = useState([]);
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
    name: "",
    role: "",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    socials: {
      fb: "#",
      ig: "#",
      li: "#"
    }
  };

  const [formData, setFormData] = useState(initialFormState);

  
  const fetchMembers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/team");
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching team:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: isEditing ? "Updating..." : "Adding...", type: "info" });

    const url = isEditing
      ? `http://localhost:5050/api/team/${editId}`
      : "http://localhost:5050/api/team";

    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, msg: `Member ${isEditing ? "Updated" : "Added"} Successfully!`, type: "success" });
        resetForm();
        fetchMembers();
      } else {
        setStatus({ loading: false, msg: data.error || "Operation failed", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, msg: "Server connection error", type: "error" });
    }
  };

  
  const handleEdit = (member) => {
    setIsEditing(true);
    setEditId(member._id);
    setFormData({
      name: member.name,
      role: member.role,
      image: member.image,
      socials: member.socials || initialFormState.socials,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this team member?")) return;

    try {
      const response = await fetch(`http://localhost:5050/api/team/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ loading: false, msg: "Member Deleted Successfully!", type: "success" });
        fetchMembers();
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
              <span className="text-white">Team Management</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/team" className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-all flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest text-zinc-400">
              <ExternalLink size={14} />
              View Page
            </Link>
            <button onClick={resetForm} className="px-5 py-2.5 rounded-xl bg-[#ffcc4d] text-black hover:bg-yellow-500 transition-all flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest">
              <Plus size={14} />
              Add Member
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          
          {}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter mb-2 text-white uppercase">
              TEAM <span className="text-[#ffcc4d]">CREW</span>
            </h1>
            <p className="text-zinc-500 font-medium tracking-wide">Manage your professional team and their social presence.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">

            {}
            <div className="lg:col-span-5">
              <div className={`bg-[#111111] border border-zinc-800/50 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-2xl transition-all duration-500 lg:sticky lg:top-32 ${isEditing ? 'ring-2 ring-[#ffcc4d]/30 shadow-[#ffcc4d]/5' : ''}`}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold italic text-white flex items-center gap-3">
                    {isEditing ? <Edit3 size={20} className="text-[#ffcc4d]" /> : <Plus size={20} className="text-[#ffcc4d]" />}
                    {isEditing ? "EDIT MEMBER" : "NEW MEMBER"}
                  </h2>
                  {isEditing && (
                    <button onClick={resetForm} className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-500 transition-all">
                      <X size={20} />
                    </button>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="E.g. Jonathan Doe"
                      className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all placeholder:text-zinc-700 text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Role / Position</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      placeholder="E.g. Lead Detailer"
                      className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all placeholder:text-zinc-700 text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Profile Image URL</label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        placeholder="Paste image URL here..."
                        className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 pl-12 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all placeholder:text-zinc-700 text-white font-medium italic"
                      />
                      <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#ffcc4d] transition-colors" size={20} />
                    </div>
                  </div>

                  <div className="pt-2">
                     <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1 mb-4">Social Network URLs</p>
                     <div className="grid gap-4">
                        <div className="relative group">
                          <input
                            type="text"
                            name="socials.fb"
                            value={formData.socials.fb}
                            onChange={handleChange}
                            placeholder="Facebook URL"
                            className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-xl px-4 py-3 pl-12 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all text-sm text-white"
                          />
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        </div>
                        <div className="relative group">
                          <input
                            type="text"
                            name="socials.ig"
                            value={formData.socials.ig}
                            onChange={handleChange}
                            placeholder="Instagram URL"
                            className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-xl px-4 py-3 pl-12 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all text-sm text-white"
                          />
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        </div>
                        <div className="relative group">
                          <input
                            type="text"
                            name="socials.li"
                            value={formData.socials.li}
                            onChange={handleChange}
                            placeholder="LinkedIn URL"
                            className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-xl px-4 py-3 pl-12 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all text-sm text-white"
                          />
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        </div>
                     </div>
                  </div>

                  <button
                    disabled={status.loading}
                    type="submit"
                    className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm transition-all transform hover:translate-y-[-2px] active:translate-y-[0] mt-4 ${isEditing
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-[#ffcc4d] text-black hover:bg-yellow-500 shadow-xl shadow-[#ffcc4d]/10"
                      } disabled:opacity-50 disabled:transform-none`}
                  >
                    {status.loading ? (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        {isEditing ? <Save size={18} /> : <Plus size={18} />}
                        {isEditing ? "Save Changes" : "Create Profile"}
                      </>
                    )}
                  </button>

                  {status.msg && (
                    <div className={`p-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest animate-fade-up text-center border ${status.type === "success"
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
                  ACTIVE ROSTER
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full text-[10px] font-black not-italic">{members.length}</span>
                </h3>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#ffcc4d]"></div>
                  <p className="text-zinc-600 font-bold tracking-widest uppercase text-[10px]">Calling the Crew...</p>
                </div>
              ) : members.length === 0 ? (
                <div className="bg-[#111111] border border-dashed border-zinc-800 rounded-[32px] py-32 text-center">
                  <p className="text-zinc-500 italic">No team members found. Start recruiting!</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {members.map((member) => (
                    <div key={member._id} className="group bg-[#111111] border border-zinc-800/50 hover:border-zinc-700 rounded-[32px] overflow-hidden transition-all duration-500 hover:translate-y-[-4px]">
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        
                        {}
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-[10px] font-black text-[#ffcc4d] uppercase tracking-[0.2em] mb-1">{member.role}</p>
                          <h4 className="text-xl font-bold text-white italic tracking-tight">{member.name}</h4>
                        </div>

                        {}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                          <button
                            onClick={() => handleEdit(member)}
                            className="p-3 rounded-xl bg-white text-black hover:bg-[#ffcc4d] transition-all shadow-xl"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(member._id)}
                            className="p-3 rounded-xl bg-black/80 backdrop-blur-md text-red-400 hover:bg-red-500 hover:text-white transition-all shadow-xl border border-white/10"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-6 flex items-center justify-between border-t border-zinc-800/50">
                        <div className="flex gap-4">
                           <a href={member.socials?.fb} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-[#ffcc4d] transition-colors"><Globe size={16} /></a>
                           <a href={member.socials?.ig} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-[#ffcc4d] transition-colors"><Activity size={16} /></a>
                           <a href={member.socials?.li} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-[#ffcc4d] transition-colors"><Circle size={16} /></a>
                        </div>
                        <Link to="/team" className="text-[10px] font-black text-zinc-600 uppercase tracking-widest hover:text-white transition-colors">Public Profile</Link>
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
