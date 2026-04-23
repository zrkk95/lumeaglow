import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/lampe-meduse-hero.webp';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToVideo = () => {
    const element = document.getElementById('video-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToProduct = () => {
    navigate('/produit/lampe-meduse-lumeaglow');
  };

  const scrollToProduct = () => {
    const element = document.getElementById('produit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-[75%_center] lg:scale-110"
          fetchPriority="high"
          decoding="async"
          width={1342}
          height={940}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 lg:to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up text-white">
              Quand la{' '}
              <span className="gradient-text-hero">lumière</span>{' '}
              prend vie
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up delay-100">
              Transformez n'importe quel espace en une ambiance hypnotisante.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-200">
              <button
                onClick={goToProduct}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Acheter maintenant
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToVideo}
                className="btn-outline-white text-lg px-8 py-4 text-center"
              >
                Voir la démo
              </button>
            </div>
          </div>

          {/* Right Column - Empty for background image visibility */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Down Indicator - Centered on all devices */}
      <button 
        onClick={scrollToProduct}
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-10 animate-bounce-slow cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </button>
    </section>
  );
};

export default HeroSection;
