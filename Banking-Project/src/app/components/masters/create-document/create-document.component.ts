import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css'],
})
export class CreateDocumentComponent {
  @Output() closeForm = new EventEmitter<void>();
  @Output() documentCreated = new EventEmitter<any>();

  typeOfLoan = '';
  employmentType = '';
  totalDocuments = 0;

  close(): void {
    this.closeForm.emit();
  }

  createDocument(): void {
    if (this.typeOfLoan && this.employmentType && this.totalDocuments > 0) {
      this.documentCreated.emit({
        typeOfLoan: this.typeOfLoan,
        employmentType: this.employmentType,
        totalDocuments: this.totalDocuments,
      });
      this.close();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
  
}

