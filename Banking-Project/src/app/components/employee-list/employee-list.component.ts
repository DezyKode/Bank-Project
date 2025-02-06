import { Component } from '@angular/core';
import { AddEmpService } from '../../Service/AddEmployee/add-emp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(private addEmpService: AddEmpService) { }

  searchText: string = '';
  statusFilter: string = '';

  employeeId: number = 0; // You should set this when selecting an employee
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  employees: any[] = [];

  ngOnInit() {
    this.getAllEmployee();
  }

  currentPage: number = 1;
  itemsPerPage: number = 10;

  getAllEmployee() {
    this.addEmpService.getEmployees().subscribe((res) => {
      this.employees = res;
    })
  }

  // Function to open the modal and set the employeeId
  openModal(id: number): void {
    this.employeeId = id;
    this.newPassword = '';
    this.confirmPassword = '';
    this.successMessage = '';
    this.errorMessage = '';
  }

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  // Function to submit the password change
  updatePassword(form: NgForm): void {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      this.successMessage = '';
      return;
    }

    const employee = {
      password: this.newPassword, // Pass the new password here
      confirm_password: this.confirmPassword
    };

    if (this.newPassword !== '' && this.confirmPassword !== '') {
      this.addEmpService.updateEmpPassword(this.employeeId, employee).subscribe(
        response => {
          // Handle successful response
          console.log('Password updated successfully!', response);
          this.successMessage = 'Password updated successfully!';
          this.newPassword = '';
          this.confirmPassword = '';
          this.errorMessage = '';
          // Close the modal here if needed
        },
        error => {
          // Handle error response
          console.error('Error updating password', error);
          this.errorMessage = 'An error occurred while updating the password.';
        }
      );
    } else {
      this.errorMessage = 'Enter Password and Confirm Password'
    }
  }

  // Toggle employee status between ACTIVE and INACTIVE
  toggledStatus(employee: any): void {
    if (confirm("You want to upadate Status")) {
      const updatedEmployee = { ...employee }; // Create a copy of the employee object
      updatedEmployee.status = updatedEmployee.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'; // Toggle the status
      // Call the update service to update the status on the backend
      this.addEmpService.updateEmpStatus(updatedEmployee.id, updatedEmployee).subscribe(
        response => {
          console.log('Status updated successfully', response);
          this.getAllEmployee();
          // Optionally, update the UI with the new status if needed
        },
        error => {
          console.error('Error updating status', error);
          // Handle error, maybe show an alert
        }
      );
    }
  }

  get role() {
    return [...new Set(this.employees.map(employees => employees.role))];
  }

  get status() {
    return [...new Set(this.employees.map(employees => employees.status))];
  }

  selectedRole: Set<string> = new Set();
  selectedStatus: Set<string> = new Set();

  toggleRole(role: string) {
    if (this.selectedRole.has(role)) {
      this.selectedRole.delete(role);
    } else {
      this.selectedRole.add(role);
    }
  }

  toggleStatus(status: string) {
    if (this.selectedStatus.has(status)) {
      this.selectedStatus.delete(status);
    } else {
      this.selectedStatus.add(status);
    }
  }

  toggleSelectedAllRole(event: any) {
    if (event.target.checked) {
      this.selectedRole = new Set(this.role);
    } else {
      this.selectedRole.clear();
    }
    this.filteredEmployees();
  }

  toggleSelectedAllStatus(event: any) {
    if (event.target.checked) {
      this.selectedStatus = new Set(this.status)
    } else {
      this.selectedStatus.clear();
    }
    this.filteredEmployees();
  }

  filteredEmployees() {
    return this.employees.filter(employee => {
      const matchesSearchText = this.searchText === '' || employee.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        employee.email_ID.toLowerCase().includes(this.searchText.toLowerCase()) ||
        employee.mobile_No.includes(this.searchText);
      const matchesStatus = this.statusFilter === '' || employee.status === this.statusFilter;
      return (matchesSearchText && matchesStatus &&
        (this.selectedRole.size > 0 ? this.selectedRole.has(employee.role) : true) &&
        (this.selectedStatus.size > 0 ? this.selectedStatus.has(employee.status) : true)
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
