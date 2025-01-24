import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {

  searchText: string = '';
  // statusFilter: string = '';

  // selectedApplicant = '';

  loan = [
    { id: 1, applicant: 'Mark', accountManager: 'Boss', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 2, applicant: 'Jojo', accountManager: 'Sharukh', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 3, applicant: 'Virat', accountManager: 'Akshay', loanRequirement: 'Rs. 60.00 L', status: 'Sanction', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 4, applicant: 'Dhoni', accountManager: 'Ranvir', loanRequirement: 'Rs. 7.00 L', status: 'Disbursement', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 5, applicant: 'Rohit', accountManager: 'Samlman', loanRequirement: 'Rs. 8.00 L', status: 'Rejected', date: '18 Jan 2025', createBy: 'RDS CRM' },
    { id: 6, applicant: 'Rahul', accountManager: 'Dipika', loanRequirement: 'Rs. 4.00 L', status: 'Completed', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 7, applicant: 'Don', accountManager: 'Karina', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 8, applicant: 'Hardik', accountManager: 'Shradha', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '19 Jan 2025', createBy: 'MSA CRM' },
    { id: 9, applicant: 'Mark', accountManager: 'Boss', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 10, applicant: 'Jojo', accountManager: 'Sharukh', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '10 Jan 2025', createBy: 'DSA CRM' },
    { id: 11, applicant: 'Virat', accountManager: 'Akshay', loanRequirement: 'Rs. 60.00 L', status: 'Sanction', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 12, applicant: 'Dhoni', accountManager: 'Ranvir', loanRequirement: 'Rs. 7.00 L', status: 'Disbursement', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 13, applicant: 'Rohit', accountManager: 'Samlman', loanRequirement: 'Rs. 8.00 L', status: 'Rejected', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 14, applicant: 'Rahul', accountManager: 'Dipika', loanRequirement: 'Rs. 4.00 L', status: 'Completed', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 15, applicant: 'Don', accountManager: 'Karina', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 16, applicant: 'Hardik', accountManager: 'Shradha', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 17, applicant: 'Atharvya', accountManager: 'Arti', loanRequirement: 'Rs. 9.00 L', status: 'Login', date: '20 Jan 2025', createBy: 'DSA CRM' },
    { id: 18, applicant: 'Mark', accountManager: 'Boss', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 19, applicant: 'Jojo', accountManager: 'Sharukh', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 20, applicant: 'Virat', accountManager: 'Akshay', loanRequirement: 'Rs. 60.00 L', status: 'Sanction', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 21, applicant: 'Dhoni', accountManager: 'Ranvir', loanRequirement: 'Rs. 7.00 L', status: 'Disbursement', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 22, applicant: 'Rohit', accountManager: 'Samlman', loanRequirement: 'Rs. 8.00 L', status: 'Rejected', date: '18 Jan 2025', createBy: 'RDS CRM' },
    { id: 23, applicant: 'Rahul', accountManager: 'Dipika', loanRequirement: 'Rs. 4.00 L', status: 'Completed', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 24, applicant: 'Don', accountManager: 'Karina', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 25, applicant: 'Hardik', accountManager: 'Shradha', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '19 Jan 2025', createBy: 'MSA CRM' },
    { id: 26, applicant: 'Mark', accountManager: 'Boss', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 27, applicant: 'Jojo', accountManager: 'Sharukh', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '10 Jan 2025', createBy: 'DSA CRM' },
    { id: 28, applicant: 'Virat', accountManager: 'Akshay', loanRequirement: 'Rs. 60.00 L', status: 'Sanction', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 29, applicant: 'Dhoni', accountManager: 'Ranvir', loanRequirement: 'Rs. 7.00 L', status: 'Disbursement', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 30, applicant: 'Rohit', accountManager: 'Samlman', loanRequirement: 'Rs. 8.00 L', status: 'Rejected', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 31, applicant: 'Rahul', accountManager: 'Dipika', loanRequirement: 'Rs. 4.00 L', status: 'Completed', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 32, applicant: 'Don', accountManager: 'Karina', loanRequirement: 'Rs. 5.00 L', status: 'To Be Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 33, applicant: 'Hardik', accountManager: 'Shradha', loanRequirement: 'Rs. 6.00 L', status: 'Login', date: '18 Jan 2025', createBy: 'DSA CRM' },
    { id: 34, applicant: 'Atharvya', accountManager: 'Arti', loanRequirement: 'Rs. 9.00 L', status: 'Login', date: '20 Jan 2025', createBy: 'DSA CRM' }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 10;

  getStatusCount(status: string): number {
    return this.loan.filter(loan => loan.status === status).length;
  }

  get accountManager() {
    return [...new Set(this.loan.map(loan => loan.accountManager))];
  }

  get status() {
    return [...new Set(this.loan.map(loan => loan.status))];
  }

  get createdBY() {
    return [...new Set(this.loan.map(loan => loan.createBy))];
  }

  selectedAccountManager: Set<string> = new Set();
  selectedStatus: Set<string> = new Set();
  selectedCreatedBy: Set<string> = new Set();

  toggleAccountManager(accountManager: string) {
    if (this.selectedAccountManager.has(accountManager)) {
      this.selectedAccountManager.delete(accountManager);
    } else {
      this.selectedAccountManager.add(accountManager);
    }
  }

  toggleStatus(status: string) {
    if (this.selectedStatus.has(status)) {
      this.selectedStatus.delete(status);
    } else {
      this.selectedStatus.add(status);
    }
  }

  toggleCreatedBy(createdBY: string) {
    if (this.selectedCreatedBy.has(createdBY)) {
      this.selectedCreatedBy.delete(createdBY);
    } else {
      this.selectedCreatedBy.add(createdBY);
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////

  toggleSelectAllAccountManager(event: any) {
    if (event.target.checked) {
      this.selectedAccountManager = new Set(this.accountManager);
    } else {
      this.selectedAccountManager.clear();
    }
    this.filteredLoan();
  }

  toggleSelectedAllStatus(event: any) {
    if (event.target.checked) {
      this.selectedStatus = new Set(this.status);
    } else {
      this.selectedStatus.clear();
    }
    this.filteredLoan();
  }

  toggleSelectAllCreatedBy(event: any) {
    if (event.target.checked) {
      this.selectedCreatedBy = new Set(this.createdBY);
    } else {
      this.selectedCreatedBy.clear();
    }
    this.filteredLoan();
  }

  filteredLoan() {
    return this.loan.filter(loan => {
      const matchesSearchText = this.searchText === '' || loan.applicant.toLowerCase().includes(this.searchText.toLowerCase()) ||
        loan.accountManager.toLowerCase().includes(this.searchText.toLowerCase());
      // const matchesStatus = this.statusFilter === '' || loan.status === this.statusFilter;
      return (
        matchesSearchText && 
        (this.selectedAccountManager.size > 0 ? this.selectedAccountManager.has(loan.accountManager) : true) &&
        (this.selectedStatus.size > 0 ? this.selectedStatus.has(loan.status) : true) &&
        (this.selectedCreatedBy.size > 0 ? this.selectedCreatedBy.has(loan.createBy) : true)
      );
    });
  }

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    id: 'asc',
    applicant: 'asc',
    accountManager: 'asc',
    loanRequirement: 'asc',
    status: 'asc',
    date: 'asc',
    createdBY: 'asc',
  };

  sortTable(column: string) {
    const currentDirection = this.sortDirection[column] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = newDirection;  // Update direction for the current column

    this.loan = this.loan.sort((a, b) => {
      const prop = column as keyof typeof a;
      if (newDirection === 'asc') {
        return a[prop] > b[prop] ? 1 : -1;
      } else {
        return a[prop] < b[prop] ? 1 : -1;
      }
    });
  }

  isSpinning = false;

  refresh() {
    // Start the spinning animation
    this.isSpinning = true;

    // Stop the spinning animation after 1 second (or as per the animation duration)
    setTimeout(() => {
      this.isSpinning = false;
    }, 1000); // 1000 ms is the same as the animation duration

    // Reset the filters to their initial/default values
    this.searchText = '';
    // this.statusFilter = '';
    this.selectedAccountManager.clear();
    this.selectedStatus.clear();
    this.selectedCreatedBy.clear();

    // Optionally, you can call the filteredLoan method here to update the displayed list
    this.filteredLoan();
  }

   // Pagination logic
   get paginatedLoans() {
    const filtered = this.filteredLoan();
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  // Pagination control methods
  get totalPages() {
    return Math.ceil(this.filteredLoan().length / this.itemsPerPage);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
