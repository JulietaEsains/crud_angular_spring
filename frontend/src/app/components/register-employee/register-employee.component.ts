import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css'],
})
export class RegisterEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.employee);
  }

  goToEmployeesList(): void {
    this.router.navigate(['/employees']);
  }

  onFormSubmit(): void {
    this.employeeService.registerEmployee(this.employee).subscribe((data) => {
      console.log(data);
      this.goToEmployeesList();
    });
  }
}
