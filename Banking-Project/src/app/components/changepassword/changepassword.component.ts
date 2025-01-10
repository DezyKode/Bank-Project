import { Component } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent {
  newpassword: string = '';
  confirmPassword: string = '';
  passwordsMatch: boolean = true; // Flag to check if passwords match
  formSubmitted: boolean = false;

  // Check if the passwords match whenever confirmPassword changes
  checkPasswordMatch() {
    this.passwordsMatch = this.newpassword === this.confirmPassword;
  }

  // Handle form submission
  onSubmit(form: any) {
    if (this.newpassword === this.confirmPassword) {
      // Show success message or alert
      alert('Password changed successfully!');
      // Reset the form and all fields, including validation
      form.resetForm()
      {
        this.confirmPassword = '';
      }
      // The form is now reset, and validation states are cleared automatically
      this.formSubmitted = true;
    } else {
      alert('Passwords do not match!');
    }
  }
}
