import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MontresComponent } from './montres/montres.component';
import { AddMontreComponent } from './add-montre/add-montre.component';
import { FormsModule } from '@angular/forms';
import { UpdateMontreComponent } from './update-montre/update-montre.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    MontresComponent,
    AddMontreComponent,
    UpdateMontreComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
