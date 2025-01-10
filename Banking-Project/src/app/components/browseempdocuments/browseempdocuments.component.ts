import { Component } from '@angular/core';

@Component({
  selector: 'app-browseempdocuments',
  templateUrl: './browseempdocuments.component.html',
  styleUrls: ['./browseempdocuments.component.css']
})
export class BrowseempdocumentsComponent {

  documents = [
    { placeholder: 'Photo', fileName: '' },
    { placeholder: 'Aadhar Card Front-side', fileName: '' },
    { placeholder: 'Aadhar Card Back-side', fileName: '' },
    { placeholder: '3 Months Salary Slip', fileName: '' },
    { placeholder: 'Last 2 Years Form 16', fileName: '' },
    { placeholder: 'Proof Of Bonus Income', fileName: '' },
    { placeholder: 'Property Cost Sheet/ Sale Agreement', fileName: '' },
    { placeholder: 'Index 2', fileName: '' },
    { placeholder: 'Pan Card', fileName: '' },
    { placeholder: 'Address Proof', fileName: '' },
    { placeholder: '6 Months Bank Statement', fileName: '' },
    { placeholder: 'Proof Of Rent Income', fileName: '' },
    { placeholder: 'Proof Of Incentive Income', fileName: '' },
    { placeholder: 'Floor Plan', fileName: '' }
  ];

   documents2 = [
    { placeholder: 'Passport', fileName: '' },
    { placeholder: 'Voter ID', fileName: '' },
    { placeholder: 'Driving License', fileName: '' },
    { placeholder: 'Bank Passbook', fileName: '' },
    { placeholder: 'Electricity Bill', fileName: '' },
    { placeholder: 'Water Bill', fileName: '' },
    { placeholder: 'Gas Bill', fileName: '' },
    { placeholder: 'Telephone Bill', fileName: '' },
    { placeholder: 'Rent Agreement', fileName: '' },
    { placeholder: 'Vehicle Registration Document', fileName: '' },
    { placeholder: 'Income Tax Returns (Last 2 Years)', fileName: '' },
    { placeholder: 'Company ID Card', fileName: '' },
    { placeholder: 'Educational Certificates', fileName: '' },
    { placeholder: 'Marriage Certificate', fileName: '' }
  ];
  

  selectedDocuments: any[] = this.documents; // Default to primary documents
  isPrimarySelected: boolean = true;  // Initially Primary is selected
  isModalVisible: boolean = false;
  selectedDocument: any = {};

  // Function to switch between Primary and Secondary
  selectApplicant(applicantType: string): void {
    if (applicantType === 'primary') {
      this.selectedDocuments = this.documents;
      this.isPrimarySelected = true;
    } else {
      this.selectedDocuments = this.documents2;
      this.isPrimarySelected = false;
    }
  }

//  handleFileUpload (index: number, event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input && input.files && input.files.length > 0) {
//       const file = input.files[0];
//       const fileName = file.name;
//       const fileSize = file.size / (1024 * 1024); // Convert size to MB
//       const fileExtension = fileName.split('.').pop()?.toLowerCase();

//       // Allowable extensions
//       const allowedExtensions = ['jpg', 'jpeg', 'pdf'];

//       // Check file extension and size
//       if (!allowedExtensions.includes(fileExtension || '')) {
//         alert('Only JPG, JPEG, and Pdf files are allowed.');
//         return;
//       }
//       if (fileSize > 2) {
//         alert('File size must not exceed 2MB.');
//         return;
//       }

//       // Valid file: store the file name in the document
//       this.selectedDocuments[index].fileName = fileName;
//     } else {
//       console.error('No file selected or input not found.');
//     }
//   }



handleFileUpload(index: number, event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input && input.files && input.files.length > 0) {
    const file = input.files[0];
    const fileName = file.name;
    const fileSize = file.size / (1024 * 1024); // Convert size to MB
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    // Allowable extensions
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];

    // Check file extension and size
    if (!allowedExtensions.includes(fileExtension || '')) {
      alert('Only JPG, JPEG, PNG, and PDF files are allowed.');
      return;
    }
    if (fileSize > 2) {
      alert('File size must not exceed 2MB.');
      return;
    }

    // Valid file: store the file name in the document
    this.selectedDocuments[index].fileName = fileName;
  } else {
    console.error('No file selected or input not found.');
  }
}


  resetFile(index: number): void {
    this.selectedDocuments[index].fileName = '';  // Clear the uploaded file name
  }

  viewDocument(index: number): void {
    const document = this.selectedDocuments[index];
    if (!document.fileName) {
      this.selectedDocument = null;
      this.isModalVisible = true;
    } else {
      this.selectedDocument = document;
      this.isModalVisible = true;
    }
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedDocument = null;
  }

  isImage(fileName: string): boolean {
    const imageExtensions = ['jpg', 'jpeg', 'pdf'];
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    return fileExtension ? imageExtensions.includes(fileExtension) : false;
  }

  getFileUrl(fileName: string): string {
    return `${fileName}`;
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'placeholder.png';
  }
}
