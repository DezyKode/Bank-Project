import { Component } from '@angular/core';

@Component({
  selector: 'app-lead-dump-report',
  templateUrl: './lead-dump-report.component.html',
  styleUrl: './lead-dump-report.component.css'
})
export class LeadDumpReportComponent {

  
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
    Completed:true,
    sanctionDate:true,
    sanctionAmount:true,
    bankName:true,
    disbursementDate:true,
    disbursementAmount:true,
  };

  tasks = [
    { fileNo: 1, fileType: 'Emily Roberts', priority: '12345', status: '1', assignTo: 'Home Loan', inSanction:'1', Sanction:'2023-01-01',inDisbursed:'1',Disbursement:'100000',Rejected:'2023-01-01',Completed:'2023-01-01', sanctionDate: '2023-01-01', sanctionAmount: '100000', bankName: 'Axis Bank', disbursementDate:'2023-01-01', disbursementAmount:'100000',  selected: false},
    { fileNo: 2, fileType: 'Jack Harrison', priority: '67890', status: '2', assignTo: 'Car Loan',inSanction:'2', Sanction:'2023-01-01', inDisbursed:'2',Disbursement:'200000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '200000', bankName: 'HDFC Bank', disbursementDate:'2023-01-01', disbursementAmount:'100000',  selected: false},
    { fileNo: 3, fileType: 'Sophie Thompson', priority: '11123', status: '3', assignTo: 'Personal Loan',inSanction:'3', Sanction:'2023-01-01', inDisbursed:'3',Disbursement:'300000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '300000', bankName: 'ICICI Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 4, fileType: 'Ryan Mitchell', priority: '14151', status: '4', assignTo: 'Buisness Loan',inSanction:'4', Sanction:'2023-01-01', inDisbursed:'4',Disbursement:'400000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '400000', bankName: 'Kotak Mahindra Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 5, fileType: 'Olivia Baker', priority: '16171', status: '5', assignTo: 'Home Loan',inSanction:'5', Sanction:'2023-01-01', inDisbursed:'5',Disbursement:'500000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '500000', bankName: 'Yes Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 6, fileType: 'Ethan Clark', priority: '18192', status: '6', assignTo: 'Car Loan',inSanction:'5',Sanction:'2023-01-01', inDisbursed:'5',Disbursement:'600000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '600000', bankName: 'IndusInd Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 7, fileType: 'Chloe Adams', priority: '02122', status: '7', assignTo: 'Personal Loan',inSanction:'1', Sanction:'2023-01-01', inDisbursed:'6',Disbursement:'70000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '700000', bankName: 'Bandhan Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false},
    { fileNo: 8, fileType: 'Liam Walker', priority: '23242', status: '8', assignTo: 'Buisness Loan',inSanction:'2', Sanction:'2023-01-01', inDisbursed:'7',Disbursement:'800000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '500000', bankName: 'Federal Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 9, fileType: 'Ava Johnson', priority: '26272', status: '9', assignTo: 'Home Loan',inSanction:'3', Sanction:'2023-01-01', inDisbursed:'8',Disbursement:'900000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '50000', bankName: 'IDFC First Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 10, fileType: 'Noah Carter', priority: '28293', status: '10', assignTo: 'Car Loan',inSanction:'4', Sanction:'2023-01-01', inDisbursed:'9',Disbursement:'100000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '600000', bankName: 'South Indian Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 11, fileType: 'Emily Roberts', priority: '30313', status: '1', assignTo: 'Personal Loan',inSanction:'5', Sanction:'2023-01-01', inDisbursed:'10',Disbursement:'100000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Dhanlaxmi Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 12, fileType: 'Jack Harrison', priority: '32333', status: '2', assignTo: 'Buisness Loan',inSanction:'1', Sanction:'2023-01-01', inDisbursed:'1',Disbursement:'200000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Karur Vysya Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false},
    { fileNo: 13, fileType: 'Sophie Thompson', priority: '34353', status: '3', assignTo: 'Home Loan',inSanction:'2', Sanction:'2023-01-01', inDisbursed:'2',Disbursement:'3000000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'ICICI Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 14, fileType: 'Ryan Mitchell', priority: '36373', status: '4', assignTo: 'Car Loan',inSanction:'3', Sanction:'2023-01-01', inDisbursed:'3',Disbursement:'400000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Axis Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 15, fileType: 'Olivia Baker', priority: '38394', status: '5', assignTo: 'Personal Loan',inSanction:'4', Sanction:'2023-01-01', inDisbursed:'4',Disbursement:'50000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'HDFC Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 16, fileType: 'Ethan Clark', priority: '40414', status: '16', assignTo: 'Buisness Loan',inSanction:'5', Sanction:'2023-01-01', inDisbursed:'5',Disbursement:'600000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Kotak Mahindra Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 17, fileType: 'Chloe Adams', priority: '42434', status: '7', assignTo: 'Home Loan',inSanction:'1', Sanction:'2023-01-01', inDisbursed:'6',Disbursement:'700000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Yes Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 18, fileType: 'Liam Walker', priority: '44562', status: '8', assignTo: 'Car Loan',inSanction:'2', Sanction:'2023-01-01', inDisbursed:'7',Disbursement:'80000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'IndusInd Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 19, fileType: 'Ava Johnson', priority: '77687', status: '9', assignTo: 'Personal Loan',inSanction:'3', Sanction:'2023-01-01', inDisbursed:'8',Disbursement:'90000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Bandhan Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 20, fileType: 'Noah Carter', priority: '23422', status: '10', assignTo: 'Buisness Loan',inSanction:'4', Sanction:'2023-01-01', inDisbursed:'9',Disbursement:'10000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Federal Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 21, fileType: 'Emily Roberts', priority: '13434', status: '1', assignTo: 'Home Loan',inSanction:'5', Sanction:'2023-01-01', inDisbursed:'10',Disbursement:'10000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'IDFC First Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 22, fileType: 'Jack Harrison', priority: '42324', status: '2', assignTo: 'Car Loan',inSanction:'1', Sanction:'2023-01-01', inDisbursed:'1',Disbursement:'20000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'South Indian Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 23, fileType: 'Sophie Thompson', priority: '76433', status: '3', assignTo: 'Personal Loan',inSanction:'2', Sanction:'2023-01-01', inDisbursed:'2',Disbursement:'30000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Dhanlaxmi Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 24, fileType: 'Ryan Mitchell', priority: '56785', status: '4', assignTo: 'Buisness Loan',inSanction:'3', Sanction:'2023-01-01', inDisbursed:'3',Disbursement:'40000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Karur Vysya Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 25, fileType: 'Olivia Baker', priority: '45867', status: '5', assignTo: 'Home Loan',inSanction:'4', Sanction:'2023-01-01', inDisbursed:'4', Disbursement:'50000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'tsdICICI Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 26, fileType: 'Ethan Clark', priority: '45698', status: '6', assignTo: 'Car Loan',inSanction:'5', Sanction:'2023-01-01', inDisbursed:'5',Disbursement:'60000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Axis Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false},
    { fileNo: 27, fileType: 'Chloe Adams', priority: '87624', status: '7', assignTo: 'Personal Loan',inSanction:'1', Sanction:'2023-01-01', inDisbursed:'6',Disbursement:'70000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'HDFC Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 28, fileType: 'Liam Walker', priority: '45689', status: '8', assignTo: 'Buisness Loan',inSanction:'2', Sanction:'2023-01-01', inDisbursed:'7',Disbursement:'80000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Personal Loan', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 29, fileType: 'Ava Johnson', priority: '87643', status: '9', assignTo: 'Home Loan',inSanction:'3', Sanction:'2023-01-01', inDisbursed:'8',Disbursement:'90000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Kotak Mahindra Ban', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 30, fileType: 'Noah Carter', priority: '98763', status: '10', assignTo: 'Car Loan',inSanction:'4', Sanction:'2023-01-01', inDisbursed:'9',Disbursement:'10000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'Yes Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },
    { fileNo: 31, fileType: 'Emily Roberts', priority: '34553', status: '11', assignTo: 'Personal Loan',inSanction:'5', Sanction:'2023-01-01', inDisbursed:'10',Disbursement:'100000',Rejected:'2023-01-01',Completed:'2023-01-01',sanctionDate: '2023-01-01', sanctionAmount: '800000', bankName: 'IndusInd Bank', disbursementDate:'2023-01-01',disbursementAmount:'100000',  selected: false },

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
  selectedsanctionDate: string | null = null;
  selectedsanctionAmount='';
  selectedbankName='';
  selecteddbursementDate='';
  selecteddbursementAmount='';
  

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

  get sanctionDate(){
    return[...new Set(this.tasks.map(task => task.sanctionDate))];
  }

  get sanctionAmount(){
    return[...new Set(this.tasks.map(task => task.sanctionAmount))];
  }

  get bankName(){
    return[...new Set(this.tasks.map(task => task.bankName))];
  }
  
  get disbursementDate(){
    return[...new Set(this.tasks.map(task => task.disbursementDate))];
  }

  get disbursementAmount(){
    return[...new Set(this.tasks.map(task => task.disbursementAmount))];
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
  selectedsanctionDateOption: Set<string> = new Set();
  selectedsanctionAmountOption: Set<string> = new Set();
  selectedbankNameOption: Set<string> = new Set();
  selecteddisbursementDateOption: Set<string> = new Set();
  selecteddisbursementAmountOption: Set<string> = new Set();

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

  togglesanctionDate(sanctionDate: string) {
    if (this.selectedsanctionDateOption.has(sanctionDate)) {
      this.selectedsanctionDateOption.delete(sanctionDate);
    } else {
      this.selectedsanctionDateOption.add(sanctionDate);
    }
    this.applyFilters();
  }

  togglesanctionAmount(sanctionAmount: string) {
    if (this.selectedsanctionAmountOption.has(sanctionAmount)) {
      this.selectedsanctionAmountOption.delete(sanctionAmount);
    } else {
      this.selectedsanctionAmountOption.add(sanctionAmount);
    }
    this.applyFilters();
  }


  togglebankName(bankName: string) {
    if (this.selectedbankNameOption.has(bankName)) {
      this.selectedbankNameOption.delete(bankName);
    } else {
      this.selectedbankNameOption.add(bankName);
    }
    this.applyFilters();
  }

  toggledisbursementDate(disbursementDate: string) {
    if (this.selecteddisbursementDateOption.has(disbursementDate)) {
      this.selecteddisbursementDateOption.delete(disbursementDate);
    } else {
      this.selecteddisbursementDateOption.add(disbursementDate);
    }
    this.applyFilters();
  }

  toggledisbursementAmount(disbursementAmount: string) {
    if (this.selecteddisbursementAmountOption.has(disbursementAmount)) {
      this.selecteddisbursementAmountOption.delete(disbursementAmount);
    } else {
      this.selecteddisbursementAmountOption.add(disbursementAmount);
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

  toggleSelectAllsanctionDate(event: any) {
    if (event.target.checked) {
      this.selectedsanctionDateOption = new Set(this.sanctionDate);
    } else {
      this.selectedsanctionDateOption.clear();
    }
    this.applyFilters();
  }
  toggleSelectAllsanctionAmount(event: any) {
    if (event.target.checked) {
      this.selectedsanctionAmountOption = new Set(this.sanctionAmount);
    } else {
      this.selectedsanctionDateOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAllbankName(event: any) {
    if (event.target.checked) {
      this.selectedbankNameOption = new Set(this.bankName);
    } else {
      this.selectedbankNameOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAlldisbursementDate(event: any) {
    if (event.target.checked) {
      this.selecteddisbursementDateOption = new Set(this.disbursementDate);
    } else {
      this.selecteddisbursementDateOption.clear();
    }
    this.applyFilters();
  }

  toggleSelectAlldisbursementAmount(event: any) {
    if (event.target.checked) {
      this.selecteddisbursementAmountOption = new Set(this.disbursementAmount);
    } else {
      this.selecteddisbursementAmountOption.clear();
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
        

        (this.selectedsanctionDate ? task.sanctionDate == this.selectedsanctionDate : true) &&
        (this.selectedsanctionAmount ? task.sanctionAmount == this.selectedsanctionAmount : true) &&
        (this.selectedbankName ? task.bankName == this.selectedbankName : true) &&
        (this.selecteddbursementDate ? task.disbursementDate == this.selecteddbursementDate : true) &&
        (this.selecteddbursementAmount ? task.disbursementAmount === this.selecteddbursementAmount : true)
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
    Completed: 'asc',
    sanctionDate:'asc',
    sanctionAmount:'asc',
    disbursementDate:'asc',
    disbursementAmount:'asc'
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




