import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponents {
  constructor(private router: Router) {}

  goBack() {
    // Navigate back to the loan offers page
    this.router.navigate(['/loan-offers']);
  }

  goNext() {
    // Navigate to the next page
    this.router.navigate(['/next-step']);
  }

}
