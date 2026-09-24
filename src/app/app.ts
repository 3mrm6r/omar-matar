import { Component, AfterViewInit, inject } from '@angular/core';

import { BackgroundCanvasComponent } from './components/background-canvas/background-canvas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollService } from './core/services/scroll.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundCanvasComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  readonly scroll = inject(ScrollService);
  readonly theme = inject(ThemeService);

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.scroll.initScrollListener();

      // Delay slightly for DOM layout calculation
      setTimeout(() => {
        this.scroll.initScrollSpy([
          'hero',
          'about',
          'skills',
          'experience',
          'projects',
          'education',
          'contact',
        ]);
        this.scroll.initScrollReveal();
      }, 100);
    }
  }
}
