import { Component } from '@angular/core';

@Component({
  selector: 'app-new-rac',
  templateUrl: './new-rac.component.html',
  styleUrl: './new-rac.component.css'
})
export class NewRacComponent {
  isModalOpen: boolean = false;
  selectedBranch: any;
  document1: boolean = false;
  document2: boolean = false;
  document3: boolean = false;
  email: string = '';
  showSuccess: boolean = false;

  // Open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Handle form submission
  submitForm() {
    // Check if all required fields are filled
    if (this.selectedBranch && (this.document1 || this.document2 || this.document3) && this.email) {
      this.showSuccess = true;
    } else if(this.selectedBranch == null){
      alert('Please Select RAC Branch.');
    } else if((this.document1 || this.document2 || this.document3) == false){
      alert('Please Select Document');
    } else if(this.email == ''){
      alert('Please Fill Email');
    } else {
      alert('Please fill all field');
    }
  }

  // Clear form fields
  clearForm() {
    this.selectedBranch = null;
    this.document1 = false;
    this.document2 = false;
    this.document3 = false;
    this.email = '';
  }

  // Close the success popup
  closePopup() {
    this.showSuccess = false;
    this.selectedBranch = null;
    this.document1 = false;
    this.document2 = false;
    this.document3 = false;
    this.email = '';
  }
}

