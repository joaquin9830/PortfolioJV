import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Aplicación web full stack',
      description: 'Aplicación web full stack desarrollada con Angular y Spring Boot',
      image: 'assets/images/projects/project-1.png',
      website: 'https://www.example1.com',
      github: 'https://github.com/user/project1'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      image: 'assets/images/projects/project-2.png',
      website: 'https://www.example1.com',
      github: 'https://github.com/user/project1'
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del Proyecto 3',
      image: 'assets/images/projects/project-3.png',
      website: 'https://www.example1.com',
      github: 'https://github.com/user/project1'
    },
    {
      title: 'Proyecto 4',
      description: 'Descripción del Proyecto 4',
      image: 'assets/images/projects/project-4.png',
      website: 'https://www.example1.com',
      github: 'https://github.com/user/project1'
    },
    // Agrega más proyectos aquí
  ];
}
