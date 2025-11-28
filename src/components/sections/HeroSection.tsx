import { ArrowRight, Truck, Shield, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToProduct = () => {
    const element = document.getElementById('produit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Apportez la{' '}
              <span className="gradient-text">magie de l'océan</span>{' '}
              à la maison
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up delay-100">
              Découvrez la Lampe Méduse AquaGlow : une lampe LED qui recrée le mouvement naturel des méduses, offrant une ambiance apaisante, moderne et hypnotisante.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up delay-200">
              <button
                onClick={scrollToProduct}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Acheter maintenant – 30 €
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/demo"
                className="btn-secondary text-lg px-8 py-4"
              >
                Voir la démo
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-up delay-300">
              {[
                { icon: Truck, label: 'Livraison rapide' },
                { icon: Shield, label: 'Garantie 12 mois' },
                { icon: CreditCard, label: 'Paiement sécurisé' },
              ].map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in delay-200">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl transform scale-90" />
              
              {/* Product image placeholder */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl overflow-hidden border border-border/50 shadow-2xl animate-float">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-4xl">🪼</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Image de la Lampe Méduse AquaGlow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
