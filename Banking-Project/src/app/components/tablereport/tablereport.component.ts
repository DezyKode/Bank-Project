import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablereport',
  templateUrl: './tablereport.component.html',
  styleUrls: ['./tablereport.component.css']
})
export class TablereportComponent implements OnInit {

  // Sample data
  data = [
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      mobile: '123-456-7890',
      bankAccountName: 'John Doe',
      bankAccountNo: '1234567890',
      sanctionAmount: 10000,
      incentiveAmount: 500,
      date: '2025-01-05'  // Example date
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      mobile: '987-654-3210',
      bankAccountName: 'Jane Smith',
      bankAccountNo: '0987654321',
      sanctionAmount: 12000,
      incentiveAmount: 600,
      date: '2025-01-06'  // Example date
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      mobile: '987-654-3210',
      bankAccountName: 'Jane Smith',
      bankAccountNo: '0987654321',
      sanctionAmount: 12000,
      incentiveAmount: 600,
      date: '2025-01-01'  // Example date
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      mobile: '987-654-3210',
      bankAccountName: 'Jane Smith',
      bankAccountNo: '0987654321',
      sanctionAmount: 12000,
      incentiveAmount: 600,
      date: '2025-01-02'  // Example date
    }
    // Add more data here as required
  ];

  // Date variables for filtering
  startDate: string = '';
  endDate: string = '';
  filteredData: any[] = [];

  // For today's date
  todayDate: string = '';

  constructor() {
    // Set today's date in the format YYYY-MM-DD
    const today = new Date();
    this.todayDate = today.toISOString().split('T')[0]; // This gives the date in YYYY-MM-DD format
  }

  ngOnInit(): void {
    // Initialize filtered data with all the data initially
    this.filteredData = this.data;
  }

  // Function to handle the export functionality (e.g., open a modal or trigger export)
  openExportModal(): void {
    console.log("Export button clicked");
    // Logic for exporting the table data can be added here
    // For instance, you could trigger a modal or export data to Excel/PDF
  }

  // Function to filter data based on the selected start and end dates
  filterData(): void {
    if (this.startDate && this.endDate) {
      this.filteredData = this.data.filter(item => {
        // Check if the item's date is between the selected start and end date
        return item.date >= this.startDate && item.date <= this.endDate;
      });
    } else if (this.startDate) {
      // If only the start date is selected, show data from the selected start date onwards
      this.filteredData = this.data.filter(item => item.date >= this.startDate);
    } else if (this.endDate) {
      // If only the end date is selected, show data until the selected end date
      this.filteredData = this.data.filter(item => item.date <= this.endDate);
    } else {
      // If no date is selected, show all data
      this.filteredData = this.data;
    }
  }
}
