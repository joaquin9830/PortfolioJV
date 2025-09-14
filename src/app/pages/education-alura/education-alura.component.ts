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
  selector: 'app-education-alura',
  templateUrl: './education-alura.component.html',
  styleUrls: ['./education-alura.component.css']
})
export class EducationAluraComponent implements OnInit {
  particles: Particle[] = [];

  ngOnInit(): void {
    this.generateParticles();
    this.animateParticles();
  }

  private generateParticles(): void {
    for (let i = 0; i < 30; i++) {
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

  private animateParticles(): void {
    const animate = () => {
      this.particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebote en los bordes
        if (particle.x <= 0 || particle.x >= window.innerWidth) {
          particle.speedX *= -1;
        }
        if (particle.y <= 0 || particle.y >= window.innerHeight) {
          particle.speedY *= -1;
        }

        // Mantener dentro de los límites
        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
      });

      requestAnimationFrame(animate);
    };

    animate();
  }
}
