import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-rejected',
  templateUrl: './bank-rejected.component.html',
  styleUrl: './bank-rejected.component.css'
})
export class BankRejectedComponent {

  banks = [
    { name: 'Bank A', status: 'Pending', interestRate: 5, emi: 2000, loanRequirement: 60000, sanctionAmount: 50000 },
    { name: 'Bank B', status: 'Pending', interestRate: 6, emi: 2500, loanRequirement: 70000, sanctionAmount: 60000 },
    { name: 'Bank C', status: 'Pending', interestRate: 4.5, emi: 1800, loanRequirement: 50000, sanctionAmount: 45000 },
  ];

  // Function to mark a specific bank as Login
  markAsLogin(bank: any): void {
    bank.status = 'Login';
    console.log(`${bank.name} marked as Login`);
  }

  // Function to mark a specific bank as Reject
  // markAsReject(bank: any): void {
  //   bank.status = 'Reject';
  //   console.log(`${bank.name} marked as Reject`);
  // }

  // Function to mark all banks as Login
  markAllAsLogin(): void {
    this.banks.forEach(bank => bank.status = 'Login');
    console.log('All banks marked as Login');
  }

  // Function to mark all banks as Reject
  markAllAsReject(): void {
    this.banks.forEach(bank => bank.status = 'Reject');
    console.log('All banks marked as Reject');
  }

  // General action handler for all buttons
  performAction(action: string): void {
    if (action === 'LoginAll') {
      this.markAllAsLogin();
    } else if (action === 'RejectAll') {
      this.markAllAsReject();
    }
  }
}

