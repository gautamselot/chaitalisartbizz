import { motion } from "motion/react";
import { Instagram } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const navItems = [
    { name: "Home", path: "home" },
    { name: "Gallery", path: "gallery" },
    { name: "Preservation", path: "preservation" },
    { name: "About", path: "about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-16 py-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto glass-panel rounded-full h-20 px-8 flex justify-between items-center border border-white/20 shadow-[0_8px_32px_rgba(244,114,182,0.1)]">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="text-4xl md:text-6xl font-serif font-black tracking-tighter text-primary italic flex flex-col leading-none">
            <span className="text-secondary neon-text">Chaitali's</span>
            <span className="text-[12px] tracking-[0.8em] uppercase font-sans font-bold -mt-2 opacity-60 group-hover:opacity-100 transition-opacity">Artbizz</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`font-sans text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-300 relative
                ${currentPath === item.path 
                  ? "text-secondary" 
                  : "text-primary/40 hover:text-primary"
                }`}
            >
              {item.name}
              {currentPath === item.path && (
                <motion.div 
                  layoutId="nav-glow"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full shadow-[0_0_8px_#f472b6]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/chaitalis_artbizz/" 
            target="_blank" 
            rel="noreferrer"
            className="text-primary/40 hover:text-secondary transition-all hover:scale-110"
            title="Follow us on Instagram"
          >
            <Instagram size={28} strokeWidth={1.5} />
          </a>
          <button 
            onClick={() => onNavigate("enquiry")}
            className="hidden sm:block bg-primary text-white px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/10"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
