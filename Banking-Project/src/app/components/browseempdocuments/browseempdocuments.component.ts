import { Component } from '@angular/core';

@Component({
  selector: 'app-browseempdocuments',
  templateUrl: './browseempdocuments.component.html',
  styleUrl: './browseempdocuments.component.css'
})
export class BrowseempdocumentsComponent {

 uploadFile(id: number): void {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.onchange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`File uploaded for ID ${id}:`, file.name);
      // Add logic to handle the file here
    }
  };
  fileInput.click();
}

}
