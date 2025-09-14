import { Component, OnInit, HostListener } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillSection {
  name: string;
  icon: string;
  skills: Skill[];
}

interface SkillStat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  particles: Particle[] = [];
  isVisible = false;

  skillsStats: SkillStat[] = [
    { value: '25+', label: 'Tecnologías', icon: 'bi-code-slash' },
    { value: '3+', label: 'Años de Experiencia', icon: 'bi-calendar-check' },
    { value: '4', label: 'Categorías', icon: 'bi-grid-3x3' },
    { value: 'AWS', label: 'Especialización', icon: 'bi-cloud' }
  ];

  skillsSections: SkillSection[] = [
    {
      name: 'Frontend',
      icon: 'bi-layout-text-window',
      skills: [
        { name: 'Angular', icon: 'devicon-angularjs-plain colored', level: 0 },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 0 },
        { name: 'RxJS', icon: 'devicon-javascript-plain colored', level: 0 }, // no hay RxJS en devicon
        { name: 'Reactive Forms', icon: 'bi-ui-checks-grid', level: 0 },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', level: 0 },
        { name: 'CSS Responsive', icon: 'devicon-css3-plain colored', level: 0 }
      ]
    },
    {
      name: 'Backend & AWS',
      icon: 'bi-server',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain colored', level: 0 },
        { name: 'AWS Lambda', icon: 'devicon-amazonwebservices-original colored', level: 0 },
        { name: 'API Gateway', icon: 'bi-diagram-3', level: 0 },
        { name: 'S3', icon: 'devicon-amazonwebservices-original colored', level: 0 },
        { name: 'Custom Layers', icon: 'bi-layers', level: 0 }
      ]
    },
    {
      name: 'Arquitectura',
      icon: 'bi-layers',
      skills: [
        { name: 'Clean Architecture', icon: 'bi-hexagon', level: 0 },
        { name: 'Microservices', icon: 'bi-diagram-3-fill', level: 0 },
        { name: 'Separación por Dominios', icon: 'bi-diagram-3', level: 0 }
      ]
    },
    {
      name: 'Habilidades Profesionales',
      icon: 'bi-people',
      skills: [
        { name: 'Comunicación con Clientes', icon: 'bi-people', level: 0 },
        { name: 'Facilitación de Workshops', icon: 'bi-easel', level: 0 },
        { name: 'Demos con Stakeholders', icon: 'bi-easel2', level: 0 },
        { name: 'Documentación Técnica', icon: 'bi-journal-code', level: 0 },
        { name: 'Estimación de Esfuerzos', icon: 'bi-clipboard-check', level: 0 }
      ]
    }
  ];

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
    const element = document.querySelector('.skills-categories');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      this.isVisible = rect.top < windowHeight && rect.bottom > 0;
    }
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

        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.speedY *= -1;
        }

        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
      });

      requestAnimationFrame(animate);
    };

    animate();
  }
}
