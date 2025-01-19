import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent {
  isLeads: boolean = false; // To track the parent checkbox
  isLoans: boolean = false;
  isInvoices: boolean = false;
  isPayout: boolean = false;
  isEmployees: boolean = false;
  isBanks: boolean = false;
  isConnector: boolean = false;
  isUsers: boolean = false;
  isProjects: boolean = false;
  isLocation: boolean = false;
  isRoles: boolean = false;
  isReports: boolean = false;
  isTasks: boolean = false;

  // IS Lead
  childIsLeads = [
    { id: 1, name: 'Is Lead Create?', checked: false },
    { id: 2, name: 'Is Lead Edit?', checked: false },
    { id: 3, name: 'Is Lead View?', checked: false },
    { id: 3, name: 'Is Lead Import?', checked: false },
    { id: 3, name: 'Is Lead Export?', checked: false }
  ];

  toggleChildCheckboxes() {
    if (this.isLeads) {
      this.childIsLeads.forEach(child => child.checked = false);
    } else {
      this.childIsLeads.forEach(child => child.checked = false);
    }
  }

  // Is Loans
  childisLoans = [
    { id: 1, name: 'Is Loan Create?', checked: false },
    { id: 2, name: 'Is Loan Edit?', checked: false },
    { id: 3, name: 'Is Loan View?', checked: false },
    { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisLoans() {
    if (this.isLoans) {
      this.childisLoans.forEach(child => child.checked = false);
    } else {
      this.childisLoans.forEach(child => child.checked = false);
    }
  }

  // Is Invoices
  childisInvoices = [
    { id: 1, name: 'Is Invoice Create?', checked: false },
    { id: 2, name: 'Is Invoice Edit?', checked: false },
    { id: 3, name: 'Is Invoice View?', checked: false },
    // { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisInvoices() {
    if (this.isInvoices) {
      this.childisInvoices.forEach(child => child.checked = false);
    } else {
      this.childisInvoices.forEach(child => child.checked = false);
    }
  }

  // Is Payout
  childisPayout = [
    { id: 1, name: 'Is Payout Create?', checked: false },
    { id: 2, name: 'Is Payout Edit?', checked: false },
    { id: 3, name: 'Is Payout View?', checked: false },
    // { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisPayout() {
    if (this.isPayout) {
      this.childisPayout.forEach(child => child.checked = false);
    } else {
      this.childisPayout.forEach(child => child.checked = false);
    }
  }

  // Is Employees
  childisEmployees = [
    { id: 1, name: 'Is Employee Create?', checked: false },
    { id: 2, name: 'Is Employee Edit?', checked: false },
    { id: 3, name: 'Is Employee View?', checked: false },
    // { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisEmployees() {
    if (this.isEmployees) {
      this.childisEmployees.forEach(child => child.checked = false);
    } else {
      this.childisEmployees.forEach(child => child.checked = false);
    }
  }

  // Is Bank
  childisBanks = [
    { id: 1, name: 'Is Bank Criteria?', checked: false },
    { id: 2, name: 'Is Bank RAC Branch?', checked: false },
    { id: 3, name: 'Is Loan View?', checked: false },
    { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisBanks() {
    if (this.isBanks) {
      this.childisBanks.forEach(child => child.checked = false);
    } else {
      this.childisBanks.forEach(child => child.checked = false);
    }
  }

  // Is Connector
  childisConnector = [
    { id: 1, name: 'Is Connector Create?', checked: false },
    { id: 2, name: 'Is Connector Edit?', checked: false },
    { id: 3, name: 'Is Connector View?', checked: false },
    { id: 3, name: 'Is Connector Delete?', checked: false },
  ];

  toggleChildisConnector() {
    if (this.isConnector) {
      this.childisConnector.forEach(child => child.checked = false);
    } else {
      this.childisConnector.forEach(child => child.checked = false);
    }
  }

  // Is Users
  // childisUsers = [
  //   { id: 1, name: 'Is Loan Create?', checked: false },
  //   { id: 2, name: 'Is Loan Edit?', checked: false },
  //   { id: 3, name: 'Is Loan View?', checked: false },
  //   { id: 3, name: 'Is Create Report View?', checked: false },
  // ];

  // toggleChildisUsers() {
  //   if (this.isUsers) {
  //     this.childisUsers.forEach(child => child.checked = false);
  //   } else {
  //     this.childisUsers.forEach(child => child.checked = false);
  //   }
  // }

  // Is Projects
  childisProjects = [
    { id: 1, name: 'Is Loan Create?', checked: false },
    { id: 2, name: 'Is Loan Edit?', checked: false },
    { id: 3, name: 'Is Loan View?', checked: false },
    { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisProjects() {
    if (this.isProjects) {
      this.childisProjects.forEach(child => child.checked = false);
    } else {
      this.childisProjects.forEach(child => child.checked = false);
    }
  }

  // Is Location
  childisLocation = [
    { id: 1, name: 'Is Location Create?', checked: false },
    { id: 2, name: 'Is Location Edit?', checked: false },
    { id: 3, name: 'Is Location View?', checked: false },
    { id: 3, name: 'Is Location Delete?', checked: false },
    { id: 4, name: 'Is Location Zones?', checked: false },
  ];

  toggleChildisLocation() {
    if (this.isLocation) {
      this.childisLocation.forEach(child => child.checked = false);
    } else {
      this.childisLocation.forEach(child => child.checked = false);
    }
  }

  // Is Roles
  childisRoles = [
    { id: 1, name: 'Is Roles Create?', checked: false },
    { id: 2, name: 'Is Roles Edit?', checked: false },
    { id: 3, name: 'Is Roles View?', checked: false },
    // { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisRoles() {
    if (this.isRoles) {
      this.childisRoles.forEach(child => child.checked = false);
    } else {
      this.childisRoles.forEach(child => child.checked = false);
    }
  }

  // Is Reports
  childisReports = [
    { id: 1, name: 'Is Loan Ageing Report?', checked: false },
    { id: 2, name: 'Is Loan Statistics Report?', checked: false },
    { id: 3, name: 'Is Cases Dump Report?', checked: false },
    { id: 3, name: 'Is Revenue Reconcilation Report?', checked: false },
    { id: 4, name: 'Is MIS Report?', checked: false },
  ];

  toggleChildisReports() {
    if (this.isReports) {
      this.childisReports.forEach(child => child.checked = false);
    } else {
      this.childisReports.forEach(child => child.checked = false);
    }
  }

  // Is Tasks
  childisTasks = [
    { id: 1, name: 'Is Tasks Create?', checked: false },
    { id: 2, name: 'Is Tasks Edit?', checked: false },
    { id: 3, name: 'Is Tasks View?', checked: false },
    // { id: 3, name: 'Is Create Report View?', checked: false },
  ];

  toggleChildisTasks() {
    if (this.isTasks) {
      this.childisTasks.forEach(child => child.checked = false);
    } else {
      this.childisTasks.forEach(child => child.checked = false);
    }
  }
}
