import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents: Array<any> = []; // Holds the documents

  // Adds a new document item to the list
  addDocument() {
    this.documents.push({
      name: '', // Initial empty document name
      file: null // No file initially
    });
  }

  // Handles file upload
  uploadFile(event: any, doc: any) {
    const file = event.target.files[0];

    if (file && file.type === 'application/pdf') {
      // Only allow PDF files
      doc.file = file;
      console.log('File uploaded:', file.name);
    } else {
      alert('Only PDF files are allowed!');
    }
  }

  // Handles the editing of a document (Name change or Deletion)
  editDocument(index: number) {
    const doc = this.documents[index];

    // Prompt the user for the action
    const action = prompt('Enter "edit" to change name or "delete" to remove the document:', 'edit');

    if (action) {
      if (action.toLowerCase() === 'edit') {
        // Ask the user to enter a new document name
        const newName = prompt('Enter new document name:', doc.name);
        if (newName !== null) {
          doc.name = newName; // Update the document name
        }
      } else if (action.toLowerCase() === 'delete') {
        // Confirm deletion
        const confirmDelete = confirm('Are you sure you want to delete this document?');
        if (confirmDelete) {
          this.deleteDocument(index); // Delete the document
        }
      } else {
        alert('Invalid action! Please enter "edit" or "delete".');
      }
    }
  }

  // Handles deleting a document
  deleteDocument(index: number) {
    const confirmDelete = confirm('Are you sure you want to delete this document?');
    if (confirmDelete) {
      this.documents.splice(index, 1); // Remove the document from the array
    }
  }
}

