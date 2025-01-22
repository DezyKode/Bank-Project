import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  searchText: string = '';

  roles = [
    { id: 1, name: 'Accountant'},
    { id: 2, name: 'Telecallers'},
    { id: 3, name: 'Sales Officer'},
    { id: 4, name: 'Sales Manager'},
    { id: 5, name: 'Senior Manager'},
    { id: 6, name: 'RM'},
    { id: 7, name: 'Telecallers'},
    { id: 8, name: 'Sales'}
  ];

  filteredRoles() {
    return this.roles.filter(role => {
      const matchesSearchText = this.searchText === '' || role.name.toLowerCase().includes(this.searchText.toLowerCase())
      return matchesSearchText;
    });
  }

}
