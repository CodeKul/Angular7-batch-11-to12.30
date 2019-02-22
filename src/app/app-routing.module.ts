import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChildOneComponent } from './employee-list/child-one.component';
import { ChildTwoComponent } from './employee-list/child-two.component';

const routes: Routes = [
  {
    path: '', component: EmployeeListComponent,
    children: [
      { path: '', component: ChildOneComponent },
      { path: 'two', component: ChildTwoComponent }
    ]
  },
  { path: 'employeedetails/:usNm', component: EmployeeDetailsComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// const componentRouting = [EmployeeListComponent,EmployeeDetailsComponent]
