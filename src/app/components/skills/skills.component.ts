import { Component, inject, signal, computed } from '@angular/core';

import { PortfolioService } from '../../core/services/portfolio.service';
import { Skill, SkillCategory } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly portfolio = inject(PortfolioService);
  readonly categories = this.portfolio.skillsCategories;

  readonly selectedCategory = signal<'all' | 'frontend' | 'backend' | 'cloud' | 'tools'>('all');

  readonly activeCategoryMeta = computed(() => {
    const current = this.selectedCategory();
    if (current === 'all') return null;
    return this.categories().find((c) => c.key === current) || null;
  });

  readonly displayedSkills = computed<Skill[]>(() => {
    const current = this.selectedCategory();
    if (current === 'all') {
      return this.categories().flatMap((c) => c.skills);
    }
    const cat = this.categories().find((c) => c.key === current);
    return cat ? cat.skills : [];
  });

  setCategory(key: 'all' | 'frontend' | 'backend' | 'cloud' | 'tools'): void {
    this.selectedCategory.set(key);
  }

  getSkillIcon(icon: string): string {
    const valid = [
      'angular',
      'code',
      'layout',
      'server',
      'database',
      'cloud',
      'tool',
      'zap',
      'cpu',
      'git-merge',
      'shield-check',
      'terminal',
    ];
    return valid.includes(icon) ? icon : 'code';
  }

  getLevelScore(level: string): number {
    switch (level?.toLowerCase()) {
      case 'advanced':
        return 4;
      case 'proficient':
        return 3;
      case 'comfortable':
        return 2;
      case 'learning':
        return 1;
      default:
        return 1;
    }
  }
}
