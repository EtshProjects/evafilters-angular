import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ViewtemplatesComponent } from './viewtemplates/viewtemplates.component';
import { UsefilterComponent } from './components/usefilter/usefilter.component';


@NgModule({
  declarations: [
    ViewtemplatesComponent,
    UsefilterComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
