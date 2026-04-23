import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, MapPin, Utensils } from 'lucide-react';

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000" 
            alt="Signature Charcoal Grilled Steak"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-gold mb-6"
          >
            Fine Dining & Bar
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 tracking-tighter leading-[0.85]"
          >
            Taste the <br /> <span className="italic">Perfect Flame</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/booking" 
              className="w-full sm:w-auto bg-gold hover:bg-white text-charcoal font-bold px-10 py-5 tracking-widest transition-all duration-300 transform hover:scale-105"
            >
              RESERVE A TABLE
            </Link>
            <Link 
              to="/menu" 
              className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white font-bold px-10 py-5 tracking-widest transition-all duration-300"
            >
              EXPLORE MENU
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <span className="text-[10px] tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gold/50" />
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-clay/30 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
                alt="Ambiance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-10 -right-10 hidden xl:block w-72 aspect-square overflow-hidden border-[15px] border-paper shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=500" 
                alt="Small dish"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-6 block">Our Heritage</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tighter leading-tight">The Art of Cooking with <span className="italic text-gold">Wood & Fire</span></h2>
            <div className="w-20 h-[1px] bg-gold/50 mb-10" />
            <p className="text-charcoal/70 leading-relaxed mb-8 font-sans text-lg">
              At Charcoal & Oak, we return to the primal essence of cooking. Our custom-built hearth uses exclusively sustainably sourced oak and cherry wood to infuse every cut of meat with a distinct, smoky character that gas simply cannot replicate. 
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-12 font-sans text-lg">
              From our hand-selected wagyu to our locally harvested vegetables, every ingredient is treated with the respect it deserves, kissed by the flame and served with passion.
            </p>
            <Link to="/about" className="group flex items-center text-xs font-bold tracking-[0.2em] text-charcoal hover:text-gold transition-all duration-300">
              LEARN MORE ABOUT US <ChevronRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="bg-charcoal py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-serif mb-6 tracking-tight">The Experience</h2>
            <div className="w-24 h-[1px] bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Utensils, title: "Culinary Excellence", desc: "Expert chefs crafting seasonal menus with the finest local ingredients and wagyu selections." },
              { icon: Clock, title: "Curated Atmosphere", desc: "A sophisticated yet warm ambiance perfect for intimate dinners and exclusive gatherings." },
              { icon: MapPin, title: "Prime Destination", desc: "Located in the heart of the culinary district, a landmark for connoisseurs of fire-cooked cuisine." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-700" />
                <feature.icon className="text-gold mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" size={48} />
                <h3 className="text-2xl font-serif mb-6 tracking-wide">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-sans">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
