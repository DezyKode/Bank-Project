import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.css'
})
export class LoanDetailsComponent {
  loanDetails = {
    loanAmount: 0,
    loanRequested: 60000,
    tenure: 1,
    loanType: 'Home Loan',
    property: 'Other',
    buildingName: 'd',
    flatNo: 4,
    state: 'Maharashtra',
    city: 'Jalna',
    zone: 'Central',
    location: 'Rajur',
    costOfProperty: 1000000
  };

}
