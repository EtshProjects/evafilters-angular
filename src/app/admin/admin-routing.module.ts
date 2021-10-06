import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CreatetempComponent } from './components/createtemp/createtemp.component';
import { EditedComponent } from './components/edited/edited.component';
import { EdittemplateComponent } from './components/edittemplate/edittemplate.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guars/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'createTemp', component: CreatetempComponent },
  { path: 'edittemp', component: EdittemplateComponent },
  { path: 'edited', component: EditedComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
