import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-criteria',
  templateUrl: './bank-criteria.component.html',
  styleUrls: ['./bank-criteria.component.css']
})
export class BankCriteriaComponent {

  loanCriteriaRows = [
    { cibilScoreStart: '', cibilScoreEnd: '', loanRequirementStart: '', loanRequirementEnd: '', salariedROI: '', nonSalariedROI: '' }
  ];

  marginCriteriaRows = [
    { marginStart: '', marginEnd: '', marginloanRequirementStart: '', marginloanRequirementEnd: '' }
  ];

  incomeCriteriaRows = [
    { incomeStart: '', incomeEnd: '', loanRequirementStart: '', loanRequirementEnd: '' }
  ];

  repaymentCriteriaRows = [
    { repaymentStart: '', repaymentEnd: '', loanRequirementStart: '', loanRequirementEnd: '' }
  ];

  businessCriteriaRows = [
    { businessStart: '', businessEnd: '', loanRequirementStart: '', loanRequirementEnd: '' }
  ];

  BusinessRepaymentCriteriaRows = [
    { businessRepaymentStart: '', businessRepaymentEnd: '', loanRequirementStart: '', loanRequirementEnd: '' }
  ];

  activeTable: string = 'cibil';

  showTable(table: string) {
    this.activeTable = table;
  }

  addRow() {
    // Logic to add row based on active table
    if (this.activeTable === 'cibil') {
      this.loanCriteriaRows.push({ cibilScoreStart: '', cibilScoreEnd: '', loanRequirementStart: '', loanRequirementEnd: '', salariedROI: '', nonSalariedROI: '' });
    } else if (this.activeTable === 'margin') {
      this.marginCriteriaRows.push({ marginStart: '', marginEnd: '', marginloanRequirementStart: '', marginloanRequirementEnd: '' });
    } else if (this.activeTable === 'income') {
      this.incomeCriteriaRows.push({ incomeStart: '', incomeEnd: '', loanRequirementStart: '', loanRequirementEnd: '' });
    } else if (this.activeTable === 'repayment') {
      this.repaymentCriteriaRows.push({ repaymentStart: '', repaymentEnd: '', loanRequirementStart: '', loanRequirementEnd: '' });
    } else if (this.activeTable === 'businessIncome') {
      this.businessCriteriaRows.push({ businessStart: '', businessEnd: '', loanRequirementStart: '', loanRequirementEnd: '' });
    } else if (this.activeTable === 'businessRepayment') {
      this.BusinessRepaymentCriteriaRows.push({ businessRepaymentStart: '', businessRepaymentEnd: '', loanRequirementStart: '', loanRequirementEnd: '' });
    }
  }

  deleteRow(index: number) {
    // Logic to delete row based on active table
    if (this.activeTable === 'cibil') {
      this.loanCriteriaRows.splice(index, 1);
    } else if (this.activeTable === 'margin') {
      this.marginCriteriaRows.splice(index, 1);
    } else if (this.activeTable === 'income') {
      this.incomeCriteriaRows.splice(index, 1);
    } else if (this.activeTable === 'repayment') {
      this.repaymentCriteriaRows.splice(index, 1);
    } else if (this.activeTable === 'businessIncome') {
      this.businessCriteriaRows.splice(index, 1);
    } else if (this.activeTable === 'businessRepayment') {
      this.BusinessRepaymentCriteriaRows.splice(index, 1);
    }
  }

  saveRow(index: number) {
    let rowData;
    if (this.activeTable === 'cibil') {
      rowData = this.loanCriteriaRows[index];
    } else if (this.activeTable === 'margin') {
      rowData = this.marginCriteriaRows[index];
    } else if (this.activeTable === 'income') {
      rowData = this.incomeCriteriaRows[index];
    } else if (this.activeTable === 'repayment') {
      rowData = this.repaymentCriteriaRows[index];
    } else if (this.activeTable === 'businessIncome') {
      rowData = this.businessCriteriaRows[index];
    } else if (this.activeTable === 'businessRepayment') {
      rowData = this.BusinessRepaymentCriteriaRows[index];
    }
    console.log("Saved Data: ", rowData);
  }
}
