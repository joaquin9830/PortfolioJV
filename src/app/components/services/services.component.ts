import { Component, OnInit } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  particles: Particle[] = [];

  services: Service[] = [
    {
      title: 'Arquitectura Hexagonal & Microservicios',
      description: 'Diseño y desarrollo de microservicios serverless con separación clara de responsabilidades en capas handler → service → client → dispatcher.',
      icon: 'bi-layers',
      features: [
        'Arquitectura hexagonal',
        'Microservicios serverless',
        'Separación de responsabilidades',
        'Manejo de excepciones personalizadas'
      ],
      technologies: ['Python', 'AWS Lambda', 'Clean Architecture']
    },
    {
      title: 'Integraciones Corporativas',
      description: 'Implementación de clientes base con manejo de tokens OAuth2, caché de credenciales y llamadas seguras a servicios externos.',
      icon: 'bi-plug',
      features: [
        'Integraciones complejas',
        'Automatizaciones',
        'Bots inteligentes',
        'APIs corporativas'
      ],
      technologies: ['Python', 'Requests', 'OAuth2', 'API Integration']
    },
    {
      title: 'Frontend Angular Avanzado',
      description: 'Desarrollo de portales modulares y escalables con routing avanzado, formularios reactivos y componentes standalone.',
      icon: 'bi-layout-text-window',
      features: [
        'Angular moderno',
        'Formularios reactivos',
        'Componentes standalone',
        'Routing avanzado'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap']
    },
    {
      title: 'Automatización & AWS',
      description: 'Automatización de procesos complejos con AWS Lambda, Custom Layers y soluciones serverless escalables.',
      icon: 'bi-gear-fill',
      features: [
        'Automatización de procesos',
        'AWS Lambda avanzado',
        'Custom Layers',
        'Soluciones serverless'
      ],
      technologies: ['AWS Lambda', 'Python', 'Custom Layers', 'Serverless']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Configuración y despliegue de Lambdas en múltiples entornos con config.properties centralizados y pipelines automatizados.',
      icon: 'bi-gear',
      features: [
        'CI/CD Pipelines',
        'Gestión de entornos',
        'ConfigParser',
        'Despliegues automatizados'
      ],
      technologies: ['AWS Lambda', 'CI/CD', 'ConfigParser', 'DevOps']
    },
    {
      title: 'Comunicación & Liderazgo Técnico',
      description: 'Trabajo directo con stakeholders de negocio, facilitación de workshops, demos y traducción de necesidades técnicas.',
      icon: 'bi-people',
      features: [
        'Comunicación con clientes',
        'Facilitación de workshops',
        'Demos con stakeholders',
        'Documentación técnica'
      ],
      technologies: ['Soft Skills', 'Workshop Facilitation', 'Technical Communication', 'Documentation']
    }
  ];

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
}
