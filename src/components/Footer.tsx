import { HiArrowUp } from 'react-icons/hi';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const footerLinks = {
  Services: [
    { name: 'Web Design', href: '#services' },
    { name: 'App Development', href: '#services' },
    { name: 'SEO Optimization', href: '#services' },
    { name: 'WhatsApp Integration', href: '#services' },
    { name: 'Website Redesign', href: '#services' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: FaWhatsapp, href: 'https://wa.me/27616691317', label: 'WhatsApp', color: 'hover:text-green-400' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok', color: 'hover:text-cyan-400' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg
                            transition-transform duration-300 group-hover:scale-110">
                K2
              </div>
              <span className="text-xl font-bold text-white">
                K2 <span className="text-primary-400">Web</span>
              </span>
            </a>
            <p className="text-dark-400 leading-relaxed max-w-md mb-6 text-sm">
              Professional, modern websites that help your business grow. Custom design,
              reliable hosting, and ongoing support. See how your business could look online
              with a free demo.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dark-400
                           transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4 text-sm">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm text-dark-400">
              <li>
                <a href="tel:+27616691317" className="hover:text-white transition-colors duration-300">
                  061 669 1317
                </a>
              </li>
              <li>
                <a href="mailto:k2webdesign@outlook.com" className="hover:text-white transition-colors duration-300">
                  k2webdesign@outlook.com
                </a>
              </li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {new Date().getFullYear()} K2 Web Design. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dark-400
                     transition-all duration-300 hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-400 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
