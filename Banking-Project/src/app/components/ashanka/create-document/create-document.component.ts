import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrl: './create-document.component.css'
})
export class CreateDocumentComponents {
  @Output() documentCreated = new EventEmitter<any>(); // EventEmitter to send data to parent

  typeOfLoan: string = '';
  employmentType: string = '';
  totalDocuments: number = 0;

  // Method to handle document creation
  createDocument() {
    if (this.typeOfLoan && this.employmentType && this.totalDocuments > 0) {
      const newDocument = {
        typeOfLoan: this.typeOfLoan,
        employmentType: this.employmentType,
        totalDocuments: this.totalDocuments,
      };

      this.documentCreated.emit(newDocument); // Emit the document to the parent

      // Reset form
      this.typeOfLoan = '';
      this.employmentType = '';
      this.totalDocuments = 0;
    }
  }
}
