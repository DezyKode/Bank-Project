import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent {
  document = {
    typeOfLoan: '',
    employeeType: ''
  };

  loanCriteriaRows = [
    { cibilScoreStart: '', cibilScoreEnd: '', loanRequirementStart: '', loanRequirementEnd: '' }
  ];

  isEditMode = false;

  // Update Document method
  updateDocument() {
    if (this.isEditMode) {
      // Logic for updating the document
      console.log('Updating document with data:', this.document);
    } else {
      // Logic for creating a new document
      console.log('Creating a new document with data:', this.document);
    }
  }

  // Add a new row to the loanCriteriaRows
  addRow() {
    this.loanCriteriaRows.push({ cibilScoreStart: '', cibilScoreEnd: '', loanRequirementStart: '', loanRequirementEnd: '' });
  }

  // Delete a row from loanCriteriaRows
  deleteRow(index: number) {
    this.loanCriteriaRows.splice(index, 1);
  }
}
