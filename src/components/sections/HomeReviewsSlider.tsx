import { useRef, useEffect, useState } from 'react';
import { Star, Check } from 'lucide-react';
import reviews, { TOTAL_REVIEWS } from '@/data/reviews';
import type { Review } from '@/data/reviews';

const HomeReviewsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const animationRef = useRef<number>();
  const speedRef = useRef(0.6); // px per frame

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const animate = () => {
      if (!paused && el) {
        el.scrollLeft += speedRef.current;
        // Seamless loop: when we've scrolled past the first set, reset
        const halfScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= halfScroll) {
          el.scrollLeft -= halfScroll;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [paused]);

  // Duplicate reviews for infinite loop
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
          Ce que disent nos <span className="text-emerald-500">clients</span>
        </h2>

        {/* Badge */}
        <div className="flex flex-col items-center gap-1.5 mb-8">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700">Avis Vérifiés</span>
          </div>
          <p className="text-[11px] text-muted-foreground text-center">Basé sur {TOTAL_REVIEWS} avis soumis à un contrôle</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {doubledReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="flex-shrink-0 w-[320px] sm:w-[380px] bg-card rounded-2xl border border-border/40 p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-4.5 h-4.5 ${s <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} />
          ))}
        </div>
        <span className="text-sm font-semibold">{review.rating}/5</span>
      </div>
      <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
        <Check className="w-3.5 h-3.5" />
        Vérifié
      </span>
    </div>
    <p className="text-[15px] text-foreground mb-3 leading-relaxed">{review.content}</p>
    <p className="text-xs text-muted-foreground">{review.name}</p>
  </div>
);

export default HomeReviewsSlider;
