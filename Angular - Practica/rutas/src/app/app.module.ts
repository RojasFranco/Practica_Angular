import { RouterModule, Routes, Router } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { DatosServicioComponent } from './datos-servicio/datos-servicio.component';

import { MascotasServicioService } from './mascotas-servicio.service';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'datosServicio', component: DatosServicioComponent },
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
    ContactoComponent,
    InicioComponent,
    DatosServicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [ MascotasServicioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
