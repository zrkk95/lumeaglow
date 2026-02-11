import { useState } from 'react';
import { Star, Check, ThumbsUp, ExternalLink, Search, ChevronDown } from 'lucide-react';

interface Review {
  rating: number;
  content: string;
  reviewDate: string;
  experienceDate: string;
  name: string;
}

const reviews: Review[] = [
  { rating: 5, content: 'Super joli', reviewDate: '15/08/2025', experienceDate: '07/08/2025', name: 'Chloé P.' },
  { rating: 4, content: 'Belle ambiance, un peu plus petit que je pensais', reviewDate: '03/09/2025', experienceDate: '20/08/2025', name: 'Karim D.' },
  { rating: 5, content: 'Très relaxant le soir', reviewDate: '22/09/2025', experienceDate: '15/09/2025', name: 'Julie M.' },
  { rating: 5, content: 'Conforme aux photos', reviewDate: '10/10/2025', experienceDate: '01/10/2025', name: 'Nadia F.' },
  { rating: 4, content: "J'aurais aimé un peu plus lumineux", reviewDate: '28/10/2025', experienceDate: '18/10/2025', name: 'Lucas B.' },
  { rating: 5, content: 'Top pour une chambre', reviewDate: '15/11/2025', experienceDate: '08/11/2025', name: 'Inès R.' },
  { rating: 5, content: 'Lumière douce, parfait', reviewDate: '02/12/2025', experienceDate: '25/11/2025', name: 'Mehdi A.' },
  { rating: 4, content: 'Belle lampe, mais je pensais que ça serait un peu plus grand', reviewDate: '20/12/2025', experienceDate: '10/12/2025', name: 'Camille S.' },
  { rating: 5, content: 'Je recommande', reviewDate: '05/01/2026', experienceDate: '28/12/2025', name: 'Antoine G.' },
  { rating: 5, content: 'Ambiance sympa le soir', reviewDate: '18/01/2026', experienceDate: '10/01/2026', name: 'Sarah L.' },
  { rating: 4, content: 'Livraison un peu longue mais ok', reviewDate: '30/01/2026', experienceDate: '15/01/2026', name: 'Hugo T.' },
  { rating: 5, content: 'Très beau rendu, les couleurs sont douces', reviewDate: '08/02/2026', experienceDate: '01/02/2026', name: 'Emma V.' },
];

type SortOption = 'recent' | 'best' | 'worst';

const ReviewsSection = () => {
  const [sort, setSort] = useState<SortOption>('recent');
  const [search, setSearch] = useState('');
  const [sortOpen, setSortOpen] = useState(false);

  const sortLabels: Record<SortOption, string> = {
    recent: 'Les plus récents',
    best: 'Les mieux notés',
    worst: 'Les moins bien notés',
  };

  const parseDate = (d: string) => {
    const [day, month, year] = d.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  const filtered = reviews
    .filter((r) => search === '' || r.content.toLowerCase().includes(search.toLowerCase()) || r.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'recent') return parseDate(b.reviewDate).getTime() - parseDate(a.reviewDate).getTime();
      if (sort === 'best') return b.rating - a.rating || parseDate(b.reviewDate).getTime() - parseDate(a.reviewDate).getTime();
      return a.rating - b.rating || parseDate(b.reviewDate).getTime() - parseDate(a.reviewDate).getTime();
    });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-1">Avis</h2>
        <p className="text-sm text-muted-foreground mb-6">Avis de clients ayant acheté ce produit.</p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg bg-card hover:bg-secondary/50 transition-colors w-full sm:w-auto"
            >
              <span className="text-muted-foreground">Trier :</span>
              <span className="font-medium">{sortLabels[sort]}</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
            </button>
            {sortOpen && (
              <div className="absolute top-full left-0 mt-1 w-full sm:w-56 bg-card border border-border rounded-lg shadow-lg z-10">
                {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => { setSort(key); setSortOpen(false); }}
                    className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-secondary/50 transition-colors ${sort === key ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                  >
                    {sortLabels[key]}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Search */}
          <div className="relative flex-1 sm:max-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher un avis..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg bg-card focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Reviews list */}
        <div className="divide-y divide-border">
          {filtered.map((review, i) => (
            <ReviewItem key={i} review={review} />
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">Aucun avis trouvé.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const ReviewItem = ({ review }: { review: Review }) => (
  <div className="py-4 first:pt-0 last:pb-0">
    {/* Line 1: stars + rating + verified */}
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-4 h-4 ${s <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} />
          ))}
        </div>
        <span className="text-sm font-medium text-foreground">{review.rating}/5</span>
      </div>
      <span className="flex items-center gap-1 text-xs text-emerald-600">
        <Check className="w-3.5 h-3.5" />
        Vérifié
      </span>
    </div>

    {/* Line 2: content */}
    <p className="text-sm text-foreground mb-1.5">{review.content}</p>

    {/* Line 3: metadata */}
    <p className="text-xs text-muted-foreground mb-2">
      Avis du {review.reviewDate}, suite à une expérience du {review.experienceDate} par {review.name}
    </p>

    {/* Line 4: actions */}
    <div className="flex items-center gap-4 text-xs text-muted-foreground">
      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
        <ThumbsUp className="w-3.5 h-3.5" />
        Utile(0)
      </button>
      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
        <ExternalLink className="w-3.5 h-3.5" />
        Signaler
      </button>
    </div>
  </div>
);

export default ReviewsSection;
