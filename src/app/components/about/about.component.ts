import { Component, inject } from '@angular/core';

import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollService } from '../../core/services/scroll.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly portfolio = inject(PortfolioService);
  readonly scroll = inject(ScrollService);

  readonly profile = this.portfolio.profile;
  readonly stats = this.portfolio.stats;
}
