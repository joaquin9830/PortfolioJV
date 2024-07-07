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
  education(){
    this.router.navigate(['/education-crimi']);
  }
}
