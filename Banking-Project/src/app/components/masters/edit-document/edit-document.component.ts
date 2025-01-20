import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css'],
})
export class EditDocumentComponent {
  @Output() documentSaved = new EventEmitter<any>();

  document: any = {
    typeOfLoan: '',
    employmentType: '',
    documents: [],
    file: null
  };

  addItem(): void {
    this.document.documents.push('');
  }

  removeItem(index: number): void {
    this.document.documents.splice(index, 1);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.document.file = file;
    }
  }

  saveChanges(): void {
    // Emit the document data to the parent component
    this.documentSaved.emit(this.document);
    console.log('Document saved:', this.document);
  }

  goBack(): void {
    window.history.back(); // Or use Angular's Location service
  }



// Array to store the table rows data
loanCriteriaRows = [
  {
    cibilScoreStart: '',
    cibilScoreEnd: '',
    loanRequirementStart: '',
    loanRequirementEnd: '',
   /*  salariedROI: '',
    nonSalariedROI: '' */
  }
];
 
// Function to add a new row to the table
addRow() {
  this.loanCriteriaRows.push({
    cibilScoreStart: '',
    cibilScoreEnd: '',
    loanRequirementStart: '',
    loanRequirementEnd: '',
    /* salariedROI: '',
    nonSalariedROI: '' */
  });
}
 
// Function to delete a row
deleteRow(index: number) {
  this.loanCriteriaRows.splice(index, 1);
}
 
// Function to save data (you can implement your own logic here)
saveRow(index: number) {
  const rowData = this.loanCriteriaRows[index];
  console.log("Saved Data: ", rowData);
  // You can send this data to a backend or save it locally as needed
}
}
 