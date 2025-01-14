import { Component } from '@angular/core';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent {

  columnVisibility = {
    fileNo: true,
    fileType: true,
    priority: true,
    status: true,
    assignTo: true,
    startDate: true,
    deadline: true,
    remark: true
  };

  tasks = [
    { fileNo: 1, fileType: 'Personal Loan', priority: 'High', status: 'Completed', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 2, fileType: 'Car Loan', priority: 'Low', status: 'Inprogress', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 3, fileType: 'Home Loan', priority: 'Medium', status: 'Rejected', assignTo: 'MS Dhoni', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 4, fileType: 'Business', priority: 'Critical', status: 'To Pick', assignTo: 'KL Rahul', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 5, fileType: 'Home Loan', priority: 'High', status: 'Completed', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 6, fileType: 'Car Loan', priority: 'Low', status: 'Inprogress', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 7, fileType: 'Personal Loan', priority: 'Medium', status: 'Rejected', assignTo: 'MS Dhoni', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 8, fileType: 'Business', priority: 'Critical', status: 'To Pick', assignTo: 'KL Rahul', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 9, fileType: 'Home Loan', priority: 'High', status: 'Completed', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 10, fileType: 'Car Loan', priority: 'Low', status: 'Inprogress', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 11, fileType: 'Personal Loan', priority: 'Critical', status: 'To Pick', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 12, fileType: 'Car Loan', priority: 'Medium', status: 'Rejected', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 13, fileType: 'Personal Loan', priority: 'Low', status: 'Inprogress', assignTo: 'MS Dhoni', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 14, fileType: 'Car Loan', priority: 'High', status: 'Completed', assignTo: 'KL Rahul', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 15, fileType: 'Business', priority: 'Critical', status: 'To Pick', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 16, fileType: 'Car Loan', priority: 'Medium', status: 'Rejected', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 17, fileType: 'Personal Loan', priority: 'Low', status: 'Inprogress', assignTo: 'MS Dhoni', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 18, fileType: 'Car Loan', priority: 'High', status: 'Completed', assignTo: 'KL Rahul', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 19, fileType: 'Personal Loan', priority: 'Critical', status: 'Inprogress', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 20, fileType: 'Business', priority: 'Medium', status: 'Completed', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 21, fileType: 'Car Loan', priority: 'Low', status: 'Inprogress', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 22, fileType: 'Personal Loan', priority: 'Medium', status: 'Rejected', assignTo: 'MS Dhoni', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 23, fileType: 'Business', priority: 'Critical', status: 'To Pick', assignTo: 'KL Rahul', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 24, fileType: 'Home Loan', priority: 'High', status: 'Completed', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 25, fileType: 'Car Loan', priority: 'Low', status: 'Inprogress', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 26, fileType: 'Personal Loan', priority: 'Critical', status: 'To Pick', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 27, fileType: 'Car Loan', priority: 'Medium', status: 'Rejected', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 28, fileType: 'Personal Loan', priority: 'Low', status: 'Inprogress', assignTo: 'MS Dhoni', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 29, fileType: 'Car Loan', priority: 'High', status: 'Completed', assignTo: 'KL Rahul', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 30, fileType: 'Business', priority: 'Critical', status: 'To Pick', assignTo: 'Virat Kohli', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 31, fileType: 'Car Loan', priority: 'Medium', status: 'Rejected', assignTo: 'Rohit Sharma', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },

  ];

  filteredTasks = [...this.tasks];
  searchQuery = '';
  selectedFileType = '';
  selectedPriority = '';
  selectedStatus = '';
  selectedAssignTo = '';
  selectedStartDate: string | null = null;
  selectedDeadline: string | null = null;

  currentPage = 1;
  itemsPerPage = 10;
  totalPages = Math.ceil(this.filteredTasks.length / this.itemsPerPage);

  selectAll = false;
  columnSelectAll = true;
  selectedRowsCount = 0;

  get fileTypes() {
    return [...new Set(this.tasks.map(task => task.fileType))];
  }

  get priorities() {
    return [...new Set(this.tasks.map(task => task.priority))];
  }

  get statuses() {
    return [...new Set(this.tasks.map(task => task.status))];
  }

  get assignToOptions() {
    return [...new Set(this.tasks.map(task => task.assignTo))];
  }

  // Track selected file types
  selectedFileTypes: Set<string> = new Set();
  selectedPriorities: Set<string> = new Set();
  selectedStatuses: Set<string> = new Set();
  selectedAssignToOptions: Set<string> = new Set();

  // Methods to toggle individual checkboxes
  toggleFileType(fileType: string) {
    if (this.selectedFileTypes.has(fileType)) {
      this.selectedFileTypes.delete(fileType);
    } else {
      this.selectedFileTypes.add(fileType);
    }
    this.applyFilters();
  }

  togglePriority(priority: string) {
    if (this.selectedPriorities.has(priority)) {
      this.selectedPriorities.delete(priority);
    } else {
      this.selectedPriorities.add(priority);
    }
    this.applyFilters();
  }

  toggleStatus(status: string) {
    if (this.selectedStatuses.has(status)) {
      this.selectedStatuses.delete(status);
    } else {
      this.selectedStatuses.add(status);
    }
    this.applyFilters();
  }

  toggleAssignTo(assignTo: string) {
    if (this.selectedAssignToOptions.has(assignTo)) {
      this.selectedAssignToOptions.delete(assignTo);
    } else {
      this.selectedAssignToOptions.add(assignTo);
    }
    this.applyFilters();
  }

  // Methods to select or deselect all options for each category
  toggleSelectAllFileTypes(event: any) {
    if (event.target.checked) {
      this.selectedFileTypes = new Set(this.fileTypes);
    } else {
      this.selectedFileTypes.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllPriorities(event: any) {
    if (event.target.checked) {
      this.selectedPriorities = new Set(this.priorities);
    } else {
      this.selectedPriorities.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllStatuses(event: any) {
    if (event.target.checked) {
      this.selectedStatuses = new Set(this.statuses);
    } else {
      this.selectedStatuses.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllAssignTo(event: any) {
    if (event.target.checked) {
      this.selectedAssignToOptions = new Set(this.assignToOptions);
    } else {
      this.selectedAssignToOptions.clear();
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filteredTasks = this.tasks.filter(task => {
      const queryLower = this.searchQuery ? this.searchQuery.toLowerCase() : '';
      const queryUpper = this.searchQuery ? this.searchQuery.toUpperCase() : '';

      return (
        (this.searchQuery ? task.fileType.toLowerCase().includes(this.searchQuery) || task.fileType.toUpperCase().includes(queryUpper) ||
          task.priority.toLowerCase().includes(this.searchQuery) || task.priority.toUpperCase().includes(queryUpper) ||
          task.status.toLowerCase().includes(this.searchQuery) || task.status.toUpperCase().includes(queryUpper) ||
          task.assignTo.toLowerCase().includes(this.searchQuery) || task.assignTo.toUpperCase().includes(this.searchQuery) : true) &&

        (this.selectedFileTypes.size > 0 ? this.selectedFileTypes.has(task.fileType) : true) &&
        (this.selectedPriorities.size > 0 ? this.selectedPriorities.has(task.priority) : true) &&
        (this.selectedStatuses.size > 0 ? this.selectedStatuses.has(task.status) : true) &&
        (this.selectedAssignToOptions.size > 0 ? this.selectedAssignToOptions.has(task.assignTo) : true) &&

        (this.selectedStartDate ? task.startDate == this.selectedStartDate : true) &&
        (this.selectedDeadline ? task.deadline === this.selectedDeadline : true)
      );
    });
    this.totalPages = Math.ceil(this.filteredTasks.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  sortDirection: { [key: string]: 'asc' | 'desc' } = {
    fileNo: 'asc',
    fileType: 'asc',
    priority: 'asc',
    status: 'asc',
    assignTo: 'asc',
    startDate: 'asc',
    deadline: 'asc',
    
  };

  sortTable(column: string) {
    const currentDirection = this.sortDirection[column] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    this.sortDirection[column] = newDirection;  // Update direction for the current column

    this.filteredTasks = this.filteredTasks.sort((a, b) => {
      const prop = column as keyof typeof a;
      if (newDirection === 'asc') {
        return a[prop] > b[prop] ? 1 : -1;
      } else {
        return a[prop] < b[prop] ? 1 : -1;
      }
    });
  }

  // Getter to count selected checkboxes
  get columnSelectedCount(): number {
    return Object.values(this.columnVisibility).filter(value => value).length;
  }

  columnToggleSelectAll() {
    // Iterate over the keys of `columnVisibility` using `keyof` for correct typing
    for (const key of Object.keys(this.columnVisibility) as (keyof typeof this.columnVisibility)[]) {
      this.columnVisibility[key] = this.columnSelectAll;
    }
  }

  onItemsPerPageChange() {
    this.applyFilters();  // Re-apply filters to update the pagination
  }

  // Method to enable or disable buttons based on selection
  get areButtonsEnabled() {
    return this.selectedRowsCount > 0;
  }

  get rowSelectedCount(): number {
    return Object.values(this.filteredTasks).filter(task => task.selected).length;
  }

  get rowCount(): number {
    return Object.values(this.filteredTasks).filter(value => value).length;
  }

  // Toggle Select All (checkbox in the header)
  toggleSelectAll() {
    this.filteredTasks.forEach(task => task.selected = this.selectAll);
    this.updateSelectAll();
  }

  // Handle Delete action
  deleteSelectedTasks() {
    const selectedTasks = this.filteredTasks.filter(task => task.selected);
    console.log(`Deleted ${selectedTasks.length} Tasks`);
    // confirm(`Deleted ${selectedTasks.length} Tasks`);
    // Add logic to delete tasks here
    this.selectedRowsCount = 0; // Reset the count
  }

  // Handle Archive action
  archiveSelectedTasks() {
    const selectedTasks = this.filteredTasks.filter(task => task.selected);
    console.log(`Archived ${selectedTasks.length} Tasks`);
    // confirm(`Archived ${selectedTasks.length} Tasks`);
    // Add logic to archive tasks here
    this.selectedRowsCount = 0; // Reset the count
  }

  // Update selected row count
  updateSelectAll() {
    this.selectedRowsCount = this.filteredTasks.filter(task => task.selected).length;
    this.selectAll = this.filteredTasks.every(task => task.selected);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get paginatedTasks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredTasks.slice(startIndex, endIndex);
  }
}
