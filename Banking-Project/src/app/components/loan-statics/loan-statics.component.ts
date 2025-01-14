import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-statics',
  templateUrl: './loan-statics.component.html',
  styleUrl: './loan-statics.component.css'
})
export class LoanStaticsComponent {
  columnVisibility = {
    fileNo: true,
    fileType: true,
    priority: true,
    status: true,
    assignTo: true,
    startDate: true,
    deadline: true,
    remark: true,
    inSanction: true,
    Sanction:true,
    inDisbursed:true,
    Disbursement:true,
    Rejected:true,
    Completed:true
  };

  tasks = [
    { fileNo: 1, fileType: 'Axis Bank', priority: '1', status: '1', assignTo: '1', inSanction:'1', Sanction:'1',inDisbursed:'1',Disbursement:'1',Rejected:'1',Completed:'1', startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 2, fileType: 'HDFC Bank', priority: '2', status: '2', assignTo: '2',inSanction:'2', Sanction:'2', inDisbursed:'2',Disbursement:'2',Rejected:'2',Completed:'2',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 3, fileType: 'ICICI Bank', priority: '3', status: '3', assignTo: '3',inSanction:'3', Sanction:'3', inDisbursed:'3',Disbursement:'3',Rejected:'3',Completed:'3',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 4, fileType: 'Kotak Mahindra Bank', priority: '4', status: '4', assignTo: '4',inSanction:'4', Sanction:'4', inDisbursed:'4',Disbursement:'4',Rejected:'4',Completed:'4',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 5, fileType: 'Yes Bank', priority: '5', status: '5', assignTo: '5',inSanction:'5', Sanction:'5', inDisbursed:'5',Disbursement:'5',Rejected:'5',Completed:'5',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 6, fileType: 'IndusInd Bank', priority: '6', status: '6', assignTo: '6',inSanction:'5',Sanction:'6', inDisbursed:'5',Disbursement:'6',Rejected:'6',Completed:'6',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 7, fileType: 'Bandhan Bank', priority: '7', status: '7', assignTo: '7',inSanction:'1', Sanction:'7', inDisbursed:'6',Disbursement:'7',Rejected:'7',Completed:'7',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 8, fileType: 'Federal Bank', priority: '8', status: '8', assignTo: '8',inSanction:'2', Sanction:'8', inDisbursed:'7',Disbursement:'8',Rejected:'8',Completed:'8',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 9, fileType: 'IDFC First Bank', priority: '9', status: '9', assignTo: '9',inSanction:'3', Sanction:'9', inDisbursed:'8',Disbursement:'9',Rejected:'9',Completed:'9',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 10, fileType: 'South Indian Bank', priority: '10', status: '10', assignTo: '10',inSanction:'4', Sanction:'10', inDisbursed:'9',Disbursement:'10',Rejected:'10',Completed:'10',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 11, fileType: 'Dhanlaxmi Bank', priority: '1', status: '1', assignTo: '1',inSanction:'5', Sanction:'1', inDisbursed:'10',Disbursement:'1',Rejected:'1',Completed:'1',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 12, fileType: 'Karur Vysya Bank', priority: '2', status: '2', assignTo: '2',inSanction:'1', Sanction:'2', inDisbursed:'1',Disbursement:'2',Rejected:'2',Completed:'2',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 13, fileType: 'ICICI Bank', priority: '3', status: '3', assignTo: '3',inSanction:'2', Sanction:'3', inDisbursed:'2',Disbursement:'3',Rejected:'3',Completed:'3',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 14, fileType: 'Axis Bank', priority: '4', status: '4', assignTo: '4',inSanction:'3', Sanction:'4', inDisbursed:'3',Disbursement:'4',Rejected:'4',Completed:'4',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 15, fileType: 'HDFC Bank', priority: '5', status: '5', assignTo: '5',inSanction:'4', Sanction:'5', inDisbursed:'4',Disbursement:'5',Rejected:'5',Completed:'5',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 16, fileType: 'Kotak Mahindra Bank', priority: '6', status: '16', assignTo: '6',inSanction:'5', Sanction:'6', inDisbursed:'5',Disbursement:'6',Rejected:'6',Completed:'6',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 17, fileType: 'Yes Bank', priority: '7', status: '7', assignTo: '7',inSanction:'1', Sanction:'1', inDisbursed:'6',Disbursement:'7',Rejected:'7',Completed:'7',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 18, fileType: 'IndusInd Bank', priority: '8', status: '8', assignTo: '8',inSanction:'2', Sanction:'7', inDisbursed:'7',Disbursement:'8',Rejected:'8',Completed:'8',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 19, fileType: 'Bandhan Bank', priority: '9', status: '9', assignTo: '9',inSanction:'3', Sanction:'8', inDisbursed:'8',Disbursement:'9',Rejected:'9',Completed:'9',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 20, fileType: 'Federal Bank', priority: '10', status: '10', assignTo: '10',inSanction:'4', Sanction:'9', inDisbursed:'9',Disbursement:'10',Rejected:'10',Completed:'10',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 21, fileType: 'IDFC First Bank', priority: '1', status: '1', assignTo: '1',inSanction:'5', Sanction:'10', inDisbursed:'10',Disbursement:'1',Rejected:'1',Completed:'1',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 22, fileType: 'South Indian Bank', priority: '2', status: '2', assignTo: '2',inSanction:'1', Sanction:'1', inDisbursed:'1',Disbursement:'2',Rejected:'2',Completed:'2',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 23, fileType: 'Dhanlaxmi Bank', priority: '3', status: '3', assignTo: '3',inSanction:'2', Sanction:'2', inDisbursed:'2',Disbursement:'3',Rejected:'3',Completed:'3',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 24, fileType: 'Karur Vysya Bank', priority: '4', status: '4', assignTo: '4',inSanction:'3', Sanction:'3', inDisbursed:'3',Disbursement:'4',Rejected:'4',Completed:'4',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 25, fileType: 'ICICI Bank', priority: '5', status: '5', assignTo: '5',inSanction:'4', Sanction:'4', inDisbursed:'4', Disbursement:'5',Rejected:'5',Completed:'5',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 26, fileType: 'Axis Bank', priority: '6', status: '6', assignTo: '6',inSanction:'5', Sanction:'5', inDisbursed:'5',Disbursement:'6',Rejected:'6',Completed:'6',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 27, fileType: 'HDFC Bank', priority: '7', status: '7', assignTo: '7',inSanction:'1', Sanction:'6', inDisbursed:'6',Disbursement:'7',Rejected:'7',Completed:'7',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 28, fileType: 'Personal Loan', priority: '8', status: '8', assignTo: '8',inSanction:'2', Sanction:'7', inDisbursed:'7',Disbursement:'8',Rejected:'8',Completed:'8',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 29, fileType: 'Kotak Mahindra Bank', priority: '9', status: '9', assignTo: '9',inSanction:'3', Sanction:'8', inDisbursed:'8',Disbursement:'9',Rejected:'9',Completed:'10',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 30, fileType: 'Yes Bank', priority: '10', status: '10', assignTo: '10',inSanction:'4', Sanction:'9', inDisbursed:'9',Disbursement:'10',Rejected:'10',Completed:'1',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },
    { fileNo: 31, fileType: 'IndusInd Bank', priority: '1', status: '11', assignTo: '1',inSanction:'5', Sanction:'10', inDisbursed:'10',Disbursement:'1',Rejected:'1',Completed:'2',startDate: '2023-01-01', deadline: '2023-12-31', remark: 'tsdd', selected: false },

  ];

