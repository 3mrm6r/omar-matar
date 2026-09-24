import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone,
  inject,
} from '@angular/core';

interface CodeParticle {
  text: string;
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  fontSize: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface GridPoint {
  x: number;
  y: number;
  opacity: number;
}

@Component({
  selector: 'app-background-canvas',
  standalone: true,
  imports: [],
  template: `
    <div class="code-background-wrapper">
      <canvas #canvas class="code-canvas"></canvas>
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
      <div class="glow-orb orb-3"></div>
      <div class="grid-overlay"></div>
      <div class="code-noise-overlay"></div>
    </div>
  `,
  styleUrls: ['./background-canvas.component.scss'],
})
export class BackgroundCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly ngZone = inject(NgZone);
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId?: number;
  private particles: CodeParticle[] = [];
  private mouseX = 0;
  private mouseY = 0;
  private targetMouseX = 0;
  private targetMouseY = 0;
  private width = 0;
  private height = 0;

  private readonly codeSnippets = [
    'const dev = new OmarDeveloper();',
    'import { signal, computed, effect } from "@angular/core";',
    'async function deployArchitecture(): Promise<Ready>',
    'export const appState = signal<SystemState>("OPTIMAL");',
    'type DeepImmutable<T> = { readonly [K in keyof T]: DeepImmutable<T[K]> };',
    'git commit -m "feat(core): sub-millisecond real-time sync"',
    '<app-root [performance]="Infinity" [theme]="dark"></app-root>',
    'SELECT id, name, speed FROM microservices WHERE status = "HEALTHY";',
    'kubectl apply -f ./production-mesh.yaml',
    'docker run -d --restart=always -p 443:443 cloud-node:latest',
    'const [data$, status$] = createObservables();',
    'return await Promise.all(distributedQueries);',
    'interface HighThroughputCluster { nodes: number; latencyMs: number; }',
    'fn optimize_memory_layout() -> Result<Speed>',
    'window.requestAnimationFrame(renderPixelPerfection);',
    '01001111 01001101 01000001 01010010',
    '{"status": 200, "message": "Zero Downtime Deploy Success"}',
    'Observable.pipe(filter(isReady), debounceTime(10))',
    'background: radial-gradient(circle, #00f0ff 0%, #050508 100%);',
    'export default class HighPerformancePipeline implements Pipeline',
    'const latency = performance.now() - startTime;',
    'npm run build --configuration=production',
  ];

  private readonly tokenColors = [
    'rgba(0, 240, 255, ', // Cyan
    'rgba(16, 185, 129, ', // Emerald
    'rgba(168, 85, 247, ', // Purple
    'rgba(59, 130, 246, ', // Blue
    'rgba(245, 158, 11, ', // Amber
    'rgba(148, 163, 184, ', // Slate
  ];

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.handleResize();
    this.initParticles();

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('mousemove', this.onMouseMove);
      this.animate();
    });
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
      window.removeEventListener('mousemove', this.onMouseMove);
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }

  private onResize = () => {
    this.handleResize();
    this.initParticles();
  };

  private onMouseMove = (e: MouseEvent) => {
    this.targetMouseX = (e.clientX / this.width - 0.5) * 40;
    this.targetMouseY = (e.clientY / this.height - 0.5) * 40;
  };

  private handleResize(): void {
    const canvas = this.canvasRef.nativeElement;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = this.width * window.devicePixelRatio;
    canvas.height = this.height * window.devicePixelRatio;
    if (this.ctx) {
      this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }

  private initParticles(): void {
    const particleCount = Math.floor(Math.min(32, Math.max(14, this.width / 45)));
    this.particles = [];

    for (let i = 0; i < particleCount; i++) {
      const text = this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)];
      const color = this.tokenColors[Math.floor(Math.random() * this.tokenColors.length)];
      const maxOpacity = Math.random() * 0.28 + 0.08;

      this.particles.push({
        text,
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        speedY: (Math.random() * 0.35 + 0.15) * (Math.random() > 0.5 ? 1 : -1),
        speedX: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * maxOpacity,
        maxOpacity,
        fontSize: Math.floor(Math.random() * 4 + 11),
        color,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
  }

  private animate = (time = 0): void => {
    if (!this.ctx) return;

    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw Subtle Matrix Columns & Floating Syntax Lines
    this.ctx.font = '12px "JetBrains Mono", "Fira Code", monospace';
    this.ctx.textBaseline = 'middle';

    const t = time * 0.001;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.y += p.speedY;
      p.x += p.speedX;

      // Wrap around bounds
      if (p.y > this.height + 50) p.y = -40;
      if (p.y < -50) p.y = this.height + 40;
      if (p.x > this.width + 100) p.x = -80;
      if (p.x < -100) p.x = this.width + 80;

      // Pulsing glow calculation
      const currentOpacity = (Math.sin(t * 1.5 + p.pulseOffset) * 0.5 + 0.5) * p.maxOpacity;

      // Parallax position offset
      const posX = p.x + this.mouseX * (p.fontSize / 12);
      const posY = p.y + this.mouseY * (p.fontSize / 12);

      this.ctx.font = `${p.fontSize}px "JetBrains Mono", "Fira Code", monospace`;
      this.ctx.fillStyle = `${p.color}${currentOpacity})`;
      this.ctx.fillText(p.text, posX, posY);

      // subtle code tag box for 20% of particles
      if (i % 5 === 0) {
        this.ctx.strokeStyle = `${p.color}${currentOpacity * 0.35})`;
        this.ctx.lineWidth = 1;
        const textMetrics = this.ctx.measureText(p.text);
        this.ctx.strokeRect(
          posX - 8,
          posY - p.fontSize / 2 - 4,
          textMetrics.width + 16,
          p.fontSize + 8,
        );
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
