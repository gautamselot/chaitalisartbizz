import { motion } from "motion/react";
import { Home, Image, Flower2, Info, MessageSquare } from "lucide-react";

interface MobileBottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function MobileBottomNav({ currentPath, onNavigate }: MobileBottomNavProps) {
  const items = [
    { name: "Home", path: "home", icon: Home },
    { name: "Gallery", path: "gallery", icon: Image },
    { name: "Art", path: "preservation", icon: Flower2 },
    { name: "About", path: "about", icon: Info },
    { name: "Contact", path: "enquiry", icon: MessageSquare },
  ];

  return (
    <nav id="mobile-bottom-nav" className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-50">
      <div 
        id="mobile-nav-container" 
        className="backdrop-blur-xl bg-white/95 rounded-full px-4 py-2 flex justify-between items-center shadow-[0_10px_30px_rgba(244,114,182,0.2)] border border-secondary/30"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          
          return (
            <button
              id={`nav-item-${item.path}`}
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className="relative flex flex-col items-center justify-center p-2 min-w-[60px]"
            >
              <motion.div
                animate={{ 
                  scale: isActive ? 1.2 : 1,
                  y: isActive ? -2 : 0 
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon 
                  size={20} 
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className={`transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-slate-400'}`} 
                />
              </motion.div>
              
              <span className={`text-[9px] uppercase tracking-wider font-bold mt-1 transition-all duration-300 ${isActive ? 'text-secondary opacity-100' : 'text-slate-400 opacity-80'}`}>
                {item.name}
              </span>

              {isActive && (
                <motion.div 
                  layoutId="bottom-nav-glow"
                  className="absolute -top-1 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_12px_#f472b6]"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
