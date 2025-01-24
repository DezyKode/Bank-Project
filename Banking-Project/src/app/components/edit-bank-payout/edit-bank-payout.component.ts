import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-bank-payout',
  templateUrl: './edit-bank-payout.component.html',
  styleUrl: './edit-bank-payout.component.css'
})
export class EditBankPayoutComponent {
// Array to store the table rows data
loanCriteriaRows = [
  {
    cibilScoreStart: '',
    cibilScoreEnd: '',
    loanRequirementStart: '',
    loanRequirementEnd: '',
   /*  salariedROI: '',
    nonSalariedROI: '' */
  }
];

// Function to add a new row to the table
addRow() {
  this.loanCriteriaRows.push({
    cibilScoreStart: '',
    cibilScoreEnd: '',
    loanRequirementStart: '',
    loanRequirementEnd: '',
    /* salariedROI: '',
    nonSalariedROI: '' */
  });
}

// Function to delete a row
deleteRow(index: number) {
  this.loanCriteriaRows.splice(index, 1);
}

// Function to save data (you can implement your own logic here)
saveRow(index: number) {
  const rowData = this.loanCriteriaRows[index];
  console.log("Saved Data: ", rowData);
  // You can send this data to a backend or save it locally as needed
}
}
