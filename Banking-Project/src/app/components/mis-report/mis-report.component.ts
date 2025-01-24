import { Component } from '@angular/core';
import * as Papa from 'papaparse';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface MISReport {
  id: number;
  menmber: string;
  toBeLoginCount: string;
  toBeLoginAmount: string;
  loginCount: string;
  loginAmount: string;
  toBeSanctionCount: string;
  toBeSanctionAmount: string;
  sanctionCount: string;
  sanctionAmount: string;
  toBeDisbursedCount: string;
  toBeDisbursedAmount: string;
  disbursedmentCount: string;
  disbursedmentAmount: string;
  disbursedCount: string;
  disbursedAmount: string;
  rejectedCount: string;
  rejectedAmount: string;
}

@Component({
  selector: 'app-mis-report',
  templateUrl: './mis-report.component.html',
  styleUrls: ['./mis-report.component.css']
})




export class MISReportComponent {

  searchText: string = '';

  misReport = [
    { id: 1, menmber: 'Virat',   toBeLoginCount: '5', toBeLoginAmount: '1000', loginCount: '0', loginAmount: '2000', toBeSanctionCount: '1', toBeSanctionAmount: '20000', sanctionCount: '1', sanctionAmount: '30000', toBeDisbursedCount: '1', toBeDisbursedAmount: '10000', disbursedmentCount: '1', disbursedmentAmount: '55000', disbursedCount: '1', disbursedAmount: '33000', rejectedCount: '1', rejectedAmount: '23560'},
    { id: 2, menmber: 'Dhoni',   toBeLoginCount: '1', toBeLoginAmount: '2', loginCount: '0', loginAmount: '1', toBeSanctionCount: '0', toBeSanctionAmount: '2', sanctionCount: '1', sanctionAmount: '2', toBeDisbursedCount: '0', toBeDisbursedAmount: '3', disbursedmentCount: '1', disbursedmentAmount: '3', disbursedCount: '1', disbursedAmount: '3', rejectedCount: '1', rejectedAmount: '3'},
    { id: 3, menmber: 'Rahul',   toBeLoginCount: '1', toBeLoginAmount: '1', loginCount: '0', loginAmount: '1', toBeSanctionCount: '0', toBeSanctionAmount: '2', sanctionCount: '1', sanctionAmount: '2', toBeDisbursedCount: '0', toBeDisbursedAmount: '3', disbursedmentCount: '1', disbursedmentAmount: '3', disbursedCount: '1', disbursedAmount: '3', rejectedCount: '1', rejectedAmount: '3'},
    { id: 4, menmber: 'Bumraha', toBeLoginCount: '1', toBeLoginAmount: '0', loginCount: '0', loginAmount: '1', toBeSanctionCount: '0', toBeSanctionAmount: '2', sanctionCount: '1', sanctionAmount: '2', toBeDisbursedCount: '0', toBeDisbursedAmount: '3', disbursedmentCount: '1', disbursedmentAmount: '3', disbursedCount: '1', disbursedAmount: '3', rejectedCount: '1', rejectedAmount: '3'},
    { id: 5, menmber: 'Rohti',   toBeLoginCount: '1', toBeLoginAmount: '2', loginCount: '0', loginAmount: '1', toBeSanctionCount: '0', toBeSanctionAmount: '2', sanctionCount: '1', sanctionAmount: '2', toBeDisbursedCount: '0', toBeDisbursedAmount: '3', disbursedmentCount: '1', disbursedmentAmount: '3', disbursedCount: '1', disbursedAmount: '3', rejectedCount: '1', rejectedAmount: '3'},
    { id: 6, menmber: 'Rishabh', toBeLoginCount: '1', toBeLoginAmount: '1', loginCount: '0', loginAmount: '1', toBeSanctionCount: '0', toBeSanctionAmount: '2', sanctionCount: '1', sanctionAmount: '2', toBeDisbursedCount: '0', toBeDisbursedAmount: '3', disbursedmentCount: '1', disbursedmentAmount: '3', disbursedCount: '1', disbursedAmount: '3', rejectedCount: '1', rejectedAmount: '3'},
    { id: 7, menmber: 'Ruturaj', toBeLoginCount: '1', toBeLoginAmount: '1', loginCount: '0', loginAmount: '1', toBeSanctionCount: '0', toBeSanctionAmount: '2', sanctionCount: '1', sanctionAmount: '2', toBeDisbursedCount: '0', toBeDisbursedAmount: '3', disbursedmentCount: '1', disbursedmentAmount: '3', disbursedCount: '1', disbursedAmount: '3', rejectedCount: '1', rejectedAmount: '3'},
    { id: 8, menmber: 'Raina',   toBeLoginCount: '1', toBeLoginAmount: '0', loginCount: '0', loginAmount: '1', toBeSanctionCount: '0', toBeSanctionAmount: '2', sanctionCount: '1', sanctionAmount: '2', toBeDisbursedCount: '0', toBeDisbursedAmount: '3', disbursedmentCount: '1', disbursedmentAmount: '3', disbursedCount: '1', disbursedAmount: '3', rejectedCount: '1', rejectedAmount: '3'}
  ];

