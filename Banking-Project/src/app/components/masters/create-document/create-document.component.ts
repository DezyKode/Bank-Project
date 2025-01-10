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
        totalDocuments: this.totalDocuments
      };

      // Emit the document data to the parent
      this.documentCreated.emit(newDocument);

      // Reset form
      this.typeOfLoan = '';
      this.employmentType = '';
      this.totalDocuments = 0;
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  // typeOfLoan: string = '';
  // employmentType: string = '';
  documents: { srNo: number; name: string }[] = [];
  documentName: string = '';

  addNewDocument() {
    if (this.documentName.trim() !== '') {
      this.documents.push({
        srNo: this.documents.length + 1,
        name: this.documentName,
      });
      this.documentName = ''; // Reset the input field
    } else {
      alert('Please enter a document name.');
    }
  }

  // createDocument() {
  //   if (this.typeOfLoan && this.employmentType && this.documents.length > 0) {
  //     const newDocumentData = {
  //       typeOfLoan: this.typeOfLoan,
  //       employmentType: this.employmentType,
  //       documents: this.documents,
  //     };
  //     console.log('Created Document:', newDocumentData);

  //     // Reset form
  //     this.typeOfLoan = '';
  //     this.employmentType = '';
  //     this.documents = [];
  //   } else {
  //     alert('Please fill all fields and add at least one document.');
  //   }
  // }
  
}

