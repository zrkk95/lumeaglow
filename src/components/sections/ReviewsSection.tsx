import { useState, useMemo } from 'react';
import { Star, Check, ThumbsUp, ExternalLink, Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import reviews, { TOTAL_REVIEWS, AVERAGE_RATING, RATING_COUNTS } from '@/data/reviews';
import type { Review } from '@/data/reviews';

type SortOption = 'recent' | 'best' | 'worst';
const REVIEWS_PER_PAGE = 5;

const parseDate = (d: string) => {
  const [day, month, year] = d.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const ReviewsSection = () => {
  const [sort, setSort] = useState<SortOption>('best');
  const [search, setSearch] = useState('');
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);

  const sortLabels: Record<SortOption, string> = {
    recent: 'Les plus récents',
    best: 'Les mieux notés',
    worst: 'Les moins bien notés',
  };

  const filtered = useMemo(() => {
    return reviews
      .filter((r) => search === '' || r.content.toLowerCase().includes(search.toLowerCase()) || r.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sort === 'recent') return parseDate(b.reviewDate).getTime() - parseDate(a.reviewDate).getTime();
        if (sort === 'best') return b.rating - a.rating || parseDate(b.reviewDate).getTime() - parseDate(a.reviewDate).getTime();
        if (sort === 'worst') return a.rating - b.rating || parseDate(b.reviewDate).getTime() - parseDate(a.reviewDate).getTime();
        // Default: 5★ first, then 4★ (best social proof order)
        return b.rating - a.rating || parseDate(b.reviewDate).getTime() - parseDate(a.reviewDate).getTime();
      });
  }, [sort, search]);

  const totalPages = Math.ceil(filtered.length / REVIEWS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE);

  const handleSort = (key: SortOption) => {
    setSort(key);
    setSortOpen(false);
    setPage(1);
  };

  return (
    <section id="reviews-section" className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Ce que disent nos clients
        </h2>

        {/* Header with average + histogram */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 p-6 bg-card rounded-2xl border border-border/50">
          {/* Left: Average */}
          <div className="flex flex-col items-center gap-1 min-w-[120px]">
            <span className="text-4xl font-bold text-foreground">{AVERAGE_RATING}</span>
            <span className="text-sm text-muted-foreground">/ 5</span>
            <div className="flex gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`w-4 h-4 ${s <= Math.round(AVERAGE_RATING) ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} />
              ))}
            </div>
            {/* Avis Vérifiés badge */}
            <div className="flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700">Avis Vérifiés</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1.5 text-center leading-tight">Basé sur {TOTAL_REVIEWS} avis soumis<br/>à un contrôle</p>
          </div>

          {/* Right: Histogram */}
          <div className="flex-1 w-full space-y-1.5">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = RATING_COUNTS[star as keyof typeof RATING_COUNTS];
              const pct = TOTAL_REVIEWS > 0 ? (count / TOTAL_REVIEWS) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-2 text-sm">
                  <span className="w-3 text-right text-muted-foreground font-medium">{star}</span>
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-5 text-right text-xs text-muted-foreground">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
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
                    onClick={() => handleSort(key)}
                    className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-secondary/50 transition-colors ${sort === key ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                  >
                    {sortLabels[key]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex-1 sm:max-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher un avis..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg bg-card focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Reviews list */}
        <div className="divide-y divide-border">
          {paginated.map((review, i) => (
            <ReviewItem key={`${page}-${i}`} review={review} />
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">Aucun avis trouvé.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="p-2 rounded-lg hover:bg-secondary/50 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  page === p ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary/50 text-muted-foreground'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-lg hover:bg-secondary/50 disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ReviewItem = ({ review }: { review: Review }) => (
  <div className="py-4 first:pt-0 last:pb-0">
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
    <p className="text-sm text-foreground mb-1.5">{review.content}</p>
    <p className="text-xs text-muted-foreground mb-2">
      Avis du {review.reviewDate}, suite à une expérience du {review.experienceDate} par {review.name}
    </p>
    <div className="flex items-center gap-4 text-xs text-muted-foreground">
      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
        <ThumbsUp className="w-3.5 h-3.5" />
        Utile (0)
      </button>
      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
        <ExternalLink className="w-3.5 h-3.5" />
        Signaler
      </button>
    </div>
  </div>
);

export default ReviewsSection;
