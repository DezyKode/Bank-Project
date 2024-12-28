import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
})
export class NewtaskComponent implements OnInit {
  taskForm!: FormGroup;
  showModal: boolean = false; // Flag to show modal visibility
  taskAdded: boolean | undefined;
  assign: string = '';
  selectedPerson: string = '';
  selectedFiles: string[] = [];
  fileSelection: { [key: string]: boolean } = {};
  isFileDropdownVisible: boolean = false;
  selectedFileNames: string[] = []; // To store the selected file names
  selectedFileCount: number = 0; // To keep track of the number of selected files

  people = [
    { key: '1', name: 'John', files: ['file1.txt', 'file2.txt', 'file5.txt', 'file5.txt'] },
    { key: '2', name: 'Jane', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt', 'file5.txt'] },
    { key: '3', name: 'k', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt', 'file5.txt'] },
    { key: '4', name: 'm', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt', 'file5.txt'] },
    { key: '5', name: 'n', files: ['file3.txt', 'file4.txt', 'file5.txt', 'file5.txt'] },

  ]; // Sample people data
isModalOpen: any;

  
  constructor() {}

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

// Get the text to display for selebcted files
getSelectedFilesText(): string {

  const selectedFileNames = Object.keys(this.fileSelection).filter(file => this.fileSelection[file]);
  return selectedFileNames.length > 0 ? selectedFileNames.join(', ') : 'Select Files';
}

// Handles the change in checkbox status
checkboxStatusChange(file: string): void {
  if (this.fileSelection[file]) {
    // Deselect the file
    const index = this.selectedFileNames.indexOf(file);
    if (index > -1) {
      this.selectedFileNames.splice(index, 1);
      this.selectedFileCount--;
    }
  } else {
    // Select the file only if less than 3 are already selected
    if (this.selectedFileCount < 3) {
      this.selectedFileNames.push(file);
      this.selectedFileCount++;
    } else {
      alert('You can select only up to 3 files.');
      return;
    }
  }

  // Update the checkbox state
  this.fileSelection[file] = !this.fileSelection[file];
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
