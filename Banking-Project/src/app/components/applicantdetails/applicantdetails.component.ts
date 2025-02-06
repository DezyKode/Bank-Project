import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicantdetails',
  templateUrl: './applicantdetails.component.html',
  styleUrl: './applicantdetails.component.css'
})
export class ApplicantdetailsComponent {
leadSource: string='';
validateTenure() {
throw new Error('Method not implemented.');
}

  showCoApplicantForm = false; // Initial state is hidden
  isFormValid = true; // Form validation flag
  panNo: string = '';
  isValidPanNo: boolean = true;
  firstName: string = '';
  firstName1:string='';
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
  grossSalary:string= '';
  grossSalaryError:boolean=false;
  incentive:string = '';
  incentiveError:boolean=false;
  loanEmi:string= '';
  loanError:boolean=false;
  netSalary:string = '';
  monthlyNetSalary:string = '';
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
tenure: any;

toggleCoApplicantForm() {
  this.showCoApplicantForm = !this.showCoApplicantForm; // Toggle visibility
}
  // Validate the form to check if required fields are filled
  validateForm(): void {
    // Common fields that are required for all types
    this.isFormValid =
      this.firstName.trim() !== '' && // Check for first name
      this.lastName.trim() !== '' && // Check for last name
      this.middleName.trim()!=='' &&
      this.empType !== '' && // Employment type
      this.panNo.trim() !== '' && // PAN number check
      this.isValidPanNo &&  // Valid PAN check
      this.mobile.trim() !== '' && // Check if mobile number is not empty
      this.validateFullEmail() &&  // Ensure email is valid
      this.dateOfBirth !== '' && // Date of birth check
      this.leadSource !== ''; // Lead source check

    // Additional validation based on employment type
    if (this.empType === 'other') {
      // If "Other" employment type, check only common fields
      this.isFormValid = this.isFormValid;
    } else if (this.empType === 'salaried') {
      // If "Salaried", check all common fields plus specific fields
      this.isFormValid =
        this.isFormValid &&
        this.averageBonus.trim() !== '' &&  // Bonus field check
        !this.bonusError &&  // No bonus error
        this.loanEmi.trim() !== '' &&  // Loan EMI check
        this.rentIncome.trim() !== '' &&  // Rent check
        this.futureRent.trim() !== ''; // Future rent check
    } else if (this.empType === 'selfEmployed') {
      // If "Self Employed", check all common fields plus specific fields
      this.isFormValid =
        this.isFormValid &&
        this.Employer.trim() !== '' &&  // Employer type check
        this.averageBonus.trim() !== '' &&  // Bonus check
        !this.bonusError &&  // No bonus error
        this.monthSalary.trim() !== '' &&  // Monthly Salary check
        !this.grossSalaryError &&  // No gross salary error
        this.incentive.trim() !== '' &&  // Incentive check
        !this.incentiveError &&  // No incentive error
        this.loanEmi.trim() !== '' &&  // Loan EMI check
        this.monthlyNetSalary.trim() !== '' &&  // Net Salary check
        !this.netSalError &&  // No net salary error
        this.pension.trim() !== '';  // Pension check
    }
  }



