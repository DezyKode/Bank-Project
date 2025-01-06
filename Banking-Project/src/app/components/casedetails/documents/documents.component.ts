import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent {
  documents = [
    { placeholder: 'Document 1', fileName: '' },
    { placeholder: 'Document 2', fileName: '' },
  ];

  addNewDocument(): void {
    this.documents.push({ placeholder: '', fileName: '' });
  }

  handleFileUpload(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.documents[index].fileName = input.files[0].name;
    }
  }

  resetFile(index: number): void {
    this.documents[index].fileName = '';
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
      console.log('Viewing document:', document.fileName);
      // Additional logic for viewing the document
    } else {
      console.error('No file selected for viewing');
    }
  }
}
