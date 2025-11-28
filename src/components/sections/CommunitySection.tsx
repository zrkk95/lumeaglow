import { Instagram } from 'lucide-react';

// Custom TikTok icon since lucide doesn't have one
const TikTokIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const CommunitySection = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Rejoignez la <span className="gradient-text">communauté</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partagez vos photos et vidéos avec le hashtag <span className="text-primary font-semibold">#AquaGlowVibes</span> pour avoir une chance d'être mis en avant !
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Instagram Card */}
          <a
            href="https://instagram.com/aquaglow"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-premium p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-muted-foreground mb-4">
              Découvrez les plus belles photos de notre communauté et nos dernières actualités.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Suivre sur Instagram
              <span className="text-lg">→</span>
            </span>
          </a>

          {/* TikTok Card */}
          <a
            href="https://tiktok.com/@aquaglow"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-premium p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00f2ea] to-[#ff0050] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TikTokIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2">TikTok</h3>
            <p className="text-muted-foreground mb-4">
              Regardez nos vidéos satisfaisantes et les créations de nos clients.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Suivre sur TikTok
              <span className="text-lg">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
