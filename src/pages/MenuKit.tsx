import { Download, FileText, ChevronRight } from 'lucide-react';

export function MenuKit() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Downloads</span>
        <h1 className="text-6xl font-serif mb-10 tracking-tight text-charcoal">Menu Kit</h1>
        <p className="text-charcoal/60 mb-16 text-lg leading-relaxed">
          Access our complete collection of seasonal menus, wine lists, and banquet packages for your convenience. Perfect for planning corporate events or private gatherings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            { title: "Seasonal Dinner Menu", size: "2.4 MB", date: "April 2026" },
            { title: "Wine & Spirits Collection", size: "3.1 MB", date: "Q2 2026" },
            { title: "Banquet & Events Brochure", size: "5.8 MB", date: "2026 Edition" },
            { title: "Catering & Private Dining", size: "1.2 MB", date: "Latest" }
          ].map((kit, i) => (
            <div key={i} className="bg-white p-8 border border-gold/10 group hover:border-gold transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-charcoal/5 p-3 text-gold">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] font-bold text-charcoal/30 uppercase tracking-widest">{kit.size}</span>
              </div>
              <h3 className="text-xl font-serif mb-2 tracking-tight">{kit.title}</h3>
              <p className="text-xs text-charcoal/40 mb-8 uppercase tracking-widest">Updated: {kit.date}</p>
              
              <button className="flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-gold group-hover:text-charcoal transition-colors">
                DOWNLOAD PDF <Download size={14} className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-charcoal text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-6 italic">Need a physical copy?</h2>
            <p className="text-white/50 text-sm mb-10 max-w-md mx-auto">
              Visit us in person and our front-of-house team will be happy to provide our leather-bound portfolio of menus and event spaces.
            </p>
            <button className="flex items-center mx-auto text-xs font-bold tracking-widest text-gold hover:text-white transition-colors group">
              GET DIRECTIONS <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -mr-32 -mt-32" />
        </div>
      </div>
    </div>
  );
}
