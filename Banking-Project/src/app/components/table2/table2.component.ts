import { Component } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  show: boolean = true;
  newInventory: any = { Flatno: '', floorno: '', carpetArea: '', status: '', customername: '' };
  editIndex: number = -1;  // To track the index of the item being edited
  inventory: any[] = [];

  add() {
    if (this.newInventory.Flatno && this.newInventory.floorno && this.newInventory.carpetArea && this.newInventory.status && this.newInventory.customername) {
      if (this.editIndex === -1) {
        this.inventory.push({ ...this.newInventory });
      } else {
        this.inventory[this.editIndex] = { ...this.newInventory };
      }
      this.newInventory = { Flatno: '', floorno: '', carpetArea: '', status: '', customername: '' };  // Reset input fields
      this.show = false;
      this.editIndex = -1;
    }
  }

  editInventory(index: number) {
    this.editIndex = index;
    this.newInventory = { ...this.inventory[index] };  // Get the item to edit
    this.show = true;
  }

  deleteInventory(index: number) {
    this.inventory.splice(index, 1);  // Corrected: Delete from inventory, not newInventory
  }
}