  // PAN Number validation
  validatePanNo(): void {
    const panNoRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // Regular expression for valid PAN format
    this.isValidPanNo = panNoRegex.test(this.panNo); // Validate the PAN number format
    // this.validateForm(); // Revalidate the form when PAN number changes
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
  
    const mobileRegex = /^d{10}$/;
    this.mobileError = mobileRegex.test(this.mobile);
    // this.validateForm(); // Revalidate the form when mobile number changes

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
    
    // if (isNaN(salary) || salary <= 0) {
    //   this.grossSalaryError = true;
    // } else {
    //   this.grossSalaryError = false;
    // }
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

  
  resetForm(loanForm: NgForm):void {
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
    this.tenure = '';
    this.leadSource = '';
    this.selectedDomain = '';
    this.emailLocalPart = '';

    alert("form is reset");
    // Reset the form validations (You may need to set this based on your form control names)
    this.resetValidation(loanForm);
  }

  onLeadSourceChange() {
    // Handle any logic needed when lead source is changed.
    // You can clear/reset related fields if necessary.
    if (this.leadSource !== 'calling') {
    }
  }
  
  // Reset validation errors
  resetValidation(loanForm: NgForm):void {
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
    loanForm.reset();

    // Repeat for all other controls (e.g., mobileInput, empTypeInput, etc.)
  }

  constructor(private router: Router) {}

  submitForm(loanForm: NgForm):void {
    console.log("Selected Employment Type:", this.empType); // Debugging

    // Check if empType is 'other', 'Salaried', or 'Self Employed'
    if (this.empType.toLowerCase() === 'other' || this.empType.toLowerCase() === 'salaried' || this.empType.toLowerCase() === 'self employed') {

        if (this.empType.toLowerCase() === 'other') {
            console.log("Processing 'Other' Employment Type...");

            const requiredFields = [
                { field: this.firstName, name: 'First Name' },
                { field: this.middleName, name: 'Middle Name' },
                { field: this.lastName, name: 'Last Name' },
                { field: this.panNo, name: 'PAN Number' },
                { field: this.mobile, name: 'Mobile Number' },
                { field: this.dateOfBirth, name: 'Date of Birth' },
                { field: this.leadSource, name: 'Lead Source' }
            ];

            for (const { field, name } of requiredFields) {
                if (!field || field.trim() === '') {
                    alert(`${name} is required.`);
                    return;
                }
            }

            const email = `${this.emailLocalPart}@${this.selectedDomain}`;
            if (!this.emailLocalPart || !this.selectedDomain || !this.isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const formData = {
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                email: email,
                employmentType: this.empType,
                panNo: this.panNo,
                mobileNo: this.mobile,
                dateOfBirth: this.dateOfBirth,
                leadSource: this.leadSource
            };

            alert("Form submitted successfully!");
            this.router.navigate(['/createNewCase/loan']);

        } else if (this.empType.toLowerCase() === 'salaried') {
            console.log("Processing 'Salaried' Employment Type...");

            const requiredFields = [
                { field: this.firstName, name: 'First Name' },
                { field: this.middleName, name: 'Middle Name' },
                { field: this.lastName, name: 'Last Name' },
                { field: this.panNo, name: 'PAN Number' },
                { field: this.mobile, name: 'Mobile Number' },
                { field: this.dateOfBirth, name: 'Date of Birth' },
                { field: this.leadSource, name: 'Lead Source' },
                { field: this.averageBonus, name: 'Average Bonus' },
                { field: this.grossSalary, name: 'Gross Salary' },
                { field: this.netSalary, name: 'Net Salary' },
                { field: this.futureRent, name: 'Future Rent' }
            ];

            for (const { field, name } of requiredFields) {
                if (!field || field.trim() === '') {
                    alert(`${name} is required.`);
                    return;
                }
            }

            const email = `${this.emailLocalPart}@${this.selectedDomain}`;
            if (!this.emailLocalPart || !this.selectedDomain || !this.isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const formData = {
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                email: email,
                employmentType: this.empType,
                panNo: this.panNo,
                mobileNo: this.mobile,
                dateOfBirth: this.dateOfBirth,
                leadSource: this.leadSource,
                averageBonus: this.averageBonus,
                grossSalary: this.grossSalary,
                netSalary: this.netSalary,
                futureRent: this.futureRent
            };

            alert("Salaried employee form submitted successfully! 🎉");
            this.router.navigate(['/createNewCase/loan']);

        } else if (this.empType.toLowerCase() === 'self employed') {
            console.log("Processing 'Self Employed' Employment Type...");

            const requiredFields = [
                { field: this.firstName, name: 'First Name' },
                { field: this.middleName, name: 'Middle Name' },
                { field: this.lastName, name: 'Last Name' },
                { field: this.panNo, name: 'PAN Number' },
                { field: this.mobile, name: 'Mobile Number' },
                { field: this.dateOfBirth, name: 'Date of Birth' },
                { field: this.leadSource, name: 'Lead Source' },
                { field: this.Employer1, name: 'Employer Type' },
                { field: this.monthSalary, name: 'Monthly Gross Salary' },
                { field: this.netSalary, name: 'Monthly Net Salary' },
                { field: this.averageBonus, name: 'Average Bonus Of Last Three Years' },
                { field: this.incentive, name: 'Average Monthly Incentive Of Last 6 Months' },
                // { field: this.grossSalary, name: ' rentIncome' },
                { field: this.netSalary, name: 'Future Rent Income' },
                { field: this.futureRent, name: 'Loan EMI (Obligations)' },
                { field: this.pension, name: 'Pension' }
            ];

            for (const { field, name } of requiredFields) {
                if (!field || field.trim() === '') {
                    alert(`${name} is required.`);
                    return;
                }
            }

            const email = `${this.emailLocalPart}@${this.selectedDomain}`;
            if (!this.emailLocalPart || !this.selectedDomain || !this.isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const formData = {
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                email: email,
                employmentType: this.empType,
                panNo: this.panNo,
                mobileNo: this.mobile,
                dateOfBirth: this.dateOfBirth,
                leadSource: this.leadSource,
                Employer1: this.Employer1,
                monthSalary: this.monthSalary,
                netSalary: this.netSalary,
                averageBonus: this.averageBonus,
                incentive: this.incentive,
                grossSalary: this.grossSalary,
                futureRent: this.futureRent,
                pension: this.pension
            };

            alert("Self-employed employee form submitted successfully! 🎉");
            this.router.navigate(['/createNewCase/loan']);
        }

    } else {
        alert("Please select an employment type.");
        Object.values(loanForm.controls).forEach(control => {
          control.markAsTouched();  // This will mark each control as touched
        });
    }
}


  
  
  // Email validation function (basic email format check)
  isValidEmail(email: string): boolean {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
  
 
    
  
  
  
  
  // Submit the form to the backend
  // submitForm(): void {

  //   console.log('isFormValid:', this.isFormValid);
  //   console.log('Employment Type:', this.empType);
  
  //   if (this.isFormValid) {
  //     const formData = {
  //       firstName: this.firstName,
  //       middleName: this.middleName,
  //       lastName: this.lastName,
  //       // email: this.email,
  //       employmentType: this.empType,
  //       panNo: this.panNo,
  //       mobileNo: this.mobile,
  //       // employerType: this.Employer1,
  //       averageBonusOfLastThreeYears: this.averageBonus,
  //       futureRentIncome: this.futureRent,
  //       monthlyGrossSalary: this.monthSalary,
  //       averageMonthlyIncentiveOfLast6Month: this.incentive,
  //       loanEMI: this.loanEmi,
  //       monthlyNetSalary: this.netSalary,
  //       rentIncome: this.rentIncome,
  //       pension: this.pension,
  //       dateOfBirth: this.dateOfBirth,
  //       leadSource: this.leadSource
  //     };
  
  //     // Handle specific conditions based on employment type
  //     if (this.empType === 'other') {
  //       // For "Other", only basic fields should be checked
  //       const otherRequiredFields = this.firstName && this.lastName && this.middleName && this.email && this.mobile && this.panNo && this.dateOfBirth && this.leadSource;
  //       if (!otherRequiredFields) {
  //         alert('Please complete the form with valid information for "Other" employment type.');
  //         return; // Prevent submission if fields are missing
  //       }
  //     } else if (this.empType === 'salaried') {
  //       // For "Salaried", additional fields should be required
  //       const salariedRequiredFields = this.firstName && this.middleName &&  this.lastName && this.email && this.mobile && this.panNo && this.dateOfBirth && this.leadSource && this.loanEmi && this.rentIncome && this.futureRent && this.averageBonus;
  //       if (!salariedRequiredFields) {
  //         alert('Please complete the form with valid information for "Salaried" employment type.');
  //         return; // Prevent submission if fields are missing
  //       }
  //     } else if (this.empType === 'selfEmployed') {
  //       // For "Self Employed", additional fields related to business and salary are required
  //       const selfEmployedRequiredFields = this.firstName && this.lastName  &&  this.middleName && this.email && this.mobile && this.panNo && this.dateOfBirth && this.leadSource && this.Employer1 && this.averageBonus && this.monthSalary && this.incentive && this.loanEmi && this.netSalary && this.rentIncome && this.pension;
  //       if (!selfEmployedRequiredFields) {
  //         alert('Please complete the form with valid information for "Self Employed" employment type.');
  //         return; // Prevent submission if fields are missing
  //       }
  //     } else {
  //       alert('Please select a valid employment type.');
  //       return; // Prevent submission if no valid employment type is selected
  //     }
  
  //     // If everything is valid, send data to the backend
  //     this.elegibilityService.postElegibility(formData).subscribe({
  //       next: (response: any) => {
  //         console.log('Data sent successfully:', response);
  //         alert('Data Sent Successfully');
  //       },
  //       error: (error: any) => {
  //         console.error('Error sending data:', error);
  //       }
  //     });
  //   } else {
  //     alert('Please complete the form with valid information.');
  //   }
  // }
  

}


