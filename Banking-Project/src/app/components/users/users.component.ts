import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  searchText: string = '';
  statusFilter: string = '';

  user = [
    { id: 1, name: 'Mark', email: 'mark@gmail.com', mobile: '9874563210', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' },
    { id: 2, name: 'Jojo', email: 'jojo@gmail.com', mobile: '9856321745', gender: 'Male', role: 'Sales Officer', status: 'ACTIVE' },
    { id: 3, name: 'Virat', email: 'Virat@gmail.com', mobile: '8965471230', gender: 'Male', role: 'Account Manager', status: 'ACTIVE' },
    { id: 4, name: 'Dhoni', email: 'dhoni@gmail.com', mobile: '7896541230', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' },
    { id: 5, name: 'Rohit', email: 'rohit@gmail.com', mobile: '8596321047', gender: 'Female', role: 'Telecallers', status: 'INACTIVE' },
    { id: 6, name: 'Rahul', email: 'rahul@gmail.com', mobile: '9856320147', gender: 'Female', role: 'Telecallers', status: 'ACTIVE' },
    { id: 7, name: 'Don', email: 'don@gmail.com', mobile: '8569320147', gender: 'Male', role: 'Telecallers', status: 'INACTIVE' },
    { id: 8, name: 'Hardik', email: 'hardik@gmail.com', mobile: '8965471230', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' }
  ];

  filteredUser() {
    return this.user.filter(user => {
      const matchesSearchText = this.searchText === '' || user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.mobile.includes(this.searchText);
      const matchesStatus = this.statusFilter === '' || user.status === this.statusFilter;
      return matchesSearchText && matchesStatus;
    });
  }
}
