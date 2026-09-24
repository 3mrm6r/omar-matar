import { Component, inject } from '@angular/core';

import { PortfolioService } from '../../core/services/portfolio.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  readonly portfolio = inject(PortfolioService);
  readonly educations = this.portfolio.educations;
  readonly certifications = this.portfolio.certifications;
}
