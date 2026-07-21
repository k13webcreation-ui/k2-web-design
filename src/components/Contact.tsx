import { useState, type FormEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import { HiPaperAirplane, HiCheckCircle, HiDevicePhoneMobile, HiEnvelope } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi K2 Web Design, I'm ${formData.name}.\n\nService: ${formData.service}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/27616691317?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="relative section-padding">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed">
              Ready to take your business online? Message us on WhatsApp, scan the QR code, or fill out the form below.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left — Contact Details + QR Code */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Details</h3>

              <div className="space-y-5 mb-8">
                <a
                  href="https://wa.me/27616691317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0
                                transition-all duration-300 group-hover:bg-green-500/20 group-hover:scale-110">
                    <FaWhatsapp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 mb-0.5">WhatsApp Business Chat</div>
                    <div className="font-semibold text-white group-hover:text-green-300 transition-colors">061 669 1317</div>
                  </div>
                </a>

                <a
                  href="mailto:k2webdesign@outlook.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0
                                transition-all duration-300 group-hover:bg-primary-500/20 group-hover:scale-110">
                    <HiEnvelope className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 mb-0.5">Email</div>
                    <div className="font-semibold text-white group-hover:text-primary-300 transition-colors">k2webdesign@outlook.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <HiDevicePhoneMobile className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-500 mb-0.5">Based in</div>
                    <div className="font-semibold text-white">South Africa</div>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="border-t border-white/5 pt-6">
                <p className="text-sm text-dark-400 mb-4 text-center">Scan to chat on WhatsApp</p>
                <div className="flex justify-center">
                  <div className="bg-white p-3 rounded-2xl">
                    <img
                      src="/k2-web-design/qr-code.jpg"
                      alt="WhatsApp QR Code - Scan to chat with K2 Web Design"
                      className="w-40 h-40 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {submitted ? (
              <div className="glass-card p-12 text-center animate-fade-in">
                <HiCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-dark-300 mb-8">
                  Thank you for reaching out. We'll get back to you on WhatsApp shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 sm:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500
                               focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500
                               focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@business.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500
                               focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="061 669 1317"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white appearance-none
                               focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300
                               [&>option]:bg-dark-800 [&>option]:text-white"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="App Development">App Development</option>
                      <option value="WhatsApp Integration">WhatsApp Integration</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500
                             focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your business and what you need..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full group text-lg">
                  Send via WhatsApp
                  <HiPaperAirplane className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rotate-45" />
                </button>

                <p className="text-center text-dark-500 text-xs">
                  Your message will be sent directly to our WhatsApp. We typically respond within minutes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
