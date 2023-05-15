import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ModalLoginComponent } from './componentes/modales/modal-login/modal-login.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModalContactoComponent } from './componentes/modales/modal-contacto/modal-contacto.component';
import { ModalRedesComponent } from './componentes/modales/modal-redes/modal-redes.component';
import { ModalSobreMiComponent } from './componentes/modales/modal-sobre-mi/modal-sobre-mi.component';
import { ModalExperienciaComponent } from './componentes/modales/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './componentes/modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadComponent } from './componentes/modales/modal-habilidad/modal-habilidad.component';
import { ModalProyectosComponent } from './componentes/modales/modal-proyectos/modal-proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { ModalLogoutComponent } from './componentes/modales/modal-logout/modal-logout.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProyectosInicioComponent } from './componentes/proyectos-inicio/proyectos-inicio.component';
import { HabilidadesInicioComponent } from './componentes/habilidades-inicio/habilidades-inicio.component';
import { EducacionInicioComponent } from './componentes/educacion-inicio/educacion-inicio.component';
import { ExperienciaInicioComponent } from './componentes/experiencia-inicio/experiencia-inicio.component';
import { SobreMiInicioComponent } from './componentes/sobre-mi-inicio/sobre-mi-inicio.component';
import { NavbarInicioComponent } from './componentes/navbar-inicio/navbar-inicio.component';
import { ErrorComponent } from './componentes/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    SobreMiComponent,
    ModalLoginComponent,
    LoginComponent,
    ModalContactoComponent,
    ModalRedesComponent,
    ModalSobreMiComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalHabilidadComponent,
    ModalProyectosComponent,
    InicioComponent,
    LogoutComponent,
    ModalLogoutComponent,
    DashboardComponent,
    ProyectosInicioComponent,
    HabilidadesInicioComponent,
    EducacionInicioComponent,
    ExperienciaInicioComponent,
    SobreMiInicioComponent,
    NavbarInicioComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
