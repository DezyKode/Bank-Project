import { Component } from '@angular/core';

@Component({
  selector: 'app-createbank',
  templateUrl: './createbank.component.html',
  styleUrl: './createbank.component.css'
})
export class CreatebankComponent {
  bankName: string = '';
  payout: string = '';
  file: File | null = null;
  formSubmitted: boolean = false;
  formFailed: boolean = false;

  onSubmit(form: any) {
    // Reset flags
    this.formSubmitted = false;
    this.formFailed = false;

    // Check if the form is valid
    if (form.valid) {
      // If valid, show success message and reset form
      this.formSubmitted = true;
      this.resetForm(form);
      this.showSuccessAlert();

    } else {
      // If invalid, show error message
      this.formFailed = true;
      this.showErrorAlert();


    }
  }
  showSuccessAlert() {
    // Display a success alert pop-up
    alert('Form submitted successfully!');
  }

  showErrorAlert() {
    // Display an error alert pop-up
    alert('Please fill out all required fields.');
  }

  resetForm(form: any) {
    this.bankName = '';
    this.payout = '';
    this.file = null;

    // Reset form control states (touch and validity)
    form.resetForm();

    // Optionally clear error messages by resetting the form controls
    form.controls['BankName'].markAsUntouched();
    form.controls['personalLoan'].markAsUntouched();
    form.controls['fileInput'].markAsUntouched();
  }
}
