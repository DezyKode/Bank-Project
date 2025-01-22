import { Component } from '@angular/core';

@Component({
  selector: 'app-create-connector',
  templateUrl: './create-connector.component.html',
  styleUrls: ['./create-connector.component.css']
})
export class CreateConnectorComponent {
  showModal: boolean = false; // Controls visibility of the modal
  inputValue: string = ''; // Store the PAN input value
  mobileValue: string = ''; // Store the mobile input value
  aadharValue: string = ''; // Store the Aadhar input value
  reraValue: string = ''; // Store the RERA input value
  referCommissionValue: string = ''; // Store the Refer Commission value
  isValidPan: boolean = false; // Store whether the PAN input is valid or not
  isValidMobile: boolean = false; // Store whether the mobile number is valid or not
  isValidAadhar: boolean = false; // Store whether Aadhar is valid or not
  isValidRera: boolean = false; // Store whether the RERA input is valid or not
  isValidReferCommission: boolean = false; // Store whether the Refer Commission is valid or not

  // Regex for validating PAN format: AAAAA9999A
  panRegex: RegExp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  // Regex for validating Mobile format: Only 10 digits
  mobileRegex: RegExp = /^[0-9]{10}$/;
  // Regex for validating Aadhar format: Only 12 digits
  aadharRegex: RegExp = /^\d{12}$/;
  // Regex for validating Refer Commission (allowing digits followed by %)
  referCommissionRegex: RegExp = /^\d+(\.\d{1,2})?%$/;
  // Regex for validating RERA Number format (MH / 1234 / PRJ / 2023)
  reraRegex: RegExp = /^[A-Z]{2} \/ \d{4} \/ [A-Z]{3} \/ \d{4}$/;

  // Handle custom keydown events for PAN, Mobile, Aadhar, Refer Commission, and RERA validation
  onKeyDown(event: KeyboardEvent, type: string) {
    if (type === 'pan') {
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

    if (type === 'mobile' || type === 'aadhar') {
      // Only allow numbers in mobile and Aadhar input and allow backspace and delete keys
      if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
        event.preventDefault(); // Prevent non-numeric input
      }
    }

    if (type === 'referCommission') {
      // Allow numbers, decimal point, and percent sign
      if (!/[0-9.%]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
        event.preventDefault(); // Prevent invalid characters
      }
    }
  }

  // Update inputValue to uppercase for PAN and validate the format
  onInput(event: Event, type: string) {
    const inputElement = event.target as HTMLInputElement;

    if (type === 'pan') {
      inputElement.value = inputElement.value.toUpperCase(); // Convert PAN to uppercase
      this.inputValue = inputElement.value;
      this.validatePanFormat(); // Validate PAN format when input changes
    }

    if (type === 'mobile') {
      this.mobileValue = inputElement.value;
      this.validateMobileFormat(); // Validate Mobile number format when input changes
    }

    if (type === 'aadhar') {
      this.aadharValue = inputElement.value;
      this.validateAadharFormat(); // Validate Aadhar number format when input changes
    }

    if (type === 'referCommission') {
      this.referCommissionValue = inputElement.value;
      this.validateReferCommissionFormat(); // Validate Refer Commission format when input changes
    }

    if (type === 'rera') {
      this.reraValue = inputElement.value;
      this.validateReraFormat(); // Validate RERA number format when input changes
    }
  }

  // Validate the PAN format using regular expression
  validatePanFormat() {
    this.isValidPan = this.panRegex.test(this.inputValue);
  }

  // Validate the mobile format using regular expression
  validateMobileFormat() {
    this.isValidMobile = this.mobileRegex.test(this.mobileValue);
  }

  // Validate the Aadhar format using regular expression
  validateAadharFormat() {
    this.isValidAadhar = this.aadharRegex.test(this.aadharValue);
  }

  // Validate the Refer Commission format using regular expression
  validateReferCommissionFormat() {
    this.isValidReferCommission = this.referCommissionRegex.test(this.referCommissionValue);
  }

  // Validate the RERA Number format using regular expression
  validateReraFormat() {
    this.isValidRera = this.reraRegex.test(this.reraValue);
  }

  // Check if the form is valid (valid PAN format, valid mobile format, valid Aadhar format, valid Refer Commission, valid RERA)
  isFormValid(): boolean {
    return this.isValidPan && this.isValidMobile && this.isValidAadhar && this.isValidReferCommission
      && this.inputValue.length === 10 && this.mobileValue.length === 10 && this.aadharValue.length === 12;
  }

  // Handle form submission
  onSubmit() {
    if (!this.isValidPan) {
      alert('Invalid PAN format! Please use the format: AAAAA9999A.');
      return;
    }

    if (!this.isValidMobile) {
      alert('Invalid Mobile Number! Please enter a 10-digit number.');
      return;
    }

    if (!this.isValidAadhar) {
      alert('Invalid Aadhar Number! Please enter a 12-digit Aadhar number.');
      return;
    }

    if (!this.isValidReferCommission) {
      alert('Invalid Refer Commission! Please enter a valid percentage (e.g., 25%).');
      return;
    }

   /*  alert(Form Submitted Successfully!);
    this.clearForm(); // Clear form data after submission */
  }

  // Clear form data
  clearForm() {
    this.inputValue = '';
    this.mobileValue = '';
    this.aadharValue = '';
    this.referCommissionValue = '';
    this.reraValue = '';
    this.isValidPan = false;
    this.isValidMobile = false;
    this.isValidAadhar = false;
    this.isValidReferCommission = false;
    this.isValidRera = false;
  }
}