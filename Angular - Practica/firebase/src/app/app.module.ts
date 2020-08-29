import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MuestraDatosComponent } from './muestra-datos/muestra-datos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ServicioFirebaseService } from './servicio-firebase.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MuestraDatosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,    
  ],
  providers: [ ServicioFirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
