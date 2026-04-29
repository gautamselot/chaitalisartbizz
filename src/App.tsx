import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Enquiry from "./pages/Enquiry";
import Preservation from "./pages/Preservation";
import InteractiveBackground from "./components/effects/InteractiveBackground";

export default function App() {
  const [currentPath, setCurrentPath] = useState("home");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Artificial delay for smooth entry
    const timer = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case "home":
        return <Home onNavigate={setCurrentPath} />;
      case "gallery":
        return <Gallery />;
      case "about":
        return <About />;
      case "enquiry":
        return <Enquiry />;
      case "preservation":
        return <Preservation />;
      default:
        return <Home onNavigate={setCurrentPath} />;
    }
  };

  if (!isReady) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-primary z-[100] overflow-hidden">
        <InteractiveBackground />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="relative w-24 h-24 mb-8 mx-auto">
            <div className="absolute inset-0 border-2 border-secondary/20 rounded-full"></div>
            <div className="absolute inset-0 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-4 border-2 border-white/10 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
          </div>
          <p className="font-serif italic text-white text-2xl tracking-[0.3em] font-light animate-pulse neon-text">INITIALIZING ARTISTRY</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <InteractiveBackground />
      <Navbar currentPath={currentPath} onNavigate={(path) => {
        setCurrentPath(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
      
      <MobileBottomNav currentPath={currentPath} onNavigate={(path) => {
        setCurrentPath(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
      
      <main className="min-h-[80vh] pb-32 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
