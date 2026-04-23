export function About() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Legacy</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-8 tracking-tight">Crafted by Fire, <br/> <span className="italic">Defined by Flavor.</span></h1>
          <p className="text-charcoal/70 text-xl leading-relaxed font-sans mb-10">
            Founded in 2012, Charcoal & Oak was born from a simple desire: to bring the authentic, primal flavor of wood-fired cooking to the heart of the modern city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1577106212294-1d0bc8804702?auto=format&fit=crop&q=80&w=1000" 
              alt="The Kitchen" 
              className="w-full h-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-serif">The Executive Chef</h2>
            <p className="text-charcoal/70 leading-relaxed font-sans">
              Executive Chef Julian Vane brings over two decades of Michelin-starred experience. His philosophy is rooted in "ingredient-first" cooking, where the natural flavors of high-quality proteins are enhanced, not masked, by the smoke of our custom hearth.
            </p>
            <p className="text-charcoal/70 leading-relaxed font-sans italic">
              "We don't just grill meat; we curate a sensory journey from the moment the wood catches fire to the last bite on the plate." — Chef Julian Vane
            </p>
          </div>
        </div>

        <div className="bg-charcoal text-white p-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <span className="text-gold text-5xl font-serif block mb-2">12+</span>
            <span className="text-xs uppercase tracking-widest text-white/50">Years of Service</span>
          </div>
          <div>
            <span className="text-gold text-5xl font-serif block mb-2">50k+</span>
            <span className="text-xs uppercase tracking-widest text-white/50">Steaks Grilled</span>
          </div>
          <div>
            <span className="text-gold text-5xl font-serif block mb-2">100+</span>
            <span className="text-xs uppercase tracking-widest text-white/50">Wine Varieties</span>
          </div>
        </div>
      </div>
    </div>
  );
}
