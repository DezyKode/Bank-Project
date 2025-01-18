import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {

  searchText: string = '';
  statusFilter: string = '';

  loan = [
    { id: 1, applicant: 'Mark',  accountManager: 'Boss',  loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 2, applicant: 'Jojo',  accountManager: 'Sharukh',  loanRequirement: 'Rs. 6.00 L', status: 'Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 3, applicant: 'Virat', accountManager: 'Akshay', loanRequirement: 'Rs. 60.00 L', status: 'Sanction', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 4, applicant: 'Dhoni', accountManager: 'Ranvir', loanRequirement: 'Rs. 7.00 L', status: 'Disbursement', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 5, applicant: 'Rohit', accountManager: 'Samlman', loanRequirement : 'Rs. 8.00 L',status: 'Rejected', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 6, applicant: 'Rahul', accountManager: 'Dipika', loanRequirement : 'Rs. 4.00 L',status: 'Completed', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 7, applicant: 'Don',   accountManager: 'Karina',   loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 8, applicant: 'Hardik',accountManager: 'Shradha',loanRequirement : 'Rs. 6.00 L',status: 'Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 9, applicant: 'Mark',  accountManager: 'Boss',  loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 10, applicant: 'Jojo',  accountManager: 'Sharukh',  loanRequirement: 'Rs. 6.00 L', status: 'Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 11, applicant: 'Virat', accountManager: 'Akshay', loanRequirement: 'Rs. 60.00 L', status: 'Sanction', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 12, applicant: 'Dhoni', accountManager: 'Ranvir', loanRequirement: 'Rs. 7.00 L', status: 'Disbursement', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 13, applicant: 'Rohit', accountManager: 'Samlman', loanRequirement : 'Rs. 8.00 L',status: 'Rejected', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 14, applicant: 'Rahul', accountManager: 'Dipika', loanRequirement : 'Rs. 4.00 L',status: 'Completed', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 15, applicant: 'Don',   accountManager: 'Karina',   loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' },
    { id: 16, applicant: 'Hardik',accountManager: 'Shradha',loanRequirement : 'Rs. 6.00 L',status: 'Login', Date: '18 Jan 2025', createdBy: 'DSA CRM' }

  ];

  getStatusCount(status: string): number {
    return this.loan.filter(loan => loan.status === status).length;
  }

  filteredLoan() {
    return this.loan.filter(loan => {
      const matchesSearchText = this.searchText === '' || loan.applicant.toLowerCase().includes(this.searchText.toLowerCase()) ||
      loan.accountManager.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesStatus = this.statusFilter === '' || loan.status === this.statusFilter;
      return matchesSearchText && matchesStatus;
    });
  }
}
