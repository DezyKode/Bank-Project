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

  filteredBank() {
    return this.Banks.filter(Banks => {
      const matchesSearchText = this.searchText === '' || Banks.bankName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      Banks.payout.toLowerCase().includes(this.searchText.toLowerCase()) ||
      Banks.totalRAC.includes(this.searchText);
      return matchesSearchText;
    });
  }
}
