import { Component } from '@angular/core';

interface Row {
  name: string;
  type: string;
  tax: string;
  gstType: string;
  cgst: string;
  sgst: string;
  igst: string;
  tds: string;
}

@Component({
  selector: 'app-taxmaster',
  templateUrl: './taxmaster.component.html',
  styleUrls: ['./taxmaster.component.css'],
  standalone:false
})
export class TaxmasterComponent {
  // Editable rows
  rows: Row[] = [
    { name: '', type: '', tax: '', gstType: '', cgst: '', sgst: '', igst: '', tds: '' }
  ];

  // Added rows that will appear in the second table
  addedRows: Row[] = [];

  // Add a new row for input
  addRow() {
    this.rows.push({
      name: '',
      type: '',
      tax: '',
      gstType: '',
      cgst: '',
      sgst: '',
      igst: '',
      tds: ''
    });
  }

  // Delete a row from the editable rows
  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  // Delete a row from the added rows table
  deleteAddedRow(index: number) {
    this.addedRows.splice(index, 1);
  }

  // Check if all fields are filled and then add the row to addedRows
  checkAndAddRow(row: Row, index: number) {
    // Validate the fields
    if (!row.name.trim() || !row.type.trim() || !row.tax.trim() || !row.gstType.trim() || !row.cgst.trim() || !row.sgst.trim() || !row.igst.trim() || !row.tds.trim()) {
      alert('Please fill all fields!');
      return; // Prevent adding the row if any field is empty
    }

    // If all fields are filled, move the row to addedRows
    this.addedRows.push({ ...row });
    this.rows.splice(index, 1); // Remove the row from the editable list
    alert('Data added successfully!');
  }
}
