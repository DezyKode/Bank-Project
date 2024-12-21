import { Component } from '@angular/core';
import { AddEmpService } from '../../../Service/AddEmployee/add-emp.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private addEmpServiec: AddEmpService) { }

  tempAddress: string = '';  // Temporary address
  permAddress: string = '';  // Permanent address
  isAddressSame: boolean = false;  // Checkbox state
  employee_Id: number = 0;
  name: string = '';
  email_ID: string = '';
  mobile_No: string = '';
  gender: string = '';
  role: string = '';
  passward: string = '';
  confirm_Passward: string = '';
  upload_Photo: string = '';



       // This will hold the input value
  isValidEmail: boolean = true;   // Flag to track if email is valid

  validateEmail(event: any): void {
    const inputValue = event.target.value;

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Test if the input matches the email pattern
    this.isValidEmail = emailPattern.test(inputValue);
  }


  // Synchronize addresses when checkbox is clicked
  syncAddresses(): void {
    if (this.isAddressSame) {
      this.permAddress = this.tempAddress;
    }
  }

  // id validation
  // validateID(event: any): void {
  //   let inputValue = event.target.value;

  //   console.log('Before validation:', inputValue);

  //   inputValue = inputValue.replace(/[^0-9]/g, '');

  //   if (inputValue.length > 5) {
  //     inputValue = inputValue.slice(0, 5);
  //   }

  //   event.target.value = inputValue;
  //   console.log('After validation:', inputValue);
  // }


  validateName(event: any): void {
    let inputValue = event.target.value;

    // Remove any non-letter characters (including numbers and special characters)
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
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


  handleAdd(): void {

    if (

      this.name === '' || 
      this.email_ID === '' || 
      this.mobile_No === '' || 
      this.gender === '' || 
      this.role === ''||
      this.tempAddress===''
      


    ) {
      // If any field is empty, show an alert to fill in all the details
      alert('Please fill in all details');
      return; // Stop the function execution if fields are empty
    }



    // Logging form data before sending
    
    const formData = {
      employee_Id: this.employee_Id,
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
  

  handleReset(): void {
    alert('Reset button clicked!');
    this.employee_Id = 0;  // Reset Employee ID
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

  handleCancel(): void {
    alert('cancel button clicked!');
  }


  backgroundImage: string = '';

  // Function to handle the image upload
  upload(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    
    if (file) {
      // Validate the file size (256KB = 262144 bytes)
      const maxSize = 256 * 1024; // 256KB in bytes
      
      if (file.size > maxSize) {
        alert('File size exceeds 256KB. Please choose a smaller file.');
        return; // Stop further processing if file is too large
      }
      
      // Optional: Validate file type (e.g., only images)
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type. Please upload a JPG, PNG, or GIF image.');
        return;
      }
      
      // If validation passes, display the image
      const reader = new FileReader();
      reader.onload = () => {
        this.backgroundImage = reader.result as string; // Set the image URL
      };
      reader.readAsDataURL(file); // Convert file to base64 format
    }
  }
  

  // Function to reset the uploaded image
  resetImage(): void {
    this.backgroundImage = ''; // Clear the image
  }

  submitForm(): void {
    // if (this.isFormValid) {
    const formData = {
      employee_Id: this.employee_Id,
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

    // Call the service to send data to the backend
    this.addEmpServiec.postEmployee(formData).subscribe({
      next: (response) => {
        console.log('Data sent successfully:', response);
        alert("Data Sent Successfully")
      },
      error: (error) => {
        console.error('Error sending data:', error);
      }
    });
    // } else {
    //   console.error('Form is not valid');
    // }
  }

  
}