  filteredTasks = [...this.tasks];
  searchQuery = '';
  selectedFileType = '';
  selectedPriority = '';
  selectedStatus = '';
  selectedAssignTo = '';
  selectedInSanction = '';
  selectedSanction='';
  selectedinDisbursed='';
  selectedDisbursement='';
  selectedRejected='';
  selectedCompleted='';
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

  get inSanction(){
    return[...new Set(this.tasks.map(task => task.inSanction))];
  }

  get Sanction(){
    return[...new Set(this.tasks.map(task => task.Sanction))];
  }

  get inDisbursed(){
    return[...new Set(this.tasks.map(task => task.inDisbursed))];
  }

  get Disbursement(){
    return[...new Set(this.tasks.map(task => task.Disbursement))];
  }

  get Rejected(){
    return[...new Set(this.tasks.map(task => task.Rejected))];
  }

  get Completed(){
    return[...new Set(this.tasks.map(task => task.Completed))];
  }



  // Track selected file types
  selectedFileTypes: Set<string> = new Set();
  selectedPriorities: Set<string> = new Set();
  selectedStatuses: Set<string> = new Set();
  selectedAssignToOptions: Set<string> = new Set();
  selectedInSanctionOption: Set<string> = new Set();
  selectedSanctionOption: Set<string> = new Set();
  selectedinDisbursedOption: Set<string> = new Set();
  selectedDisbursementOption: Set<string> = new Set();
  selectedRejectedOption: Set<string> = new Set();
  selectedCompletedOption: Set<string> = new Set();

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

