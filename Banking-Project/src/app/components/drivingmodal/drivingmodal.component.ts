import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router if needed

@Component({
  selector: 'app-drivingmodal',
  templateUrl: './drivingmodal.component.html',
  styleUrl: './drivingmodal.component.css'
})
export class DrivingmodalComponent {
  isModalOpen: boolean = true;
  licenseNumber: string = '';
  dob: string = '';
  isValidLicense: boolean | null = null;
  isValidDob: boolean | null = null;
  today: string = '';
  taskAdded: boolean = false;

  constructor(private router: Router) {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
  }

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

  // Handle custom keydown events for driver's license number validation
  onKeyDown(event: KeyboardEvent) {
    // Allow backspace and delete keys
    if (event.key === 'Backspace' || event.key === 'Delete') {
      return;
    }

    const currentValue = this.licenseNumber + event.key;

    // First two characters must be uppercase letters (state code)
    if (currentValue.length <= 2) {
      if (!/^[A-Za-z]$/.test(event.key)) {
        event.preventDefault();
      }
    }
    // The next 12 characters must be digits
    else if (currentValue.length <= 14) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    }
  }

  // Manually update licenseNumber to uppercase for the state code and apply formatting
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // Format the input to uppercase
    this.licenseNumber = inputElement.value.toUpperCase();
    this.validateLicenseNumberFormat();  // Validate license number whenever input changes
  }

  // Validate driver's license number format
  validateLicenseNumberFormat() {
    // Format: Two uppercase letters followed by 12 digits
    const licenseRegex = /^[A-Z]{2}\d{13}$/;
    this.isValidLicense = licenseRegex.test(this.licenseNumber);
  }

  // Validate Date of Birth
  validateDob() {
    const dobDate = new Date(this.dob);
    const todayDate = new Date(this.today);
    this.isValidDob = dobDate <= todayDate;
  }

  // Check if the form is valid
  isFormValid(): boolean {
    this.validateLicenseNumberFormat();
    this.validateDob();
    return this.isValidLicense === true && this.isValidDob === true;
  }

  // Handle form submission
  onSubmit() {
    if (!this.isValidLicense || !this.isValidDob) {
      alert('Please fill in the form correctly.');
      return;
    }

    alert(`License Verified Successfully!\nLicense No: ${this.licenseNumber}\nDOB: ${this.dob}`);
    this.clearForm();
    this.closeModal();
    this.taskAdded = true;
    setTimeout(() => { this.taskAdded = false; }, 3000); // Show success message for 3 seconds

    this.router.navigate(['/verification/vreport']);

  }

  // Clear form data
  clearForm() {
    this.licenseNumber = '';
    this.dob = '';
    this.isValidLicense = null;
    this.isValidDob = null;
  }
}
