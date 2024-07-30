import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Desarrollo Frontend',
      description: 'Creación de interfaces de usuario atractivas y funcionales.',
      icon: 'assets/icons/services/frontend.png'
    },
    {
      title: 'Desarrollo Backend',
      description: 'Desarrollo de sistemas robustos y escalables para soportar tus aplicaciones.',
      icon: 'assets/icons/services/backend.png' 
    },
    {
      title: 'Administración de Base de Datos',
      description: 'Gestión de bases de datos para asegurar la integridad y disponibilidad de tus datos.',
      icon: 'assets/icons/services/database.png' 
    }
  ];
}
