import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployeesList();
  }

  getEmployeesList(): void {
    this.employeeService
      .getEmployeesList()
      .subscribe((data) => (this.employees = data));
  }

  updateEmployee(id: number): void {
    this.router.navigate(['/update-employee', id]);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployeesList();
    });
  }

  seeEmployeeDetails(id: number): void {
    this.router.navigate(['/employee-details', id]);
  }
}
