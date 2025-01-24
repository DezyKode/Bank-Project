import { Component ,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loanrequirement',
  templateUrl: './loanrequirement.component.html',
  styleUrls: ['./loanrequirement.component.css']
})

export class LoanrequirementComponent {

  personalLoan: any;
  monthSalary: string = '';
  tenure: string = '';
  idv: string = '';
  grossSalaryError: boolean = false;
  tenureError: boolean = false;
  idvError: boolean = false;
  isFormValid: boolean = false;
 
  resetForm() {
    // Reset the fields
    this.personalLoan = '';
    this.monthSalary = '';
    this.tenure = '';
    this.idv = '';
    this.grossSalaryError = false;
    this.tenureError = false;
    this.idvError = false;
    this.isFormValid = false;

    // Mark the form fields as pristine and untouched
    // If you are using reactive forms, you can reset the form controls here
    alert('Form has been reset.');
  }
  
  constructor(private router: Router) {}
  // constructor(private router: Router, private LoanrequirementComponent: LoanrequirementComponent) {}
  @Output() formStatusChanged = new EventEmitter<boolean>();


  validateForm(): void {
    // Validate the form: Check if all required fields are filled and valid
    if (
      !this.personalLoan || 
      !this.monthSalary || 
      !this.tenure || 
      !this.idv || 
      this.grossSalaryError || 
      this.tenureError || 
      this.idvError
    ) {
      this.formStatusChanged.emit(this.isFormValid);  // Emit failure

      alert('Please fill all the fields before proceeding!');
    } else {
      // If the form is valid, reset the form and show a success message
      this.resetForm();
      alert('Form proceeded successfully!');

    // Navigate to the next page (e.g., applicant details form)
    

    this.router.navigate(['/createNewCase/applicantdetails']);


    }
  }

  validateMonthSalary() {
    // Ensure the value is not empty or doesn't match a specific pattern
    this.grossSalaryError = !this.monthSalary || isNaN(Number(this.monthSalary)) || Number(this.monthSalary) <= 0;
  }

  validateTenure() {
    // Check if the tenure is a valid positive number
    this.tenureError = !this.tenure || isNaN(Number(this.tenure)) || Number(this.tenure) <= 0;
  }

  validateIDV() {
    // Check if the IDV is a valid positive number
    this.idvError = !this.idv || isNaN(Number(this.idv)) || Number(this.idv) <= 0;
  }

  restrictCharacter(event: KeyboardEvent) {
    // Allow only numeric input
    const regex = /^[0-9]+$/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }
}
