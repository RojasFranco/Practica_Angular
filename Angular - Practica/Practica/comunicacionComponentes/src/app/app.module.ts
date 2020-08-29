import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyComponent } from './components/body/body.component';
import { HijoComponent } from './components/hijo/hijo.component';

import { ServicioService } from './servicio.service';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from './components/features/features.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "features", component: FeaturesComponent },
  { path: '**', component: BodyComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BodyComponent,
    HijoComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ServicioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
