import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router if needed

@Component({
  selector: 'app-itrmodal',
  templateUrl: './itrmodal.component.html',
  styleUrl: './itrmodal.component.css'
})
export class ItrmodalComponent {
  isModalOpen: boolean = true;
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  itrVerified: boolean = false;
  constructor(private router: Router) {}

  // Open the modal
  // openModal() {
  //   this.isModalOpen = true;
  //   document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  // }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = ''; // Re-enable scroll when modal is closed
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Clear form fields
  clearForm() {
    this.username = '';
    this.password = '';
  }

  // Check if the form is valid
  isFormValid(): boolean {
    return this.username.trim().length > 0 && this.password.trim().length > 0;
  }

  // Handle form submission
  onSubmit() {
    if (this.isFormValid()) {
      this.itrVerified = true;
      alert(`Username: ${this.username}, Password: ${this.password}`);
      this.clearForm();
      this.closeModal();
    } else {
      alert('Please fill in both the username and password fields.');
    }
    this.router.navigate(['/verification/vreport']);

  }
}
