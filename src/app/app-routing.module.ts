import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChildOneComponent } from './employee-list/child-one.component';
import { ChildTwoComponent } from './employee-list/child-two.component';
import { GuardService } from './guard.service';
import { ServicesComponent } from './services/services.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  // {
  //   path: '', component: EmployeeListComponent,
  //   children: [
  //     { path: '', component: ChildOneComponent },
  //     { path: 'two', component: ChildTwoComponent }
  //   ]
  // },
  { path: 'employeedetails/:usNm', component: EmployeeDetailsComponent, canActivate: [GuardService] },
  { path: 'forgot', component: ForgotPasswordComponent, canActivate: [GuardService] },
  {path : '', component:ServicesComponent },
  // {path :'',component:ReactiveFormComponent},
  // { path: '', component: TemplateDrivenFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
