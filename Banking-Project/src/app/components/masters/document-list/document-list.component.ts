import { Component } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
})
export class DocumentListComponent {
  documents: any[] = [];  // Initialize an empty array to hold documents

  onDocumentSaved(savedDocument: any): void {
    // Add the new document to the list
    this.documents.push(savedDocument);
    console.log('Document added to list:', savedDocument);
  }
}
