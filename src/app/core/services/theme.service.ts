import { Injectable, signal, effect } from '@angular/core';

export type AccentColor = 'cyan' | 'emerald' | 'violet' | 'amber';

export const ACCENT_HEX: Record<AccentColor, string> = {
  cyan: '#00f0ff',
  emerald: '#10b981',
  violet: '#a855f7',
  amber: '#f59e0b'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly currentAccent = signal<AccentColor>('cyan');
  readonly isDark = signal<boolean>(true); // default true for developer dark aesthetic

  constructor() {
    // initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const savedAccent = localStorage.getItem('omar_portfolio_accent') as AccentColor;
      if (savedAccent && ['cyan', 'emerald', 'violet', 'amber'].includes(savedAccent)) {
        this.currentAccent.set(savedAccent);
      }
    }

    effect(() => {
      const accent = this.currentAccent();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-accent', accent);
        document.documentElement.classList.add('dark');
        localStorage.setItem('omar_portfolio_accent', accent);
        this.updateFavicon(ACCENT_HEX[accent]);
      }
    });
  }

  public setAccent(accent: AccentColor): void {
    this.currentAccent.set(accent);
  }

  private updateFavicon(color: string): void {
    if (typeof document === 'undefined') return;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <path
    d="M 21 20 A 12 12 0 0 0 21 44 A 12 12 0 0 0 21 20 A 12 12 0 0 1 33 32 V 44 V 20 L 44 35 L 55 20 V 44"
    fill="none"
    stroke="${color}"
    stroke-width="6"
    stroke-linecap="round"
    stroke-linejoin="round"/>
</svg>`;

    const dataUri = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = dataUri;
  }
}
