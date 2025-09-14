import { Component, OnInit, HostListener } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  website?: string;
  category: string;
  technologies: string[];
  date: string;
  status: 'completed' | 'in-progress';
  features?: string[];
}

interface ProjectStat {
  value: string;
  label: string;
  icon: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  particles: Particle[] = [];
  isVisible = false;
  selectedProject: Project | null = null;
  activeCategory = 'all';
  githubProfile = 'https://github.com/joaquin9830';

  projectStats: ProjectStat[] = [
    { value: '7+', label: 'Proyectos', icon: 'bi-folder' },
    { value: '85%', label: 'Completados', icon: 'bi-check-circle' },
    { value: '5', label: 'Tecnologías', icon: 'bi-code-slash' },
    { value: '2', label: 'Años', icon: 'bi-calendar' }
  ];

  categories: Category[] = [
    { id: 'all', name: 'Todos', icon: 'bi-grid-3x3' },
    { id: 'web', name: 'Web', icon: 'bi-globe' },
    { id: 'desktop', name: 'Desktop', icon: 'bi-laptop' }
  ];

  projects: Project[] = [
    {
      title: 'Aplicación Web Full Stack',
      description: 'Aplicación web completa desarrollada con Angular y Spring Boot, incluyendo autenticación, base de datos y API REST.',
      image: 'assets/images/projects/project-1.png',
      github: 'https://github.com/joaquin9830/BackEndProyectofinal',
      category: 'web',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'TypeScript', 'Java'],
      date: '2022',
      status: 'completed',
      features: [
        'Autenticación de usuarios',
        'API REST completa',
        'Base de datos MySQL',
        'Interfaz responsive',
        'Despliegue en Heroku'
      ]
    },
    {
      title: 'Trooper Stay Java',
      description: 'Aplicación Desktop desarrollada con Java para gestión de reservas hoteleras con interfaz gráfica moderna.',
      image: 'assets/images/projects/project-2.png',
      github: 'https://github.com/CodeStrong2023/ProyectoJuniorTechTroopers',
      category: 'desktop',
      technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
      date: '2023',
      status: 'completed',
      features: [
        'Interfaz gráfica con Swing',
        'Gestión de reservas',
        'Base de datos MySQL',
        'Reportes y estadísticas',
        'Sistema de usuarios'
      ]
    },
    {
      title: 'Sitio Web JuniorTechTroopers',
      description: 'Sitio web corporativo desarrollado con Angular y Firebase, incluyendo CMS y autenticación.',
      image: 'assets/images/projects/project-3.png',
      website: 'https://juniortechtrooper.web.app/',
      github: 'https://github.com/juniors-tech-troopers',
      category: 'web',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'CSS3', 'HTML5'],
      date: '2024',
      status: 'completed',
      features: [
        'Diseño responsive',
        'CMS integrado',
        'Autenticación Firebase',
        'Optimización SEO',
        'Despliegue automático'
      ]
    },
    {
      title: 'Trooper Stay Python',
      description: 'Aplicación Desktop desarrollada con Python para gestión de alojamientos con base de datos SQLite.',
      image: 'assets/images/projects/project-4.png',
      github: 'https://github.com/CodeStrong2023/ProyectoPythonJuniorTechTroopers',
      category: 'desktop',
      technologies: ['Python', 'Tkinter', 'SQLite', 'Pandas'],
      date: '2024',
      status: 'completed',
      features: [
        'Interfaz con Tkinter',
        'Base de datos SQLite',
        'Análisis de datos con Pandas',
        'Sistema de reportes',
        'Exportación de datos'
      ]
    },
    {
      title: 'Aplicación de Hospedajes Trooper Stay',
      description: 'Aplicación full stack para gestión de hospedajes desarrollada con Angular, Java, Spring Boot y PostgreSQL.',
      image: 'assets/images/projects/project-5.png',
      website: 'https://trooper-stay.web.app/',
      github: 'https://github.com/joaquin9830/trooper-stay-fullstack',
      category: 'web',
      technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
      date: '2024',
      status: 'completed',
      features: [
        'Frontend con Angular',
        'Backend con Spring Boot',
        'Base de datos PostgreSQL',
        'API REST completa',
        'Autenticación JWT'
      ]
    },
    {
      title: 'Metanoiazen',
      description: 'Landing page de servicios de sanación con diseño moderno y responsive para centros de bienestar.',
      image: 'assets/images/projects/project-6.png',
      github: 'https://github.com/joaquin9830/metanoia-landing',
      website: 'https://metanoiazen.com.ar/',
      category: 'web',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Bootstrap'],
      date: '2024',
      status: 'completed',
      features: [
        'Diseño responsive',
        'Animaciones suaves',
        'Formularios de contacto',
        'Optimización SEO',
        'Carga rápida'
      ]
    },
    {
      title: 'Ponte Chida',
      description: 'Landing page de tienda de ropa con integración de tienda nube. Actualmente en construcción.',
      image: 'assets/images/projects/project-7.png',
      github: 'https://github.com/joaquin9830/ponte-chida',
      category: 'web',
      technologies: ['React', 'Jsx', 'CSS3', ' Integración con Tienda Nube'],
      date: '2025',
      status: 'in-progress',
      features: [
        'Catálogo de productos',
        'Integración con Shopify',
        'Carrito de compras',
        'Pagos en línea',
        'Panel administrativo'
      ]
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeCategory);
  }

  ngOnInit(): void {
    this.generateParticles();
    this.animateParticles();
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey() {
    this.closeProjectModal();
  }

  private checkVisibility(): void {
    const element = document.querySelector('.projects-grid');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      this.isVisible = rect.top < windowHeight && rect.bottom > 0;
    }
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

  filterProjects(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Otro';
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
