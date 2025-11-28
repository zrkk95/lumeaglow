import { Lightbulb, Waves, Zap, VolumeX, Award, Settings } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Lightbulb,
      title: 'LED avancée',
      description: 'Technologie LED RGB haute performance offrant des millions de couleurs et une durée de vie exceptionnelle.',
    },
    {
      icon: Waves,
      title: 'Mouvement réaliste',
      description: 'Méduses en silicone qui reproduisent fidèlement la grâce et la fluidité des vraies méduses.',
    },
    {
      icon: Zap,
      title: 'Économie d\'énergie',
      description: 'Consommation minimale grâce aux LED basse consommation. Fonctionne via USB standard.',
    },
    {
      icon: VolumeX,
      title: 'Silencieuse',
      description: 'Moteur ultra-silencieux pour une relaxation totale. Parfaite comme veilleuse.',
    },
    {
      icon: Award,
      title: 'Matériaux premium',
      description: 'Fabrication avec des matériaux de haute qualité, durables et certifiés sans danger.',
    },
    {
      icon: Settings,
      title: 'Installation simple',
      description: 'Prête à l\'emploi en quelques minutes. Aucune configuration complexe requise.',
    },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi choisir <span className="gradient-text">AquaGlow</span> ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une lampe d'exception conçue pour transformer votre intérieur
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group card-premium p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
