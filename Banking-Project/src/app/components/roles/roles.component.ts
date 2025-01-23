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

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get role(){
    return [...new Set(this.roles.map(role => role.name))];
  }

  selectedRole: Set<string> = new Set();

  toggleRole(role: string){
    if(this.selectedRole.has(role)){
      this.selectedRole.delete(role);
    } else {
      this.selectedRole.add(role);
    }
  }

  toggleSelectedAllRole(event: any){
    if(event.target.checked){
      this.selectedRole = new Set(this.role);
    } else {
      this.selectedRole.clear();
    }
    this.filteredRoles();
  }

  filteredRoles() {
    return this.roles.filter(role => {
      const matchesSearchText = this.searchText === '' || role.name.toLowerCase().includes(this.searchText.toLowerCase())
      return (matchesSearchText && 
        (this.selectedRole.size > 0 ? this.selectedRole.has(role.name): true)
      );
    });
  }

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    id: 'asc',
    name: 'asc',
  };

  sortTable(column: string) {
    const currentDirection = this.sortDirection[column] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = newDirection;  // Update direction for the current column

    this.roles = this.roles.sort((a, b) => {
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

    // Optionally, you can call the filteredLoan method here to update the displayed list
    this.filteredRoles();
  }

  // Pagination logic
  get paginatedRoles() {
    const filtered = this.filteredRoles();
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  // Pagination control methods
  get totalPages() {
    return Math.ceil(this.filteredRoles().length / this.itemsPerPage);
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
