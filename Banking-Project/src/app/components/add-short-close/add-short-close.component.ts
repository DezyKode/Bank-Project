import { Component } from '@angular/core';

@Component({
  selector: 'app-add-short-close',
  templateUrl: './add-short-close.component.html',
  styleUrl: './add-short-close.component.css'
})
export class AddShortCloseComponent {
  isModalOpen: boolean = false;
  loanAcNo: string = ''; // Loan Account Number
  sanctionLetter: File | null = null; // Sanction Letter File
  fileError: string | null = null; // For file error message
  taskAdded: boolean = false;

  // Open the modal
  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = ''; // Re-enable scroll when modal is closed
  }

  // Validate loan account number (alphanumeric, max length 10)
  validateNumber(event: any, fieldName: string): void {
    let inputValue = event.target.value;

    if (fieldName === 'loanAcNo') {
      inputValue = inputValue.replace(/[^a-zA-Z0-9]/g, ''); // Alphanumeric only
    }

    if (fieldName === 'loanAcNo' && inputValue.length > 70) {
      inputValue = inputValue.slice(0, 10);
    }

    event.target.value = inputValue;
    this.loanAcNo = inputValue;
  }

  // Handle file upload change
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.fileError = null;

    if (file) {
      if (file.type.startsWith('image') && file.size > 500 * 1024) {
        this.fileError = 'Image file size should not exceed 500KB.';
        this.sanctionLetter = null;
        return;
      } else if (file.type === 'application/pdf' && file.size > 2 * 1024 * 1024) {
        this.fileError = 'PDF file size should not exceed 2MB.';
        this.sanctionLetter = null;
        return;
      }

      const validImageTypes = ['image/png', 'image/jpeg'];
      const validPdfType = 'application/pdf';

      if (!validImageTypes.includes(file.type) && file.type !== validPdfType) {
        this.fileError = 'Invalid file type. Only PNG, JPG, and PDF files are allowed.';
        this.sanctionLetter = null;
      } else {
        this.sanctionLetter = file;
      }
    }
  }

  // Submit form
  onSubmit() {
    if (this.loanAcNo && this.sanctionLetter) {
      alert('Form added successfully!');
      this.closeModal();
      this.taskAdded = true; // Show success message
      this.clearForm(); // Clear form after submission
    }
  }

  // Clear the form
  clearForm() {
    this.loanAcNo = '';
    this.sanctionLetter = null;
    this.fileError = null;

    // Clear the file input
    const fileInput = document.getElementById('sanctionLetter') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Reset the file input field
    }
  }
}
