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

  constructor(public personaService: PersonaService, private router:Router){}
  
  ngOnInit(){
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }
  contact(){
    this.router.navigate(['/contact']);
  }
}
