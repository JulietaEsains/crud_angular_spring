import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesListComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'register-employee', component: RegisterEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
