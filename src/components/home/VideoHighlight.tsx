import { PlayCircle } from 'lucide-react';

export default function VideoHighlight({ showOnlyShort = false, hideShort = false }: { showOnlyShort?: boolean; hideShort?: boolean }) {
  return (
    <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-saffron-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <PlayCircle size={16} />
            Featured Video
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark">
            Experience <span className="text-gradient-gold">Vedic Power Yoga</span>
          </h2>
        </div>

        {/* Single main video */}
        {!showOnlyShort && (
          <div className={`max-w-6xl mx-auto ${!hideShort ? 'grid lg:grid-cols-3 gap-8 items-center' : ''}`}>

            <div className={`relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video bg-sacred-dark/5 ${!hideShort ? 'lg:col-span-2' : ''}`}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/vCq3xFmiH9A?si=wAzgfE_C1XDFVM0Z"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {!hideShort && (
              <div className="lg:col-span-1 relative w-full max-w-sm mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] bg-sacred-dark/5">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/gP9BRLcmcSg"
                  title="YouTube Shorts player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}

          </div>
        )}

        {/* Short only */}
        {showOnlyShort && (
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] bg-sacred-dark/5">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gP9BRLcmcSg"
                title="YouTube Shorts player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
