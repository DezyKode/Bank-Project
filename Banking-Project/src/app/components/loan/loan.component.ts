import { Component } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent {
  selectedOption: string = ''; // Initially no option selected
isOfferDivVisible = false;
isOtherDivHide = true;

toggleOffersDiv(){
this.isOfferDivVisible=!this.isOfferDivVisible;
this.isOtherDivHide = !this.isOtherDivHide;
}

toggleBackDiv(){
  this.isOtherDivHide = !this.isOtherDivHide;
  this.isOfferDivVisible=!this.isOfferDivVisible;

}
}
