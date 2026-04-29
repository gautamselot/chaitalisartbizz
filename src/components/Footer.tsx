export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 md:px-16 bg-primary text-white border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -mb-48 -mr-48 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-amber/5 rounded-full blur-[100px] -mt-32 -ml-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-12 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-3xl font-serif font-black text-secondary italic tracking-tighter neon-text">
              Chaitali's Artbizz
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-white/40 mt-1">
              Bespoke Resin Artistry
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            <a 
              href="https://www.instagram.com/chaitalis_artbizz/" 
              target="_blank" 
              rel="noreferrer"
              className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-white/60 hover:text-secondary transition-all flex items-center gap-2"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-white/60 hover:text-secondary transition-all"
            >
              Pinterest
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/30 font-medium">
            © 2024 Chaitali's Artbizz. Crafted with precision and soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
