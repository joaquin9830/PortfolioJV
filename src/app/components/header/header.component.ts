import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkMode = true;
  isScrolled = false;
  scrollProgress = 0;
  mobileMenuOpen = false;
  activeSection = 'home';

  navItems: NavItem[] = [
    { id: 'home', label: 'Inicio', href: '#home', icon: 'bi bi-house' },
    { id: 'about', label: 'Sobre Mí', href: '#about', icon: 'bi bi-person' },
    { id: 'services', label: 'Servicios', href: '#services', icon: 'bi bi-gear' },
    { id: 'education', label: 'Educación', href: '#education', icon: 'bi bi-mortarboard' },
    { id: 'skills', label: 'Habilidades', href: '#skills', icon: 'bi bi-code-slash' },
    { id: 'projects', label: 'Proyectos', href: '#projects', icon: 'bi bi-folder' },
    { id: 'contact', label: 'Contacto', href: '#contact', icon: 'bi bi-envelope' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark';
    this.updateScrollProgress();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateScrollProgress();
    this.updateScrolledState();
    this.updateActiveSection();
  }

  private updateScrollProgress(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }

  private updateScrolledState(): void {
    this.isScrolled = window.scrollY > 50;
  }

  private updateActiveSection(): void {
    const sections = this.navItems.map(item => item.id);
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark';
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
    this.mobileMenuOpen = false;
    this.scrollToSection(sectionId);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
