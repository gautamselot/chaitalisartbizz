import { motion } from "motion/react";

export default function About() {
  const steps = [
    {
      num: "01",
      title: "Botanical Preparation",
      desc: "Flowers are carefully dehydrated using specialized silica gels to retain their volume and vibrant color profile before encapsulation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD0onRuiRLESn5wORGHqRW7GssMZEcM-ApwLjGEB4qN3fp_gxeTbl2Dy2glmCkl7zedgzx9xHJ9rcAhcXW0ZyuOwMXZCy_rSAcxGgC1R3UQi6XwqecteyOrf9zlqJhvmhgb7Sqx0nGR_ZeLzXMZ5ILSrp8btgjMVRZMOEs2Hsl3cNxWYOJyqsJ5t8kOsCQQspXsnExDhttGTZ6pipK23a65cccnQGlVQHRLv1i-IzWeg2ILBpcCkWh1qCAzYZoq-r1SzvS7jEeVW0"
    },
    {
      num: "02",
      title: "Precision Pouring",
      desc: "Each piece is poured in multiple layers over several days to ensure clarity and prevent heat damage to delicate organic specimens.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlb876y7Mm1mFN6om07NrX5s2DOWUfQ9b5vosQUdEvWUxtvLK4W5srGd_axTbSXNwbqS3HRp6ZdvsBAROqWoLeCBXcnqZ9NdpVnhTrySl8Pp2WikYePPw3uopUfACwMd0QNaCkzIawUXCYR3_AA0obG_v4GsKfFC3-enjAvYXYI8vBQYVg2xsRQFOgaTvdWfrtr2IDT_ffMgGTW1yYn3vYh34naoYvWl7kkhuHU_kma1SKlyQWSwH57n5NdtrlUlsJYaI-J3O_bdA"
    },
    {
      num: "03",
      title: "The Refinement",
      desc: "The final piece is diamond-sanded and hand-polished to achieve an ultra-high gloss finish that mirrors traditional glass art.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvTQ1ninwg9Mna-2RSEduv5SMvix1OdTEYOqvjmXRwqhDTsua2nIPKw0QSmVpP2oIGyMiK3WAzCuj3wQxW4jLDqcDe7pUKi7vaUtIDfimN8PbaW-HzM9FIAP6IKh1Iay4cbH-flIWvtNhun_F6rDrSA3ZBgfd99rQCS9KSTNZyQnvfooNqW3Bc8UHI_FfaeQkxAcaujbYV9hckc4AD79QTD0uAkkOcvSCQy5saZAbVAdVFlcZiBuUnOf_M4Yq4OrKKZuv337bpOtw"
    }
  ];

  return (
    <div className="pt-32">
      {/* Intro Section */}
      <section className="px-6 md:px-16 container mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-[10px] font-bold tracking-[0.4em] text-secondary uppercase mb-4 block"
            >
              The Artist
            </motion.span>
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-bold text-primary mb-8"
            >
              Meet Chaitali
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-lg text-on-surface-variant leading-relaxed mb-6"
            >
              Chaitali has been pushing the boundaries of resin as a fine art medium. Her work is characterized by a deep respect for organic forms and a technical precision that ensures every piece is both a visual journey and a durable heirloom.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-on-surface-variant leading-relaxed mb-10"
            >
              What began with a passion for preserving nature's beauty has blossomed into a full-scale artisanal studio, serving clients globally who seek a sophisticated way to hold onto their most precious memories.
            </motion.p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-primary">1500+</p>
                <p className="text-[10px] font-bold tracking-widest text-secondary uppercase">Blooms Preserved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-[10px] font-bold tracking-widest text-secondary uppercase">Exhibitions</p>
              </div>
            </div>
          </div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-[40px] transform rotate-6 scale-95"></div>
            <img 
               className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10" 
               src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop" 
               alt="Artist Painting"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-surface-container py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">The Artisanal Process</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Resin art is a game of patience and chemistry. Every masterpiece goes through a rigorous four-week journey from concept to completion.</p>
          </div>

          <div className="space-y-32">
            {steps.map((step, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="text-6xl font-serif font-black text-secondary/10 mb-[-30px] leading-none">{step.num}</div>
                  <h3 className="text-3xl font-bold text-primary mb-6 relative z-10 pl-4 border-l-4 border-secondary">{step.title}</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed text-balance">
                    {step.desc}
                  </p>
                </div>
                <div className="lg:w-1/2 w-full aspect-video rounded-3xl overflow-hidden shadow-xl resin-glow transition-transform hover:scale-[1.02] duration-500">
                  <img className="w-full h-full object-cover" src={step.image} alt={step.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
