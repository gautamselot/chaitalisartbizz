import { motion } from "motion/react";
import { Play, Instagram, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function Preservation() {
  const varmalaItems = [
    {
      title: "Bridal Varmala Preservation - Hexagon",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwAqP_oB5Or5b0ob5eFG-1xaJE3P1FA7tpPCY3YPgcdX195_EidVD1jjEbxvxoaOZM54wAMnki3oTKWVdLNwNhb5X5ctcU6ki0MQM4I4dwcrfeKAvhwokw72TuYAYzuCUoPk5nuNlqAz24ODlEIjaOrizVMiIzp-RVX-QB7ROPSKfhtECOw1O8Y-YwYS2JyzW2vuAZDGKnFbGlY89KSamxqpPAA-jCUqSQf8pMZsM72LGP-OPus-i3Um3bQolvqHw5KwLlwuMMFgI",
      description: "A complete varmala set preserved in our signature 12-inch hexagonal block, maintaining the vibrant reds of the roses."
    },
    {
      title: "Memorial Varmala - Square Block",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8dzTEtahxfgXNOp6A0y3Mo89OgR0xc7NsO2PpJdPG1NXFR9uzbHRMNoKDpAZQo-s6cKw7sOX5UdCqp2aSqovpwbqEefx9r7JLCODjMYKe--tVgviZNEfPpAMnW8-S111ZmM-6-dC1CzRrwLZUFqAE7RKu69POInbNILr-fZejIxx19vsFOQHa42roT9zND9yuhmeEBu_u_qTgA-oeEEXh0Un4-VOl5xCN-hG_QcLZV4kackb-M8s03BOuTtcdzN3LT_T195--gp8",
      description: "Preserving the sanctity of the wedding garland in a museum-grade UV resistant resin square block."
    }
  ];

  const reels = [
    { id: 1, url: "https://www.instagram.com/reel/DT97WCcjZGo/", tag: "New" },
    { id: 2, url: "https://www.instagram.com/reel/DEMQUjPtw9_/", tag: "Featured" },
    { id: 3, url: "https://www.instagram.com/reel/DT4qMB6EsqH/", tag: "Collection" }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Varmala Hero */}
      <section className="px-6 md:px-16 container mx-auto mb-32">
        <div className="max-w-4xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <ShieldCheck className="text-secondary" size={20} />
            <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">Premium Preservation</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-8"
          >
            Preserving the Soul of Your <span className="text-secondary italic">Varmala</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-on-surface-variant leading-relaxed"
          >
            Your wedding garland is more than just flowers; it's the sacred bond of your union. At Chaitali's Artbizz, we specialize in advanced resin techniques that keep these blooms as vibrant as the day you said "I do."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {varmalaItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-8 shadow-xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-secondary/20">
                  <Heart className="text-secondary fill-secondary" size={14} />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Handmade with Love</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reel/Video Section */}
      <section className="bg-primary py-32 px-6 md:px-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.2),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Artistry in Motion</h2>
              <p className="text-white/60 leading-relaxed text-lg italic font-light">
                "Words can describe the end result, but only motion can capture the magic of the process."
              </p>
            </div>
            <a 
              href="https://www.instagram.com/chaitalis_artbizz/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-secondary/10"
            >
              <Instagram size={20} /> Follow Our Journey
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reels.map((reel, idx) => (
              <motion.div 
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-[9/16] rounded-[40px] overflow-hidden border border-white/10 bg-teal-900/20 shadow-2xl flex flex-col group"
              >
                <iframe 
                  src={`${reel.url}embed`} 
                  className="w-full grow border-none"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <a 
                  href={reel.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="bg-white/10 backdrop-blur p-4 rounded-full border border-white/20 mb-4 scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="text-white fill-white" size={32} />
                  </div>
                  <span className="text-white font-bold text-[10px] tracking-widest uppercase bg-secondary/80 px-4 py-2 rounded-full">Explore Reel</span>
                </a>
                <div className="absolute top-4 right-4 pointer-events-none">
                  <div className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">{reel.tag}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 px-6 md:px-16 text-center container mx-auto">
         <Sparkles className="mx-auto text-secondary mb-8" size={48} />
         <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">The Preservation Promise</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div>
               <h4 className="font-bold text-primary text-xl mb-4">Anti-Yellowing Tech</h4>
               <p className="text-on-surface-variant text-sm leading-relaxed">We use the world's leading UV-stabilized resin, ensuring your piece remains crystal clear for decades.</p>
            </div>
            <div>
               <h4 className="font-bold text-primary text-xl mb-4">Botanical Chemistry</h4>
               <p className="text-on-surface-variant text-sm leading-relaxed">Our advanced silica dehydration method locks in the DNA-level color palette of your fresh flowers.</p>
            </div>
            <div>
               <h4 className="font-bold text-primary text-xl mb-4">Insured Shipping</h4>
               <p className="text-on-surface-variant text-sm leading-relaxed">Every precious memory is tracked and insured from the moment it leaves your door to when it returns as art.</p>
            </div>
         </div>
         <button className="mt-20 bg-secondary text-primary px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-secondary/20 transition-all">
            Inquire About Your Date
         </button>
      </section>
    </div>
  );
}
