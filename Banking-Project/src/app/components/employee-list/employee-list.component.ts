import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  searchText: string = '';
  statusFilter: string = '';

  employees = [
    { id: 1, name: 'Mark', email: 'mark@gmail.com', mobile: '9874563210', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' },
    { id: 2, name: 'Jojo', email: 'jojo@gmail.com', mobile: '9856321745', gender: 'Male', role: 'Sales Officer', status: 'ACTIVE' },
    { id: 3, name: 'Virat', email: 'Virat@gmail.com', mobile: '8965471230', gender: 'Male', role: 'Account Manager', status: 'ACTIVE' },
    { id: 4, name: 'Dhoni', email: 'dhoni@gmail.com', mobile: '7896541230', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' },
    { id: 5, name: 'Rohit', email: 'rohit@gmail.com', mobile: '8596321047', gender: 'Female', role: 'Telecallers', status: 'INACTIVE' },
    { id: 6, name: 'Rahul', email: 'rahul@gmail.com', mobile: '9856320147', gender: 'Female', role: 'Telecallers', status: 'ACTIVE' },
    { id: 7, name: 'Don', email: 'don@gmail.com', mobile: '8569320147', gender: 'Male', role: 'Telecallers', status: 'INACTIVE' },
    { id: 8, name: 'Hardik', email: 'hardik@gmail.com', mobile: '8965471230', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' },
    { id: 9, name: 'Mark', email: 'mark@gmail.com', mobile: '9874563210', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' },
    { id: 10, name: 'Jojo', email: 'jojo@gmail.com', mobile: '9856321745', gender: 'Male', role: 'Sales Officer', status: 'ACTIVE' },
    { id: 11, name: 'Virat', email: 'Virat@gmail.com', mobile: '8965471230', gender: 'Male', role: 'Account Manager', status: 'ACTIVE' },
    { id: 12, name: 'Dhoni', email: 'dhoni@gmail.com', mobile: '7896541230', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' },
    { id: 13, name: 'Rohit', email: 'rohit@gmail.com', mobile: '8596321047', gender: 'Female', role: 'Telecallers', status: 'INACTIVE' },
    { id: 14, name: 'Rahul', email: 'rahul@gmail.com', mobile: '9856320147', gender: 'Female', role: 'Telecallers', status: 'ACTIVE' },
    { id: 15, name: 'Don', email: 'don@gmail.com', mobile: '8569320147', gender: 'Male', role: 'Telecallers', status: 'INACTIVE' },
    { id: 16, name: 'Hardik', email: 'hardik@gmail.com', mobile: '8965471230', gender: 'Male', role: 'Telecallers', status: 'ACTIVE' }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get role(){
    return [...new Set(this.employees.map(employees => employees.role))];
  }

  get status(){
    return [...new Set(this.employees.map(employees => employees.status))];
  }

  selectedRole: Set<string> = new Set();
  selectedStatus: Set<string> = new Set();

  toggleRole(role: string){
    if(this.selectedRole.has(role)){
      this.selectedRole.delete(role);
    } else {
      this.selectedRole.add(role);
    }
  }

  toggleStatus(status: string){
    if(this.selectedStatus.has(status)){
      this.selectedStatus.delete(status);
    } else {
      this.selectedStatus.add(status);
    }
  }

  toggleSelectedAllRole(event: any){
    if(event.target.checked){
      this.selectedRole = new Set(this.role);
    } else {
      this.selectedRole.clear();
    }
    this.filteredEmployees();
  }

  toggleSelectedAllStatus(event: any){
    if(event.target.checked){
      this.selectedStatus = new Set(this.status)
    } else {
      this.selectedStatus.clear();
    }
    this.filteredEmployees();
  }

  filteredEmployees() {
    return this.employees.filter(employee => {
      const matchesSearchText = this.searchText === '' || employee.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        employee.mobile.includes(this.searchText);
      const matchesStatus = this.statusFilter === '' || employee.status === this.statusFilter;
      return (matchesSearchText && matchesStatus &&
        (this.selectedRole.size > 0 ? this.selectedRole.has(employee.role): true) &&
        (this.selectedStatus.size > 0 ? this.selectedStatus.has(employee.status): true)
      );
    });
  }

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    id: 'asc',
    name: 'asc',
    email: 'asc',
    gender: 'asc',
    role: 'asc',
    status: 'asc',
  };

  sortTable(column: string) {
    const currentDirection = this.sortDirection[column] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = newDirection; 

    this.employees = this.employees.sort((a, b) => {
      const prop = column as keyof typeof a;
      if (newDirection === 'asc') {
        return a[prop] > b[prop] ? 1 : -1;
      } else {
        return a[prop] < b[prop] ? 1 : -1;
      }
    });
  }

  isSpinning = false;

  refresh() {
    this.isSpinning = true;

    setTimeout(() => {
      this.isSpinning = false;
    }, 1000);

    this.searchText = '';
    this.selectedRole.clear();
    this.selectedStatus.clear();

    this.filteredEmployees();
  }

  // Pagination logic
  get paginatedLoans() {
    const filtered = this.filteredEmployees();
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredEmployees().length / this.itemsPerPage);
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
