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
  Pincode:string=''
  State:string=''
  City:string=''
  permAddress1:String=''
  empID:string=''

  name: string = '';
  email_ID: string = '';
  mobile_No: string = '';
  gender: string = '';
  role: string = '';
  passward: string = '';
  confirm_Passward: string = '';
  upload_Photo: string = '';

  permState:string=''
  permCity:string=''
  permPinCode:string=''
tempAddress1: any;
isValidMobile: any;

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

    // inputValue = inputValue.replace(/[^0-9]/g, '');

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
    
    if (
this.empID===''||
      this.name === ''||
      this.email_ID===''||
      this.mobile_No===''||
      this.gender===''|| this.role===''||
      this.passward===''||

      this.confirm_Passward===''||this.tempAddress===''||this.permAddress===''||
      this.State===''||this.City===''|| this.permAddress1===''||this.Pincode===''||
      this.permState===''|| this.permCity===''||this.permPinCode===''
    

     
      
    
      

    ) {
      // If any field is empty, show an alert to fill in all the details
      alert('Please fill in all details');
      return; // Stop the function execution if fields are empty
    }else{

      
      alert('Add button clicked!');

      
      // Logging form data before sending
    
    const formData = {
     empID:this.empID,
      name: this.name,
      email_ID: this.email_ID,
      mobile_No: this.mobile_No,
      gender: this.gender,
      role: this.role,
      passward: this.passward,
      confirm_Passward: this.confirm_Passward,
      upload_Photo: this.upload_Photo,
      temporary_address: this.tempAddress,
      permanat_address: this.permAddress,
      State:this.State,
      City:this.City,
      Pincode:this.Pincode,
      permAddress1: this.permAddress1,
      permState:this.permState,
      permCity:this.permCity,
      permPinCode: this.permPinCode
      
    };
    // Log the form data
    console.log('Form Data:', formData);
  }
  }

  handleCancel(): void {
    alert('Cancel button clicked!');
  }

  handleReset(): void {
    alert('Reset button clicked!');
    this.empID=''
    this.name = '';        // Reset Name
    this.email_ID = '';    // Reset Email ID
    this.mobile_No = '';   // Reset Mobile Number
    this.gender = '';      // Reset Gender
    this.role = '';        // Reset Role
    this.passward = '';    // Reset Password
    this.confirm_Passward = ''; // Reset Confirm Password
    this.upload_Photo = '';    // Reset uploaded photo URL
    this.tempAddress = '';    // Reset Temporary Address
    this.permAddress = ''; 
    this.permAddress1=''   // Reset Permanent Address

    this.Pincode=''
    this.State=''
    this.City=''

    this.permState='',
    this.permCity='',
    this.permPinCode=''
  
    // Reset the background image
    this.backgroundImage = '';
  
    // Reset the checkbox state for "Temporary address same as permanent"
    this.isAddressSame = false;
  
    // Reset the email validation flag if needed
    this.isValidEmail = true;
    
    
  }


  backgroundImage: string = '';

  isEditMode: boolean = false;  // Flag to trigger file input visibility
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


  // resetImage(): void {
  //   const fileInput = document.getElementById('profile') as HTMLInputElement;
  //   if (fileInput) {
  //     fileInput.click();  // Open file input dialog to select a new image
  //   }
  // }


  // backgroundImage: string = 'https://via.placeholder.com/150'; // Default image URL

  // Opens file input dialog to select a new image
  resetImage(): void {
    const fileInput = document.getElementById('profile') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear the value to allow re-upload of the same file
      fileInput.click();    // Open file input dialog
    }
  }

  // Handles file selection and updates the background image
  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.backgroundImage = reader.result as string; // Update the background image
      };
      reader.readAsDataURL(file);
    }
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


  isFormInvalid(): boolean {
    return (
      !this.name ||
      !this.email_ID ||
      !this.mobile_No ||
      !this.gender ||
      !this.role ||
      !this.passward ||
      !this.confirm_Passward ||
      !this.tempAddress ||
      !this.permAddress ||
      !this.isValidEmail || // Ensure email is valid
      this.passward !== this.confirm_Passward // Ensure passwords match
    );
  }


  
  validatePincode(event: any): void {
    let inputValue = event.target.value;
  
    // Allow only numeric characters
    inputValue = inputValue.replace(/[^0-9]/g, '');
  
    // Restrict to exactly 10 digits
    if (inputValue.length > 6) {
      inputValue = inputValue.slice(0, 6);
    }
  
    // Update the input field
    event.target.value = inputValue;
  }
  
}