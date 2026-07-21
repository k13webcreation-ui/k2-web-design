import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Thabo M.',
    role: 'Restaurant Owner',
    text: "K2 Web Design completely transformed my online presence. Within a week of launching, I started getting bookings through the website. The free demo sold me instantly — I could see the quality before committing.",
    rating: 5,
  },
  {
    name: 'Sarah K.',
    role: 'Fitness Coach',
    text: "I tried other web designers before, but K2 is on another level. The website is beautiful, loads fast on my phone, and my clients love it. The WhatsApp integration was a game changer for my business.",
    rating: 5,
  },
  {
    name: 'James N.',
    role: 'Real Estate Agent',
    text: "Professional, fast, and genuinely cares about the result. K2 didn't just build me a website — they built something that actually helps me close deals. Best investment I've made for my business.",
    rating: 5,
  },
  {
    name: 'Priya D.',
    role: 'Salon Owner',
    text: "I was hesitant about getting a website, but the team made it so easy. They understood exactly what I needed and delivered beyond my expectations. My bookings have doubled since launch!",
    rating: 5,
  },
  {
    name: 'Sipho L.',
    role: 'Construction Company',
    text: "We needed a professional site that could showcase our projects. K2 delivered a stunning portfolio-style website that has already helped us win new contracts. Highly recommend their services.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1;

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisible = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonials" ref={ref} className="relative section-padding overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Loved by <span className="gradient-text">Businesses</span>
            </h2>
          </div>

          <div
            className={`flex gap-2 mt-6 sm:mt-0 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dark-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dark-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisible().map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${current}-${i}`}
              className={`glass-card p-8 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <HiStar key={j} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-dark-200 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-dark-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-primary-500 w-8'
                  : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
