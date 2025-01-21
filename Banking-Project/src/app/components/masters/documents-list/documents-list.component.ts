import { Component } from '@angular/core';

interface Document {
  typeOfLoan: string;
  employmentType: string;
  totalDocuments: number;
  items: string[]; // Add this property
}

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent {
  showCreateDocument = false; // For Create Document form visibility
  showEditDocument = false;   // For Edit Document form visibility
  searchQuery: string = '';   // For searching documents
  items: string[] = [];
  newDocument: Document = {
    typeOfLoan: '',
    employmentType: '',
    totalDocuments: 0,
    items: []  // Initialize with an empty array
  };

  documentToEdit: Document = {
    typeOfLoan: '',
    employmentType: '',
    totalDocuments: 0,
    items: []  // Initialize with an empty array
  };

  documents: Document[] = [
    { typeOfLoan: 'Home', employmentType: 'Full-Time', totalDocuments: 5, items: [] },
    { typeOfLoan: 'Car', employmentType: 'Part-Time', totalDocuments: 3, items: [] },
    { typeOfLoan: 'Personal', employmentType: 'Freelancer', totalDocuments: 2, items: [] }
  ];

  // Toggle Create Document form visibility
  toggleCreateDocument() {
    this.showCreateDocument = !this.showCreateDocument;
    this.showEditDocument = false; // Hide Edit Document form when Create Document form is toggled
  }

  // Edit document functionality
  editDocument(document: Document) {
    this.documentToEdit = { ...document }; // Copy document data to edit
    this.showEditDocument = true;  // Show Edit Document form
    this.showCreateDocument = false; // Hide Create Document form
  }
  handleDelete(index: number): void {
    this.items.splice(index, 1);  // Removes the item at the given index
  }
  // Update document
  updateDocument() {
    const index = this.documents.findIndex(doc => doc.typeOfLoan === this.documentToEdit.typeOfLoan);
    if (index !== -1) {
      this.documents[index] = { ...this.documentToEdit };
    }
    this.showEditDocument = false; // Hide Edit form after updating
  }

  // Cancel editing document
  cancelEdit() {
    this.showEditDocument = false; // Hide Edit form
  }

  // Add a new item to the list
  addItem() {
    this.documentToEdit.items.push('');  // Add an empty string for a new input field
  }

  // Add new document and show success message
  addDocument(form: any) {
    if (form.valid) {
      const newDoc = { ...this.newDocument };
      this.documents.push(newDoc);
      this.showCreateDocument = false;
      this.newDocument = { typeOfLoan: '', employmentType: '', totalDocuments: 0, items: [] };
      // Success message logic can be added here
    }
  }

  // Filter documents based on search query
  filterDocuments() {
    if (this.searchQuery) {
      return this.documents.filter(doc => doc.typeOfLoan.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    return this.documents;
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      console.log('Selected File:', file);
      // Additional logic to upload the file or store it temporarily
    }
  }
}
