import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-details-login',
  templateUrl: './loan-details-login.component.html',
  styleUrl: './loan-details-login.component.css'
})
export class LoanDetailsLoginComponent {

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




