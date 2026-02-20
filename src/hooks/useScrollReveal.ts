import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal hook: applies a one-shot fade + slide-up animation
 * when the element enters the viewport.
 *
 * Uses CSS classes .reveal / .reveal--text / .reveal--img + .is-visible
 * with requestAnimationFrame to guarantee smooth transitions.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  { delay = 0, variant = 'text' }: { delay?: number; variant?: 'text' | 'image' } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Apply base .reveal class immediately so element starts hidden
    el.classList.add('reveal');
    if (variant === 'image') el.classList.add('reveal--img');
    else el.classList.add('reveal--text');

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    if (prefersReduced) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // CRITICAL: trigger in next frame so browser registers
        // the initial state before transitioning
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.add('is-visible');
          });
        });

        observer.unobserve(el);
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant]);

  return ref;
}
