import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl mb-6 tracking-tighter">CHARCOAL & OAK</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
            Experience the art of charcoal grilling in a sophisticated atmosphere. 
            From prime cuts to signature wines, every detail is crafted for excellence.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="text-white/40 hover:text-gold transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-8">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70 font-sans">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>123 Gourmet Avenue, Food City, FC 54321</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>reservations@charcoaloak.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-8">Hours</h4>
          <ul className="space-y-3 text-sm text-white/70 font-sans">
            <li className="flex justify-between">
              <span>Mon - Thu</span>
              <span className="text-white">5:00 PM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Fri - Sat</span>
              <span className="text-white">5:00 PM - 11:30 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-white">4:00 PM - 9:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-8">E-Newsletter</h4>
          <p className="text-sm text-white/60 mb-4 font-sans">
            Join our mailing list for exclusive events and seasonal specials.
          </p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-gold text-charcoal font-bold py-3 text-xs tracking-widest hover:bg-white transition-colors">
              SIGN UP
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-white/30 uppercase">
        <p>&copy; {new Date().getFullYear()} Charcoal & Oak. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
