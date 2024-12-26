import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// import { log } from 'node:console';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent {
[x: string]: any;
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
  isSuccess: boolean = false;
  dob: string = '';
  emailUsername: string = ''; // Stores the username part of the email
  emailDomain: string = '@gmail.com';

    // Optional custom validation function to check age
    validateAge() {
      const age = this.calculateAge(new Date(this.dob));
      if (age < 18) {
        return { ageTooYoung: true };  // Custom validation error
      }
      return null;  // No validation error
    }
  
    calculateAge(dateOfBirth: Date): number {
      const today = new Date();
      let age = today.getFullYear() - dateOfBirth.getFullYear();
      const month = today.getMonth();
      if (month < dateOfBirth.getMonth() || (month === dateOfBirth.getMonth() && today.getDate() < dateOfBirth.getDate())) {
        age--;
      }
      return age;
    }
  
    // Combine the username and domain dynamically
    get fullEmail(): string {
      return this.emailUsername + this.emailDomain;
    }
    onReset():void{

      
      this.emailUsername=''
      this.personalLoan ='';
      this.firstName ='';
      this.dob ='';
      this.panNo ='';
      this.middleName ='';
      this.empType ='';
      this.lastName ='';
      this.mobile ='';
      this.Employer1 ='';
      this.averageBonus ='';
      this.futureRent ='';
      this.monthSalary = '';
      this.incentive ='';
      this.loanEmi ='';
      this.netSalary ='';
      this.rentIncome ='';
      this.pension=''; // Show success message;
      this.isFormValid = false;
// console.log(this.mobileError);

      alert("reset sucessfully");



    }


  // Submit the form and show success message
  onSubmit() {
    
    if(!this.mobileError){
      alert('Plz fill phone number correctlty');
      return
    }
    if (this.isFormValid) {
      this.isSuccess = true; // Show success message
    }

    if (this.emailUsername!==''||
      this.personalLoan!==''||
      this.firstName!==''||
      this.dob!==''||
      this.panNo!==''||
      this.middleName!==''||
      this.empType!==''||
      this.lastName!==''||
      this.mobile!==''||
      this.Employer1!==''||
      this.averageBonus!==''||
      this.futureRent!==''||
      this.monthSalary||
      this.incentive!==''||
      this.loanEmi!==''||
      this.netSalary!==''||
      this.rentIncome!==''||
      this.pension!=='')
    {
      alert("Form submiited successfully")
    }
  }

 // Method to handle email changes and append @gmail.com if not already there
 onEmailChange() {
  if (!this.email.includes('@gmail.com') && this.email !== '') {
    this.email = this.email.split('@')[0]; // Remove any part after '@' if already entered
    this.email += '@gmail.com'; // Add @gmail.com
  }
}
 // List of blocked numbers or patterns (you can extend this as needed)
 blockedPatterns: string[] = ['1234', '5678', '1111'];

 // Function to prevent numbers from being typed in
 blockNumbers(event: KeyboardEvent): void {
   const charCode = event.which || event.keyCode;
   const charStr = String.fromCharCode(charCode);
   
   // Prevent input if the character is a number
   if (/\d/.test(charStr)) {
     event.preventDefault();
   }
 }

 // Function to prevent blocked patterns from being typed in
 validateName(event: KeyboardEvent): void {
   const input = event.target as HTMLInputElement;
   const value = input.value;

   // Remove any non-letter and non-space characters
   let filteredValue = value.replace(/[^A-Za-z\s]/g, '');  // Allow only letters and spaces

   // Check if any blocked pattern is part of the input
   for (let blocked of this.blockedPatterns) {
     if (filteredValue.includes(blocked)) {
       filteredValue = filteredValue.replace(blocked, ''); // Remove the blocked pattern
       break;  // Exit once a blocked pattern is removed
     }
   }

   this.firstName = filteredValue;
   input.value = filteredValue;  // Update the input value
 }


 // Function to validate mobile number input


// Function to block non-digit characters
blockNonDigits(event: KeyboardEvent): void {
  const charCode = event.which || event.keyCode;
  const charStr = String.fromCharCode(charCode);

  // Only allow numbers to be entered (block any non-digit characters)
  if (!/\d/.test(charStr)) {
    event.preventDefault(); // Prevent the input of non-numeric characters
  }
}
isformInvalid():boolean{
  return( !this.emailUsername||
   !this.personalLoan||
   !this.firstName||
   !this.dob||
   !this.panNo||
   !this.middleName||
   !this.empType||
   !this.lastName||
   !this.mobile||
   !this.Employer1||
   !this.averageBonus||
   !this.futureRent||
   !this.monthSalary||
   !this.incentive||
   !this.loanEmi||
   !this.netSalary||
   !this.rentIncome||
   !this.pension
  );

}
  // Validate the form to check if required fields are filled
// Validate the form to check if required fields are filled
validateForm(): void {
  this.isFormValid = 
    this.personalLoan !== '' && // Check if loan type is selected
    this.firstName.trim() !== '' && // Check if first name is not empty
    this.lastName.trim() !== '' && // Check if last name is not empty
    this.empType !== '' && // Check if employment type is selected
    this.panNo.trim() !== '' && // Check if PAN number is not empty
    this.isValidPanNo && // Check if PAN number is valid
    this.mobile.trim() !== '' && // Check if mobile number is not empty
    !this.mobileError && // Ensure no mobile number errors
    this.Employer.trim() !== '' && // Ensure employer name is not empty
    this.averageBonus.trim() !== '' && // Ensure bonus is not empty
    !this.bonusError && // Ensure no bonus errors
    this.futureRent.trim() !== '' && // Ensure future rent is provided
    !this.futureRentError && // Ensure no future rent errors
    this.monthSalary.trim() !== '' && // Ensure month salary is provided
    !this.grossSalaryError && // Ensure no gross salary errors
    this.incentive.trim() !== '' && // Ensure incentive is provided
    !this.incentiveError && // Ensure no incentive errors
    this.loanEmi.trim() !== '' && // Ensure loan EMI is provided
    !this.loanError && // Ensure no loan EMI errors
    this.netSalary.trim() !== '' && // Ensure net salary is provided
    !this.netSalError && // Ensure no net salary errors
    this.rentIncome.trim() !== '' && // Ensure rent income is provided
    !this.rentError && // Ensure no rent income errors
    this.pension.trim() !== '' && // Ensure pension is provided
    !this.pensionError ;// Ensure no pension errors
}


  // PAN Number validation
  validatePanNo(): void {
    const panNoRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // Regular expression for valid PAN format
    this.isValidPanNo = panNoRegex.test(this.panNo); // Validate the PAN number format
    this.validateForm(); // Revalidate the form when PAN number changes
  }

  validateMobile():void{
    const mobileRegex = /^d{10}$/;
    this.mobileError = mobileRegex.test(this.mobile);
    this.validateForm(); // Revalidate the form when mobile number changes

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

  validateMonthSalary():void{
    this.grossSalaryError=!this.validateField(this.monthSalary);
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
}
