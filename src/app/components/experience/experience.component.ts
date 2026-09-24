import { Component, inject } from '@angular/core';

import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollService } from '../../core/services/scroll.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly portfolio = inject(PortfolioService);
  readonly scroll = inject(ScrollService);
  readonly experiences = this.portfolio.experiences;
}
