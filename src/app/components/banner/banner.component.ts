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
  typingWords = ['Full Stack', 'Portal Developer', 'Lambda Expert', 'Client Solutions', 'Cloud Architect'];
  private typingInterval: any;

  technologies: Technology[] = [
    { name: 'Python', icon: 'bi-code-slash' },
    { name: 'AWS Lambda', icon: 'bi-cloud' },
    { name: 'Angular', icon: 'bi-layout-text-window' },
    { name: 'Desarrollo de Portales', icon: 'bi-window' },
    { name: 'Integración con Clientes', icon: 'bi-people' },
    { name: 'Soluciones Cloud', icon: 'bi-gear' }
  ];

  floatingIcons: FloatingIcon[] = [
    { class: 'bi bi-heart-fill', x: 20, y: 30, delay: 0 },
    { class: 'devicon-angularjs-plain', x: 80, y: 20, delay: 0.5 }
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
    for (let i = 0; i < 20; i++) {
      // Evitar partículas en el área central donde está la imagen
      let x, y;
      do {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
      } while (
        (x > window.innerWidth * 0.3 && x < window.innerWidth * 0.7 && 
         y > window.innerHeight * 0.2 && y < window.innerHeight * 0.8)
      );
      
      this.particles.push({
        x: x,
        y: y,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1
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
