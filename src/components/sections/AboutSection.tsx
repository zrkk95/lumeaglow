import { Check, MapPin, Shield, Truck } from 'lucide-react';

const AboutSection = () => {
  const badges = [
    { icon: MapPin, label: 'Marque française' },
    { icon: Shield, label: 'Garantie 12 mois' },
    { icon: Truck, label: 'Livraison rapide' },
  ];

  return (
    <section id="a-propos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl overflow-hidden border border-border/50 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-4xl">🌊</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Image d'ambiance AquaGlow
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              À propos d'<span className="gradient-text">AquaGlow</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">AquaGlow</strong> est née d'une passion pour la beauté mystérieuse des océans et le design d'intérieur contemporain. Notre mission : apporter la sérénité et l'émerveillement de l'univers marin directement dans votre foyer.
              </p>
              <p>
                Depuis notre création, nous nous engageons à concevoir des produits qui allient esthétique raffinée, technologie innovante et respect de l'environnement. Chaque lampe AquaGlow est le fruit d'un processus de conception rigoureux visant à offrir une expérience visuelle unique et apaisante.
              </p>
              <p>
                Notre engagement envers la qualité se reflète dans le choix minutieux de nos matériaux et nos contrôles stricts à chaque étape de fabrication. Nous testons rigoureusement chaque lampe pour garantir sa fiabilité et sa durabilité.
              </p>
              <p>
                Le service client est au cœur de nos valeurs. Notre équipe réactive est disponible pour répondre à toutes vos questions et vous accompagner dans votre expérience AquaGlow, avant et après votre achat.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center text-center p-4 bg-secondary/50 rounded-xl"
                >
                  <badge.icon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
