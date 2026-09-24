import { Component, inject } from '@angular/core';

import { ScrollService } from '../../core/services/scroll.service';
import { PortfolioService } from '../../core/services/portfolio.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly scroll = inject(ScrollService);
  readonly portfolio = inject(PortfolioService);

  readonly profile = this.portfolio.profile;
  readonly currentYear = new Date().getFullYear();
}
