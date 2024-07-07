import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-crimi',
  templateUrl: './education-crimi.component.html',
  styleUrls: ['./education-crimi.component.css']
})
export class EducationCrimiComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
