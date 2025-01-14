import { Component } from '@angular/core';

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent {
  pname: string = '';
  selectedDomain: string = '';
  emailLocalPart: string = '';
  mobile: string = '';
  mobileError: boolean | undefined;
  formValid: boolean = false;

  // Method to handle form submission
  onSubmit(myForm:any) {
    if (this.formValid) {
      const fullEmail = this.emailLocalPart + '@' + this.selectedDomain;
      alert('Form Submitted!');
      console.log('Contact Person Name:', this.pname);
      console.log('Email:', fullEmail);
      console.log('Mobile:', this.mobile);

       // Reset the form after submission
       myForm.reset();
      // Perform further actions such as calling an API or updating a database here
    } else {
      console.log('Form is not valid.');
    }
  }

  
  restrictNumbers(event: KeyboardEvent) {
    const charCode = event.charCode;
    // Check if the key is a number (between 48-57 in ASCII)
    if (charCode >= 48 && charCode <= 57) {
      event.preventDefault();  // Prevent the number from being typed
    }
  }

  updateEmail() {
    // If both email local part and domain are available, combine them
    if (this.selectedDomain && this.emailLocalPart) {
      this.emailLocalPart = this.emailLocalPart.trim() + '@' + this.selectedDomain;
    }
  }

  validateEmailInput(event: any) {
    const input = event.target.value;

    // If '@' is entered, restrict further input after '@'
    if (input.includes('@')) {
      const [localPart] = input.split('@');
      this.emailLocalPart = localPart; // Only keep the local part
    }

    // Check if the input ends with '@', so we can block further typing after it
    if (input.includes('@') && input.indexOf('@') === input.length - 1) {
      event.preventDefault(); // Stop further input after '@'
    }
  }

  preventAtSymbol(event: KeyboardEvent) {
    if (event.key === '@') {
      event.preventDefault();  // Prevent entering '@' symbol
    }
  }

  validateMobile(): void {
    // Use regex to validate a 10-digit mobile number
    const mobileRegex = /^\d{10}$/;
    this.mobileError = !mobileRegex.test(this.mobile);
    this.validateForm(); // Revalidate the form when mobile number changes
  }

  validateForm() {
    // Check the validity of all fields before allowing submission
    if (
      this.pname.trim().length > 1 && 
      this.emailLocalPart.trim().length > 0 && 
      this.selectedDomain.trim().length > 0 && 
      !this.mobileError && 
      this.mobile.length === 10
    ) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  restrictCharacter(event: KeyboardEvent): void {
    const charCode = event.charCode;
    // Allow only digits (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();  // Prevent any non-numeric characters
    }
  }
}
