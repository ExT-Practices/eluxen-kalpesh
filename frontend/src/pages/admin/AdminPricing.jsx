import { useState, useEffect } from "react";
import { 
  Edit3, Trash2, Plus, X, Save, ExternalLink, 
  ChevronRight, Menu,
  CheckCircle2, PlusCircle, MinusCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminPricing() {
  const [plans, setPlans] = useState([]);
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
    description: "",
    price: "",
    features: [""],
  };

  const [formData, setFormData] = useState(initialFormState);

  
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/pricing");
      const data = await response.json();
      setPlans(data);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: isEditing ? "Updating..." : "Creating...", type: "info" });

    const url = isEditing
      ? `http://localhost:5050/api/pricing/${editId}`
      : "http://localhost:5050/api/pricing";

    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, msg: `Plan ${isEditing ? "Updated" : "Created"} Successfully!`, type: "success" });
        resetForm();
        fetchPlans();
      } else {
        setStatus({ loading: false, msg: data.error || "Operation failed", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, msg: "Server connection error", type: "error" });
    }
  };

  
  const handleEdit = (plan) => {
    setIsEditing(true);
    setEditId(plan._id);
    setFormData({
      name: plan.name,
      description: plan.description,
      price: plan.price,
      features: plan.features && plan.features.length > 0 ? plan.features : [""],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this pricing plan?")) return;

    try {
      const response = await fetch(`http://localhost:5050/api/pricing/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ loading: false, msg: "Plan Deleted Successfully!", type: "success" });
        fetchPlans();
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
              <span className="text-white">Pricing Plans</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/pricing" className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-all flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest text-zinc-400">
              <ExternalLink size={14} />
              View Site
            </Link>
            <button onClick={resetForm} className="px-5 py-2.5 rounded-xl bg-[#ffcc4d] text-black hover:bg-yellow-500 transition-all flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest">
              <Plus size={14} />
              New Plan
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          
          {}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter mb-2 text-white uppercase">
              PRICING <span className="text-[#ffcc4d]">ARCHITECT</span>
            </h1>
            <p className="text-zinc-500 font-medium tracking-wide">Design and manage your service packages and subscription models.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">

            {}
            <div className="lg:col-span-5">
              <div className={`bg-[#111111] border border-zinc-800/50 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-2xl transition-all duration-500 ${isEditing ? 'ring-2 ring-[#ffcc4d]/30 shadow-[#ffcc4d]/5' : ''}`}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold italic text-white flex items-center gap-3">
                    {isEditing ? <Edit3 size={20} className="text-[#ffcc4d]" /> : <Plus size={20} className="text-[#ffcc4d]" />}
                    {isEditing ? "EDIT PLAN" : "NEW PLAN"}
                  </h2>
                  {isEditing && (
                    <button onClick={resetForm} className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-500 transition-all">
                      <X size={20} />
                    </button>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Plan Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="E.g. Basic Detailing"
                      className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all placeholder:text-zinc-700 text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Base Price ($)</label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                      placeholder="E.g. 199"
                      className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all placeholder:text-zinc-700 text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="2"
                      placeholder="Short plan summary..."
                      className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-[#ffcc4d]/5 outline-none transition-all resize-none placeholder:text-zinc-700 text-white font-medium"
                    ></textarea>
                  </div>

                  {}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Plan Features</label>
                      <button 
                        type="button" 
                        onClick={addFeature}
                        className="text-[#ffcc4d] hover:text-yellow-500 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest"
                      >
                        <PlusCircle size={14} /> Add Line
                      </button>
                    </div>
                    <div className="space-y-3">
                      {formData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="flex-1 relative">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => handleFeatureChange(index, e.target.value)}
                              placeholder={`Feature #${index + 1}`}
                              className="w-full bg-black/40 border border-zinc-800 focus:border-[#ffcc4d]/50 rounded-xl px-4 py-3 pl-10 outline-none transition-all text-sm text-zinc-300"
                            />
                            <CheckCircle2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600" />
                          </div>
                          <button 
                            type="button" 
                            onClick={() => removeFeature(index)}
                            className="p-3 text-zinc-600 hover:text-red-500 transition-colors"
                          >
                            <MinusCircle size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
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
                        {isEditing ? "Update Plan" : "Create Plan"}
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
                  ACTIVE PACKAGES
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full text-[10px] font-black not-italic">{plans.length}</span>
                </h3>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#ffcc4d]"></div>
                  <p className="text-zinc-600 font-bold tracking-widest uppercase text-[10px]">Syncing Rates...</p>
                </div>
              ) : plans.length === 0 ? (
                <div className="bg-[#111111] border border-dashed border-zinc-800 rounded-[32px] py-32 text-center">
                  <p className="text-zinc-500 italic">No pricing plans found. Architect your first package.</p>
                </div>
              ) : (
                <div className="grid gap-5">
                  {plans.map((plan) => (
                    <div key={plan._id} className="group bg-[#111111] border border-zinc-800/50 hover:border-zinc-700 rounded-[24px] p-6 flex flex-col gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black text-[#ffcc4d] uppercase tracking-widest bg-[#ffcc4d]/5 px-2 py-0.5 rounded border border-[#ffcc4d]/10">PACKAGE</span>
                            <h4 className="text-xl font-bold text-white italic">{plan.name}</h4>
                          </div>
                          <p className="text-zinc-500 text-sm font-medium">{plan.description}</p>
                        </div>
                        <div className="flex items-end gap-1">
                          <span className="text-sm font-bold text-zinc-500 mb-1">$</span>
                          <span className="text-4xl font-black text-white italic">{plan.price}</span>
                          <span className="text-xs font-bold text-zinc-600 mb-1">/ VISIT</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 pb-6 border-b border-zinc-800/50">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                            <CheckCircle2 size={12} className="text-[#ffcc4d]" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => handleEdit(plan)}
                          className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-bold text-[10px] uppercase tracking-widest transition-all flex items-center gap-2"
                        >
                          <Edit3 size={14} />
                          Modify
                        </button>
                        <button
                          onClick={() => handleDelete(plan._id)}
                          className="p-2.5 rounded-xl bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/10 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
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
