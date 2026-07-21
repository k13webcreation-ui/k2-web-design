import { useInView } from 'react-intersection-observer';
import { HiArrowRight } from 'react-icons/hi2';

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 p-10 sm:p-16 text-center transition-all duration-700 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Get Your Business Online?
            </h2>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Start with a free website demo — see exactly how your business could look online
              before you commit. No risk, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/27636984070?text=Hi%20K2%20Web%20Design%2C%20I%27d%20like%20a%20free%20website%20demo!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl
                         transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-black/20
                         active:scale-[0.98] text-lg group"
              >
                Get Your Free Demo
                <HiArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl border-2 border-white/20
                         transition-all duration-300 hover:bg-white/10 hover:border-white/30 text-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
