import { Component } from '@angular/core';

@Component({
  selector: 'app-revenue-recon-report',
  templateUrl: './revenue-recon-report.component.html',
  styleUrl: './revenue-recon-report.component.css'
})
export class RevenueReconReportComponent {

  searchText: string = '';
  caseAgeAnalysisFilter: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5; // Default number of items per page

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    srno: 'asc',
    case: 'asc',
    applicantName: 'asc',
    loantype: 'asc',
   disbursmentDate: 'asc',
   transactionDate: 'asc',
  invoiceGenerated: 'asc',
  invoiceDate: 'asc',
  serviceCharge:'asc',
  gst:'asc',
  total:'asc',
  serviceCharge1:'asc',
  tds:'asc',
  total1:'asc',
  amountReceived:'asc',
  balanceOutstd:'asc',
  payoutSharing:'asc',
  nameofPerson:'asc',
  rateofPayout:'asc',
  payoutAmount:'asc'

  };

  Banks = [
    { srno: 1, case:'#LD11', applicantName:'Akansh Shivhare', loantype:'Home Loan',disbursmentAmount:'1',disbursmentDate: '13 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',gst:'',total:'', serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 3, case:'#LD13', applicantName:'Rahul Singh', loantype:'Home Loan',disbursmentAmount:'2',disbursmentDate: '15 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'', gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 2, case:'#LD12', applicantName:'Priya Sharma', loantype:'Home Loan',disbursmentAmount:'3',disbursmentDate: '14 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 4, case:'#LD14', applicantName:'Sneha Patel', loantype:'Home Loan',disbursmentAmount:'445',disbursmentDate: '16 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 5, case:'#LD15', applicantName:'Vijay Yadav', loantype:'Home Loan',disbursmentAmount:'5',disbursmentDate: '17 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 6, case:'#LD16', applicantName:'Anjali Verma', loantype:'Home Loan',disbursmentAmount:'6',disbursmentDate: '18 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 7, case:'#LD17', applicantName:'Rohit Gupta', loantype:'Home Loan',disbursmentAmount:'7',disbursmentDate: '19 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 8, case:'#LD18', applicantName:'Neha Reddy', loantype:'Home Loan',disbursmentAmount:'7',disbursmentDate: '20 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 9, case:'#LD19', applicantName:'Vaibhav Shukla', loantype:'Home Loan',disbursmentAmount:'8',disbursmentDate: '21 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'},
    { srno: 10, case:'#LD20', applicantName:'Atharv Dev', loantype:'Home Loan',disbursmentAmount:'8',disbursmentDate: '22 sep, 2024',transactionDate:'', invoiceGenerated: 'No',invoiceDate:'13 sep, 2024',serviceCharge:'',  gst:'',total:'',serviceCharge1:'asc',tds:'',total1:'asc',amountReceived:'',balanceOutstd:'',payoutSharing:'',nameofPerson:'',rateofPayout:'asc',payoutAmount:'asc'}
  ];

  get filteredBanks() {
    return this.Banks.filter(bank => {
      const matchesSearchText =
        this.searchText === '' ||
        bank.disbursmentDate.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.invoiceGenerated.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.case.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.applicantName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bank.loantype.toLowerCase().includes(this.searchText.toLowerCase());

      

      return matchesSearchText;
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


