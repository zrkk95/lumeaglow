import { useState, useEffect, useCallback } from 'react';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import reviews from '@/data/reviews';

const HomeReviewsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = reviews.length - 1;

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [paused, next]);

  // Show 2 cards on desktop, 1 on mobile
  const getVisibleReviews = () => {
    const items = [];
    items.push(reviews[current]);
    if (current + 1 <= maxIndex) {
      items.push(reviews[current + 1]);
    } else {
      items.push(reviews[0]);
    }
    return items;
  };

  const visible = getVisibleReviews();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Avis <span className="gradient-text">clients</span>
        </h2>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mobile: show only first */}
            <ReviewCard review={visible[0]} className="block" />
            <ReviewCard review={visible[1]} className="hidden md:block" />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 bg-card border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-secondary/50 transition-colors"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 bg-card border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-secondary/50 transition-colors"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-5' : 'bg-muted-foreground/30'}`}
                aria-label={`Avis ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, className = '' }: { review: (typeof reviews)[0]; className?: string }) => (
  <div className={`bg-card rounded-xl border border-border/50 p-5 shadow-sm ${className}`}>
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-4 h-4 ${s <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} />
          ))}
        </div>
        <span className="text-sm font-medium">{review.rating}/5</span>
      </div>
      <span className="flex items-center gap-1 text-xs text-emerald-600">
        <Check className="w-3.5 h-3.5" />
        Vérifié
      </span>
    </div>
    <p className="text-sm text-foreground mb-2">{review.content}</p>
    <p className="text-xs text-muted-foreground">{review.name}</p>
  </div>
);

export default HomeReviewsSlider;
