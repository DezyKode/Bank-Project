import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  show: boolean = false;
  newPaymentSchedule: any = { stage: '', percentage: null };
  paymentSchedules1: any[] = [];
  editIndex1: number = -1;

  // Add Payment Schedule
  add() {
      if (this.newPaymentSchedule.stage && this.newPaymentSchedule.percentage) {
          if (this.editIndex1 === -1) {
              // Add new schedule
              this.paymentSchedules1.push({ ...this.newPaymentSchedule });
          } else {
              // Update the existing schedule
              this.paymentSchedules1[this.editIndex1] = { ...this.newPaymentSchedule };
          }
          // Reset form
          this.newPaymentSchedule = { stage: '', percentage: null };
          this.show = false;
          this.editIndex1 = -1;
      }
  }

  // Edit Payment Schedule
  editPaymentSchedule1(index: number) {
      this.editIndex1 = index;
      this.newPaymentSchedule = { ...this.paymentSchedules1[index] };
      this.show = true;
  }

  // Delete Payment Schedule
  deleteit(index: number) {
      this.paymentSchedules1.splice(index, 1);
  }
}
