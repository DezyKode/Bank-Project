import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-details-all',
  templateUrl: './loan-details-all.component.html',
  styleUrl: './loan-details-all.component.css'
})
export class LoanDetailsAllComponent {
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




