import { Component } from '@angular/core';
import { AddEmpService } from '../../Service/AddEmployee/add-emp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  employeeId: string = '';
  employeeDetails: any = null;

  constructor(private route: ActivatedRoute, private addEmpService: AddEmpService) { }

  ngOnInit(): void {
    // Retrieve the 'id' from route params
    this.employeeId = this.route.snapshot.paramMap.get('id') || '';

    if (this.employeeId) {
      this.getEmployeeDetails();
    }
  }

  getEmployeeDetails() {
    this.addEmpService.getEmployeeById(this.employeeId).subscribe((res) => {
      this.employeeDetails = res;
    });
  }

}
