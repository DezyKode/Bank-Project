import { Component } from '@angular/core';
import { AddEmpService } from '../../../Service/AddEmployee/add-emp.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  tempAddress: string = '';
  permAddress: string = '';
  isAddressSame: boolean = false;
  Pincode: string = ''
  State: string = ''
  City: string = ''
  permAddress1: String = ''
  empID: string = ''
  name: string = '';
  email_ID: string = '';
  mobile_No: string = '';
  gender: string = '';
  role: string = '';
  passward: string = '';
  confirm_Passward: string = '';
  upload_Photo: string = '';
  permState: string = ''
  permCity: string = ''
  permPinCode: string = ''
  tempAddress1: any;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private addEmpService: AddEmpService) { }

  togglePasswordVisibility(field: string): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirm-password') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  syncAddresses(): void {
    if (this.isAddressSame) {
      this.permAddress = this.tempAddress;
    }
  }

  validateID(event: any): void {
    let inputValue = event.target.value;

    console.log('Before validation:', inputValue);

    if (inputValue.length > 5) {
      inputValue = inputValue.slice(0, 5);
    }

    event.target.value = inputValue;
    console.log('After validation:', inputValue);
  }

  mobile_No1: string = '';
  isValidMobile: boolean = true;

  validateNumber(event: any): void {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }

    this.mobile_No1 = inputValue;
    this.isValidMobile = inputValue.length === 10;
    event.target.value = inputValue;
  }

  validateName(event: any): void {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
  }



  handleAdd(): void {
    // Basic validation
    if (this.passward !== this.confirm_Passward) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.fileToUpload) {
      alert('Please upload a profile photo');
      return;
    }

    const employeeData = {
      employee_Id: this.empID,
      name: this.name,
      email_ID: this.email_ID,
      mobile_No: this.mobile_No,
      gender: this.gender,
      role: this.role,
      passward: this.passward,
      confirm_Passward: this.confirm_Passward,
      temporary_address: this.tempAddress,
      permanent_address: this.permAddress,
      state: this.State,
      city: this.City,
      pin_code: this.Pincode,
      perm_State: this.permState,
      perm_City: this.permCity,
      perm_Pincode: this.permPinCode
    };

    this.addEmpService.postEmployee(employeeData, this.fileToUpload).subscribe({
      next: (res) => {
        alert('Employee added successfully!');
        this.handleReset();
      },
      error: (err) => {
        console.error('Error adding employee:', err);
        alert('Error adding employee. Please check console for details.');
      }
    });
  }


  handleCancel(): void {
    alert('Cancel button clicked!');
  }

  handleReset(): void {
    alert('Reset button clicked!');
    this.empID = ''
    this.name = '';
    this.email_ID = '';
    this.mobile_No = '';
    this.gender = '';
    this.role = '';
    this.passward = '';
    this.confirm_Passward = '';
    this.upload_Photo = '';
    this.tempAddress = '';
    this.permAddress = '';
    this.permAddress1 = ''
    this.Pincode = ''
    this.State = ''
    this.City = ''
    this.permState = '',
    this.permCity = '',
    this.permPinCode = ''
    this.backgroundImage = '';
    this.isAddressSame = false;
    this.isValidEmail = true;


  }

  backgroundImage: string = '';

  isEditMode: boolean = false;
  upload(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const maxSize = 256 * 1024;

      if (file.size > maxSize) {
        alert('File size exceeds 256KB. Please choose a smaller file.');
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type. Please upload a JPG, PNG, or GIF image.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.backgroundImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  resetImage(): void {
    const fileInput = document.getElementById('profile') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
      fileInput.click();
    }
  }


  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.backgroundImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }


  isValidEmail: boolean = true;

  validateEmail(event: any): void {
    const inputValue = event.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
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
      !this.isValidEmail ||
      this.passward !== this.confirm_Passward
    );
  }

  validatePincode(event: any): void {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    if (inputValue.length > 6) {
      inputValue = inputValue.slice(0, 6);
    }
    event.target.value = inputValue;
  }

  fileToUpload: File | null = null;  // To store the uploaded file

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileToUpload = file;  // Assign the file to the fileToUpload variable
      console.log('Selected file:', file);
    } else {
      this.fileToUpload = null;  // If no file selected, reset the fileToUpload
    }
  }
}