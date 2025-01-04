import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents = [
    { placeholder: 'Document 1', fileName: '' },
    { placeholder: 'Document 2', fileName: '' },
  ];
  isModalVisible = false;
  selectedDocument: any;

  // Handle file upload
  handleFileUpload(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.documents[index].fileName = input.files[0].name;
    }
  }

  // Reset file
  resetFile(index: number) {
    this.documents[index].fileName = '';
  }

  // View document
  viewDocument(index: number) {
    this.selectedDocument = this.documents[index];
    this.isModalVisible = true;
  }

  // Close modal
  closeModal() {
    this.isModalVisible = false;
  }

  // Check if the file is an image
  isImage(fileName: string): boolean {
    return /\.(jpg|jpeg|png|gif)$/i.test(fileName);
  }

  // Get file URL
  getFileUrl(fileName: string): string {
    return `path/to/your/uploaded/files/${fileName}`;
  }

  // Add new document row
  addNewDocument() {
    const newRow = { placeholder: `Document ${this.documents.length + 1}`, fileName: '' };
    this.documents.push(newRow);
  }

  // Delete a row
  deleteRow(index: number) {
    this.documents.splice(index, 1);
  }
  
  
}
