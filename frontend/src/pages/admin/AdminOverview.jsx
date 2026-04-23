import { useState, useEffect } from "react";
import { 
  BarChart, User, MessageSquare, Star, 
  TrendingUp, TrendingDown, ArrowUpRight, 
  Menu, ChevronRight, Activity, Calendar,
  ArrowRight, MousePointer2, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminOverview() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [stats, setStats] = useState({
    contacts: 0,
    testimonials: 0,
    blogs: 0,
    services: 0
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Fetch real counts if possible, otherwise use mocks
    const fetchCounts = async () => {
      try {
        const [c, t, b, s] = await Promise.all([
          fetch("http://localhost:5050/api/contact").then(res => res.json()),
          fetch("http://localhost:5050/api/testimonials").then(res => res.json()),
          fetch("http://localhost:5050/api/blogs").then(res => res.json()),
          fetch("http://localhost:5050/api/services").then(res => res.json()),
        ]);
        setStats({
          contacts: c.length || 0,
          testimonials: t.length || 0,
          blogs: b.length || 0,
          services: s.length || 0
        });
      } catch (e) {
        console.error("Stats fetch error", e);
      }
    };
    fetchCounts();
  }, []);

  const performanceCards = [
    { label: "Inquiries", value: stats.contacts, trend: "+12%", up: true, icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Reviews", value: stats.testimonials, trend: "+5.4%", up: true, icon: Star, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { label: "Blogs", value: stats.blogs, trend: "+18%", up: true, icon: Activity, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Services", value: stats.services, trend: "-2.1%", up: false, icon: TrendingDown, color: "text-rose-400", bg: "bg-rose-400/10" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans overflow-x-hidden">
      <AdminSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-64' : 'pl-0'}`}>
        
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-800/50 px-4 md:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 bg-zinc-900 rounded-xl">
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              <span>Admin</span>
              <ChevronRight size={12} />
              <span className="text-white font-black italic">Command Center</span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden xs:flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">System Online</span>
            </div>
            <Link to="/" className="text-zinc-500 hover:text-white transition-colors p-2 bg-zinc-900 rounded-xl sm:bg-transparent sm:p-0">
              <ExternalLink size={18} />
            </Link>
          </div>
        </header>

        <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
               <span className="px-3 py-1 bg-[#ffcc4d]/10 text-[#ffcc4d] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#ffcc4d]/20">Performance Dashboard</span>
               <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black italic tracking-tighter mb-4 text-white uppercase">
              ADMIN <span className="text-[#ffcc4d]">OVERVIEW</span>
            </h1>
            <p className="text-zinc-500 text-sm md:text-base font-medium tracking-wide max-w-xl">
              Welcome back, Admin. Here is the latest performance data for Eluxen Detailing’s digital operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {performanceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="bg-[#111111] border border-zinc-800/50 rounded-[24px] md:rounded-[32px] p-6 hover:border-[#ffcc4d]/30 transition-all group">
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <div className={`p-3 md:p-4 rounded-2xl ${card.bg} ${card.color}`}>
                      <Icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full ${card.up ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                      {card.trend}
                      {card.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    </div>
                  </div>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">{card.label}</p>
                  <h4 className="text-2xl md:text-3xl font-bold text-white italic tracking-tighter">{card.value}</h4>
                </div>
              );
            })}
          </div>

          {/* Complex Layout Section */}
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* Main Chart Placeholder */}
            <div className="lg:col-span-8">
              <div className="bg-[#111111] border border-zinc-800/50 rounded-[24px] md:rounded-[32px] overflow-hidden">
                <div className="p-6 md:p-8 border-b border-zinc-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <h3 className="text-base md:text-lg font-bold italic text-white flex items-center gap-3 uppercase">
                    <Activity size={20} className="text-[#ffcc4d]" />
                    TRAFFIC ANALYSIS
                  </h3>
                  <div className="flex gap-2">
                    {['24h', '7d', '30d'].map(t => (
                      <button key={t} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${t === '7d' ? 'bg-[#ffcc4d] text-black' : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-12 h-64 md:h-80 flex items-end justify-between gap-2 md:gap-4">
                  {/* Mock Bar Chart */}
                  {[60, 45, 80, 55, 90, 70, 85, 40, 65, 80, 50, 75].map((h, i) => (
                    <div key={i} className="flex-1 group relative">
                      <div 
                        className="bg-gradient-to-t from-[#ffcc4d]/40 to-[#ffcc4d] rounded-t-lg md:rounded-t-xl transition-all duration-700 hover:brightness-125"
                        style={{ height: `${h}%` }}
                      ></div>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-xl hidden md:block">
                        {h * 12}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Highlights */}
            <div className="lg:col-span-4 space-y-6">
               <div className="bg-[#111111] border border-zinc-800/50 rounded-[24px] md:rounded-[32px] p-6 md:p-8">
                  <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-3 italic">
                    <TrendingUp size={16} className="text-[#ffcc4d]" />
                    QUICK ACTIONS
                  </h3>
                  <div className="space-y-3">
                    <Link to="/admin-blog" className="flex items-center justify-between p-4 bg-zinc-900 rounded-2xl border border-zinc-800/50 hover:border-[#ffcc4d]/50 transition-all group">
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-white">New Blog Post</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/admin-service" className="flex items-center justify-between p-4 bg-zinc-900 rounded-2xl border border-zinc-800/50 hover:border-[#ffcc4d]/50 transition-all group">
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-white">Update Services</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/admin-testimonial" className="flex items-center justify-between p-4 bg-zinc-900 rounded-2xl border border-zinc-800/50 hover:border-[#ffcc4d]/50 transition-all group">
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-white">Manage Reviews</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
               </div>

               <div className="bg-gradient-to-br from-[#ffcc4d] to-yellow-600 rounded-[24px] md:rounded-[32px] p-6 md:p-8 text-black shadow-2xl shadow-[#ffcc4d]/10">
                  <h3 className="text-lg md:text-xl font-black italic tracking-tighter mb-2">SYSTEM TIP</h3>
                  <p className="text-black/70 text-[10px] md:text-xs font-bold leading-relaxed mb-6">
                    Updating your blog twice a week can increase your organic reach by up to 40%. Start writing today.
                  </p>
                  <Link to="/admin-blog" className="w-full py-4 bg-black text-white rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
                    <MousePointer2 size={16} />
                    Go to Editor
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
