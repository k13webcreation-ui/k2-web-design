import { useInView } from 'react-intersection-observer';
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineLifebuoy,
  HiOutlinePaintBrush,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2';

const services = [
  {
    icon: HiOutlinePaintBrush,
    title: 'Custom Web Design',
    description:
      'Unique, professional designs tailored to your brand. No boring templates — every site is crafted to make your business look trustworthy.',
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Mobile Responsive',
    description:
      'Every website looks and works perfectly on all devices — phones, tablets, and desktops. Your customers can find you anywhere.',
  },
  {
    icon: HiOutlineMagnifyingGlass,
    title: 'SEO Optimized',
    description:
      'SEO-ready structure so your business can be found on Google. We build with search engine best practices from day one.',
  },
  {
    icon: HiOutlineBolt,
    title: 'Lightning Fast',
    description:
      'Optimized for speed so your site loads in seconds. Fast websites keep visitors engaged and improve your Google ranking.',
  },
  {
    icon: HiOutlineComputerDesktop,
    title: 'App Development',
    description:
      'From web apps to business applications, we build digital solutions that help streamline your operations and reach more customers.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Security & Hosting',
    description:
      'Free domain and hosting for 1 year. SSL security, daily backups, and ongoing protection to keep your site safe.',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'WhatsApp Integration',
    description:
      'Connect your website directly to WhatsApp so customers can reach you instantly. Perfect for turning visitors into enquiries.',
  },
  {
    icon: HiOutlineLifebuoy,
    title: 'Ongoing Support',
    description:
      "We don't disappear after launch. Ongoing support and updates to make sure your website continues to work for your business.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="services" ref={ref} className="relative section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything Your Business{' '}
              <span className="gradient-text">Needs Online</span>
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed">
              From design to deployment, we handle everything so you can focus on running your business.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-card-hover p-8 group cursor-default transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6
                            transition-all duration-300 group-hover:bg-primary-500/20 group-hover:scale-110">
                <service.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
