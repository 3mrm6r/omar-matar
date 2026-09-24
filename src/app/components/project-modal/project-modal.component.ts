import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }
}
