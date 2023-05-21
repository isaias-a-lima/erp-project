import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteEditComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ClienteModule { }
