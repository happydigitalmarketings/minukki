import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative bg-[#FFF8E7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
              BUY 2 GET 1 FREE
            </h1>
            <p className="text-2xl md:text-3xl text-[#8B4513] mb-6">
              UP TO 50% OFF
            </p>
            <p className="text-xl text-[#8B4513] mb-8">
              FOR NEW USERS
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#663300] transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <Image
              src="/images/onam-banner.jpg"
              alt="Onam Special Offer"
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x" style={{ backgroundImage: 'url("/images/border-pattern.png")' }} />
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ backgroundImage: 'url("/images/border-pattern.png")' }} />
      </div>
    </div>
  );
}