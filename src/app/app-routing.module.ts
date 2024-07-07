import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationCrimiComponent } from './pages/education-crimi/education-crimi.component';
import { EducationDetailComponent } from './pages/education-detail/education-detail.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent}, 
  {path:'home', component:HomeComponent},
  {path:'education-crimi', component:EducationCrimiComponent},
  {path:'education-detail',component:EducationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
