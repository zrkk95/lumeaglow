import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Marie L.',
      location: 'Paris',
      rating: 5,
      text: 'J\'ai offert cette lampe à mon fils de 8 ans, il est absolument fasciné ! Les couleurs sont magnifiques et le mouvement des méduses est vraiment apaisant. Parfait comme veilleuse, il s\'endort beaucoup plus facilement maintenant. Qualité top, livraison rapide.',
      date: 'Il y a 2 semaines',
    },
    {
      name: 'Thomas D.',
      location: 'Lyon',
      rating: 5,
      text: 'Excellent achat ! Je l\'ai mise dans mon salon et c\'est devenu un vrai point de conversation avec mes invités. Le mode cycle automatique est hypnotisant. La lampe est bien construite et silencieuse. Je recommande à 100%.',
      date: 'Il y a 1 mois',
    },
    {
      name: 'Sophie M.',
      location: 'Bordeaux',
      rating: 5,
      text: 'Commandée pour décorer mon bureau, cette lampe apporte une ambiance zen parfaite. Je la fixe pendant mes pauses et ça m\'aide vraiment à déstresser. Le rapport qualité-prix est excellent. J\'en ai racheté une pour ma sœur !',
      date: 'Il y a 3 semaines',
    },
    {
      name: 'Antoine R.',
      location: 'Marseille',
      rating: 5,
      text: 'Ma femme adore l\'ambiance qu\'elle crée dans notre chambre. Les méduses semblent vraiment vivantes avec leur mouvement fluide. L\'éclairage LED est doux et pas du tout agressif. Très bon produit, bien emballé à la livraison.',
      date: 'Il y a 1 semaine',
    },
  ];

  return (
    <section id="avis" className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Avis de nos <span className="gradient-text">clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez ce que pensent ceux qui ont adopté AquaGlow
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-premium p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.location} • {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-medium">
              4.9/5 basé sur 847 avis vérifiés
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
