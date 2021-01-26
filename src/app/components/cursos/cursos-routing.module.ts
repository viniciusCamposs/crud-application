import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';

const routes: Routes = [
  {
    path: '',
    component: CursosListComponent
  },
  {
    path: 'novo',
    component: CursosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
