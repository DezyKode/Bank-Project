import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent {
  documents = [
    { placeholder: 'Document 1', fileName: '', type: 'Photo' },
    { placeholder: 'Document 2', fileName: '', type: 'PDF' },
  ];

  selectedDocumentDetails: { name: string; type: string } | null = null;

  addNewDocument(): void {
    this.documents.push({ placeholder: '', fileName: '', type: 'Photo' });
  }

  handleFileUpload(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.documents[index].fileName = input.files[0].name;
      this.documents[index].type = this.getFileType(input.files[0].name);
    }
  }

  getFileType(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      return 'Photo';
    } else if (extension === 'pdf') {
      return 'PDF';
    } else {
      return 'Other';
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
        type: document.type,
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
