import { motion } from 'motion/react';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", title: "Premium Cuts" },
  { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800", title: "Bar Atmosphere" },
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", title: "Wine Selection" },
  { url: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800", title: "Fine Dining" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800", title: "Culinary Art" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", title: "Interior Design" },
  { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", title: "Signature Dishes" },
  { url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800", title: "Cocktail Bar" },
  { url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800", title: "Gourmet Experience" }
];

export function Gallery() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Visuals</span>
          <h1 className="text-6xl font-serif mb-6 tracking-tight">Our Gallery</h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto font-sans leading-relaxed">
            A glimpse into the atmosphere, craftsmanship, and culinary dedication of Charcoal & Oak.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative group overflow-hidden break-inside-avoid shadow-lg"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                <div className="w-12 h-[1px] bg-gold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <span className="text-white font-serif text-2xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
