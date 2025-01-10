import { Component } from '@angular/core';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css'],
})
export class DocumentsListComponent {
  documents = [
    { typeOfLoan: 'Home Loan', employmentType: 'Salaried', totalDocuments: 5 },
    { typeOfLoan: 'Personal Loan', employmentType: 'Self-Employed', totalDocuments: 3 },
  ];

  showEditForm = false;
  editIndex: number | null = null;
  editedDocument: any = {};

  handleEdit(index: number) {
    this.editIndex = index;
    this.editedDocument = { ...this.documents[index] }; // Create a copy for editing
    this.showEditForm = true; // Show the edit form
  }

  saveEditedDocument(updatedDocument: any) {
    if (this.editIndex !== null) {
      this.documents[this.editIndex] = updatedDocument; // Save the updated document
      this.closeEditForm(); // Hide the form after saving
    }
  }

  closeEditForm() {
    this.showEditForm = false;
    this.editIndex = null;
    this.editedDocument = {};
  }

  handleDelete(index: number) {
    if (confirm('Are you sure you want to delete this document?')) {
      this.documents.splice(index, 1);
    }
  }
}
