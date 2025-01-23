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

  currentPage: number = 1;
  itemPerpage: number = 10;

  filteredUser() {
    return this.user.filter(user => {
      const matchesSearchText = this.searchText === '' || user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.mobile.includes(this.searchText);
      const matchesStatus = this.statusFilter === '' || user.status === this.statusFilter;
      return matchesSearchText && matchesStatus;
    });
  }

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    id: 'asc',
    name: 'asc',
  };

  sortTable(column: string) {
    const currentDirection = this.sortDirection[column] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = newDirection; 

    this.user = this.user.sort((a, b) => {
      const prop = column as keyof typeof a;
      if (newDirection === 'asc') {
        return a[prop] > b[prop] ? 1 : -1;
      } else {
        return a[prop] < b[prop] ? 1 : -1;
      }
    });
  }

   // Pagination logic
   get paginatedLoans() {
    const filtered = this.filteredUser();
    const startIndex = (this.currentPage - 1) * this.itemPerpage;
    const endIndex = startIndex + this.itemPerpage;
    return filtered.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredUser().length / this.itemPerpage);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
