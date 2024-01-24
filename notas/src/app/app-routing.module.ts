import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { AgregarNotasComponent } from './agregar-notas/agregar-notas.component';

const routes: Routes = [
  {path:'lista', component: ListaNotasComponent},
  {path:'agregar', component: AgregarNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
