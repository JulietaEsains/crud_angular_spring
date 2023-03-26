import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService
      .getEmployee(this.id)
      .subscribe((data) => (this.employee = data));
  }

  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }

  onFormSubmit(): void {
    this.employeeService
      .updateEmployee(this.id, this.employee)
      .subscribe((data) => {
        console.log(data);
        this.goToEmployeeList();
      });
  }
}
