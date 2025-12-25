import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white">
              LUXE<span className="text-accent-gold">ESTATE</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              Crafting landmarks and legacy estates for the world's most discerning clients. Where architectural minimalism meets timeless luxury.
            </p>
          </div>

          {/* Contact 1 */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif tracking-in-expand">Visit Us</h3>
            <div className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors group">
              <MapPin className="mt-1 text-accent-gold group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all" />
              <p>44 Gold Coast Towers,<br />Penthouse B<br />New York, NY 10012</p>
            </div>
          </div>

          {/* Contact 2 */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif tracking-in-expand">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+15557890123" className="flex items-center gap-4 text-gray-400 hover:text-accent-gold transition-colors">
                <Phone size={18} />
                <span>+1 (555) 789-0123</span>
                <span className="text-xs text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded-full">VIP Line</span>
              </a>
              <a href="mailto:concierge@luxeestate.com" className="flex items-center gap-4 text-gray-400 hover:text-accent-gold transition-colors">
                <Mail size={18} />
                <span>concierge@luxeestate.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif tracking-in-expand">Social</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-accent-gold hover:text-white transition-colors mt-6 group">
              WhatsApp Direct
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 LuxeEstate Developers. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
