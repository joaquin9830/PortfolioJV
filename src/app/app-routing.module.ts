import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationCrimiComponent } from './pages/education-crimi/education-crimi.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'home', component:HomeComponent},
  {path:'education-crimi', component:EducationCrimiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
