import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  constructor(private router:Router){}
  
  ngOnInit(){
    
  }
  //Función para navegar a la página educación criminalistica
  education(){
    this.router.navigate(['/education-crimi']);
  }
  //Función para navegar a la página educación Argentina Programa
  educationDetail(){
    this.router.navigate(['/education-detail']);
  }

  educationAlura(){
    this.router.navigate(['/education-alura']);
  }
}
