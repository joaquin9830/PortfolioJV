import { Component, OnInit, OnDestroy } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Technology {
  name: string;
  icon: string;
}

interface FloatingIcon {
  class: string;
  x: number;
  y: number;
  delay: number;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  particles: Particle[] = [];
  currentWordIndex = 0;
  typingWords = ['Full Stack', 'Arquitectura Hexagonal', 'AWS Lambda', 'Python 3.12', 'Microservicios'];
  private typingInterval: any;

  technologies: Technology[] = [
    { name: 'Python 3.12', icon: 'bi-code-slash' },
    { name: 'AWS Lambda', icon: 'bi-cloud' },
    { name: 'Angular 18+', icon: 'bi-layout-text-window' },
    { name: 'Arquitectura Hexagonal', icon: 'bi-layers' },
    { name: 'PyPDF', icon: 'bi-file-text' },
    { name: 'Microservicios', icon: 'bi-gear' }
  ];

  floatingIcons: FloatingIcon[] = [
    { class: 'bi bi-cloud', x: 20, y: 30, delay: 0 },
    { class: 'bi bi-layers', x: 80, y: 20, delay: 0.5 },
    { class: 'bi bi-code-slash', x: 15, y: 70, delay: 1 },
    { class: 'bi bi-file-code', x: 85, y: 60, delay: 1.5 },
    { class: 'bi bi-gear', x: 50, y: 10, delay: 2 },
    { class: 'bi bi-plug', x: 25, y: 50, delay: 2.5 }
  ];

  ngOnInit(): void {
    this.generateParticles();
    this.startTypingAnimation();
    this.animateParticles();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private generateParticles(): void {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
  }

  private startTypingAnimation(): void {
    this.typingInterval = setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.typingWords.length;
    }, 2000);
  }

  private animateParticles(): void {
    const animate = () => {
      this.particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset position if out of bounds
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.speedY *= -1;
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
      });

      requestAnimationFrame(animate);
    };

    animate();
  }
}
