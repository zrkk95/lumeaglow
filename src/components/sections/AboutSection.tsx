import { Users, Award, Clock } from 'lucide-react';
import ambianceImage from '@/assets/lampe-meduse-ambiance.jpeg';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: 'Plus de 50 000', label: 'Clients satisfaits' },
    { icon: Award, value: '95 %', label: 'Taux de satisfaction' },
    { icon: Clock, value: '24h/24 et 7j/7', label: 'Service client' },
  ];

  return (
    <section id="a-propos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              À propos d'<span className="gradient-text">AquaGlow</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Fondée sur la passion d'apporter la beauté paisible de l'océan dans les espaces du quotidien, AquaGlow est devenue une marque innovante en matière de solutions d'éclairage d'ambiance.
              </p>
              <p>
                Notre aventure a commencé lorsque notre fondateur, fasciné par la danse gracieuse des méduses lors d'une expédition de biologie marine, a imaginé recréer cette magie à l'aide d'une technologie LED de pointe et d'un design artistique.
              </p>
              <p>
                Notre mission est de transformer les espaces ordinaires en sanctuaires de paix et de beauté, grâce à une lumière douce, colorée et apaisante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-secondary/50 rounded-2xl"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={ambianceImage}
                alt="Lampe méduse AquaGlow dans une ambiance cosy"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
