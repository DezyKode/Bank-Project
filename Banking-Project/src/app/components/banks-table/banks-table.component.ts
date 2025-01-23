import { Component } from '@angular/core';

@Component({
  selector: 'app-banks-table',
  templateUrl: './banks-table.component.html',
  styleUrl: './banks-table.component.css'
})
export class BanksTableComponent {

  searchText: string = '';

  Banks = [
    { id: 1, bankName: 'SBI Bank', payout: 'Disbursement Basic Payout', totalRAC: '1'},
    { id: 2, bankName: 'Axix Bank', payout: 'One Time Payout', totalRAC: '0'},
    { id: 3, bankName: 'HDFC Bank', payout: 'Disbursement Basic Payout', totalRAC: '2'},
    { id: 4, bankName: 'Kotak Bank', payout: 'One Time Payout', totalRAC: '1'},
    { id: 5, bankName: 'Union Bank', payout: 'Disbursement Basic Payout', totalRAC: '0'},
    { id: 6, bankName: 'AU Bank', payout: 'One Time Payout', totalRAC: '2'},
    { id: 7, bankName: 'Maharashtra Bank', payout: 'Disbursement Basic Payout', totalRAC: '1'},
    { id: 8, bankName: 'ICICI Bank', payout: 'One Time Payout', totalRAC: '0'}
  ];

  currentPage: number = 1;
  itemPerpage: number = 10;

  get bankName(){
    return [...new Set(this.Banks.map(bank => bank.bankName))];
  }

  get payout(){
    return [...new Set(this.Banks.map(payout => payout.payout))];
  }

  selectedBankName: Set<string> = new Set();
  selectedPayout: Set<string> = new Set();

  toggleBankName(bankName: string){
    if(this.selectedBankName.has(bankName)){
      this.selectedBankName.delete(bankName);
    } else {
      this.selectedBankName.add(bankName);
    }
  }
    
  togglePayout(payout: string){
    if(this.selectedPayout.has(payout)){
        this.selectedPayout.delete(payout)
      } else {
        this.selectedPayout.add(payout);
      }
    }

    toggleSelectedAllBankName(event: any){
      if(event.target.checked){
        this.selectedBankName = new Set(this.bankName)
      } else {
        this.selectedBankName.clear();
      }
      this.filteredBank();
    }

    toggleSelectedAllPayout(event:any){
      if(event.target.checked){
        this.selectedPayout = new Set(this.payout)
      } else {
        this.selectedPayout.clear();
      }
      this.filteredBank();
    }

  filteredBank() {
    return this.Banks.filter(Banks => {
      const matchesSearchText = this.searchText === '' || Banks.bankName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      Banks.payout.toLowerCase().includes(this.searchText.toLowerCase()) ||
      Banks.totalRAC.includes(this.searchText);
      return (matchesSearchText &&
        (this.selectedBankName.size > 0 ? this.selectedBankName.has(Banks.bankName): true) &&
        (this.selectedPayout.size > 0 ? this.selectedPayout.has(Banks.payout): true)
      );
    });
  }

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    id: 'asc',
    bankName: 'asc',
    payout: 'asc',
  };

  sortTable(column: string) {
    const currentDirection = this.sortDirection[column] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = newDirection; 

    this.Banks = this.Banks.sort((a, b) => {
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
    this.isSpinning = true;

    setTimeout(() => {
      this.isSpinning = false;
    }, 1000);

    this.searchText = '';
    this.selectedBankName.clear();
    this.selectedPayout.clear();

    this.filteredBank();
  }

  // Pagination logic
  get paginatedLoans() {
    const filtered = this.filteredBank();
    const startIndex = (this.currentPage - 1) * this.itemPerpage;
    const endIndex = startIndex + this.itemPerpage;
    return filtered.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredBank().length / this.itemPerpage);
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
