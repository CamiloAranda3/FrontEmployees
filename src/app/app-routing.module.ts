import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes : Routes = [
  { path: 'employees',  component: EmployeesComponent },
  { path: 'employee', component: EmployeeComponent},
  { path: '**', pathMatch: 'full', redirectTo:'employees'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
