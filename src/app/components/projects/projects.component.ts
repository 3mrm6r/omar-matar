import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly portfolio = inject(PortfolioService);
  readonly projects = this.portfolio.projects;

  readonly activeCategory = signal<string>('all');
  readonly selectedProject = signal<Project | null>(null);

  readonly filteredProjects = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.projects();
    return this.projects().filter((p) => p.category === cat);
  });

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  openModal(project: Project): void {
    this.selectedProject.set(project);
  }

  closeModal(): void {
    this.selectedProject.set(null);
  }
}
