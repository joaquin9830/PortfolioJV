import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  persona: persona = new persona("","","");

  constructor(private router:Router){}
  
  ngOnInit(){
    
  }
  contact(){
    this.router.navigate(['/contact']);
  }
}
