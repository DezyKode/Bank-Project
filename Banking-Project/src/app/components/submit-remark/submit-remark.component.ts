import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-remark',
  templateUrl: './submit-remark.component.html',
  styleUrl: './submit-remark.component.css'
})
export class SubmitRemarkComponent {
  isModalOpen: boolean = false;
  remark: string = '';
  rejectedBy: string = '';
  isRemarkValid: boolean | null = null;

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

  // Check if the form is valid
  isFormValid(): boolean {
    return this.remark.trim().length > 0 && this.rejectedBy.length > 0;
  }

  // Handle form submission
  onSubmit() {
    if (!this.isFormValid()) {
      this.isRemarkValid = false;
      alert('Please provide both remark and rejection reason!');
    } else {
      this.isRemarkValid = true;
      alert('Remark submitted successfully!');
      this.clearForm();  // Optionally clear the form data
      this.closeModal();  // Optionally close the modal after successful submit
    }
  }

  // Clear form data
  clearForm(): void {
    this.remark = '';
    this.rejectedBy = '';
    this.isRemarkValid = null; // Reset the validation status
  }
}

