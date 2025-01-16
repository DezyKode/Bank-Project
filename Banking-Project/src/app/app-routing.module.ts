import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
// Import components
import { LoginComponent } from './components/Admin/login/login.component';
import { ManagerLoginComponent } from './components/Maneger/maneger-login/manager-login.component';
import { RegistrationComponent } from './components/Employee/registration/registration.component';
import { LeadComponent } from './components/lead/LeadDashboard/lead.component';
import { CheckeligibilityComponent } from './components/checkeligibility/checkeligibility.component';
import { NewtaskComponent } from './components/newtask/newtask.component';
import { EmployeeDocumentsComponent } from './components/employee-documents/employee-documents.component';
import { BrowseempdocumentsComponent } from './components/browseempdocuments/browseempdocuments.component';
import { VerificationComponent } from './components/verification/verification.component';
import { PersonalloanComponent } from './components/personalloan/personalloan.component';
import { OverviewComponent } from './components/casedetails/overview/overview.component';
import { AplicationDetailsComponent } from './components/casedetails/aplication-details/aplication-details.component';
import { LoanDetailsComponent } from './components/casedetails/loan-details/loan-details.component';
import { BankComponent } from './components/casedetails/bank/bank.component';
import { DocumentsComponent } from './components/casedetails/documents/documents.component';
import { LoanOffersComponent } from './components/casedetails/loan-offers/loan-offers.component';
import { DocumentsComponents } from './components/creatnewlead/documents-1/documents.component';
import { VreportComponent } from './components/vreport/vreport.component';
import { CommentsComponent } from './components/comments/comments.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { TablereportComponent } from './components/tablereport/tablereport.component';
import { MasterZoneComponent } from './components/master-zone/master-zone.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import{ DocumentsListComponent} from './components/masters/documents-list/documents-list.component'
 
import{CreateDocumentComponent} from './components/masters/create-document/create-document.component'
 
 
import { TaskReportComponent } from './components/task-report/task-report.component';
 
import { PersonaldetailsComponent } from './components/personaldetails/personaldetails.component';
import { PdetailsComponent } from './components/pdetails/pdetails.component';
 import { TaxmasterComponent } from './components/taxmaster/taxmaster.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RolesComponent } from './components/roles/roles.component';
import { EditRoleComponent } from './components/edit-role/edit-role.component';
import { VerificationapiComponent } from './components/verificationapi/verificationapi.component';
import { CreatenewcaseComponent } from './components/createnewcase/createnewcase.component';
import { LoanrequirementComponent } from './components/loanrequirement/loanrequirement.component';
import { ApplicantdetailsComponent } from './components/applicantdetails/applicantdetails.component';
import { CreateLeadComponent } from './create-lead/create-lead/create-lead.component';
import { LeadDumpReportComponent } from './leadDump-report/lead-dump-report/lead-dump-report.component';
import { ImportFileComponent } from './import-File/import-file/import-file.component';
import { LoanStaticsComponent } from './components/loan-statics/loan-statics.component';
import { UsersComponent } from './components/users/users.component';
import { BanksTableComponent } from './components/banks-table/banks-table.component';
import { BankCriteriaComponent } from './components/bank-criteria/bank-criteria.component';

const routes: Routes = [


 
  {path:'tasks-report', component:TaskReportComponent},

  {path:'loan-statics', component:LoanStaticsComponent},
  {path:'task-table', component:TaskTableComponent},
  {path:'leadDump-report', component:LeadDumpReportComponent},
  {path:'import-File', component:ImportFileComponent},
  {path:'create-lead', component:CreateLeadComponent},


  {path:'tasks-report', component:TaskReportComponent},
  {path:'login',component:LoginComponent},
  {path:'managerlogin',component:ManagerLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'checkeligibility',component:CheckeligibilityComponent},
  {path:'personalloan',component:PersonalloanComponent},
  {path:'lead',component:LeadComponent},
  {path:'newtask',component:NewtaskComponent},
  {path:'verify',component:VreportComponent},
  {path:'newtask',component:NewtaskComponent},
  {path:"invoice",component:InvoiceComponent},
  {path:'comments',component:CommentsComponent},
  {path:'Overview',component:OverviewComponent},
  {path:"Application-details",component:AplicationDetailsComponent},
  {path:'loan-details',component:LoanDetailsComponent},
  {path:"bank",component:BankComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'loan-offers',component:LoanOffersComponent},
  {path:'newtask',component:NewtaskComponent},
  {path:'verify',component:VreportComponent},
  {path:'empdocuments',component:EmployeeDocumentsComponent},
  {path:'vreport',component:VreportComponent},
  {path:'documents-1',component:DocumentsComponents},
  {path:'verification',component:VerificationComponent},
  {path:'tasks', component:TaskTableComponent},
  {path:'master-zone', component:MasterZoneComponent},

  {path:"DocumentList",component:DocumentsListComponent},
  {path:"create-modal",component:CreateDocumentComponent},
  {path:"employee-list", component:EmployeeListComponent},
  {path:"roles", component:RolesComponent},
  {path:"edit-role", component:EditRoleComponent},
  {path:"users", component:UsersComponent},
  {path:"bank-details", component:BanksTableComponent},
  {path:"bank-criteria", component:BankCriteriaComponent},
 
 
  {
    path: 'verification', component: VerificationComponent,
    children: [
      { path: 'Overview', component: OverviewComponent },
      { path: 'Application-details', component: AplicationDetailsComponent },
      { path: 'loan-details', component: LoanDetailsComponent },
      { path: 'bank', component: BankComponent },
      { path: 'loan-offers', component: LoanOffersComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'vreport', component: VreportComponent },
      { path: 'empdoc', component: BrowseempdocumentsComponent },
    ]
  },
 
  { path: 'tabelreport', component: TablereportComponent },

 
  {
    path:'personaldetails',component:PersonaldetailsComponent,
    children: [
      { path: 'pdetails', component: PdetailsComponent },
       {path:'taxmaster',component:TaxmasterComponent},
      {path:'changepassword',component:ChangepasswordComponent},
      {path:'verificationapi',component:VerificationapiComponent},

    ]
  },

  {
    path:'createnewcase',component:CreatenewcaseComponent,
    children:[
      {path:'loanrequirement',component:LoanrequirementComponent},
      {path:'applicantdetails',component:ApplicantdetailsComponent},

    ]
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
 