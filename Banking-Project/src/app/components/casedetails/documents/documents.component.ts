import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents = [
    { placeholder: 'Upload your document', fileName: '' }
    // Add more document objects as needed
  ];

  isModalVisible = false;  // Flag to control the visibility of the modal
  selectedDocument: any = {};  // Store the selected document for viewing

  // Handle file upload and update the document name
  handleFileUpload(index: number, event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Update the document object with the file name
      this.documents[index].fileName = file.name;
    }
  }

  // Function to reset the file input and file name
  resetFile(index: number): void {
    this.documents[index].fileName = '';  // Reset file name
    const fileInput = document.getElementById('l-' + (index + 1)) as HTMLInputElement;
    if (fileInput) fileInput.value = '';  // Reset file input
  }

  // Function to add a new document input
  addNewDocument(): void {
    this.documents.push({ placeholder: 'Upload your document', fileName: '' });
  }

  // Function to open the modal and view the document
  viewDocument(index: number): void {
    const selectedDoc = this.documents[index];
    if (selectedDoc.fileName) {
      this.selectedDocument = selectedDoc;
      this.isModalVisible = true;
    }
  }

  // Function to close the modal
  closeModal(): void {
    this.isModalVisible = false;
  }

  // Function to check if the file is an image
  isImage(fileName: string): boolean {
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    return fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif';
  }

  // Function to get the URL of the uploaded file
  getFileUrl(fileName: string): string {
    return URL.createObjectURL(new Blob([fileName]));
  }
  
  
}
