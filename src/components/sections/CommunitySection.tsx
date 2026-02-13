import { Instagram, Share2, Gift, Sparkles } from 'lucide-react';

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const CommunitySection = () => {
  const communityFeatures = [
    { icon: Share2, text: 'Partagez votre configuration' },
    { icon: Gift, text: 'Concours mensuels' },
    { icon: Sparkles, text: 'Laissez-vous inspirer' },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Rejoignez la <span className="gradient-text">communauté !</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Échangez avec d'autres passionnés de LumeaGlow, partagez les photos de vos installations et découvrez des façons créatives d'embellir votre espace avec nos lampes méduses.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Instagram Card */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-border/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Instagram</h3>
                <p className="text-muted-foreground text-sm">@lumeaglow_officiel</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Découvrez nos dernières créations et les installations de notre communauté.
            </p>
            <a
              href="https://instagram.com/lumeaglow_officiel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 transition-all"
            >
              Suivez-nous sur Instagram
            </a>
          </div>

          {/* TikTok Card */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-border/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center">
                <TikTokIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">TikTok</h3>
                <p className="text-muted-foreground text-sm">@lumea.glow04</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Regardez nos vidéos satisfaisantes et les effets lumineux hypnotisants.
            </p>
            <a
              href="https://www.tiktok.com/@lumea.glow04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-semibold text-white bg-foreground hover:bg-foreground/90 transition-all"
            >
              Suivez-nous sur TikTok
            </a>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium text-foreground">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Hashtag Banner */}
        <div className="banner-gradient rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            #AmbianceLumeaGlow
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Identifiez-nous dans vos publications et rejoignez notre communauté grandissante d'amoureux de l'océan !
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:lumeaglowlamp@gmail.com?subject=Photo%20%23AmbianceLumeaGlow"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold bg-white text-primary hover:bg-white/90 transition-all"
            >
              Partagez votre photo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
