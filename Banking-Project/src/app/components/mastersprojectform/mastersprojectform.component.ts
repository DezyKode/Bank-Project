import { Component } from '@angular/core';

@Component({
  selector: 'app-mastersprojectform',
  templateUrl: './mastersprojectform.component.html',
  styleUrl: './mastersprojectform.component.css'
})
export class MastersprojectformComponent {


        // Add or Update Inventory
        addinventory() {
          if (this.newInventory.Flatno && this.newInventory.floorno && this.newInventory.carpetArea && this.newInventory.status && this.newInventory.customername) {
            if (this.editIndex2 === -1) {
              // Add new inventory
              this.inventory.push({ ...this.newInventory });
            } else {
              // Update existing inventory
              this.inventory[this.editIndex2] = { ...this.newInventory };
            }
        
            // Update newProject with inventoryAvailability
            this.newProject.inventoryAvailability = this.inventory
              .map(inventory => `${inventory.status}`) // Collecting all statuses
              .join(', '); // Join all statuses into a comma-separated string
        
            // Reset form fields
            this.newInventory = { Flatno: '', floorno: '', carpetArea: '', status: '', customername: '' }; // Reset form
            this.showinventory = false; // Hide the form
            this.editIndex2 = -1; // Reset edit index
          }
        }
        
        
        
      // Edit Inventory
  editInventory(index: number) {
    this.editIndex2 = index; // Set index of inventory to edit
    this.newInventory = { ...this.inventory[index] }; // Populate form with selected inventory
    this.showinventory = true; // Show inventory form
  }
  

  add() {
    if (this.newPaymentSchedule1.stage && this.newPaymentSchedule1.percentage) {
      // Add new payment schedule
      this.paymentSchedules1.push({ ...this.newPaymentSchedule1 });
      
      // Update the paymentScheduled field by joining all stages and percentages
      this.newProject.paymentScheduled = this.paymentSchedules1
        .map(schedule => `${schedule.stage}: ${schedule.percentage}%`)
        .join(', '); // Join all payment schedules as a comma-separated string

      // Reset input fields
      this.newPaymentSchedule1 = { stage: '', percentage: null };
      this.show = false; // Hide the input fields after adding
    }
  }
  selectedConfig: string | null = null; // Holds the selected checkbox value

  // This method will ensure only one checkbox is selected at a time
  onCheckboxChange(value: string) {
    if (this.selectedConfig === value) {
      this.selectedConfig = null; // Uncheck the currently selected one
    } else {
      this.selectedConfig = value; // Set the selected checkbox value
    }
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
      editIndex = -1; // Default value for "Create New Project"
    
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
    
        // After deleting, update the paymentScheduled field
        this.newProject.paymentScheduled = this.paymentSchedules1
          .map(schedule => `${schedule.stage}: ${schedule.percentage}%`)
          .join(', '); // Join all payment schedules again
      }
    
  // Delete Inventory
  deleteInventory(index: number) {
    // Remove inventory item
    this.inventory.splice(index, 1);
  
    // Update the flatDetails field after deletion
    this.newProject.inventoryAvailability = this.inventory
      .map(inventory => `Flatno: ${inventory.Flatno}, Floor: ${inventory.floorno}, Area: ${inventory.carpetArea} sqft, Status: ${inventory.status}, Customer: ${inventory.customername}`)
      .join(' | '); // Rebuild the flatDetails string
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

      newProject1: any = {
        selectedConfiguration: null, // Holds the selected configuration (e.g., '1RK', '2RK', etc.)
        configurations: {
          '1RK': '1RK',
          '2RK': '2RK',
          '3RK': '3RK',
          '4RK': '4RK',
          'shops': 'shops',
          '12rbk': '12rbk',
          'sma': 'sma'
        },
      };
      
}
