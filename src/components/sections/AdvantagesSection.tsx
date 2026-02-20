import { Lightbulb, Waves, Palette, Volume2, Shield, Plug } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AdvantagesSection = () => {
  const navigate = useNavigate();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ delay: 100, variant: 'image' });
  const bannerRef = useScrollReveal<HTMLDivElement>({ delay: 60 });

  const advantages = [
    {
      icon: Lightbulb,
      title: 'Technologie LED avancée',
      description: 'Nos lampes utilisent la dernière technologie LED pour l\'efficacité énergétique et des effets visuels époustouflants qui durent des années.',
    },
    {
      icon: Waves,
      title: 'Mouvement réaliste',
      description: 'Des tentacules en silicone spécialement conçues créent des mouvements de méduses réalistes qui hypnotisent et détendent.',
    },
    {
      icon: Palette,
      title: 'Changement de couleur dynamique',
      description: 'Découvrez des millions de couleurs vibrantes avec des transitions automatiques fluides. Créez l\'ambiance parfaite avec des cycles personnalisables.',
    },
    {
      icon: Volume2,
      title: 'Fonctionnement silencieux',
      description: 'Profitez de l\'ambiance paisible sans aucun bruit. Parfait pour les chambres, bureaux et espaces de méditation.',
    },
    {
      icon: Shield,
      title: 'Matériaux premium',
      description: 'Fabriqué avec de l\'acrylique de haute qualité et du silicone de grade élevé pour la durabilité et la sécurité.',
    },
    {
      icon: Plug,
      title: 'Installation simple',
      description: 'Branchez-la simplement en USB, remplissez le réservoir d\'eau et profitez du spectacle lumineux.',
    },
  ];

  const goToProduct = () => {
    navigate('/produit/lampe-meduse-lumeaglow');
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-8 lg:mb-16" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi choisir <span className="gradient-text">LumeaGlow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nos lampes méduses combinent une technologie de pointe avec un design artistique pour créer la solution d'éclairage d'ambiance parfaite pour tout espace.
          </p>
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden mb-8">
          <Accordion type="single" collapsible className="space-y-3">
            {advantages.map((advantage, index) => (
              <AccordionItem
                key={advantage.title}
                value={`advantage-${index}`}
                className="bg-white rounded-xl border border-border/50 px-4"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-left">{advantage.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 pl-[52px] text-sm leading-relaxed">
                  {advantage.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16" ref={gridRef}>
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="card-premium p-6 lg:p-8 bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="banner-gradient rounded-3xl p-8 lg:p-12 text-center text-white" ref={bannerRef}>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Prêt à transformer votre espace ?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de clients satisfaits qui ont découvert la magie des lampes méduses LumeaGlow.
          </p>
          <button
            onClick={goToProduct}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Commencer les achats maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
