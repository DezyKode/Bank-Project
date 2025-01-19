import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router if needed

@Component({
  selector: 'app-pancardmodal',
  templateUrl: './pancardmodal.component.html',
  styleUrl: './pancardmodal.component.css'
})
export class PancardmodalComponent {
  removeSelectedFile(_t33: any) {
    throw new Error('Method not implemented.');
    }
      showModal: boolean = true; // Controls visibility of the modal
      inputValue: string = ''; // Store the PAN input value
      isValidPan: boolean = false; // Store whether the PAN input is valid or not
    
      // Regex for validating PAN format: AAAAA9999A
      panRegex: RegExp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    taskForm: any;
    selectedFileNames: any;
    taskAdded: any;
    
      // Open the modal
      // openModal() {
      //   this.showModal = true;
      //   document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
      // }
    
      // Close the modal
      closeModal(): void {
        this.showModal = false;
        document.body.style.overflow = ''; // Re-enable scroll when modal is closed
      }
      constructor(private router: Router) {}

      // Handle custom keydown events for PAN validation
      onKeyDown(event: KeyboardEvent) {
        // Allow backspace and delete keys
        if (event.key === 'Backspace' || event.key === 'Delete') {
          return;
        }
    
        const currentValue = this.inputValue + event.key;
    
        // Validate input based on the character position in PAN
        if (currentValue.length <= 5) {
          // First 5 characters must be letters (case insensitive)
          if (!/^[A-Za-z]$/.test(event.key)) {
            event.preventDefault();
          }
        } else if (currentValue.length <= 9) {
          // Next 4 characters must be digits
          if (!/^\d$/.test(event.key)) {
            event.preventDefault();
          }
        } else if (currentValue.length === 10) {
          // The last character must be a capital letter
          if (!/^[A-Za-z]$/.test(event.key)) {
            event.preventDefault();
          }
        }
      }
    
      // Update inputValue to uppercase for letters and validate the format
      onInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.inputValue = inputElement.value.toUpperCase();
        this.validatePanFormat(); // Validate PAN format when input changes
      }
    
      // Validate the PAN format using regular expression
      validatePanFormat() {
        this.isValidPan = this.panRegex.test(this.inputValue);
      }
    
      // Check if the form is valid (valid PAN format and input length of exactly 10 characters)
      isFormValid(): boolean {
        return this.isValidPan && this.inputValue.length === 10;
      }
    
      // Handle form submission
      onSubmit() {
        if (!this.isValidPan) {
          alert('Invalid PAN format! Please use the format: AAAAA9999A.');
          return;
        }
    
        alert(`PAN Verified Successfully!\nPAN No: ${this.inputValue}`);
        this.clearForm(); // Clear form data after submission
        this.closeModal(); // Close modal after submission
        this.router.navigate(['/verification/vreport']);

      }
    
      // Clear form data
      clearForm() {
        this.inputValue = '';
        this.isValidPan = false; // Reset the validation state
      }
}


