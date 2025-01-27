import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-details-rejected',
  templateUrl: './loan-details-rejected.component.html',
  styleUrl: './loan-details-rejected.component.css'
})
export class LoanDetailsRejectedComponent {
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




