import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/lampe-meduse-hero.png';

const HeroSection = () => {
  const scrollToProduct = () => {
    const element = document.getElementById('produit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const element = document.getElementById('produit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up text-white">
              Apportez la{' '}
              <span className="gradient-text-hero">magie de l'océan</span>{' '}
              à la maison
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up delay-100">
              Découvrez la beauté hypnotisante de notre lampe méduse premium avec une technologie LED à changement de couleur époustouflante. Transformez n'importe quel espace en un sanctuaire sous-marin tranquille avec des millions de couleurs vibrantes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-200">
              <button
                onClick={scrollToProduct}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Acheter maintenant – 30 €
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/produit/lampe-meduse-aquaglow"
                className="btn-outline-white text-lg px-8 py-4 text-center"
              >
                Voir la démo
              </Link>
            </div>
          </div>

          {/* Right Column - Empty for background image visibility */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </button>
    </section>
  );
};

export default HeroSection;
