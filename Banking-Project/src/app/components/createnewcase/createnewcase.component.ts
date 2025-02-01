import { Component } from '@angular/core';

@Component({
  selector: 'app-createnewcase',
  templateUrl: './createnewcase.component.html',
  styleUrl: './createnewcase.component.css'
})
export class CreatenewcaseComponent {
  isSecondButtonClicked = false; // Tracks if the second button has been clicked
  
  // Method to handle click event of the second component's button
  setSecondButtonClicked() {
    this.isSecondButtonClicked = true;
  }
  
}
