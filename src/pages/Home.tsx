import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import ScrollReveal from "../components/effects/ScrollReveal";

export default function Home({ onNavigate }: { onNavigate: (path: string) => void }) {
  const services = [
    {
      title: "Floral Preservation",
      desc: "Wedding bouquets and celebratory blooms immortalized.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwAqP_oB5Or5b0ob5eFG-1xaJE3P1FA7tpPCY3YPgcdX195_EidVD1jjEbxvxoaOZM54wAMnki3oTKWVdLNwNhb5X5ctcU6ki0MQM4I4dwcrfeKAvhwokw72TuYAYzuCUoPk5nuNlqAz24ODlEIjaOrizVMiIzp-RVX-QB7ROPSKfhtECOw1O8Y-YwYS2JyzW2vuAZDGKnFbGlY89KSamxqpPAA-jCUqSQf8pMZsM72LGP-OPus-i3Um3bQolvqHw5KwLlwuMMFgI",
    },
    {
      title: "Ocean Collections",
      desc: "The serenity of the coast brought to your living room.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfnXZyz8Uh_Me_fz9jGfJAY0p66Wmk131p8ZgnKBmVSwc5SvCInpw3lj_wgeA5L1CCe7pauPZsMUIy-TPmmm_tKt1sZBUo9zUIVVp5mUbdHMtUWH6R3H3bGj5ul8yXe5OjR44MVewccefAlz7wXXTGwq-hIObRBlnGsKnjI4o_I1fPmiYT8Jw4yIf1HM-a7Z3cy2_BYVS_9k9conK0fTNx4YGc1x17YlLYGuGnsjEsPOYI4vJgkb_GGn8T_vJBDB_-44pktBJ1ur0",
    },
    {
      title: "Functional Art",
      desc: "Clocks, trays, and tables designed for modern spaces.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGlt4PXhHtO6JtdTgKwtdpfwQ_6JJFQlP5tE9y0FaALjTnEn35wvZB_juZtwxJNE5TTrTPl8l0wFu4cF1-ZezOk1An8FAe2rksTl4tsmT_SEbJdHP1jXXohx4Qpb8m76urHhmxJ6pHwVg81S9rHKOBC8_XxW79c-1ezviX4N-Vwa8hj9I2bLvgzRnPGMjYkglHOB_YS6oWYCSHIn1NuIEdU6apXI7UNN7Xl19MWBFyEFqYb1Cq3hyW-DpPIh-GIyD3rH13vidYOkI",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcL1fEJCvjrBMVDLm-HpQOwT6-rHdv0aHPTz4YW5D8dIFx6E_eLO4QgepuzAo6pYt31wcj-WmMnGrjJ7PUeMj1yUCWAobewu_5UHvp3oLLr3bKg8dmbLCY2HDVTc9yqjnVk4yihbCPnqlYdOgFwcko5kxZQVtQR43lxnoBQY8kiCzBxDBXYk58wmWKRI1TddMOiKb4J_pnpzobxsN_vnLyGBWHqxC0QOmm4hSk4GOWZ40kCDPvxLUItWu64e3fd3dEqBKJvL4EYjU" 
            alt="Resin Art Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          
          {/* Futuristic Overlay Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,114,182,0.05),transparent_50%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-16 max-w-5xl">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-[10px] font-medium tracking-[0.4em] text-secondary uppercase flex items-center gap-2">
                Bespoke Resin Artistry
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-primary mb-8 leading-[1.2] tracking-normal">
              Capturing the <span className="font-serif italic font-medium">Fluidity</span><br/> 
              <span className="text-secondary/80 tracking-widest text-sm uppercase font-sans font-bold block mt-2">of Time in clear resin</span>
            </h1>
            
            <p className="text-base md:text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-light opacity-80">
              Hand-poured masterpieces blending organic elements with precision. Transforming your moments into ethereal decor.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("gallery")}
                className="bg-primary text-white px-8 py-4 rounded-full font-serif text-lg font-medium transition-all"
              >
                View Gallery
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(244, 114, 182, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("about")}
                className="border border-primary/10 text-primary px-8 py-4 rounded-full font-serif text-lg font-medium transition-all"
              >
                Our Process
              </motion.button>
            </div>
          </ScrollReveal>
        </div>

        {/* Abstract futuristic shape */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-1/3 aspect-square hidden lg:block pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-full h-full fluid-mask bg-gradient-to-br from-secondary/30 to-primary/20 backdrop-blur-3xl border border-white/10"
          ></motion.div>
        </div>
      </section>

      {/* Services Section with Reveal */}
      <section className="py-32 px-6 md:px-16 container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Preservation Services</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-light">We specialize in preserving your most precious moments—wedding bouquets, memorial flowers, and significant mementos—encapsulated in museum-quality resin with a high-gloss futuristic finish.</p>
            </div>
            <button 
              onClick={() => onNavigate("gallery")}
              className="group text-secondary font-bold text-sm tracking-widest border-b-2 border-secondary/30 pb-2 flex items-center gap-2 hover:border-secondary transition-all"
            >
              VIEW ALL SERVICES <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx}>
              <ScrollReveal delay={idx * 0.1}>
                <div 
                  className="group cursor-pointer"
                  onClick={() => {
                    if (service.title === "Floral Preservation") onNavigate("preservation");
                    else onNavigate("gallery");
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8 bg-surface-container resin-glow border border-primary/5">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      src={service.image} 
                      alt={service.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-white font-serif text-lg font-bold">Details & Pricing</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed font-light">{service.desc}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section - Dark Futuristic */}
      <section className="py-40 px-6 md:px-16 bg-primary text-white relative overflow-hidden">
        {/* Background Depth for Section */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.2),transparent_70%)]"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative neon-border">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZsV_riDsOtiWmN9ZURykS9iZHmaFZQcZbjiCplhYe1G0Izj7bWI-z2gvruHJRLVsBPHW6qQ0bnwdcGfr1QBD_G2oAwOibbhQE0RlvsXWzWGjXV7kOW7RMSNk3ObIzK5Cs1SFOqdwSaTjOVi40AxYBS-9lIknvOVQc5z9RExkDHVoOhYl3jZK6uDKhas-_ZeWM9x-F3jxHKewv_6_Fg1-zR2HM8PHoxdw4qKQpqo-s_EZT077PxJfLBVDw2lMGJYf9mD64r0FU4jA" 
                  alt="Detail"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75"></div>
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-8 w-56 h-56 glass-dark rounded-3xl flex items-center justify-center p-8 text-center border border-white/10"
              >
                <div className="space-y-2">
                  <p className="font-bold text-4xl neon-text tracking-tighter">100+</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Custom<br/>Masterpieces</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-[1.1] tracking-tight">
              Hand-Crafted <span className="text-accent-amber">Dimensions</span> That Tell A Story.
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed font-light">
              Each piece is a portal between the organic and the digital. We use sustainably sourced hardwoods, 24k gold leafing, and UV-resistant high-gloss resins to create artifacts for the modern home.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Sustainable Teak & Oak Cyber-Frames",
                "Nano-Guard UV Resistant Artist Resin",
                "Digital-Twin Design Consultations"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <div className="p-2 rounded-lg bg-accent-amber/10 group-hover:bg-accent-amber/20 transition-colors">
                    <CheckCircle2 className="text-accent-amber" size={24} />
                  </div>
                  <span className="text-lg font-medium text-white/90">{text}</span>
                </li>
              ))}
            </ul>
            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => onNavigate("enquiry")}
               className="bg-accent-amber text-primary px-12 py-5 rounded-full font-serif font-bold text-xl neon-border hover:shadow-[0_0_30px_rgba(244,114,182,0.4)] transition-all"
            >
              Book a Consultation
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Highlight with Futuristic Stagger */}
      <section className="py-32 px-6 md:px-16 container mx-auto">
        <ScrollReveal className="text-center mb-20">
          <span className="text-[11px] font-bold tracking-[0.4em] text-secondary mb-6 block uppercase neon-text">Archive v.01</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Curated Masterpieces</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <ScrollReveal direction="right">
              <div className="group relative overflow-hidden rounded-[2.5rem] h-[500px] md:h-[600px] border border-primary/5">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADPGD6e-OCrmuoQxEOtX39k1u5AGmNdQvRi7fsy_XSt1d0ZyPF4Rx4jAwi9TCP-mJHViqWYjqXlqueJMjwPRrJAHHVSeqfIvqVUXZ-eiNTj_RyvQOCv0ch9SgyaD-J49tQEhoo1eJFPdsBWVB5Uw7MXrPCbepxulv9v3BOok_SJVBZ2DJ-7ETYujf5oONNvDFKhyWmHAzMV1mdHrOTHUh1OO73Oina1KbDrZdO9SJqCFIkhwPs3gWyzML3pYDXORd9AyxMohLmXDI" alt="Art 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-12 left-12 text-white">
                  <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4 inline-block border border-white/20">Series: Deep Space</span>
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-50/90">Celestial Abyss</h4>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="col-span-12 md:col-span-4">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="group relative overflow-hidden rounded-[2.5rem] h-[500px] md:h-[600px] border border-primary/5">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0RhyndA9kkylbBYm8VezooDNUZk4I08ObOb1o_7wWJuA1cXjOhxjT1qDfWoTCB-xnZkqUXmSrhRWAyo3L9ECQTu2FGlUPVnaKXUSvjnoW-doQrLW_PvHbKEt0QBP-euwSZwpgyriWbmbWQNJ4XEE5X2ic48Lu0Azh3lrkJnQqQoc2qwN0QAdBpiRToWO_yfa9ofBlrfQIKbOptux_79ewqHl7aume6NYLoHMlgADU1sNbOs_C0scIUAJo6KaiEo9JWhwGzygP52Q" alt="Art 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-12 left-12 text-white">
                  <h4 className="text-3xl font-bold tracking-tighter text-slate-50/90">Amber Flow</h4>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Future Core Style */}
      <section className="py-40 px-6 md:px-16 bg-surface-container relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-secondary/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter">
              Start Your <span className="text-secondary">Bespoke</span> Journey
            </h2>
            <p className="text-xl text-on-surface-variant mb-12 leading-relaxed font-light">
              Collaborate with us to manifest a unique masterpiece that resonates with your aesthetic identity.
            </p>
            <div className="flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("enquiry")}
                className="bg-primary text-white px-14 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:shadow-2xl transition-all magnetic-button"
              >
                Initialize Custom Order
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
