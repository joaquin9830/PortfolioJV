import { Component, OnInit } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

@Component({
  selector: 'app-education-utn',
  templateUrl: './education-utn.component.html',
  styleUrls: ['./education-utn.component.css']
})
export class EducationUtnComponent implements OnInit {
  particles: Particle[] = [];

  ngOnInit(): void {
    this.generateParticles();
    this.animateParticles();
  }

  private generateParticles(): void {
    for (let i = 0; i < 25; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
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
