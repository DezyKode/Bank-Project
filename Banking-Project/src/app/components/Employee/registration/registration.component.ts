import { Component } from '@angular/core';
import { AddEmpService } from '../../../Service/AddEmployee/add-emp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form: FormGroup;
  permanentAddressSameAsTemporary = false;
  errorMessage: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private addEmpService: AddEmpService) {
    this.form = this.fb.group({
      empId: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z\ \- ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['', [Validators.required]],
      role: ['', [Validators.required, Validators.pattern('^[A-Za-z\ \- ]+$')]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      tAddress1: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ,./\'\:\(\)\-;]+$')]],
      tAddress2: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ,./\'\:\(\)\-;]+$')]],
      tState: ['', [Validators.required, Validators.pattern('^[A-Za-z\ \- ]+$')]],
      tCity: ['', [Validators.required, Validators.pattern('^[A-Za-z\ \- ]+$')]],
      tPincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      pAddress1: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ,./\'\:\(\)\-;]+$')]],
      pAddress2: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ,./\'\:\(\)\-;]+$')]],
      pState: ['', [Validators.required, Validators.pattern('^[A-Za-z \- ]+$')]],
      pCity: ['', [Validators.required, Validators.pattern('^[A-Za-z\ \- ]+$')]],
      pPincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      photoUpload: ['', [Validators.required, this.sizeValidator]],
    },
      { validator: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirm_password')?.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  onSubmit() {
    if (this.form.valid && this.selectedFile) {
      const formData = new FormData();

      formData.append('employee', JSON.stringify(this.form.value));
      formData.append('file', this.selectedFile);

      this.addEmpService.postEmployee(formData)
        .subscribe(
          response => {
            console.log('Employee added successfully!', response);
            alert("तुमची माहिती योग्य आहे. झाल रे... !!!🕺🕺🕺🕺🕺");
          },
          error => {
            console.error('Error adding employee:', error);
            this.errorMessage = 'There was an error adding the employee. Please try again later.';
          }
        );
    } else {
      alert('Please fill out the form correctly and upload a photo.');
    }
  }

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  copyAddress(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.form.patchValue({
        pAddress1: this.form.get('tAddress1')?.value,
        pAddress2: this.form.get('tAddress2')?.value,
        pState: this.form.get('tState')?.value,
        pCity: this.form.get('tCity')?.value,
        pPincode: this.form.get('tPincode')?.value,
      });
    } else {
      this.form.patchValue({
        pAddress1: '',
        pAddress2: '',
        pState: '',
        pCity: '',
        pPincode: '',
      });
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      this.selectedFile = file;

      if (file.size > 500 * 1024) {
        this.form.get('photoUpload')?.setErrors({ sizeExceed: true });
      } else {
        this.form.get('photoUpload')?.setErrors(null);
      }
    }
  }

  sizeValidator(control: any) {
    const file = control?.value;
    if (file && file.size > 500 * 1024) {
      return { sizeExceed: true };
    }
    return null;
  }

  reset() {
    if (confirm('पुसू का रे ...? ')) {
      // window.location.reload();
      this.form.patchValue({
        empId: '',
        name: '',
        email: '',
        gender: '',
        password: '',
        tAddress1: '',
        tAddress2: '',
        tState: '',
        tCity: '',
        tPincode: '',
        pAddress1: '',
        pAddress2: '',
        pState: '',
        pCity: '',
        pPincode: '',
        photoUpload: '',
        confirm_password: '',
        role: '',
        mobile: ''
      });
    }
  }
}
