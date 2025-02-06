import { Component } from '@angular/core';

@Component({
  selector: 'app-add-disbursement',
  templateUrl: './add-disbursement.component.html',
  styleUrl: './add-disbursement.component.css'
})
export class AddDisbursementComponent {
  isModalOpen: boolean = false;
  inputValue: string = ''; // Disbursement Amount
  sanctionOn: string = ''; // Sanction Date
  loanAcNo: string = ''; // Loan Account Number
  utrNo: string = ''; // UTR Number
  sanctionLetter: File | null = null; // Sanction Letter File
  today: string; // Today's Date
  minDate: string; // Minimum Date (18 years ago)

  isValidAmount: boolean = false; // To track validity of the amount
  fileError: string | null = null; // For file error message
  taskAdded: boolean = false;

  // Date calculation
  constructor() {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0]; // Current Date in YYYY-MM-DD format

    currentDate.setFullYear(currentDate.getFullYear() - 18); // Set minimum date to 18 years ago
    this.minDate = currentDate.toISOString().split('T')[0];
  }

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

  // Handle custom keydown events for input validation (Amount)
  onKeyDown(event: KeyboardEvent) {
    // Allow backspace and delete keys
    if (event.key === 'Backspace' || event.key === 'Delete') {
      return;
    }

    const currentValue = this.inputValue + event.key;
    if (currentValue.length <= 5) {
      // Allow only digits for input
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  }

  // Update input value and validate amount
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value.replace(/\D/g, ''); // Remove non-digit characters
    this.validateAmount(); // Validate the amount format
  }

  // Validate the amount to ensure it's exactly 5 digits
  validateAmount() {
    this.isValidAmount = this.inputValue.length === 5 && /^\d{5}$/.test(this.inputValue);
  }

  // Validate loan account number (alphanumeric, max length 10)
  validateNumber(event: any, fieldName: string): void {
    let inputValue = event.target.value;

    if (fieldName === 'loanAcNo' || fieldName === 'utrNo') {
      inputValue = inputValue.replace(/[^a-zA-Z0-9]/g, ''); // Alphanumeric only
    }

    if (fieldName === 'loanAcNo' && inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    } else if (fieldName === 'utrNo' && inputValue.length > 14) {
      inputValue = inputValue.slice(0, 14); // Limit UTR number to 14 characters
    }

    event.target.value = inputValue;

    if (fieldName === 'loanAcNo') {
      this.loanAcNo = inputValue;
    } else if (fieldName === 'utrNo') {
      this.utrNo = inputValue;
    }
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
    if (this.isValidAmount && this.sanctionOn && this.loanAcNo && this.utrNo && this.sanctionLetter) {
      alert('Form added successfully!');
      this.closeModal();
      this.taskAdded = true; // Show success message
      this.clearForm(); // Clear form after submission
    }
  }

  // Clear the form
  clearForm() {
    this.inputValue = '';
    this.sanctionOn = '';
    this.loanAcNo = '';
    this.utrNo = '';
    this.sanctionLetter = null;
    this.isValidAmount = false;
    this.fileError = null;

    // Clear the file input
    const fileInput = document.getElementById('sanctionLetter') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Reset the file input field
    }
  }
}