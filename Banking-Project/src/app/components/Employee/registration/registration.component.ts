import { Component } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  tempAddress: string = '';  // Temporary address
  permAddress: string = '';  // Permanent address
  isAddressSame: boolean = false;  // Checkbox state

  name: string = '';
  email_ID: string = '';
  mobile_No: string = '';
  gender: string = '';
  role: string = '';
  passward: string = '';
  confirm_Passward: string = '';
  upload_Photo: string = '';

  // Synchronize addresses when checkbox is clicked
  syncAddresses(): void {
    if (this.isAddressSame) {
      this.permAddress = this.tempAddress;
    }
  }

  // id validation
  validateID(event: any): void {
    let inputValue = event.target.value;

    console.log('Before validation:', inputValue);

    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 5) {
      inputValue = inputValue.slice(0, 5);
    }

    event.target.value = inputValue;
    console.log('After validation:', inputValue);
  }

  // number valid

  validateNumber(event: any): void {
    let inputValue = event.target.value;
  
    // Allow only numeric characters
    inputValue = inputValue.replace(/[^0-9]/g, '');
  
    // Restrict to exactly 10 digits
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }
  
    // Update the input field
    event.target.value = inputValue;
  }




  // validate Name
  validateName(event: any): void {
    let inputValue = event.target.value;

    // Remove any non-letter characters (including numbers and special characters)
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
}



  handleAdd(): void {
    alert('Add button clicked!');
    if (

      this.name === ''||
      this.email_ID===''||
      this.mobile_No===''||
      this.gender===''|| this.role===''||
      this.passward===''||
      this.confirm_Passward===''||this.tempAddress===''||this.permAddress===''
    

     
      
    
      


    ) {
      // If any field is empty, show an alert to fill in all the details
      alert('Please fill in all details');
      return; // Stop the function execution if fields are empty
    }



    // Logging form data before sending
    
    const formData = {
     
      name: this.name,
      email_ID: this.email_ID,
      mobile_No: this.mobile_No,
      gender: this.gender,
      role: this.role,
      passward: this.passward,
      confirm_Passward: this.confirm_Passward,
      upload_Photo: this.upload_Photo,
      temporary_address: this.tempAddress,
      permanat_address: this.permAddress
    };
  
    // Log the form data
    console.log('Form Data:', formData);
  }

  handleCancel(): void {
    alert('Cancel button clicked!');
  }

  handleReset(): void {
    alert('Reset button clicked!');
 

    this.name = '';        // Reset Name
    this.email_ID = '';    // Reset Email ID
    this.mobile_No = '';   // Reset Mobile Number
    this.gender = '';      // Reset Gender
    this.role = '';        // Reset Role
    this.passward = '';    // Reset Password
    this.confirm_Passward = ''; // Reset Confirm Password
    this.upload_Photo = '';    // Reset uploaded photo URL
    this.tempAddress = '';    // Reset Temporary Address
    this.permAddress = '';    // Reset Permanent Address
  
    // Reset the background image
    this.backgroundImage = '';
  
    // Reset the checkbox state for "Temporary address same as permanent"
    this.isAddressSame = false;
  
    // Reset the email validation flag if needed
    this.isValidEmail = true;
    
    
  }


  backgroundImage: string = '';

  // Function to handle the image upload
  upload(event: any): void {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.backgroundImage = e.target.result; // Set the image as the background
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }

  // Function to reset the uploaded image
  resetImage(): void {
    this.backgroundImage = ''; // Clear the image
  }


  // validate email

  isValidEmail: boolean = true;   // Flag to track if email is valid

  validateEmail(event: any): void {
    const inputValue = event.target.value;

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Test if the input matches the email pattern
    this.isValidEmail = emailPattern.test(inputValue);
  }
}