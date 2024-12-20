import { Component, OnInit } from '@angular/core';
import { AddEmpServiceService } from '../../../Service/AddEmployee/add-emp-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  isFormValid: boolean = false;

  constructor(private addemployeeservice:AddEmpServiceService){}
  tempAddress: string = '';  // Temporary address
  permAddress: string = '';  // Permanent address
  isAddressSame: boolean = false;  // Checkbox state
  employee_Id: String = '';
  name:string = '';
  email_ID:string = '';
  mobile_No:Number=0;
  gender:string = '';
  role:string = '';
  passward:string = '';
  confirm_Passward:string = '';
  upload_Photo:string = '';

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


  // handleAdd(): void {
  //   alert('Add button clicked!');
  // }

  handleCancel(): void {
    alert('Cancel button clicked!');
  }

  handleEdit(): void {
    alert('Edit button clicked!');
  }

  /* Backend Connectivity */

  /* postAddEmployee!: FormGroup;

  ngOnInit(): void {
    this.postAddEmployee = this.fb.group({
      employee_Id:[null,[Validators.required]],
      name:[null,[Validators.required]],
      email_ID:[null,[Validators.required]],
      mobile_No:[null,[Validators.required]],
      gender:[null,[Validators.required]],
      role:[null,[Validators.required]],
      passward:[null,[Validators.required]],
      confirm_Passward:[null,[Validators.required]],
      upload_Photo:[null,[Validators.required]],
      temporary_address:[null,[Validators.required]],
      permanat_address:[null,[Validators.required]],
    })
  }
  postEmployee(){
    console.log(this.postAddEmployee.value);
  } */

    submitForm(): void {
      // if (this.isFormValid) {
        const formData = {
          employee_Id:this.employee_Id,
          name:this.name,
          email_ID:this.email_ID,
          mobile_No:this.mobile_No,
          gender:this.gender,
          role:this.role,
          passward:this.passward,
          confirm_Passward:this.confirm_Passward,
          // upload_Photo:this.upload_Photo,
          temporary_address:this.tempAddress,
          permanat_address:this.permAddress

        };
   
        // Call the service to send data to the backend
        this.addemployeeservice.postEmployee(formData).subscribe({
          next: (response) => {
            console.log('Data sent successfully:', response);
          },
          error: (error) => {
            console.error('Error sending data:', error);
          }
        });
    //   } else {
    //     console.error('Form is not valid');
    //   }
    }
  
}
