import { Component, inject, signal } from '@angular/core';

import { ScrollService } from '../../core/services/scroll.service';
import { ThemeService, AccentColor } from '../../core/services/theme.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly scroll = inject(ScrollService);
  readonly theme = inject(ThemeService);

  readonly mobileMenuOpen = signal(false);
  readonly accentDropdownOpen = signal(false);

  readonly navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly accentColors: { key: AccentColor; label: string; color: string }[] = [
    { key: 'cyan', label: 'Cyber Cyan', color: '#00f0ff' },
    { key: 'emerald', label: 'Neon Emerald', color: '#10b981' },
    { key: 'violet', label: 'Electric Violet', color: '#a855f7' },
    { key: 'amber', label: 'Solar Amber', color: '#f59e0b' },
  ];

  scrollTo(sectionId: string): void {
    this.closeMobileMenu();
    this.scroll.scrollToSection(sectionId);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleAccentDropdown(): void {
    this.accentDropdownOpen.update((v) => !v);
  }

  selectAccent(accent: AccentColor): void {
    this.theme.setAccent(accent);
    this.accentDropdownOpen.set(false);
  }
}
