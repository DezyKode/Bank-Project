import { Component } from '@angular/core';
import { BankPayoutService } from '../../Service/BankPayout/bank-payout.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-createbank',
  templateUrl: './createbank.component.html',
  styleUrl: './createbank.component.css'
})
export class CreatebankComponent {
  bankName: string = '';
  payout: string = '';
  file: File | null = null;  // Store the selected file
  formSubmitted: boolean = false;
  formFailed: boolean = false;
  // fileInputControl!: NgModel;

  constructor(private bankService: BankPayoutService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];  // Get the first file from the input
    if (file) {
      this.file = file;  // Store the selected file in the component property
    }
  }

  onSubmit(form: any) {
    this.formSubmitted = false;
    this.formFailed = false;

    if (form.valid && this.file) {
      const formData = new FormData();
      
      const bankDetails = {
        bankName: this.bankName,
        payout: this.payout
      };

      formData.append('bank', JSON.stringify(bankDetails));  // Add bank details as JSON
      formData.append('file', this.file, this.file.name);  // Append the selected file

      // Call the service to submit the form
      this.bankService.postBankPayout(formData).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          this.formSubmitted = true;
          this.resetForm(form);
          this.showSuccessAlert();
        },
        (error) => {
          console.error('Form submission failed', error);
          this.formFailed = true;
          this.showErrorAlert();
        }
      );
    } else {
      this.formFailed = true;
      this.showErrorAlert();
    }
  }

  showSuccessAlert() {
    alert('Form submitted successfully!');
  }

  showErrorAlert() {
    alert('Please fill out all required fields.');
  }

  resetForm(form: any) {
    this.bankName = '';
    this.payout = '';
    this.file = null;
    form.resetForm();
  }
}

