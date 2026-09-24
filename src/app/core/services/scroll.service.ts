import { Injectable, signal, NgZone, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly ngZone = inject(NgZone);

  readonly activeSection = signal<string>('hero');
  readonly scrollProgress = signal<number>(0);
  readonly isScrolled = signal<boolean>(false);

  private observer?: IntersectionObserver;

  public initScrollListener(): void {
    if (typeof window === 'undefined') return;

    this.ngZone.runOutsideAngular(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        const isScrolled = scrollTop > 40;

        this.ngZone.run(() => {
          this.scrollProgress.set(Math.min(100, Math.max(0, progress)));
          this.isScrolled.set(isScrolled);
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    });
  }

  public initScrollSpy(sectionIds: string[]): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75]
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          const id = entry.target.getAttribute('id');
          if (id) {
            this.ngZone.run(() => {
              this.activeSection.set(id);
            });
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        this.observer?.observe(el);
      }
    });
  }

  public scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  public initScrollReveal(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // optionally unobserve after reveal
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => revealObserver.observe(el));
  }
}
