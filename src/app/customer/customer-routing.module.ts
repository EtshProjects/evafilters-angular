import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsefilterComponent } from './components/usefilter/usefilter.component';
import { ViewtemplatesComponent } from './viewtemplates/viewtemplates.component';

const routes: Routes = [

  { path: '', component: ViewtemplatesComponent },
  { path: 'usefilter', component: UsefilterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
