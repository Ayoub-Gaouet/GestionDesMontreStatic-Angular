import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMontreComponent } from './add-montre/add-montre.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { MontreGuard } from './montre.guard';
import { MontresComponent } from './montres/montres.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateMontreComponent } from './update-montre/update-montre.component';

const routes: Routes = [
  {path: "montres", component : MontresComponent},
  {path: "add-montre", component : AddMontreComponent,canActivate:[MontreGuard]},
  {path: "", redirectTo: "montres", pathMatch: "full"},
  {path: "updateMontre/:id", component: UpdateMontreComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
