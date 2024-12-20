import { Component } from '@angular/core';

@Component({
  selector: 'app-checkeligibility',
  templateUrl: './checkeligibility.component.html',
  styleUrls: ['./checkeligibility.component.css']
})
export class CheckeligibilityComponent {
  mobile: string = '';  // Bind to mobile input field
  loanType: string = '';  // Bind to loan type select
  isFormValid: boolean = false;  // Form validation flag
  mobileError: boolean = false;  // Mobile number validation error flag

  // Function to close the form
  // closeForm(): void {
  //   const form = document.getElementById('myForm') as HTMLElement;
  //   if (form) {
  //     form.style.display = 'none';
  //   }
  // }

  // Function to validate mobile number (10 digits)
  validateMobile(): void {
    // Regular expression for a 10-digit mobile number
    const mobilePattern = /^[0-9]{10}$/;
    
    // Set mobile error flag based on validity
    this.mobileError = !mobilePattern.test(this.mobile);
    
    // Validate the entire form
    this.validateForm();
  }

  // Function to validate the form
  validateForm(): void {
    // The form is valid if the mobile number is exactly 10 digits and loan type is selected
    this.isFormValid = this.mobile.length === 10 && this.loanType !== '';
  }
}
