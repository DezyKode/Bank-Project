import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.css'
})
export class DocumentsListComponentss {
  @Input() documents: any[] = [];
}
