import { Component } from '@angular/core';

@Component({
  selector: 'app-mastersproject',
  templateUrl: './mastersproject.component.html',
  styleUrls: ['./mastersproject.component.css']
})
export class MastersprojectComponent {
add() {
throw new Error('Method not implemented.');
}
  // Project Form
  showCreateProjectForm: boolean = false;
  newProject: any = {
    projectName: '',
    developerName: '',
    reraNo: '',
    reraCompletionDate: '',
    state: '',
    city: '',
    zone: '',
    location: '',
    area: '',
    stageOfConstruction: '',
    stageDate: '',
    propertyType: '',
    totalFlats: 0,
    totalShops: 0,
    totalInventory: 0,
    configuration: '',
    paymentScheduled: '',
    inventoryAvailability: '',
    apfNo: ''
  };
  addedRows: any[] = [];
  editIndex: number = -1;

  // Payment Schedule Form
  paymentSchedules: any[] = [];
  show: boolean = false;
  newPaymentSchedule1: any = { stage: '', percentage: null };
  paymentSchedules1: any[] = [];
  editIndex1: number = -1;

  // Inventory Form
  showinventory: boolean = false;
  newInventory: any = { Flatno: '', floorno: '', carpetArea: '', status: '', customername: '' };
  inventory: any[] = [];
  editIndex2: number = -1;

  // APF Form
  showapf: boolean = false;
  newapf: any = { apfno: '', bank: '' };
  apf: any[] = [];
searchText: any;

  // Add or Update Project
  addProject() {
    if (this.editIndex === -1) {
      // Add new project
      this.addedRows.push({ ...this.newProject });
    } else {
      // Update existing project
      this.addedRows[this.editIndex] = { ...this.newProject };
      this.editIndex = -1; // Reset edit index
    }
    this.clearNewProjectForm();
    this.showCreateProjectForm = false;
  }

  // Clear Project Form
  clearNewProjectForm() {
    this.newProject = {
      projectName: '',
      developerName: '',
      reraNo: '',
      reraCompletionDate: '',
      state: '',
      city: '',
      zone: '',
      location: '',
      area: '',
      stageOfConstruction: '',
      stageDate: '',
      propertyType: '',
      totalFlats: 0,
      totalShops: 0,
      totalInventory: 0,
      configuration: '',
      paymentScheduled: '',
      inventoryAvailability: '',
      apfNo: ''
    };
  }

  // Edit Project
  editRow(index: number) {
    this.editIndex = index;
    this.newProject = { ...this.addedRows[index] }; // Load data to edit
    this.showCreateProjectForm = true;
  }

  // Delete Project
  deleteAddedRow(index: number) {
    this.addedRows.splice(index, 1); // Delete project
  }

  // Add or Update Payment Schedule
  addPaymentSchedule() {
    if (this.newPaymentSchedule1.stage && this.newPaymentSchedule1.percentage) {
      this.paymentSchedules1.push({ ...this.newPaymentSchedule1 });
      this.newPaymentSchedule1 = { stage: '', percentage: null }; // Reset form
      this.show = false;
    }
  }

  // Edit Payment Schedule
  editPaymentSchedule1(index: number) {
    this.editIndex1 = index;
    this.newPaymentSchedule1 = { ...this.paymentSchedules1[index] };
    this.show = true;
  }

  // Delete Payment Schedule
  deleteit(index: number) {
    this.paymentSchedules1.splice(index, 1); // Delete payment schedule
  }

  // Add or Update Inventory
  addinventory() {
    if (this.newInventory.Flatno && this.newInventory.floorno && this.newInventory.carpetArea && this.newInventory.status && this.newInventory.customername) {
      if (this.editIndex2 === -1) {
        this.inventory.push({ ...this.newInventory }); // Add new inventory
      } else {
        this.inventory[this.editIndex2] = { ...this.newInventory }; // Update inventory
      }
      this.newInventory = { Flatno: '', floorno: '', carpetArea: '', status: '', customername: '' }; // Reset form
      this.showinventory = false; // Hide form
      this.editIndex2 = -1; // Reset edit index
    }
  }

  // Edit Inventory
  editInventory(index: number) {
    this.editIndex2 = index; // Set index of inventory to edit
    this.newInventory = { ...this.inventory[index] }; // Populate form with selected inventory
    this.showinventory = true; // Show inventory form
  }

  // Delete Inventory
  deleteInventory(index: number) {
    this.inventory.splice(index, 1); // Remove inventory item
  }

  // Add or Update APF
  addapf() {
    if (this.newapf.apfno && this.newapf.bank) {
      this.apf.push({ ...this.newapf });
      this.newapf = { apfno: '', bank: '' }; // Reset form
      this.showapf = false; // Hide form
    }
  }

  // Delete APF
  deleteapf(index: number) {
    this.apf.splice(index, 1); // Remove APF
  }
}
