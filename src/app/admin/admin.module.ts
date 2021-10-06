import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CreatetempComponent } from './components/createtemp/createtemp.component';
import { EdittemplateComponent } from './components/edittemplate/edittemplate.component';
import { EditedComponent } from './components/edited/edited.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    CreatetempComponent,
    EdittemplateComponent,
    EditedComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule

  ]
})
export class AdminModule { }
