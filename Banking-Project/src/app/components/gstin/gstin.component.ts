import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router if needed


@Component({
  selector: 'app-gstin',
  templateUrl: './gstin.component.html',
  styleUrl: './gstin.component.css'
})
export class GstinComponent {
  isModalOpen: boolean = true;
  gstNumber: string = '';
  isValidGst: boolean | null = null;

  // Open the modal
  // openModal() {
  //   this.isModalOpen = true;
  //   document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  // }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = ''; // Re-enable scroll when modal is closed
  }

  // Handle the keydown event for restricting the input based on GSTIN format
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      return;
    }

    const currentValue = this.gstNumber + event.key;

    // Validate based on the length of the entered string
    if (currentValue.length <= 2) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length <= 7) {
      if (!/^[A-Za-z]$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length <= 11) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length === 12) {
      if (!/^[A-Za-z]$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length === 13) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length === 14) {
      if (!/^[A-Za-z]$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length === 15) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    }
  }

  // Format the input as the user types
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.gstNumber = inputElement.value.toUpperCase();
    this.validateGstFormat(); // Validate the GST number format when input changes
  }

  // Validate GST format using regular expression
  validateGstFormat() {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/;
    this.isValidGst = gstRegex.test(this.gstNumber);
  }
  constructor(private router: Router) {}

  // Handle form submission
  onSubmit() {
    if (!this.isValidGst) {
      alert('Invalid GST format! Please use the format: 27AAAPL1234C1Z5.');
    } 
      alert('GST Number is valid! Form submitted successfully.');
      this.clearForm();
      this.closeModal();
      this.router.navigate(['/verification/vreport']);

  }

  // Clear form data
  clearForm(): void {
    this.gstNumber = '';
    this.isValidGst = null;
  }
}
