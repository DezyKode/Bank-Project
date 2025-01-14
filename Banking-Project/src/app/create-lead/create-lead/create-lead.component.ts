import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrl: './create-lead.component.css'
})
export class CreateLeadComponent {
  leadForm: FormGroup;
  loanTypes: string[] = ['Home Loan', 'Car Loan', 'Personal Loan', 'Business Loan'];
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    // Initialize the form with FormBuilder
    this.leadForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Mobile field validation
      typeOfLoan: ['', Validators.required] // Type of Loan validation
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(): void {
    if (this.leadForm.valid) {
      console.log('Form Data:', this.leadForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}