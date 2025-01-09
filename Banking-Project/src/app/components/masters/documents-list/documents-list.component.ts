import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent {
  documents = [
    { typeOfLoan: 'Home Loan', employmentType: 'Salaried', totalDocuments: 5 },
    { typeOfLoan: 'Personal Loan', employmentType: 'Self-Employed', totalDocuments: 3 },
  ];

  showCreateDocumentForm = false;
  showEditForm = false;
  editIndex: number | null = null;

  openCreateDocumentForm() {
    this.showCreateDocumentForm = true;
  }

  closeCreateDocumentForm() {
    this.showCreateDocumentForm = false;
    this.showEditForm = false;
    this.editIndex = null;
  }

  addNewDocument(document: any) {
    this.documents.push(document);
    this.closeCreateDocumentForm();
  }

  handleEdit(index: number) {
    this.editIndex = index;
    this.showEditForm = true;
  }

  saveEditedDocument(updatedDocument: any) {
    if (this.editIndex !== null) {
      this.documents[this.editIndex] = updatedDocument;
      this.closeCreateDocumentForm();
    }
  }

  handleDelete(index: number) {
    if (confirm('Are you sure you want to delete this document?')) {
      this.documents.splice(index, 1);
    }
  }
}
