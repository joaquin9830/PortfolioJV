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
    { value: '30+', label: 'Tecnologías', icon: 'bi-code-slash' },
    { value: '3+', label: 'Años de Experiencia', icon: 'bi-calendar-check' },
    { value: '6', label: 'Categorías', icon: 'bi-grid-3x3' },
    { value: 'AWS', label: 'Especialización', icon: 'bi-cloud' }
  ];

  skillsSections: SkillSection[] = [
    {
      name: 'Frontend',
      icon: 'bi-layout-text-window',
      skills: [
        { name: 'Angular 18+', icon: 'angular', level: 0 },
        { name: 'TypeScript', icon: 'typescript', level: 0 },
        { name: 'RxJS', icon: 'rxjs', level: 0 },
        { name: 'Reactive Forms', icon: 'form-input', level: 0 },
        { name: 'Bootstrap', icon: 'bootstrap', level: 0 },
        { name: 'CSS Responsive', icon: 'css3', level: 0 }
      ]
    },
    {
      name: 'Backend & AWS',
      icon: 'bi-server',
      skills: [
        { name: 'Python 3.12', icon: 'python', level: 0 },
        { name: 'AWS Lambda', icon: 'aws-lambda', level: 0 },
        { name: 'PyPDF', icon: 'pypdf', level: 0 },
        { name: 'API Gateway', icon: 'api-gateway', level: 0 },
        { name: 'S3', icon: 's3', level: 0 },
        { name: 'Custom Layers', icon: 'custom-layers', level: 0 }
      ]
    },
    {
      name: 'Arquitectura',
      icon: 'bi-layers',
      skills: [
        { name: 'Arquitectura Hexagonal', icon: 'hexagonal-architecture', level: 0 },
        { name: 'Microservicios', icon: 'microservices', level: 0 },
        { name: 'CQRS', icon: 'cqrs', level: 0 },
        { name: 'DTOs', icon: 'dtos', level: 0 },
        { name: 'Separación por Dominios', icon: 'domain-separation', level: 0 }
      ]
    },
    {
      name: 'Integraciones',
      icon: 'bi-plug',
      skills: [
        { name: 'BeAware360 APIs', icon: 'beaware360', level: 0 },
        { name: 'WSO2 OAuth2', icon: 'wso2', level: 0 },
        { name: 'Maestro Distribuidores', icon: 'maestro-distribuidores', level: 0 },
        { name: 'Componente Validador', icon: 'validator-component', level: 0 },
        { name: 'Requests', icon: 'requests', level: 0 }
      ]
    },
    {
      name: 'DevOps & CI/CD',
      icon: 'bi-gear',
      skills: [
        { name: 'CI/CD Pipelines', icon: 'cicd-pipelines', level: 0 },
        { name: 'ConfigParser', icon: 'config-parser', level: 0 },
        { name: 'Logging Estructurado', icon: 'structured-logging', level: 0 },
        { name: 'Gestión de Entornos', icon: 'environment-management', level: 0 },
        { name: 'Despliegues Automatizados', icon: 'automated-deployments', level: 0 }
      ]
    },
    {
      name: 'Habilidades Profesionales',
      icon: 'bi-people',
      skills: [
        { name: 'Comunicación con Clientes', icon: 'client-communication', level: 0 },
        { name: 'Facilitación de Workshops', icon: 'workshop-facilitation', level: 0 },
        { name: 'Demos con Stakeholders', icon: 'stakeholder-demos', level: 0 },
        { name: 'Documentación Técnica', icon: 'technical-documentation', level: 0 },
        { name: 'Estimación de Esfuerzos', icon: 'effort-estimation', level: 0 }
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
