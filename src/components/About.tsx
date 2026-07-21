import { useInView } from 'react-intersection-observer';
import { HiClock, HiPaintBrush, HiCurrencyDollar, HiOutlineHandRaised } from 'react-icons/hi2';

const stats = [
  { value: '24h', label: 'Fast Delivery' },
  { value: '100%', label: 'Custom Design' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

const pillars = [
  {
    icon: HiClock,
    title: 'Fast Delivery',
    description: 'Your website, ready in 24 hours. We respect your time and get your business online quickly.',
  },
  {
    icon: HiPaintBrush,
    title: 'Custom Design',
    description: 'Unique designs, no boring templates. Every website is crafted specifically for your brand and business goals.',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Affordable Pricing',
    description: 'Premium quality at prices that make sense. Starting from just R500, because every business deserves a great website.',
  },
  {
    icon: HiOutlineHandRaised,
    title: 'Ongoing Support',
    description: "We're always here for you. From launch day onwards, we provide continuous support to keep your site running perfectly.",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="about" ref={ref} className="relative section-padding">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-card p-6 text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-dark-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Not Just a Website —{' '}
              <span className="gradient-text">A Business Investment</span>
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed mb-6">
              You're not only paying for a website — you're paying for the trust, professionalism,
              and customer confidence that the website creates for your business.
            </p>
            <p className="text-dark-400 leading-relaxed mb-8">
              K2 Web Design is not a quick template service. We focus on creating premium,
              professional websites that make your business look trustworthy and help turn visitors
              into real enquiries. The free demo lets you see the quality before you decide.
            </p>
            <a
              href="https://wa.me/27616691317?text=Hi%20K2%20Web%20Design%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Let's Talk
            </a>
          </div>

          {/* Right — Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`glass-card-hover p-6 group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4
                              transition-all duration-300 group-hover:bg-primary-500/20 group-hover:scale-110">
                  <pillar.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
