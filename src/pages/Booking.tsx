import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-24 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto px-6"
        >
          <CheckCircle2 className="text-gold mx-auto mb-6" size={80} />
          <h1 className="text-4xl font-serif mb-4">Reservation Received</h1>
          <p className="text-charcoal/60 mb-8 leading-relaxed">
            Thank you for choosing Charcoal & Oak. A confirmation email has been sent. We look forward to serving you.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-gold text-charcoal px-8 py-4 font-bold tracking-widest text-xs hover:bg-charcoal hover:text-white transition-all"
          >
            BACK TO BOOKING
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Reservations</span>
          <h1 className="text-6xl font-serif mb-8 tracking-tight">Book Your Table</h1>
          <p className="text-charcoal/60 mb-12 font-sans leading-relaxed text-lg">
            Whether it's a romantic dinner for two or a corporate gathering, ensure your place at our hearth. For parties larger than 10, please contact our events team directly.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-charcoal text-gold rounded-full flex items-center justify-center">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Large Groups</h4>
                <p className="text-xs text-charcoal/60">Dedicated spaces for parties of 12-50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-charcoal text-gold rounded-full flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Flexible Hours</h4>
                <p className="text-xs text-charcoal/60">Lunch service available for private bookings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 shadow-2xl border border-gold/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">Full Name</label>
                <input required type="text" className="w-full bg-paper border border-charcoal/5 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">Email Address</label>
                <input required type="email" className="w-full bg-paper border border-charcoal/5 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">Date</label>
                <div className="relative">
                  <input required type="date" className="w-full bg-paper border border-charcoal/5 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">Time</label>
                <select required className="w-full bg-paper border border-charcoal/5 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm appearance-none">
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">Guests</label>
                <select required className="w-full bg-paper border border-charcoal/5 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm appearance-none">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">Phone Number</label>
                <input required type="tel" className="w-full bg-paper border border-charcoal/5 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">Special Occasion / Notes</label>
              <textarea className="w-full bg-paper border border-charcoal/5 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm h-32" placeholder="Birthday, Anniversary, Allergies..."></textarea>
            </div>

            <button type="submit" className="w-full bg-charcoal text-white py-5 font-bold tracking-[0.2em] text-xs hover:bg-gold hover:text-charcoal transition-all duration-500 shadow-xl">
              CONFIRM RESERVATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
