import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal hook: applies a one-shot fade + slide-up animation
 * when the element enters the viewport.
 *
 * @param delay – optional stagger delay in ms (default 0)
 * @param variant – 'text' (540ms) | 'image' (650ms)
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  { delay = 0, variant = 'text' }: { delay?: number; variant?: 'text' | 'image' } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('sr-visible');
      return;
    }

    // Set initial hidden state + custom props
    el.classList.add('sr-hidden');
    el.style.setProperty('--sr-delay', `${delay}ms`);
    el.style.setProperty('--sr-duration', variant === 'image' ? '650ms' : '540ms');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('sr-hidden');
          el.classList.add('sr-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant]);

  return ref;
}