  toggleInSanctions(inSanction: string) {
    if (this.selectedInSanctionOption.has(inSanction)) {
      this.selectedInSanctionOption.delete(inSanction);
    } else {
      this.selectedInSanctionOption.add(inSanction);
    }
    this.applyFilters();
  }

  toggleSanctions(Sanction: string) {
    if (this.selectedSanctionOption.has(Sanction)) {
      this.selectedSanctionOption.delete(Sanction);
    } else {
      this.selectedSanctionOption.add(Sanction);
    }
    this.applyFilters();
  }

  toggleinDisbursed(inDisbursed: string) {
    if (this.selectedinDisbursedOption.has(inDisbursed)) {
      this.selectedinDisbursedOption.delete(inDisbursed);
    } else {
      this.selectedinDisbursedOption.add(inDisbursed);
    }
    this.applyFilters();
  }

  toggleDisbursement(Disbursement: string) {
    if (this.selectedDisbursementOption.has(Disbursement)) {
      this.selectedDisbursementOption.delete(Disbursement);
    } else {
      this.selectedDisbursementOption.add(Disbursement);
    }
    this.applyFilters();
  }


  toggleRejected(Rejected: string) {
    if (this.selectedRejectedOption.has(Rejected)) {
      this.selectedRejectedOption.delete(Rejected);
    } else {
      this.selectedRejectedOption.add(Rejected);
    }
    this.applyFilters();
  }

  toggleCompleted(Completed: string) {
    if (this.selectedCompletedOption.has(Completed)) {
      this.selectedCompletedOption.delete(Completed);
    } else {
      this.selectedCompletedOption.add(Completed);
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

  toggleSelectAllInSanction(event: any) {
    if (event.target.checked) {
      this.selectedInSanctionOption = new Set(this.inSanction);
    } else {
      this.selectedInSanctionOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllSanction(event: any) {
    if (event.target.checked) {
      this.selectedSanctionOption = new Set(this.Sanction);
    } else {
      this.selectedSanctionOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllinDisbursed(event: any) {
    if (event.target.checked) {
      this.selectedinDisbursedOption = new Set(this.inDisbursed);
    } else {
      this.selectedinDisbursedOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllDisbursement(event: any) {
    if (event.target.checked) {
      this.selectedDisbursementOption = new Set(this.Disbursement);
    } else {
      this.selectedDisbursementOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllRejected(event: any) {
    if (event.target.checked) {
      this.selectedRejectedOption = new Set(this.Rejected);
    } else {
      this.selectedRejectedOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllCompleted(event: any) {
    if (event.target.checked) {
      this.selectedCompletedOption = new Set(this.Completed);
    } else {
      this.selectedCompletedOption.clear();
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
        (this.selectedInSanctionOption.size > 0 ? this.selectedInSanctionOption.has(task.inSanction) : true) &&
        (this.selectedSanctionOption.size > 0 ? this.selectedSanctionOption.has(task.Sanction) : true) &&
        (this.selectedinDisbursedOption.size > 0 ? this.selectedinDisbursedOption.has(task.inDisbursed) : true) &&
        (this.selectedDisbursementOption.size > 0 ? this.selectedDisbursementOption.has(task.Disbursement) : true) &&
        (this.selectedRejectedOption.size > 0 ? this.selectedRejectedOption.has(task.Rejected) : true) &&
        (this.selectedCompletedOption.size > 0 ? this.selectedCompletedOption.has(task.Completed) : true) &&
        

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
    InSanction: 'asc',
    Sanction: 'asc',
    inDisbursed: 'asc',
    Disbursement: 'asc',
    Rejected: 'asc',
    Completed: 'asc'
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


