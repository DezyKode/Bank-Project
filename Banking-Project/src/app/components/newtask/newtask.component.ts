import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
})

export class NewtaskComponent implements OnInit {
onInputChange($event: Event) {
throw new Error('Method not implemented.');
}
  taskForm: FormGroup;
  showModal: boolean = false; // Flag to show modal visibility
  taskAdded: boolean | undefined;
  assign: string = '';
  selectedPerson: string = '';
  selectedFiles: string[] = [];
  fileSelection: { [key: string]: boolean } = {};
  isFileDropdownVisible: boolean = false;
  selectedFileNames: string[] = []; // To store the selected file names
  selectedFileCount: number = 0; // To keep track of the number of selected files
  currentDate: string;


  people = [
    { key: '1', name: 'John', files: ['file1.txt', 'file2.txt', 'file5.txt', 'file5.txt'] },
    { key: '2', name: 'Jane', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt', 'file5.txt'] },
    { key: '3', name: 'k', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt', 'file5.txt'] },
    { key: '4', name: 'm', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt', 'file5.txt'] },
    { key: '5', name: 'n', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt'] },

  ]; // Sample people data
isModalOpen: any;
files: any;
assignControl: any;
task: any;
taskControl: any;
dobInput: any;


  
constructor(private fb: FormBuilder) {
  this.taskForm = this.fb.group({
    dueDate: ['', Validators.required],
  });

  // Get the current date in yyyy-mm-dd format
  const today = new Date();
  this.currentDate = today.toISOString().split('T')[0];
}


 ngOnInit(): void {
    this.taskForm = new FormGroup({
      assign: new FormControl('', [Validators.required]),
      taskDescription: new FormControl('', [Validators.required, Validators.minLength(10)]),
      dueDate: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
    });
  }

 // When a person is assigned
 onAssignChange1(): void {
  const selectedPerson = this.people.find((person) => person.key === this.assign);
  this.selectedPerson = selectedPerson?.name || '';
  this.selectedFiles = selectedPerson?.files || [];
  this.fileSelection = {}; // Reset file selection
  this.selectedFileNames = []; // Reset selected file names
  this.selectedFileCount = 0; // Reset selected file count
}

// Toggles the visibility of the file dropdown
toggleFileDropdown(): void {
  this.isFileDropdownVisible = !this.isFileDropdownVisible;
}

// Get the text to display for selected files
getSelectedFilesText(): string {
 
  const selectedFileNames = Object.keys(this.fileSelection).filter(file => this.fileSelection[file]);
  return selectedFileNames.length > 0 ? selectedFileNames.join(', ') : 'Select Files';
}

// Handles the change in checkbox status
checkboxStatusChange(file: string): void {
  debugger;
  if (this.fileSelection[file]) {
    if (this.selectedFileCount < 3) {
      
      this.selectedFileNames.push(file);
      this.selectedFileCount++;
    } else {
      this.fileSelection[file] = false; // Deselect if more than 3 are selected
    }
  } else {
    const index = this.selectedFileNames.indexOf(file);
    if (index > -1) {
      this.selectedFileNames.splice(index, 1);
      this.selectedFileCount--;
    }
  }
}

// Removes a selected file when the 'close' button is clicked
removeSelectedFile(file: string): void {
  const index = this.selectedFileNames.indexOf(file);
  if (index > -1) {
    this.selectedFileNames.splice(index, 1);
    this.selectedFileCount--;
    this.fileSelection[file] = false; // Uncheck the checkbox
  }
}
  // Open the modal
  openModal(): void {
    this.showModal = true;
  }

  // Close the modal
  closeModal(): void {
    this.showModal = false;
    this.taskForm.reset();
  }


  // Handle form submission
  onSubmit(): void {
    if (this.taskForm.invalid) {
      return;
    }

    // Simulate a task submission success
    this.taskAdded = true;

    setTimeout(() => {
      this.taskAdded = false;
      this.closeModal(); // Reset modal visibility after success
    }, 3000);

    // Display success message
    alert('Task added successfully!');
    console.log('Form submitted successfully:', this.taskForm.value);


    // Reset form after submission
    this.taskForm.reset();
  }

}
