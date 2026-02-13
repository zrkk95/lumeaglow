import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import reviews from '@/data/reviews';
import type { Review } from '@/data/reviews';

const formatDateShort = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/');
  const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
};

const HomeReviewsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Autoplay
    let timer: ReturnType<typeof setInterval>;
    const startAutoplay = () => {
      timer = setInterval(() => {
        if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      }, 4000);
    };
    startAutoplay();

    const root = emblaApi.rootNode();
    const stop = () => clearInterval(timer);
    const restart = () => { stop(); startAutoplay(); };
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', restart);

    return () => {
      stop();
      root.removeEventListener('mouseenter', stop);
      root.removeEventListener('mouseleave', restart);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
          Ce que disent nos clients
        </h2>

        {/* Badge */}
        <div className="flex flex-col items-center gap-1.5 mb-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700">Avis Vérifiés</span>
          </div>
          <p className="text-[11px] text-muted-foreground text-center">Basé sur {reviews.length} avis soumis à un contrôle</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows desktop */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-card border border-border shadow-md hover:bg-secondary/50 disabled:opacity-30 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-card border border-border shadow-md hover:bg-secondary/50 disabled:opacity-30 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="flex-shrink-0 w-[85vw] sm:w-[400px] min-h-[220px] sm:min-h-[240px] bg-card rounded-[18px] border border-border/40 p-7 sm:p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_28px_-4px_rgba(0,0,0,0.10)] transition-shadow duration-300 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className={`w-[18px] h-[18px] ${s <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} />
            ))}
          </div>
          <span className="text-sm font-semibold">{review.rating}/5</span>
        </div>
        <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
          <Check className="w-3.5 h-3.5" />
          Vérifié
        </span>
      </div>
      <p className="text-[15px] sm:text-base text-foreground leading-relaxed mb-4">{review.content}</p>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-xs text-muted-foreground font-medium">{review.name}</p>
      <p className="text-[11px] text-muted-foreground/70">{formatDateShort(review.reviewDate)}</p>
    </div>
  </div>
);

export default HomeReviewsSlider;
