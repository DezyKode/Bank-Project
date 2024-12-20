import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElegibilityServiceService } from '../../Service/CheckElegibility/elegibility-service.service';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent {

  constructor(private elegibilityService:ElegibilityServiceService){}

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
  dateOfBirth:String = '';

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
        next: (response) => {
          console.log('Data sent successfully:', response);
          alert("Data Sent Successfully")
        },
        error: (error) => {
          console.error('Error sending data:', error);
        }
      });
    } else {
      // console.error('Form is not valid');
      alert("Form is not complete")
    }
  }

}
