import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface EducationStat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  particles: Particle[] = [];
  isVisible = false;

  educationStats: EducationStat[] = [
    { value: '3+', label: 'Años de Estudio', icon: 'bi bi-calendar-check' },
    { value: '3', label: 'Instituciones', icon: 'bi bi-mortarboard' },
    { value: '15+', label: 'Tecnologías Aprendidas', icon: 'bi bi-code-slash' },
    { value: '100%', label: 'Compromiso', icon: 'bi bi-heart' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.generateParticles();
    this.animateParticles();
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility(): void {
    const element = document.querySelector('.timeline-container');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      this.isVisible = rect.top < windowHeight && rect.bottom > 0;
    }
  }

  private generateParticles(): void {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.2 + 0.1
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

  // Navegación a páginas de educación
  educationDetail(): void {
    this.router.navigate(['/education-detail']);
  }

  educationAlura(): void {
    this.router.navigate(['/education-alura']);
  }

  educationUtn(): void {
    this.router.navigate(['/education-utn']);
  }
}
