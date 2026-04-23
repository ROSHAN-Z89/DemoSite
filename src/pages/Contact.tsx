import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Reach Out</span>
          <h1 className="text-6xl font-serif mb-6 tracking-tight">Contact Us</h1>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            We are here to assist you with reservations, events, and any inquiries you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="bg-white p-10 border border-gold/10 text-center shadow-lg">
            <MapPin className="text-gold mx-auto mb-6" size={32} />
            <h3 className="font-serif text-xl mb-4">Location</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              123 Gourmet Avenue,<br />
              Food City, FC 54321
            </p>
          </div>
          <div className="bg-white p-10 border border-gold/10 text-center shadow-lg">
            <Phone className="text-gold mx-auto mb-6" size={32} />
            <h3 className="font-serif text-xl mb-4">Phone</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Main Line: +1 (555) 123-4567<br />
              Events: +1 (555) 123-4568
            </p>
          </div>
          <div className="bg-white p-10 border border-gold/10 text-center shadow-lg">
            <Mail className="text-gold mx-auto mb-6" size={32} />
            <h3 className="font-serif text-xl mb-4">Email</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              reservations@charcoaloak.com<br />
              events@charcoaloak.com
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl font-serif mb-10 tracking-tight">Visiting Hours</h2>
            <div className="space-y-6">
              {[
                { day: "Monday - Thursday", hours: "5:00 PM - 10:00 PM" },
                { day: "Friday - Saturday", hours: "5:00 PM - 11:30 PM" },
                { day: "Sunday", hours: "4:00 PM - 9:00 PM" },
                { day: "Public Holidays", hours: "Closed" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <span className="font-bold text-sm tracking-wide">{item.day}</span>
                  <span className="text-gold font-serif italic">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-charcoal text-white rounded-none">
              <div className="flex items-start space-x-4">
                <Clock className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gold text-sm uppercase tracking-widest mb-2">Notice</h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Last kitchen orders are taken 30 minutes before closing. Walk-ins are welcome, but reservations are recommended for peak hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-10 tracking-tight">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />
                <input type="email" placeholder="Your Email" className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />
              <textarea placeholder="Your Message" className="w-full bg-white border border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm h-40"></textarea>
              <button className="w-full bg-charcoal text-white py-4 font-bold tracking-widest text-xs hover:bg-gold hover:text-charcoal transition-all">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
