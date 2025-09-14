import { Component, OnInit } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface FloatingBadge {
  icon: string;
  text: string;
  x: number;
  y: number;
  delay: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  particles: Particle[] = [];

  stats: Stat[] = [
    { value: '3+', label: 'Años de Experiencia', icon: 'bi-calendar-check' },
    { value: 'AWS', label: 'Especialización Cloud', icon: 'bi-cloud' },
    { value: '30+', label: 'Tecnologías', icon: 'bi-code-slash' },
    { value: '6', label: 'Categorías', icon: 'bi-grid-3x3' }
  ];

  floatingBadges: FloatingBadge[] = [
    { icon: 'bi bi-cloud', text: 'AWS Lambda', x: 20, y: 30, delay: 0 },
    { icon: 'bi bi-briefcase', text: 'In Motion', x: 80, y: 20, delay: 0.5 },
    { icon: 'bi bi-diagram-3', text: 'Arquitectura', x: 15, y: 70, delay: 1 },
    { icon: 'bi bi-plug', text: 'Integraciones', x: 85, y: 60, delay: 1.5 }
  ];

  ngOnInit(): void {
    this.generateParticles();
    this.animateParticles();
  }

  private generateParticles(): void {
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
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
