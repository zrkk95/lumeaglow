import { Star, Users, MapPin, Shield } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Marie L.',
      role: 'Décoratrice d\'intérieur',
      content: 'Cette lampe est absolument magnifique ! Les mouvements des méduses sont très réalistes et les couleurs sont superbes. Mes clients adorent et me demandent souvent où je l\'ai trouvée.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Thomas B.',
      role: 'Étudiant',
      content: 'Parfait pour mon studio ! L\'ambiance est incroyable, surtout le soir. Le fonctionnement silencieux est un vrai plus. Je recommande vivement.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Sophie D.',
      role: 'Mère de famille',
      content: 'Mes enfants sont fascinés par cette lampe. Elle les aide à s\'endormir plus facilement. La qualité est excellente et le service client très réactif.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Pierre M.',
      role: 'Développeur',
      content: 'J\'utilise cette lampe dans mon bureau et elle m\'aide vraiment à me concentrer et à me détendre. Les transitions de couleurs sont douces et apaisantes. Un excellent achat !',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  ];

  const stats = [
    { icon: Users, value: 'Plus de 10 000', label: 'Clients satisfaits' },
    { icon: Star, value: '4,9/5', label: 'Note moyenne' },
    { icon: MapPin, value: '50 pays et plus', label: 'Pays de livraison' },
    { icon: Shield, value: '2 ans', label: 'Garantie' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ce que disent <span className="gradient-text">nos clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ne vous fiez pas seulement à nos paroles. Voici ce que de vrais clients disent de leur expérience LumeaGlow.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-md border border-border/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-secondary/50 rounded-2xl"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
