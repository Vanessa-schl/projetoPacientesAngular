import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';



const routes: Routes = [
  {
    path: '',
    component: PacientesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
