import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

const routes: Routes = [
  {
    path: '',
    component: CursosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
