import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: 'How much does a website cost?',
    answer:
      'Our packages start from just R500, including free domain and hosting for 1 year. Contact us for a custom quote based on your specific needs.',
  },
  {
    question: 'What is the free demo?',
    answer:
      "We'll create a free website demo so you can see exactly how your business could look online before you commit. It's a no-risk way to evaluate our quality and design style before making any investment.",
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      "Most websites are ready within a few days. For more complex projects with custom features, we'll provide a clear timeline during our initial consultation. We pride ourselves on efficient, quality delivery.",
  },
  {
    question: 'Will my website work on mobile phones?',
    answer:
      'Absolutely. Every website we build is fully mobile responsive, meaning it looks and works perfectly on phones, tablets, laptops, and desktops. Mobile-first design is at the core of our process.',
  },
  {
    question: 'Do you offer ongoing support after the website launches?',
    answer:
      "Yes! Ongoing support is a core part of what we do. We don't disappear after launch. Whether you need updates, changes, or just have questions — we're always here for you.",
  },
  {
    question: 'Will my website show up on Google?',
    answer:
      'Yes. Every website we build is SEO-ready from day one, with proper structure, meta tags, and performance optimization to help your business get found on Google and other search engines.',
  },
  {
    question: 'Can I integrate WhatsApp with my website?',
    answer:
      'Yes! We offer WhatsApp Business integration so your customers can reach you instantly with one click. It\'s one of the most effective ways to turn website visitors into real enquiries.',
  },
  {
    question: 'What if I already have a website that needs redesigning?',
    answer:
      "We can redesign your existing website to give it a modern, professional look. We'll assess what's working, what isn't, and create something that better serves your business goals.",
  },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`border-b border-white/5 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-medium text-dark-100 group-hover:text-white transition-colors pr-4">
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-primary-500/10 border-primary-500/20 rotate-180' : 'group-hover:bg-white/10'
          }`}
        >
          <HiChevronDown className="w-5 h-5 text-dark-400" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-dark-400 leading-relaxed text-sm pr-14">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="faq" ref={ref} className="relative section-padding">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — Header */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Frequently{' '}
              <span className="gradient-text">Asked Questions</span>
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              Have a question? We've got answers. If you don't see what you're looking for,
              reach out to us on WhatsApp.
            </p>
            <a
              href="https://wa.me/27616691317?text=Hi%20K2%20Web%20Design%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              Ask Us Anything
            </a>
          </div>

          {/* Right — FAQ Items */}
          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
