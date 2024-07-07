import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationCrimiComponent } from './pages/education-crimi/education-crimi.component';
import { EducationDetailComponent } from './pages/education-detail/education-detail.component';
import { EducationAluraComponent } from './pages/education-alura/education-alura.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationUtnComponent } from './pages/education-utn/education-utn.component';


const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'home', component:HomeComponent},
  {path:'education-crimi', component:EducationCrimiComponent},
  {path:'education-detail',component:EducationDetailComponent},
  {path:'education-alura',component:EducationAluraComponent},
  {path:'education-utn', component:EducationUtnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
