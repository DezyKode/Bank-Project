import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-ageing-report',
  templateUrl: './loan-ageing-report.component.html',
  styleUrls: ['./loan-ageing-report.component.css']
})
export class LoanAgeingReportComponent {
  searchText: string = '';
  caseAgeAnalysisFilter: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5; // Default number of items per page

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    srno: 'asc',
    id: 'asc',
    applicantName: 'asc',
    leadProduct: 'asc',
    caseDate: 'asc',
    accountManager: 'asc'
  };

  Banks = [
    { srno: 1, id:'#LD11', applicantName:'Akansh Shivhare', leadProduct:'Home Loan', caseDate: '13 sep, 2024', accountManager: 'Sanya', num06:'Login', num15:'', num24:'', numabove24:'' },
    { srno: 2, id:'#LD12', applicantName:'Priya Sharma', leadProduct:'Home Loan', caseDate: '14 sep, 2024', accountManager: 'Ishaan', num06:'To Be Login', num15:'', num24:'', numabove24:'' },
    { srno: 3, id:'#LD13', applicantName:'Rahul Singh', leadProduct:'Home Loan', caseDate: '15 sep, 2024', accountManager: 'Aishwarya', num06:'Disbursement', num15:'', num24:'', numabove24:'' },
    { srno: 4, id:'#LD14', applicantName:'Sneha Patel', leadProduct:'Home Loan', caseDate: '16 sep, 2024', accountManager: 'Manish', num06:'', num15:'Disbursement', num24:'', numabove24:'' },
    { srno: 5, id:'#LD15', applicantName:'Vijay Yadav', leadProduct:'Home Loan', caseDate: '17 sep, 2024', accountManager: 'Diya', num06:'', num15:'Sanction', num24:'', numabove24:'' },
    { srno: 6, id:'#LD16', applicantName:'Anjali Verma', leadProduct:'Home Loan', caseDate: '18 sep, 2024', accountManager: 'Mohit', num06:'', num15:'Login', num24:'Login', numabove24:'Login' },
    { srno: 7, id:'#LD17', applicantName:'Rohit Gupta', leadProduct:'Home Loan', caseDate: '19 sep, 2024', accountManager: 'Ritika', num06:'', num15:'', num24:'Rejected', numabove24:'Sanction' },
    { srno: 8, id:'#LD18', applicantName:'Neha Reddy', leadProduct:'Home Loan', caseDate: '20 sep, 2024', accountManager: 'Ritesh', num06:'', num15:'', num24:'', numabove24:'Rejected' },
    { srno: 9, id:'#LD19', applicantName:'Vaibhav Shukla', leadProduct:'Home Loan', caseDate: '21 sep, 2024', accountManager: 'Mithila', num06:'', num15:'', num24:'', numabove24:'Sanction' },
    { srno: 10, id:'#LD20', applicantName:'Atharv Dev', leadProduct:'Home Loan', caseDate: '22 sep, 2024', accountManager: 'Aniket', num06:'', num15:'', num24:'', numabove24:'Disbursement' }
  ];

  get filteredBanks() {
    return this.Banks.filter(bank => {
      const matchesSearchText =
        this.searchText === '' ||
        bank.caseDate.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.accountManager.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.id.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.applicantName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.leadProduct.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.num06.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.num15.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.num24.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.numabove24.toLowerCase().includes(this.searchText.toLowerCase());

      const num06 = this.caseAgeAnalysisFilter === '' || bank.num06 === this.caseAgeAnalysisFilter;
      const num15 = this.caseAgeAnalysisFilter === '' || bank.num15 === this.caseAgeAnalysisFilter;
      const num24 = this.caseAgeAnalysisFilter === '' || bank.num24 === this.caseAgeAnalysisFilter;
      const numabove24 = this.caseAgeAnalysisFilter === '' || bank.numabove24 === this.caseAgeAnalysisFilter;

      return matchesSearchText && num06 && num15 && num24 && numabove24;
    });
  }

  get totalPages() {
    return Math.ceil(this.filteredBanks.length / this.itemsPerPage);
  }

  paginatedBanks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredBanks.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onItemsPerPageChange() {
    this.currentPage = 1; // Reset to the first page when items per page changes
  }

  sortTable(column: string) {
    const currentDirection = this.sortDirection[column] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = newDirection;  // Update direction for the current column

    this.Banks = this.Banks.sort((a, b) => {
      const prop = column as keyof typeof a;
      if (newDirection === 'asc') {
        return a[prop] > b[prop] ? 1 : -1;
      } else {
        return a[prop] < b[prop] ? 1 : -1;
      }
    });
  }
}
