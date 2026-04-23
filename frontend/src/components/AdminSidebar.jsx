import { Link, useLocation } from "react-router-dom";
import { ChevronsLeft, X } from "lucide-react";

export default function AdminSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();

  const menuItems = [
    { name: "Blogs", path: "/admin-blog" },
    { name: "Services", path: "/admin-service" },
    { name: "Pricing", path: "/admin-pricing" },
    { name: "Testimonials", path: "/admin-testimonial" },
    { name: "FAQs", path: "/admin-faq" },
    { name: "Team", path: "/admin-team" },
    { name: "Contacts", path: "/admin-contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-zinc-800 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full py-10">
          {}
          <div className="px-8 mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black italic tracking-tighter text-[#ffcc4d]">ADMIN PANEL</h2>
              <p className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] mt-1">ELUXEN DETAILING</p>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 text-zinc-500 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {}
          <nav className="flex-1 px-4 space-y-1">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                onClick={() => {
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`block px-6 py-3 rounded-xl transition-all duration-200 ${
                  isActive(item.path) 
                    ? "bg-[#ffcc4d] text-black font-black" 
                    : "text-zinc-500 hover:text-white font-bold"
                } text-sm tracking-wide`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {}
          <div className="px-4 mt-auto">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-6 py-4 text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest border-t border-zinc-900"
            >
              <ChevronsLeft size={16} />
              Back to Site
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

