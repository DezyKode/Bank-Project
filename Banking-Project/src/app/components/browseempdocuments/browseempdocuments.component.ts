import { Component } from '@angular/core';

@Component({
  selector: 'app-browseempdocuments',
  templateUrl: './browseempdocuments.component.html',
  styleUrls: ['./browseempdocuments.component.css']
})
export class BrowseempdocumentsComponent {

  // documents = [
  //   { placeholder: 'Photo' },
  //   { placeholder: 'Aadhar Card' },
  //   { placeholder: '3 Months Salary Slip' },
  //   { placeholder: 'Last 2 Years Form 16' },
  //   { placeholder: 'Proof Of Bonus Income' },
  //   { placeholder: 'Property Cost Sheet/ Sale Agreement' },
  //   { placeholder: 'Index 2' },
  //   { placeholder: 'Pan Card' },
  //   { placeholder: 'Address Proof' },
  //   { placeholder: '6 Months Bank Statement' },
  //   { placeholder: 'Proof Of Rent Income' },
  //   { placeholder: 'Proof Of Incentive Income' },
  //   { placeholder: 'Floor Plan' }
  // ];

  // handleFileUpload(id: number, event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   const textField = document.getElementById(`file-url-${id}`) as HTMLInputElement;

  //   if (input && textField && input.files && input.files.length > 0) {
  //     textField.value = input.files[0].name; 
  //   } else {
  //     console.error('No file selected or text field not found.');
  //   }
  // }

// fileName:String='icon.png';

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

  isModalVisible: boolean = false;  // To control modal visibility
  selectedDocument: any = {}; // Store the selected document for viewing

  // Handle file upload and update the text field with the file name
  handleFileUpload(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      const fileName = input.files[0].name;
      this.documents[index].fileName = fileName;  // Store the file name in the document
    } else {
      console.error('No file selected or input not found.');
    }
  }

  // Reset the file and restore the placeholder when X is clicked
  resetFile(index: number): void {
    this.documents[index].fileName = '';  // Clear the uploaded file name
  }

  // Handle view document click (open modal)
  viewDocument(index: number): void {
    this.selectedDocument = this.documents[index];
    this.isModalVisible = true;
  }

  // Close the modal
  closeModal(): void {
    this.isModalVisible = false;
  }

  // Check if the file is an image
  // isImage(fileName: string): boolean {
  //   const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  //   const fileExtension = fileName.split('.').pop()?.toLowerCase();
  //   return imageExtensions.includes(fileExtension || '');
  // }
  isImage(fileName: string): boolean {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp','pdf'];
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    return fileExtension ? imageExtensions.includes(fileExtension) : false;
  }
  getFileUrl(fileName: string): string {
    return `${fileName}`; // Replace with your file path logic
  }
  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'placeholder.png';
  }
  
  // Get the file URL (for image preview)
  // getFileUrl(fileName: string): string {
  //   return `/uploads/${fileName}`;  // You can customize this based on your file storage path
  // }
}