  currentPage: number = 1;
  itemPerpage: number = 10;

  filteredMIS() {
    return this.misReport.filter(misReport => {
      const matchesSearchText = this.searchText === '' || misReport.menmber.toLowerCase().includes(this.searchText.toLowerCase());
      return matchesSearchText;
    });
  }

    // Function to aggregate the data for the table
    getAggregatedData() {
      const labels = [
        { label: 'To Be Login', amountKey: 'toBeLoginAmount', countKey: 'toBeLoginCount' },
        { label: 'Login', amountKey: 'loginAmount', countKey: 'loginCount' },
        { label: 'To Be Sanction', amountKey: 'toBeSanctionAmount', countKey: 'toBeSanctionCount' },
        { label: 'Sanction', amountKey: 'sanctionAmount', countKey: 'sanctionCount' },
        { label: 'To Be Disbursed', amountKey: 'toBeDisbursedAmount', countKey: 'toBeDisbursedCount' },
        { label: 'Disbursement', amountKey: 'disbursedmentAmount', countKey: 'disbursedmentCount' },
        { label: 'Disbursed', amountKey: 'disbursedAmount', countKey: 'disbursedCount' },
        { label: 'Rejected', amountKey: 'rejectedAmount', countKey: 'rejectedCount' }
      ];
  
      return labels.map(label => {
        let totalAmount = 0;
        let totalCount = 0;
  
        this.filteredMIS().forEach(bank => {
          // Safely access the properties using the keys and convert them to numbers
          const amount = bank[label.amountKey as keyof MISReport];
          const count = bank[label.countKey as keyof MISReport];
  
          // Convert amount and count to numbers before performing arithmetic
          totalAmount += amount ? parseFloat(String(amount)) : 0;  // Convert amount to number (in case it's string)
          totalCount += count ? parseInt(String(count), 10) : 0;  // Convert count to number (in case it's string)
        });
  
        return {
          label: label.label,
          sumAmount: totalAmount / 100000,  // Convert amount to lakhs
          count: totalCount
        };
      });
    }
  exportToCSV() {
    const headers = [
      "Sr No", "Member", "To Be Login Count", "To Be Login Amount", "Login Count", "Login Amount", "To Be Sanction Count", 
      "To Be Sanction Amount", "Sanction Count", "Sanction Amount", "To Be Disbursed Count", "To Be Disbursed Amount", 
      "Disbursement Count", "Disbursement Amount", "Disbursed Count", "Disbursed Amount", "Rejected Count", "Rejected Amount"
    ];

    const data = this.filteredMIS().map(bank => [
      bank.id, bank.menmber, bank.toBeLoginCount, bank.toBeLoginAmount, bank.loginCount, bank.loginAmount, 
      bank.toBeSanctionCount, bank.toBeSanctionAmount, bank.sanctionCount, bank.sanctionAmount, 
      bank.toBeDisbursedCount, bank.toBeDisbursedAmount, bank.disbursedmentCount, bank.disbursedmentAmount, 
      bank.disbursedCount, bank.disbursedAmount, bank.rejectedCount, bank.rejectedAmount
    ]);

    const csv = Papa.unparse({
      fields: headers,
      data: data
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'MIS_Report.csv';
    link.click();
  }

  exportToPDF() {
    const doc = new jsPDF();
    
    const headers = [
      "Label", "Sum of Amount in Lakh", "Count"
    ];

    const data = this.getAggregatedData().map(aggregate => [
      aggregate.label, aggregate.sumAmount, aggregate.count
    ]);

    // doc.autoTable({
    //   head: [headers],
    //   body: data,
    // });

    doc.save('MIS_Report.pdf');
  }

   // Pagination logic
   get paginatedLoans() {
    const filtered = this.filteredMIS();
    const startIndex = (this.currentPage - 1) * this.itemPerpage;
    const endIndex = startIndex + this.itemPerpage;
    return filtered.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredMIS().length / this.itemPerpage);
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
