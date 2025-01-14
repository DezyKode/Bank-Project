import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Admin/login/login.component';
import { ManagerLoginComponent } from './components/Maneger/maneger-login/manager-login.component';
import { RegistrationComponent } from './components/Employee/registration/registration.component';
// import { leadComponent } from './components/lead/LeadDashboard/lead.component';
import { CheckeligibilityComponent } from './components/checkeligibility/checkeligibility.component';
import { PersonalloanComponent } from './components/personalloan/personalloan.component';
import { NewtaskComponent } from './components/newtask/newtask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// import { CardComponent } from './components/lead/card/card.component';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartsModule } from 'ng2-charts';  // Correct import for ChartsModule in v3.x+

 

// import { CardComponent } from './components/lead/card/card.component';

import { LeadComponent } from './components/lead/LeadDashboard/lead.component';
import { OverviewComponent } from './components/casedetails/overview/overview.component';
import { AplicationDetailsComponent } from './components/casedetails/aplication-details/aplication-details.component';
import { LoanDetailsComponent } from './components/casedetails/loan-details/loan-details.component';
import { DocumentsComponent } from './components/casedetails/documents/documents.component';
import { LoanOffersComponent } from './components/casedetails/loan-offers/loan-offers.component';
import { BankComponent } from './components/casedetails/bank/bank.component';
import { VerificationReportsComponent } from './components/casedetails/verification-reports/verification-reports.component';
import { CommentsComponent } from './components/casedetails/comments/comments.component';
// import { VreportComponent } from './components/verification/verification.component';
import { EmployeeDocumentsComponent } from './components/employee-documents/employee-documents.component';
import { BrowseempdocumentsComponent } from './components/browseempdocuments/browseempdocuments.component';

import { VerificationComponent } from './components/verification/verification.component';
import { VreportComponent } from './components/vreport/vreport.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

import { TablereportComponent } from './components/tablereport/tablereport.component';

import { MasterZoneComponent } from './components/master-zone/master-zone.component';



import { TaskTableComponent } from './components/task-table/task-table.component';


import { CreateDocumentComponent } from './components/masters/create-document/create-document.component';
// import { CreateDocumentComponent } from './components/masters/create-document/create-document.component';
import { DocumentsListComponent } from './components/masters/documents-list/documents-list.component';

import { PersonaldetailsComponent } from './components/personaldetails/personaldetails.component';
import { PdetailsComponent } from './components/pdetails/pdetails.component';


import { TaskReportComponent } from './components/task-report/task-report.component';

import { RouterModule } from '@angular/router';
import { LoanStaticsComponent } from './components/loan-statics/loan-statics.component';
import { LeadDumpReportComponent } from './leadDump-report/lead-dump-report/lead-dump-report.component';
import { ImportFileComponent } from './import-File/import-file/import-file.component';
import { CreateLeadComponent } from './create-lead/create-lead/create-lead.component';

import { TaxmasterComponent } from './components/taxmaster/taxmaster.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RolesComponent } from './components/roles/roles.component';
import { EditRoleComponent } from './components/edit-role/edit-role.component';
import { VerificationapiComponent } from './components/verificationapi/verificationapi.component';
import { CreatenewcaseComponent } from './components/createnewcase/createnewcase.component';
import { LoanrequirementComponent } from './components/loanrequirement/loanrequirement.component';
import { ApplicantdetailsComponent } from './components/applicantdetails/applicantdetails.component';
import { UsersComponent } from './components/users/users.component';
import { BanksTableComponent } from './components/banks-table/banks-table.component';
import { BankCriteriaComponent } from './components/bank-criteria/bank-criteria.component';



// import { ParentComponent } from './components/ashanka/parent/parent.component';
// import { ParentComponent } from './components/ashanka/parent/parent.component';
// import { CreateDocumentComponents } from './components/ashanka/create-document/create-document.component';
// import { DocumentsListComponentss } from './components/ashanka/documents-list/documents-list.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerLoginComponent,
    RegistrationComponent,
    NewtaskComponent,
    LeadComponent,
    CheckeligibilityComponent,
    PersonalloanComponent,
    LeadComponent,
    DocumentsListComponent,
   CreateDocumentComponent,

    OverviewComponent,
    AplicationDetailsComponent,
    LoanDetailsComponent,
    DocumentsComponent,
    LoanOffersComponent,
    BankComponent,
    VerificationReportsComponent,
    CommentsComponent,

   

    EmployeeDocumentsComponent,
    BrowseempdocumentsComponent,

    VerificationComponent,
    VreportComponent,
    CommentsComponent,
    InvoiceComponent,
    TablereportComponent,

    MasterZoneComponent,

    TaskTableComponent,
   
   
 

      PersonaldetailsComponent,
      PdetailsComponent,

    TaskReportComponent,
      LoanStaticsComponent,
      LeadDumpReportComponent,
      ImportFileComponent,
      CreateLeadComponent,

      TaxmasterComponent,
      ChangepasswordComponent,
      EmployeeListComponent,
      RolesComponent,
      EditRoleComponent,
      VerificationapiComponent,
      CreatenewcaseComponent,
      LoanrequirementComponent,
      ApplicantdetailsComponent,
      UsersComponent,
      BanksTableComponent,
      BankCriteriaComponent,




      // ParentComponent,


  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // NgChartsModule,
    CommonModule,
    FormsModule, // If using forms
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
