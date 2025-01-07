import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents = [
    { placeholder: '', fileName: '', name: '', type: '' },
    // Add initial document rows here if needed
  ];

  selectedDocumentDetails: { name: string; type: string } | null = null;

  viewDocument(index: number): void {
    const document = this.documents[index];
    if (document.fileName) {
      this.selectedDocumentDetails = {
        name: document.fileName,
        type: 'Uploaded File' // Replace with actual type if available
      };
    }
  }

  closeDocumentView(): void {
    this.selectedDocumentDetails = null;
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
    this.documents.splice(index, 1);
  }

  addNewDocument(): void {
    this.documents.push({ placeholder: '', fileName: '', name: '', type: '' });
  }
}
