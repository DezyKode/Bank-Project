import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'] // Corrected to "styleUrls"
})
export class DocumentsComponent {
  documents: { name: string }[] = [{ name: '' }];

  addDocument(): void {
    this.documents.push({ name: '' });
  }

  deleteDocument(index: number): void {
    this.documents.splice(index, 1);
  }

  uploadDocument(doc: { name: string }): void {
    alert(`Document "${doc.name}" uploaded!`);
  }
  uploadFile(event: Event, doc: { name: string }): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (file) {
      doc.name = file.name; // Update the document name with the file name
      alert(`File "${file.name}" has been uploaded!`);
    }
  }
  
}
