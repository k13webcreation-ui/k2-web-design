import { useInView } from 'react-intersection-observer';

export default function VideoShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">
            See Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Website Design{' '}
            <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-dark-300 text-lg leading-relaxed">
            Take a look at what we create for our clients — professional, modern, and built to convert.
          </p>
        </div>

        {/* Video Container */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-card p-3 sm:p-4">
            <div className="relative rounded-xl overflow-hidden bg-dark-900 aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                loading="lazy"
                poster=""
                playsInline
              >
                <source src="/k2-web-design/k2y-showcase.mp4" type="video/mp4" />
                <div className="absolute inset-0 flex items-center justify-center bg-dark-900 text-dark-400 text-center p-8">
                  <div>
                    <p className="text-lg font-semibold text-white mb-2">Your browser does not support HTML5 video.</p>
                    <p className="text-sm">Please upgrade your browser or <a href="/k2-web-design/k2y-showcase.mp4" download className="text-primary-400 underline hover:text-primary-300">download the video</a> to watch it.</p>
                  </div>
                </div>
              </video>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-dark-500 text-sm mt-4">
            A showcase of the professional websites we build for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
