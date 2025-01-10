import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  documents: any[] = []; // Array to hold documents

  // Method to add a document to the list
  addDocument(newDocument: any) {
    this.documents.push(newDocument);
  }
}
