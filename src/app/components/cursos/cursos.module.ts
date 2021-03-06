import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';




@NgModule({
  declarations: [CursosFormComponent, CursosListComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CursosModule { }
