import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css'],
})
export class DocumentsListComponent {
  showCreateDocument = false; // Tracks whether the form is visible
  documents = [
    { typeOfLoan: 'Home Loan', employmentType: 'Salaried', totalDocuments: 5 },
    { typeOfLoan: 'Car Loan', employmentType: 'Self-Employed', totalDocuments: 3 },
    // Add more document objects as needed
  ];

  showEditForm = false;
  editIndex: number | null = null;
  editedDocument: any = {};

  newDocument = { typeOfLoan: '', employmentType: '', totalDocuments: 0 }; // New document object
  isDocumentBeingAdded = false; // Prevent multiple document additions

  searchQuery = ''; // Search query for filtering documents
  filteredDocuments = [...this.documents]; // Filtered documents based on search

  toggleCreateDocument() {
    if (!this.isDocumentBeingAdded) {
      this.showCreateDocument = !this.showCreateDocument;
    }
  }

  addDocument() {
    if (this.isDocumentBeingAdded) {
      return; // Prevent adding multiple documents at the same time
    }

    this.isDocumentBeingAdded = true;

    // Add the new document to the documents array
    this.documents.push(this.newDocument);

    // Reset the form and hide the create form
    this.newDocument = { typeOfLoan: '', employmentType: '', totalDocuments: 0 };
    this.showCreateDocument = false;
    this.isDocumentBeingAdded = false;

    // Update the filteredDocuments to reflect the changes
    this.filteredDocuments = [...this.documents];
  }

  handleEdit(i: number) {
    this.editIndex = i;
    this.editedDocument = { ...this.documents[i] }; // Create a copy for editing
    this.showEditForm = true; // Show the edit form
  }

  saveEditedDocument() {
    if (this.editIndex !== null) {
      // Update the document in the array
      this.documents[this.editIndex] = { ...this.editedDocument };

      // Hide the edit form
      this.showEditForm = false;
      this.editIndex = null; // Reset the edit index
    }
  }

  closeEditForm() {
    this.showEditForm = false;
    this.editIndex = null;
  }

  handleDelete(index: number) {
    if (confirm('Are you sure you want to delete this document?')) {
      this.documents.splice(index, 1);
      // Update the filteredDocuments after deletion
      this.filteredDocuments = [...this.documents];
    }
  }

  // Filter documents based on the search query

  filterDocuments() {
    if (this.searchQuery) {
      this.documents = this.documents.filter(document => {
        return (
          document.typeOfLoan.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          document.employmentType.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    } else {
      // If searchQuery is empty, reset to the original documents list
      this.loadDocuments(); // Ensure you have a method to load all documents
    }
  }

  // Example method to load all documents
  loadDocuments() {
    // Logic to load documents (e.g., from an API or static data)
    this.documents = [
      { typeOfLoan: 'Home Loan', employmentType: 'Full-time', totalDocuments: 5 },
      { typeOfLoan: 'Car Loan', employmentType: 'Part-time', totalDocuments: 3 },
      // Add more documents here
    ];
  }
}
