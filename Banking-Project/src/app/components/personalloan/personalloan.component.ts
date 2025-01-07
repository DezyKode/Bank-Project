import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm for resetting the form

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent {

  personalLoan: string = ''; // Bind to loan type select
  isFormValid: boolean = false; // Form validation flag
  panNo: string = '';
  isValidPanNo: boolean = true;
  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  email: string = '';
  empType: string = '';
  mobile:string = '';
  mobileError:boolean = false;
  Employer:string = '';
  averageBonus:string = '';
  bonusError:boolean = false;
  futureRent:string = '';
  futureRentError:boolean=false;
  monthSalary:string= '';
  grossSalaryError:boolean=false;
  incentive:string = '';
  incentiveError:boolean=false;
  loanEmi:string= '';
  loanError:boolean=false;
  netSalary:string = '';
  netSalError:boolean=false;
  rentIncome:string = '';
  rentError:boolean=false;
  pension:string = '';
  pensionError:boolean=false;
  Employer1: string = '';
  employerError: boolean = false; 
  dateOfBirth!: string;
  elegibilityService: any;
  formcontrols: any;
  firstNameInput: any;
  lastNameInput: any;
emailInput: any;
emailLocalPart: string = ''; // Local part of the email (before @)
selectedDomain: string = ''; // Selected domain

  // Validate the form to check if required fields are filled
  validateForm(): void {
    this.isFormValid = 
      this.personalLoan !== '' && // Check if loan type is selected
      this.firstName.trim() !== '' && // Check if first name is not empty
      this.lastName.trim() !== '' && // Check if last name is not empty
      this.empType !== '' && // Check if employment type is selected
      this.panNo.trim() !== '' && // Check if PAN number is not empty
      this.isValidPanNo; // Check if PAN number is valid
      this.mobile.trim() !== '' && // Check if mobile number is not empty
      !this.mobileError; // Ensure no mobile number errors
  }

  // PAN Number validation
  validatePanNo(): void {
    const panNoRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // Regular expression for valid PAN format
    this.isValidPanNo = panNoRegex.test(this.panNo); // Validate the PAN number format
    this.validateForm(); // Revalidate the form when PAN number changes
  }
  validateAge(dobInput: any) {
    const dob = new Date(this.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // If the user is under 18, mark the input as invalid with an 'underage' error
    if (age < 18 || (age === 18 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))) {
      dobInput.control.setErrors({ underage: true });
    } else {
      // If age is valid, clear any previous error
      if (dobInput.control.errors?.['underage']) {
        delete dobInput.control.errors['underage'];
        dobInput.control.updateValueAndValidity();
      }
    }
  }
  validateMobile():void{
    debugger;
    const mobileRegex = /^d{10}$/;
    this.mobileError = mobileRegex.test(this.mobile);
    this.validateForm(); // Revalidate the form when mobile number changes

  }
  updateEmail() {
    // If both email local part and domain are available, combine them
    if (this.selectedDomain && this.emailLocalPart) {
      // Append the domain to the local part
      this.emailLocalPart = this.emailLocalPart.trim() + '@' + this.selectedDomain;
    }
  }

  // This method prevents the '@' symbol from being typed in the input field
  preventAtSymbol(event: KeyboardEvent) {
    if (event.key === '@') {
      event.preventDefault();  // Prevent entering '@' symbol
    }
  }
    // Called whenever the input changes
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
  
  
  
    // Optionally: You can have additional validation for the full email
    validateFullEmail() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(this.email);
    }
  
  
  // Common validation function for both fields
  validateField(inputValue: string): boolean {
    const trimmedValue = inputValue.trim(); // Trim the input
    const regex = /^[0-9]+(\.[0-9]{1,2})?$/; // Regex to allow numbers with up to two decimal places

    // Check if the value matches the regex and is greater than 0
    return regex.test(trimmedValue) && parseFloat(trimmedValue) > 0;
  }

  // Validate Bonus input
  validateBonus(): void {
    this.bonusError = !this.validateField(this.averageBonus); // Call common validation
  }

  // Validate Future Rent input
  validateFutureRent(): void {
    this.futureRentError = !this.validateField(this.futureRent); // Call common validation
  }
  validateMonthSalary(): void {
    const salary = parseFloat(this.monthSalary); // convert string to number
    
    if (isNaN(salary) || salary <= 0) {
      this.grossSalaryError = true;
    } else {
      this.grossSalaryError = false;
    }
  }
  

  validateIncentive():void{
    this.incentiveError=!this.validateField(this.incentive);
  }

  validateLoanEmi():void{
    this.loanError=!this.validateField(this.loanEmi);
  }

  validateNetSal():void{
    this.netSalError=!this.validateField(this.netSalary);
  }

  validateRentIncome():void{
    this.rentError=!this.validateField(this.rentIncome);
  }

  validatePension():void{
    this.pensionError=!this.validateField(this.pension);
  }

  validateEmployer():void{
    this.employerError = this.Employer === '';

  }
  onInputChange(event: any): void {
    // Convert the input to uppercase as the user types
    this.firstName = this.firstName.toUpperCase();
    this.lastName=this.lastName.toUpperCase();
    this.middleName= this.middleName.toUpperCase();
    this.panNo = this.panNo.toUpperCase()
  }

  restrictNumbers(event: KeyboardEvent) {
    const charCode = event.charCode;
    // Check if the key is a number (between 48-57 in ASCII)
    if (charCode >= 48 && charCode <= 57) {
      event.preventDefault();  // Prevent the number from being typed
    }
  }

  restrictCharacter(event: KeyboardEvent): void {
    // Get the character code of the key pressed
    const charCode = event.charCode;
  
    // Allow only digits (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();  // Prevent any non-numeric characters
    }
  }

  
  resetForm() {
    this.personalLoan = '';
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';
    this.dateOfBirth = '';
    this.panNo = '';
    this.email = '';
    this.empType = '';
    this.mobile = '';
    this.Employer1 = '';
    this.averageBonus = '';
    this.futureRent = '';
    this.monthSalary = '';
    this.incentive = '';
    this.loanEmi = '';
    this.netSalary = '';
    this.rentIncome = '';
    this.pension = '';

    // Reset the form validations (You may need to set this based on your form control names)
    this.resetValidation();
  }

  // Reset validation errors
  resetValidation() {
    // Reset the form control's validity
    // If you're using template-driven form with ngModel, you can set the ngModel to untouched and pristine
    this.firstNameInput?.control?.markAsPristine();
    this.firstNameInput?.control?.markAsUntouched();
    // Repeat for all other form controls (e.g., lastNameInput, emailInput, etc.)
    this.emailInput?.control?.markAllAsTouched();
    // To ensure the errors are cleared on reset, you may want to mark controls as untouched
    this.firstNameInput?.control?.setErrors(null);
    this.lastNameInput?.control?.setErrors(null);
    this.emailInput?.control?.setErrors(null);

    // Repeat for all other controls (e.g., mobileInput, empTypeInput, etc.)
  }
  // Submit the form to the backend
  submitForm(): void {
    if (this.isFormValid) {
      const formData = {
        typeOfLoan: this.personalLoan,
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        email: this.email, 
        employmentType: this.empType,
        panNo: this.panNo,
        mobileNo: this.mobile,
        employerType: this.Employer1,
        averageBonusOfLastThreeYears: this.averageBonus,
        futureRentIncome: this.futureRent,
        monthlyGrossSalary: this.monthSalary,
        averageMonthlyIncentiveOfLast6Month: this.incentive,
        loanEMI: this.loanEmi,
        monthlyNetSalary: this.netSalary,
        rentIncome: this.rentIncome,
        pension: this.pension,
        dateOfBirth: this.dateOfBirth
      };

      // Call the service to send data to the backend
      this.elegibilityService.postElegibility(formData).subscribe({
        next: (response: any) => {
          console.log('Data sent successfully:', response);
          alert("Data Sent Successfully")
        },
        error: (error: any) => {
          console.error('Error sending data:', error);
        }
      });
    } else {
      // console.error('Form is not valid');
      alert("Form is not complete")
    } 
  }
}
