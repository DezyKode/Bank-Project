import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
type TaskType = 'personalLoan' | 'homeLoan' | 'goldLoan' | 'carLoan';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent {
  
// onTaskTypeChange($event: Event):void {
// throw new Error('Method not implemented.');
// }
tasks: any;
toggleDropdown() {
throw new Error('Method not implemented.');
}
isOpen: any;
toggleSubMenu() {
throw new Error('Method not implemented.');
}
subMenuOpen: any;
handleCheckboxChange($event: Event,arg1: string) {
throw new Error('Method not implemented.');
}
updateSelectedTaskType(_t25: { value: string; name: string; files: number; }) {
throw new Error('Method not implemented.');
}
updateFileSelection() {
throw new Error('Method not implemented.');
}
  fileUploaded: boolean = false;
  taskName: string = '';
  taskDescription: string = '';
  assign: string = '';
  dueDate: string = '';
  priority: string = '';
  fileName: string | null = null;
  fileError: string | null = null;
  taskAdded: boolean = false;  // Flag for task added message
  showModal: boolean = false; // Flag for modal visibility
  taskForm: FormGroup;
  

  selectedTask: any = null;
selectedTaskType: any;
selectedTaskFiles: any;
countSelectedFiles: any;
  // Injecting FormBuilder to create the form group
  constructor(private fb: FormBuilder) {
    // Initializing the form with validations
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      assign: ['', Validators.required],
      taskType: ['', Validators.required] , // Initially set as required
      taskDescription: ['', [Validators.required, Validators.minLength(10)]],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      taskType1: ['', Validators.required]

    });
  }
  // On Task Type Change
  onTaskTypeChange(event: any) {
    console.log('Task Type Changed:', event);
  }

  // Open the modal
  openModal(): void {
    this.showModal = true;
  }

  // Close the modal
  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  // Reset form fields and file input
  resetForm(): void {
    this.taskForm.reset();
    this.fileName = null;
    this.fileError = null;
    this.fileUploaded = false;
  }

  // Block numbers input in task name
  blockNumbers(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);
    if (/\d/.test(charStr)) {
      event.preventDefault(); // Prevent the input of numbers
    }
  }

  // Validate file before uploading
  validateFile(file: File) {
    this.fileError = null;  // Reset error message

    // Check if the file is a valid image or PDF
    const allowedTypes = ['image/jpeg', 'image/jpg', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      this.fileError = 'Only JPEG, JPG, or PDF files are allowed.';
      this.fileName = null;
      return;
    }

    // Check if the file size is less than 120 KB
    const maxSizeInKB = 120;
    if (file.size > maxSizeInKB * 1024) {
      this.fileError = `File size should not exceed ${maxSizeInKB} KB.`;
      this.fileName = null;  // Clear the filename if file size is too large
      return;
    }

    // If validation passes, set the file name and mark file uploaded
    this.fileName = file.name;
    this.fileUploaded = true;
    alert("File uploaded successfully.");
  }

  // Handle file input change event
  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.validateFile(file);
    }
  }

  // Trigger file input dialog
  triggerFileInput() {
    const fileInput = document.getElementById('fileUpload') as HTMLElement;
    fileInput.click();
  }

  // Check if the form and file upload are valid before submitting
  onSubmit() {
    if (this.taskForm.invalid) {
      alert("Please fill all required fields.");
      return;
    }

    if (!this.fileUploaded) {
      alert("Please upload a valid file.");
      return;
    }

    // If the form and file are valid, display success message
    this.taskAdded = true;
    setTimeout(() => {
      this.taskAdded = false;
      this.closeModal();
    }, 3000);

    console.log('Form submitted successfully:', this.taskForm.value);
  }

  // Check form validity
  checkFormValidity() {
    console.log('Form Valid:', this.taskForm.valid);
    console.log('Form Errors:', this.taskForm.errors);
    for (const control in this.taskForm.controls) {
      if (this.taskForm.controls[control].invalid) {
        console.log(`${control} is invalid`);
      }
    }
  }
}
