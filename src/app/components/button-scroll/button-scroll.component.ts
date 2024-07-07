import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-scroll',
  templateUrl: './button-scroll.component.html',
  styleUrls: ['./button-scroll.component.css']
})
export class ButtonScrollComponent {
  showButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Controla cuándo mostrar u ocultar el botón
    if (window.pageYOffset > 200) { // Cambia 200 por la cantidad de desplazamiento que desees
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
