import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  tempAddress: string = '';  // Temporary address
  permAddress: string = '';  // Permanent address
  isAddressSame: boolean = false;  // Checkbox state
  @ViewChild('dropzone') dropzone: ElementRef | undefined; // Dropzone reference
  @ViewChild('photo') inputFile: ElementRef | undefined;  // File input reference

  ngOnInit(): void {
    // The DOM is ready after this point, so you can safely access DOM elements here.
    this.setupDragAndDrop();
  }

  // Synchronize addresses when checkbox is clicked
  syncAddresses(): void {
    if (this.isAddressSame) {
      this.permAddress = this.tempAddress;
    }
  }

  // ID validation
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

  // Phone number validation
  validateNumber(event: any): void {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }
    event.target.value = inputValue;
  }

  handleAdd(): void {
    alert('Add button clicked!');
  }

  handleCancel(): void {
    alert('Cancel button clicked!');
  }

  handleEdit(): void {
    alert('Edit button clicked!');
  }

  // Setup drag-and-drop functionality
  private setupDragAndDrop(): void {
    const dropzone = this.dropzone?.nativeElement;
    const inputFile = this.inputFile?.nativeElement;

    // Handle dragover event to prevent default behavior
    dropzone.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
      dropzone.style.backgroundColor = '#e9e9e9'; // Change background on drag over
    });

    // Handle dragleave event to reset background color
    dropzone.addEventListener('dragleave', () => {
      dropzone.style.backgroundColor = '#f9f9f9'; // Reset background color
    });

    // Handle drop event
    dropzone.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault();
      dropzone.style.backgroundColor = '#f9f9f9'; // Reset background color

      const file = event.dataTransfer?.files[0];
      if (file) {
        // Check file size (limit to 200KB)
        if (file.size > 200 * 1024) {
          alert('File is too large. Please upload an image less than 200KB.');
          return;
        }

        // Check if it's an image
        if (!file.type.startsWith('image/')) {
          alert('Please upload a valid image file.');
          return;
        }

        // Update the file input value to the dropped file
        inputFile.files = event.dataTransfer.files;
      }
    });

    // Open the file picker when the dropzone is clicked
    dropzone.addEventListener('click', () => {
      inputFile.click();
    });

    // Handle file selection from the file input
    inputFile.addEventListener('change', () => {
      const file = inputFile.files?.[0];
      if (file) {
        // Check file size
        if (file.size > 200 * 1024) {
          alert('File is too large. Please upload an image less than 200KB.');
          return;
        }

        // Check if it's an image
        if (!file.type.startsWith('image/')) {
          alert('Please upload a valid image file.');
          return;
        }
      }
    });
  }
}
