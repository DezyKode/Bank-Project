import { Component } from '@angular/core';

@Component({
  selector: 'app-mastersprojectform',
  templateUrl: './mastersprojectform.component.html',
  styleUrl: './mastersprojectform.component.css',
})
export class MastersprojectformComponent {

   // Payment Schedule Form
   paymentSchedules: any[] = [];
   show: boolean = false;
   newPaymentSchedule1: any = { stage: '', percentage: null };
   paymentSchedules1: any[] = [];
   editIndex1: number = -1;
   
   // Add or Update Payment Schedule
   addPaymentSchedule() {
    if (this.newPaymentSchedule1.stage && this.newPaymentSchedule1.percentage) {
      this.paymentSchedules1.push({ ...this.newPaymentSchedule1 });
      this.newPaymentSchedule1 = { stage: '', percentage: null };
      this.show = false;
    } else {
      alert('Please fill in both stage and percentage.');
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
     this.paymentSchedules1.splice(index, 1);
     this.newProject.paymentScheduled = this.paymentSchedules1
       .map((schedule) => `${schedule.stage}: ${schedule.percentage}%`)
       .join(', ');
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
    //  paymentScheduled: '',
    //  inventoryAvailability: '',
    //  apfNo: '',
   };
   addedRows: any[] = [];
   editIndex: number = -1;  // Default value is -1 for creating a new project
 
   // APF Form
   showapf: boolean = false;
   newapf: any = { apfno: '', bank: '' };
   apf: any[] = [];
   searchText: any;
 
   toggleShowApf(event: MouseEvent): void {
     event.stopPropagation();  // Prevent any bubbling event from affecting other handlers
     this.showapf = !this.showapf;
   }
 
   // Inventory Form
   showinventory: boolean = false;
   newInventory: any = {
     Flatno: '',
     floorno: '',
     carpetArea: '',
     status: '',
     customername: '',
   };
   inventorySchedules: any[] = [];
   editIndex2: number = -1;
 
   addinventory() {
    if (
      this.newInventory.Flatno &&
      this.newInventory.floorno &&
      this.newInventory.carpetArea &&
      this.newInventory.status &&
      this.newInventory.customername
    ) {
      this.inventorySchedules.push({ ...this.newInventory });
      this.newInventory = { Flatno: '', floorno: '', carpetArea: '', status: '', customername: '' };
      this.showinventory = false;
      this.editIndex2 = -1;
    } else {
      alert('Please fill in all the fields.');
    }
  }
  
 
   deleteInventory(index: number) {
     this.inventorySchedules.splice(index, 1);
 
     this.newProject.inventoryAvailability = this.inventorySchedules
       .map(
         (inventory) =>
           `${inventory.Flatno}: ${inventory.floorno}, Area: ${inventory.carpetArea}, Status: ${inventory.status}, Customer: ${inventory.customername}`
       )
       .join(' | ');
   }
 
   // Add or Update Project
   addProject() {
    if (this.isValidProject(this.newProject)) {
      if (this.editIndex === -1) {
        // Add new project
        this.addedRows.push({ ...this.newProject });
      } else {
        // Update existing project
        this.addedRows[this.editIndex] = { ...this.newProject };
        this.editIndex = -1;
      }
  
      // Show success message
      alert('Project saved successfully!');
      this.showCreateProjectForm = false;
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
  isValidProject(project: any): boolean {
    // Validate the project (e.g., check that all required fields are filled)
    return project.name && project.description; // Add other validation as needed
  }
  
 
   // Validate Project Fields
  //  isValidProject(project: any): boolean {
  //    // Check if required string fields are non-empty
  //    if (
  //      !project.projectName ||
  //      !project.developerName ||
  //      !project.reraNo ||
  //      !project.reraCompletionDate ||
  //      !project.state ||
  //      !project.city ||
  //      !project.zone ||
  //      !project.location ||
  //      !project.area ||
  //      !project.stageOfConstruction ||
  //      !project.stageDate ||
  //      !project.propertyType 
       
  //    ) {
  //         console.log('Validation failed due to missing fields');

  //      return false;
  //    }
 
  //    // Check if total fields are positive numbers
  //    if (project.totalFlats <= 0 || project.totalShops <= 0 || project.totalInventory <= 0) {
  //      return false;
  //    }
 
  //    return true;
  //  }
 
   // Edit Project
   editRow(index: number) {
     this.editIndex = index;
     this.newProject = { ...this.addedRows[index] };
     this.showCreateProjectForm = true;
   }
 
   // Delete Project
   deleteAddedRow(index: number) {
     this.addedRows.splice(index, 1);
   }
 
   // Add or Update APF
   addapf() {
     if (this.newapf.apfno && this.newapf.bank) {
       this.apf.push({ ...this.newapf });
       this.newapf = { apfno: '', bank: '' };
       this.showapf = false;
     }
   }
 
   // Delete APF
   deleteapf(index: number) {
     this.apf.splice(index, 1);
   }
 
   newProject1 = {
    selectedConfiguration: [], // Initialize the selected configurations as an empty array
    configurations: {
      '1RK': '1RK',
      '2RK': '2RK',
      '3RK': '3RK',
      '4RK': '4RK',
      'shops': 'shops',
      '12rbk': '12rbk',
      'sma': 'sma',
    }
  };

  

 
   add() {
    if (this.newPaymentSchedule1.stage && this.newPaymentSchedule1.percentage) {
      // Add new payment schedule
      this.paymentSchedules1.push({ ...this.newPaymentSchedule1 });
      // Update the paymentScheduled field by joining all stages and percentages
      this.newProject.paymentScheduled = this.paymentSchedules1
        .map((schedule) => `${schedule.stage}: ${schedule.percentage}%`)
        .join(', '); // Join all payment schedules as a comma-separated string
      // Reset input fields
      this.newPaymentSchedule1 = { stage: '', percentage: null };
      this.show = false; // Hide the input fields after adding
    }
  }
  
}
