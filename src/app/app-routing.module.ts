import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsAddComponent } from './assignments-add/assignments-add.component';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'logins', component: LoginPageComponent },
  { path: 'assignments-list', component: AssignmentsListComponent},
  { path: 'assignments-add', component: AssignmentsAddComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
