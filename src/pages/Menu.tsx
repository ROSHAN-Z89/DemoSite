import { motion } from 'motion/react';

const menuCategories = [
  {
    name: "Master Cuts (The Hearth)",
    items: [
      { name: "30-Day Dry Aged Ribeye", price: "58", desc: "16oz, sustainably sourced oak-wood fire grilled, signature salt rub." },
      { name: "Snake River Wagyu Sirloin", price: "72", desc: "10oz, marble score 9+, char-crust, bone marrow butter." },
      { name: "Double Bone Lamb Chops", price: "48", desc: "Mint salsa verde, roasted garlic, smoked sea salt." },
      { name: "Hickory Smoked Short Rib", price: "42", desc: "12-hour braised then seared over open coals, bourbon glaze." }
    ]
  },
  {
    name: "From the Coast",
    items: [
      { name: "Charred Branzino", price: "38", desc: "Whole fish, lemon-caper butter, blistered vine tomatoes." },
      { name: "Wood-Fired Octopus", price: "24", desc: "Spanish chorizo, fingerling potatoes, smoked paprika aioli." },
      { name: "Cold Water Lobster Tail", price: "MP", desc: "Grilled over cherry wood, drawn garlic butter." }
    ]
  },
  {
    name: "Table Sides",
    items: [
      { name: "Truffle Mac & Cheese", price: "14", desc: "Five cheese blend, white truffle oil, herb crust." },
      { name: "Charred Asparagus", price: "12", desc: "Lemon zest, shaved parmesan, balsamic reduction." },
      { name: "Duck Fat Fries", price: "10", desc: "Hand-cut, rosemary, roasted garlic aioli." }
    ]
  }
];

export function Menu() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Selection</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Dinner Menu</h1>
          <p className="text-charcoal/60 max-w-lg mx-auto font-sans leading-relaxed">
            Our menu is a celebration of fire and seasonal bounty. Every dish is prepared over live coals for authentic depth of flavor.
          </p>
        </div>

        <div className="space-y-32">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="flex items-baseline space-x-6 mb-12">
                <h2 className="text-3xl font-serif text-charcoal tracking-tight italic">
                  {category.name}
                </h2>
                <div className="flex-grow h-[1px] bg-gold/20" />
              </div>
              
              <div className="grid gap-12">
                {category.items.map((item, i) => (
                  <motion.div 
                    key={item.name} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row md:items-start justify-between group cursor-default"
                  >
                    <div className="max-w-xl">
                      <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-gold transition-colors tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm text-charcoal/50 font-sans italic leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 font-serif text-xl md:text-2xl text-gold/80 md:pl-8">
                      {item.price === 'MP' ? 'MP' : `$${item.price}`}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-charcoal text-white text-center">
            <h3 className="text-2xl font-serif mb-4 text-gold">Dietary Requirements?</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              We take allergies seriously. Please inform your server of any dietary restrictions before ordering. Gluten-free and vegan options available upon request.
            </p>
            <button className="border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3 text-xs font-bold tracking-widest transition-all">
              DOWNLOAD FULL MENU KIT (PDF)
            </button>
        </div>
      </div>
    </div>
  );
}
