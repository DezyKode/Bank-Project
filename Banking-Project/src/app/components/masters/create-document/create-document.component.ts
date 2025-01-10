import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css'],
})
export class CreateDocumentComponent {
  typeOfLoan: string = '';
  employmentType: string = '';
  totalDocuments: number = 0;

  @Output() documentCreated = new EventEmitter<any>();

  createDocument() {
    if (this.typeOfLoan && this.employmentType && this.totalDocuments > 0) {
      const newDocument = {
        typeOfLoan: this.typeOfLoan,
        employmentType: this.employmentType,
        totalDocuments: this.totalDocuments,
      };

      // Emit the document data
      this.documentCreated.emit(newDocument);
      console.log('Emitted Document:', newDocument); // Debugging
      this.documentCreated.emit(newDocument);

      // Reset form fields
      this.typeOfLoan = '';
      this.employmentType = '';
      this.totalDocuments = 0;
    } else {
      alert('Please fill all fields before updating.');
    }
  }
  
}
