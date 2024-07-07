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
      github: 'https://github.com/joaquin9830/BackEndProyectofinal'
    },
    {
      title: 'Trooper Stay Java',
      description: 'Aplicación Desktop desarrollada con Java | JuniorTechTroopers',
      image: 'assets/images/projects/project-2.png',      
      github: 'https://github.com/CodeStrong2023/ProyectoJuniorTechTroopers'
    },
    {
      title: 'Sitio Web JuniorTechTroopers',
      description: 'Aplicación web de Junior Tech Troopers desarrollada con Angular y Firebase',
      image: 'assets/images/projects/project-3.png',
      website: 'https://juniortechtroopers.com.ar/',
      github: 'https://github.com/juniors-tech-troopers'
    },
    {
      title: 'Trooper Stay Python',
      description: 'Aplicación Desktop desarrollada con Python | JuniorTechTroopers',
      image: 'assets/images/projects/project-4.png',      
      github: 'https://github.com/CodeStrong2023/ProyectoPythonJuniorTechTroopers'
    },
   
  ];
}
