import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-offers',
  templateUrl: './loan-offers.component.html',
  styleUrl: './loan-offers.component.css'
})
export class LoanOffersComponent {
  loanOffers = [
    { bank: 'SBI Bank', interestRate: 0, emi: 0, loanAmount: 0 },
    { bank: 'HDFC Bank', interestRate: 0, emi: 0, loanAmount: 0 },
    { bank: 'Axis Bank', interestRate: 0, emi: 0, loanAmount: 0 },
    { bank: 'Riya Financial Services', interestRate: 0, emi: 0, loanAmount: 0 },
    { bank: 'OBC', interestRate: 5, emi: 0, loanAmount: 0 },
  ];
}
