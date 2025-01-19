import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router if needed

@Component({
  selector: 'app-adharmodal',
  templateUrl: './adharmodal.component.html',
  styleUrls: ['./adharmodal.component.css']
})
export class AdharmodalComponent {
  isModalOpen: boolean = true;
  inputValue: string = '';
  isValidAadhar: boolean = true;
  taskAdded: boolean = false;

  constructor(private router: Router) {}

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = ''; // Re-enable scroll when modal is closed
  }

  // Handle custom keydown events for Aadhar validation
  onKeyDown(event: KeyboardEvent) {
    // Allow backspace and delete keys
    if (event.key === 'Backspace' || event.key === 'Delete') {
      return;
    }

    const currentValue = this.inputValue + event.key;
    if (currentValue.length <= 12) {
      // First 12 characters must be digits
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    }
  }

  // Update inputValue to allow only digits
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value.replace(/\D/g, ''); // Remove non-digit characters
    this.validateAadharFormat(); // Validate Aadhar format when input changes
  }

  // Validate the Aadhar format (12 digits)
  validateAadharFormat() {
    const aadharRegex = /^\d{12}$/; // 12-digit number only
    this.isValidAadhar = aadharRegex.test(this.inputValue);
  }

  // Handle form submission
  onSubmit() {
    if (!this.isValidAadhar) {
      alert('Invalid Aadhar format! Please use the format: 123412341234.');
      return;
    }

    // If valid, show success and clear the form
    alert(`Aadhar Verified Successfully!\nAadhar No: ${this.inputValue}`);
    this.taskAdded = true;
    this.clearForm(); // Clear form data after submission
    this.closeModal(); // Close modal after submission

    // Optionally, navigate to another page after success
    this.router.navigate(['/verification/vreport']);
  }

  // Clear form data
  clearForm() {
    this.inputValue = '';
    this.isValidAadhar = true;
  }
}
