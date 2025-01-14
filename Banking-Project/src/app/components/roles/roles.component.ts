import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  searchText: string = '';

  roles = [
    { id: 1, name: 'Mark'},
    { id: 2, name: 'Jojo'},
    { id: 3, name: 'Virat'},
    { id: 4, name: 'Dhoni'},
    { id: 5, name: 'Rohit'},
    { id: 6, name: 'Rahul'},
    { id: 7, name: 'Don'},
    { id: 8, name: 'Hardik'}
  ];

  filteredRoles() {
    return this.roles.filter(role => {
      const matchesSearchText = this.searchText === '' || role.name.toLowerCase().includes(this.searchText.toLowerCase())
      return matchesSearchText;
    });
  }

}
