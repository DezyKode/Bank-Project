import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-details-rejected',
  templateUrl: './loan-details-rejected.component.html',
  styleUrl: './loan-details-rejected.component.css'
})
export class LoanDetailsRejectedComponent {
  documents = [
    { placeholder: '', fileName: '', name: '', type: '' },
    // Add initial document rows here if needed
  ];

  selectedDocumentDetails: { name: string; type: string } | null = null;

  addNewDocument(): void {
    this.documents.push({ placeholder: '', fileName: '', name: '', type: '' });
  }

  handleFileUpload(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.documents[index].fileName = file.name;
      this.documents[index].type = file.type;
    }
  }

  resetFile(index: number): void {
    this.documents[index].fileName = '';
    this.documents[index].type = '';
  }

  deleteRow(index: number): void {
    if (index > 0) {
      this.documents.splice(index, 1);
    } else {
      console.warn('Cannot delete the first row');
    }
  }

  viewDocument(index: number): void {
    const document = this.documents[index];
    if (document.fileName) {
      this.selectedDocumentDetails = {
        name: document.fileName,
        type: document.type, // Use the type that is set on file upload
      };
      console.log('Viewing document:', document.fileName);
    } else {
      console.error('No file selected for viewing');
    }
  }

  closeDocumentView(): void {
    this.selectedDocumentDetails = null;
  }


}

