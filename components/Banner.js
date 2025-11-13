import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Banner() {
  const images = [
    '/images/onam-banner.jpg',
    '/images/banner-1.svg',
    '/images/banner-2.svg',
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 4000; // 4s

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => resetTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function goTo(i) {
    setIndex(i % images.length);
  }

  return (
    <div className="relative bg-[#FFF8E7] overflow-hidden" style={{ height: '600px' }}>
      <div className="max-w-6xl mx-auto px-4 h-full">
        <div className="relative h-full py-8 md:py-0">
          <div className="w-full h-full overflow-hidden rounded-md">
            <div
              className="flex transition-transform duration-700 w-full h-full"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((src, i) => (
                <div
                  key={src + i}
                  className="w-full h-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between bg-[#FFF8E7]"
                >
                  {/* Text block */}
                  <div className="md:w-1/2 w-full px-6 md:px-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-serif text-[#8B4513] mb-4">
                      Traditional Kerala
                      <br />
                      <span className="text-[#654321]">Elegance</span>
                    </h1>
                    <p className="text-base md:text-lg text-[#8B4513] mb-6 max-w-md mx-auto md:mx-0">
                      Discover our handpicked collection of authentic Kerala sarees,
                      where tradition meets contemporary elegance.
                    </p>
                    <Link
                      href="/products"
                      className="inline-block px-8 py-3 bg-[#8B4513] text-white rounded-full hover:bg-[#703810] transition-colors font-medium"
                    >
                      Explore Collection
                    </Link>
                  </div>

                  {/* Image block */}
                  <div className="md:w-1/2 w-full h-64 md:h-full flex items-center justify-center p-6">
                    <img src={src} alt={`Banner ${i + 1}`} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#8B4513]' : 'bg-white/80'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x" style={{ backgroundImage: 'url("/images/border-pattern.png")' }} />
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ backgroundImage: 'url("/images/border-pattern.png")' }} />
      </div>
    </div>
  );
}