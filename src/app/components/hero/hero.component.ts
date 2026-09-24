import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';

import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollService } from '../../core/services/scroll.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly portfolio = inject(PortfolioService);
  readonly scroll = inject(ScrollService);

  readonly profile = this.portfolio.profile;
  readonly codeSnippets = this.portfolio.terminalCodeSnippets;

  readonly activeTabIndex = signal(0);
  readonly copied = signal(false);
  readonly isRunning = signal(false);
  readonly terminalOutput = signal<string | null>(null);
  readonly executionStatus = signal('TS 5.4 • Ready');

  readonly currentTypedText = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer?: any;

  ngOnInit(): void {
    this.startTypingEffect();
  }


  constructor(private sanitizer: DomSanitizer){}
  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

  private startTypingEffect(): void {
    const roles = this.profile().roles;
    if (!roles.length) return;

    const currentRole = roles[this.roleIndex];

    if (!this.isDeleting) {
      this.currentTypedText.set(currentRole.substring(0, this.charIndex + 1));
      this.charIndex++;

      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.startTypingEffect(), 2000);
        return;
      }
    } else {
      this.currentTypedText.set(currentRole.substring(0, this.charIndex - 1));
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % roles.length;
      }
    }

    const speed = this.isDeleting ? 40 : 80;
    this.typingTimer = setTimeout(() => this.startTypingEffect(), speed);
  }

  setActiveTab(index: number): void {
    this.activeTabIndex.set(index);
    this.terminalOutput.set(null);
  }

  getActiveCodeLines(): string[] {
    const snippet = this.codeSnippets()[this.activeTabIndex()];
    return snippet ? snippet.code.split('\n') : [];
  }

  get highlightedCode(): () => SafeHtml {
    return () => {
      const snippet = this.codeSnippets()[this.activeTabIndex()];
      if (!snippet) return '';
      const html = this.syntaxHighlight(snippet.code, snippet.language);
      return this.sanitizer.bypassSecurityTrustHtml(html);
    };
  }

  copyActiveCode(): void {
    const snippet = this.codeSnippets()[this.activeTabIndex()];
    if (!snippet) return;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(snippet.code).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }

  executeCode(): void {
    this.isRunning.set(true);
    this.executionStatus.set('Compiling & Executing...');
    this.terminalOutput.set(null);

    setTimeout(() => {
      this.isRunning.set(false);
      this.executionStatus.set('Execution Complete (0.014s)');
      this.terminalOutput.set(
        '✔ System state: OPTIMAL • 0 Errors • Impact initialized successfully.',
      );
    }, 900);
  }

  private syntaxHighlight(code: string, lang: string): string {
    let escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Keywords
    escaped = escaped.replace(
      /\b(import|export|class|const|let|var|function|async|await|return|new|from|public|readonly|type|interface|implements|extends|true|false)\b/g,
      '<span class="syn-keyword">$1</span>',
    );

    // Types / Classes
    escaped = escaped.replace(
      /\b(Developer|Passion|Impact|OmarDeveloper|SystemState|Promise|Observable|Signal)\b/g,
      '<span class="syn-type">$1</span>',
    );

    // Strings
    escaped = escaped.replace(/(['"`].*?['"`])/g, '<span class="syn-string">$1</span>');

    // Comments
    escaped = escaped.replace(/(#.*|\/\/.*)/g, '<span class="syn-comment">$1</span>');

    // Method calls
    escaped = escaped.replace(
      /\b(createValue|buildScalableSystems|pipe|filter|debounceTime)\b/g,
      '<span class="syn-method">$1</span>',
    );

    return escaped;
  }
}
