import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  tempAddress: string = '';  // Temporary address
  permAddress: string = '';  // Permanent address
  isAddressSame: boolean = false;  // Checkbox state

  // Synchronize addresses when checkbox is clicked
  syncAddresses(): void {
    if (this.isAddressSame) {
      this.permAddress = this.tempAddress;
    }
  }

  // id validation
  validateID(event: any): void {
    let inputValue = event.target.value;

    console.log('Before validation:', inputValue);

    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 5) {
      inputValue = inputValue.slice(0, 5);
    }

    event.target.value = inputValue;
    console.log('After validation:', inputValue);
  }

  // number valid

  validateNumber(event: any): void {
    let inputValue = event.target.value;
  
    // Allow only numeric characters
    inputValue = inputValue.replace(/[^0-9]/g, '');
  
    // Restrict to exactly 10 digits
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }
  
    // Update the input field
    event.target.value = inputValue;
  }


  handleAdd(): void {
    alert('Add button clicked!');
  }

  handleCancel(): void {
    alert('Cancel button clicked!');
  }

  handleEdit(): void {
    alert('Edit button clicked!');
  }
}
