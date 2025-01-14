import { Component } from '@angular/core';

@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})
export class ImportFileComponent {
  autoAllocate = false;
  selectedFile: File | null = null;
  errorMessage: string = '';

  // Sample Import History
  importHistory = [
    {
      date: '2025-01-13',
      totalRecords: 1,
      insertedRecords: 1,
      errors: 0,
      errorFile: 'error-file-link',
      status: 'Completed',
    },
  ];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;

    // Validate the file
    if (file) {
      const fileSize = file.size; // in bytes
      const fileType = file.type;

      // Validate file type and size
      if (this.isValidFileType(fileType) && this.isValidFileSize(fileSize, fileType)) {
        console.log('Selected File:', this.selectedFile);
        this.errorMessage = ''; // Clear previous error message
      } else {
        this.selectedFile = null; // Reset selected file
        this.errorMessage = this.getErrorMessage(fileType, fileSize);
        console.log(this.errorMessage);
      }
    }
  }

  // Check if the file type is valid
  isValidFileType(fileType: string): boolean {
    const allowedImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const allowedPdfType = 'application/pdf';

    return allowedImageTypes.includes(fileType) || fileType === allowedPdfType;
  }

  // Check if the file size is valid
  isValidFileSize(fileSize: number, fileType: string): boolean {
    const maxImageSize = 500 * 1024; // 500 KB in bytes
    const maxPdfSize = 2 * 1024 * 1024; // 2 MB in bytes

    if (fileType === 'application/pdf') {
      return fileSize <= maxPdfSize;
    }

    return fileSize <= maxImageSize;
  }

  // Get the appropriate error message based on the file type and size
  getErrorMessage(fileType: string, fileSize: number): string {
    const maxImageSize = 500 * 1024; // 500 KB in bytes
    const maxPdfSize = 2 * 1024 * 1024; // 2 MB in bytes

    if (fileType !== 'application/pdf' && !['image/png', 'image/jpeg', 'image/jpg'].includes(fileType)) {
      return 'Invalid file type. Only image (PNG, JPG, JPEG) or PDF files are allowed.';
    }

    if (fileType === 'application/pdf' && fileSize > maxPdfSize) {
      return 'PDF file size exceeds 2 MB limit.';
    }

    if (fileSize > maxImageSize) {
      return 'Image file size exceeds 500 KB limit.';
    }

    return '';
  }

  downloadSample() {
    console.log('Download Sample clicked');
    // Implement logic to download sample file
  }

  downloadSampleWithExample() {
    console.log('Download Sample With Example clicked');
    // Implement logic to download sample file with examples
  }

  importFile() {
    if (!this.selectedFile) {
      alert('Please select a file before importing');
      return;
    }

    console.log('Import File clicked:', this.selectedFile);
    console.log('Auto Allocation:', this.autoAllocate);
    // Implement logic to upload file and process it
  }
}
