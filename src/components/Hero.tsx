import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiCheck } from 'react-icons/hi';

const highlights = [
  'Free website demo',
  'Custom design',
  'Mobile responsive',
  'SEO ready',
];

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            Free Website Demo — See It Before You Commit
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Professional Websites{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">That Grow Your Business</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We create modern, fast, user-friendly websites built to impress and deliver real results.
            See exactly how your business could look online — <strong className="text-white">before you commit</strong>.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://wa.me/27616691317?text=Hi%20K2%20Web%20Design%2C%20I%27d%20like%20a%20free%20website%20demo%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg group"
            >
              Get Your Free Demo
              <HiArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-secondary text-lg">
              Our Services
            </a>
          </div>

          {/* Highlights */}
          <div
            className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 transition-all duration-700 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-dark-400 text-sm">
                <HiCheck className="w-4 h-4 text-primary-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
