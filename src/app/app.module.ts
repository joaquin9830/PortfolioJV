import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Inicio Services
import {CargarScriptsService} from '../app/service/cargar-scripts.service';
//Fin services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import { ContactComponent } from './componentes/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    ProyectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
