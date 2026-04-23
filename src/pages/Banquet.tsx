import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const facilities = [
  {
    name: "The Oak Room",
    capacity: "Up to 50 Guests",
    desc: "An intimate space featuring dark wood paneling, a private fireplace, and advanced AV capabilities for corporate meetings or private celebrations.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "The Grand Hearth Hall",
    capacity: "Up to 150 Guests",
    desc: "Our premier event space with vaulted ceilings, floor-to-ceiling windows, and a view of our open-charcoal kitchen.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "The Terrace Bar",
    capacity: "Up to 80 Guests",
    desc: "A heated outdoor space perfect for cocktail receptions and networking events, featuring a private bar and lounge seating.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
  }
];

export function Banquet() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Events</span>
          <h1 className="text-6xl font-serif mb-6 tracking-tight">Banquet Facilities</h1>
          <p className="text-charcoal/60 font-sans leading-relaxed">
            From elegant weddings to professional seminars, Charcoal & Oak offers versatile spaces that combine sophisticated design with exceptional culinary service.
          </p>
        </div>

        <div className="grid gap-24">
          {facilities.map((fac, idx) => (
            <div key={fac.name} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                  <img src={fac.image} alt={fac.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <span className="text-gold font-serif text-xl italic">{fac.capacity}</span>
                <h2 className="text-4xl font-serif tracking-tight">{fac.name}</h2>
                <p className="text-charcoal/70 leading-relaxed font-sans">{fac.desc}</p>
                <div className="pt-4">
                  <Link to="/contact" className="bg-charcoal text-white px-8 py-4 font-bold text-xs tracking-widest hover:bg-gold hover:text-charcoal transition-all">
                    INQUIRE FOR BOOKING
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
