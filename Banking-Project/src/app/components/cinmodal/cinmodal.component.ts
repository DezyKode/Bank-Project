import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router if needed

@Component({
  selector: 'app-cinmodal',
  templateUrl: './cinmodal.component.html',
  styleUrl: './cinmodal.component.css'
})
export class CinmodalComponent {
  isModalOpen: boolean = true;
  inputValue: string = '';
  isValidCin: boolean = true;
  taskAdded: boolean = false;  // Define the taskAdded variable

  // Open the modal
  // openModal() {
  //   this.isModalOpen = true;
  // }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
  }
  constructor(private router: Router) {}

  // Handle custom keydown events for CIN validation
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      return;
    }
    const currentValue = this.inputValue + event.key;
    // Validate based on the input length and character type
    if (currentValue.length <= 1) {
      if (!/^[A-Za-z]$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length <= 6) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length <= 8) {
      if (!/^[A-Za-z]$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length <= 12) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length <= 15) {
      if (!/^[A-Za-z]$/.test(event.key)) {
        event.preventDefault();
      }
    } else if (currentValue.length <= 21) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    }
  }

  // Manually update inputValue (allow letters and digits only, and format to uppercase)
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    this.validateCinFormat();
  }

  // Validate CIN format
  validateCinFormat() {
    const cinRegex = /^[A-Z]{1}\d{5}[A-Z]{2}\d{4}[A-Z]{3}\d{6}$/;
    this.isValidCin = cinRegex.test(this.inputValue);
  }

  // Handle form submission
  onSubmit() {
    this.validateCinFormat();
    if (!this.isValidCin) {
      alert('Invalid CIN format! Please use the correct format (e.g., L65110DL1990PLC102030).');
      return;
    }

    alert(`CIN Verified Successfully!\nCIN No: ${this.inputValue}`);
    this.taskAdded = true;  // Set taskAdded to true after submission
    setTimeout(() => {
      this.taskAdded = false;  // Reset taskAdded after a short period
    }, 3000);
    this.clearForm();
    this.closeModal();
    this.router.navigate(['/verification/vreport']);

  }

  // Clear form data
  clearForm() {
    this.inputValue = '';
    this.isValidCin = true;
  }

}
