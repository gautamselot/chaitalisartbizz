import { motion } from "motion/react";
import { useState } from "react";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const items = [
    { id: 1, category: "clock", title: "Midnight Bloom Clock", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGlt4PXhHtO6JtdTgKwtdpfwQ_6JJFQlP5tE9y0FaALjTnEn35wvZB_juZtwxJNE5TTrTPl8l0wFu4cF1-ZezOk1An8FAe2rksTl4tsmT_SEbJdHP1jXXohx4Qpb8m76urHhmxJ6pHwVg81S9rHKOBC8_XxW79c-1ezviX4N-Vwa8hj9I2bLvgzRnPGMjYkglHOB_YS6oWYCSHIn1NuIEdU6apXI7UNN7Xl19MWBFyEFqYb1Cq3hyW-DpPIh-GIyD3rH13vidYOkI", span: "col-span-12 md:col-span-6 h-[500px]" },
    { id: 2, category: "preservation", title: "Wedding Bouquet Sphere", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8dzTEtahxfgXNOp6A0y3Mo89OgR0xc7NsO2PpJdPG1NXFR9uzbHRMNoKDpAZQo-s6cKw7sOX5UdCqp2aSqovpwbqEefx9r7JLCODjMYKe--tVgviZNEfPpAMnW8-S111ZmM-6-dC1CzRrwLZUFqAE7RKu69POInbNILr-fZejIxx19vsFOQHa42roT9zND9yuhmeEBu_u_qTgA-oeEEXh0Un4-VOl5xCN-hG_QcLZV4kackb-M8s03BOuTtcdzN3LT_T195--gp8", span: "col-span-12 md:col-span-6 h-[500px]" },
    { id: 3, category: "wallart", title: "Emerald Shoreline", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0hIA8-qQAwB8NUcG3196dbmsLxSM9A-GrlbKfFw_5d8FkJ2oJQ1KAFtcYEX7d6xmacExVIm8mpuxHXCXIuOTefOVT-70_rVTEEVM84q0uqRzGCECbAk8M_iBzgzb65iepX_7mi3tMjb7N0wnvvHUyRyQjzZskSeSpPHRrF6cDADRlfOMqwmaovQ2pAdcoGKpM9EFLicbs_5_azJBg3PMlu1z0l2FHaW9oXeaBooffldBTEiJlyYCZqjoF2RYSD2L86L7b5s2-8MQ", span: "col-span-12 md:col-span-4 h-[350px]" },
    { id: 4, category: "functional", title: "Stardust Serving Tray", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgcREoY9eNc72d1d8tNB03O9tmhkGjK-arXKVKCV-4v24VYRTdQC5ghZOGkvOyr06dcq_8GUpiNLqb_o2v8EHlOVfE5jbrcvzx__qSVS9OHQ-DIAlDup_f3p8SrEUXF9a21jC_jYezPaogBP7rBtjLhwKW0C9vKlHN9hTvyEB01HBxiWC4pxKnWfAXaRv3pu-v0SdZmRG4V5sLdD1pDwXl9C549ROzaGS8GHb3SCqBJeAjGF3k7iKLNBpth-z54A-3DAEtBBO2l4I", span: "col-span-12 md:col-span-4 h-[350px]" },
    { id: 5, category: "wallart", title: "Nebula Dreams", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADPGD6e-OCrmuoQxEOtX39k1u5AGmNdQvRi7fsy_XSt1d0ZyPF4Rx4jAwi9TCP-mJHViqWYjqXlqueJMjwPRrJAHHVSeqfIvqVUXZ-eiNTj_RyvQOCv0ch9SgyaD-J49tQEhoo1eJFPdsBWVB5Uw7MXrPCbepxulv9v3BOok_SJVBZ2DJ-7ETYujf5oONNvDFKhyWmHAzMV1mdHrOTHUh1OO73Oina1KbDrZdO9SJqCFIkhwPs3gWyzML3pYDXORd9AyxMohLmXDI", span: "col-span-12 md:col-span-4 h-[350px]" },
    { id: 6, category: "preservation", title: "Mantra Geode Frame", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-FYmLZ9_r6VPVmzTg3NQvkmlXHc6nJbEc6F7ssU3ugYLUS90L69veBCHEoRUTzOfyTjrKbXxijb7Jjl8q879v76MOalSB3z1cNSORNHDlv78bQDPqU67d-Yyg9CEeoptlgPyxLlG3Y78sXGbwVtiMILYw4kK_oiEO1uXYwr-a3lxA8jwrsQPiurVNV5LTjTun5HcdJr_UbRtMcEl7wgOQDJR89MigAhhN_mKU9cvEFjm50ZNxMZ3_rupsfYkqiofiqqxv8Defd6c", span: "col-span-12 md:col-span-8 h-[450px]" },
    { id: 7, category: "wallart", title: "Coastal Geode Study", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYSX0pCts6xY4lkayP9MVh2G0YbRUTb0geIdDMfw4mohMjexmYiGJTyDRI_fWpn7fYVVnL1JbzmuOUYEGFCb__msTDnWxb11d-IztLP_QjXLDXSlfGcG82VsgwsrFmIuOiaz0a51N3Rpsq_crY4GbsHXSfVSmaZiQUBLKe3WGl0mljFqw0SvJZpfoRReKmSUez0rQBHgdATZOKDhhLijHkVfM_2-yrG-bFuYWxWzwSs7JmAUhfW3EmETVQelabp8NZqaDmClJSkI8", span: "col-span-12 md:col-span-4 h-[450px]" },
  ];

  const instagramPosts = [
    { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD0onRuiRLESn5wORGHqRW7GssMZEcM-ApwLjGEB4qN3fp_gxeTbl2Dy2glmCkl7zedgzx9xHJ9rcAhcXW0ZyuOwMXZCy_rSAcxGgC1R3UQi6XwqecteyOrf9zlqJhvmhgb7Sqx0nGR_ZeLzXMZ5ILSrp8btgjMVRZMOEs2Hsl3cNxWYOJyqsJ5t8kOsCQQspXsnExDhttGTZ6pipK23a65cccnQGlVQHRLv1i-IzWeg2ILBpcCkWh1qCAzYZoq-r1SzvS7jEeVW0", likes: "1.2k", comments: "48" },
    { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvTQ1ninwg9Mna-2RSEduv5SMvix1OdTEYOqvjmXRwqhDTsua2nIPKw0QSmVpP2oIGyMiK3WAzCuj3wQxW4jLDqcDe7pUKi7vaUtIDfimN8PbaW-HzM9FIAP6IKh1Iay4cbH-flIWvtNhun_F6rDrSA3ZBgfd99rQCS9KSTNZyQnvfooNqW3Bc8UHI_FfaeQkxAcaujbYV9hckc4AD79QTD0uAkkOcvSCQy5saZAbVAdVFlcZiBuUnOf_M4Yq4OrKKZuv337bpOtw", likes: "850", comments: "32" },
    { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlb876y7Mm1mFN6om07NrX5s2DOWUfQ9b5vosQUdEvWUxtvLK4W5srGd_axTbSXNwbqS3HRp6ZdvsBAROqWoLeCBXcnqZ9NdpVnhTrySl8Pp2WikYePPw3uopUfACwMd0QNaCkzIawUXCYR3_AA0obG_v4GsKfFC3-enjAvYXYI8vBQYVg2xsRQFOgaTvdWfrtr2IDT_ffMgGTW1yYn3vYh34naoYvWl7kkhuHU_kma1SKlyQWSwH57n5NdtrlUlsJYaI-J3O_bdA", likes: "2.1k", comments: "105" },
    { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcL1fEJCvjrBMVDLm-HpQOwT6-rHdv0aHPTz4YW5D8dIFx6E_eLO4QgepuzAo6pYt31wcj-WmMnGrjJ7PUeMj1yUCWAobewu_5UHvp3oLLr3bKg8dmbLCY2HDVTc9yqjnVk4yihbCPnqlYdOgFwcko5kxZQVtQR43lxnoBQY8kiCzBxDBXYk58wmWKRI1TddMOiKb4J_pnpzobxsN_vnLyGBWHqxC0QOmm4hSk4GOWZ40kCDPvxLUItWu64e3fd3dEqBKJvL4EYjU", likes: "940", comments: "28" },
    { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZsV_riDsOtiWmN9ZURykS9iZHmaFZQcZbjiCplhYe1G0Izj7bWI-z2gvruHJRLVsBPHW6qQ0bnwdcGfr1QBD_G2oAwOibbhQE0RlvsXWzWGjXV7kOW7RMSNk3ObIzK5Cs1SFOqdwSaTjOVi40AxYBS-9lIknvOVQc5z9RExkDHVoOhYl3jZK6uDKhas-_ZeWM9x-F3jxHKewv_6_Fg1-zR2HM8PHoxdw4qKQpqo-s_EZT077PxJfLBVDw2lMGJYf9mD64r0FU4jA", likes: "1.5k", comments: "56" },
    { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb5zteLpVqMu4vQFSgs_AtLAsuvaZ9OjfmsfAJ-KjiQZNJBTrsPRaTGbpqKmz2-3yqUqgg9JP-FScLUe7gRvT4u6ncLqIy1jv_W5w8ImhBwaOy8B7Xf-KVVu5zu3XlluxEbtTUUBv8YTwbR6_XGmrqJBQxoqiMNnldWh0apv-nLoiGegr30NcsTAcO-bHlliQG4ln6wWv_5OTMgtjCioMWALpdbQmXmy9TLo9zeZ6CVy0Uwl7bDL91S5YWJsLXgTI4E_bUWd54SD0", likes: "3.2k", comments: "120" },
  ];

  const filteredItems = filter === "all" ? items : items.filter(i => i.category === filter);

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Gallery of Dreams</h1>
          <p className="text-on-surface-variant leading-relaxed mb-10">A curated collection of our finest work, spanning from delicate floral preservations to expansive coastal wall art. Each piece is unique and cannot be replicated.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "preservation", "wallart", "clock", "functional"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all
                  ${filter === cat 
                    ? "bg-secondary text-primary shadow-lg shadow-secondary/20" 
                    : "bg-surface-container text-primary/60 hover:bg-primary/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-12 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`${item.span} relative group overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src={item.image} 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] font-bold tracking-widest text-accent-amber uppercase mb-2">{item.category}</span>
                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                <button className="mt-4 text-white/80 hover:text-white flex items-center gap-2 text-sm">
                  View Case Study +
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram Dynamic Feed Section */}
        <section className="mt-40 border-t border-white/5 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Live from Instagram</h2>
              <p className="text-on-surface-variant flex items-center justify-center md:justify-start gap-2 italic font-light">
                <Instagram size={18} className="text-secondary" /> @chaitalis_artbizz — Sharing the magic daily
              </p>
            </div>
            <a 
              href="https://www.instagram.com/chaitalis_artbizz/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-secondary text-primary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-xl shadow-secondary/10 hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              Follow Our Process <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, idx) => (
              <motion.a
                key={idx}
                href="https://www.instagram.com/chaitalis_artbizz/"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square group overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={post.image} 
                  alt={`Instagram Post ${idx + 1}`} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-1 font-bold text-sm">
                    <Heart size={16} fill="white" /> {post.likes}
                  </div>
                  <div className="flex items-center gap-1 font-bold text-sm">
                    <MessageCircle size={16} fill="white" /> {post.comments}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[10px] font-bold tracking-[0.4em] text-primary/30 uppercase">
              Tag #ChaitalisArtbizz to be featured in our monthly highlight
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
