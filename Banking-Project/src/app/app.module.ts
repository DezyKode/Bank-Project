import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { LoanDetailsComponents } from './components/casedetails/loan-details/loan-details.component';
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

import {LoanDetails} from './components/Admin/leads/loan-details/loan-details.component'
import { TaskReportComponent } from './components/task-report/task-report.component';


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

import { ConnectorComponent } from './components/connector/connector.component';
import { PayoutStructureComponent } from './components/payout-structure/payout-structure.component';
import { CreateConnectorComponent } from './components/create-connector/create-connector.component';
import { EditBankPayoutComponent } from './components/edit-bank-payout/edit-bank-payout.component';
import { LoanAgeingReportComponent } from './components/loan-ageing-report/loan-ageing-report.component';
import { RevenueReconReportComponent } from './components/revenue-recon-report/revenue-recon-report.component';

import { CreatebankComponent } from './components/createbank/createbank.component';
import { MastersprojectComponent } from './components/mastersproject/mastersproject.component';
import { TableComponent } from './components/table/table.component';
import { Table2Component } from './components/table2/table2.component';
import { MastersprojectformComponent } from './components/mastersprojectform/mastersprojectform.component';
import { AdharmodalComponent } from './components/adharmodal/adharmodal.component';
import { GstinComponent } from './components/gstin/gstin.component';
import { ItrmodalComponent } from './components/itrmodal/itrmodal.component';
import { DrivingmodalComponent } from './components/drivingmodal/drivingmodal.component';
import { CinmodalComponent } from './components/cinmodal/cinmodal.component';
import { PancardmodalComponent } from './components/pancardmodal/pancardmodal.component';
import { CreateNewCaseComponent } from './components/create-new-case/create-new-case.component';
import { LoanComponent } from './components/loan/loan.component';
import { CreatenewcaseDocumentComponent } from './components/createnewcase-document/createnewcase-document.component';
import { CreatenewcaseProvisionalLetterComponent } from './components/createnewcase-provisional-letter/createnewcase-provisional-letter.component';
import { CreanewcaseApplicantDerailsComponent } from './components/createnewcaseApplicantDetails/creanewcase-applicant-derails.component';
import { CreateApplicantComponent } from './components/create-applicant/create-applicant.component';
import { UsersComponent } from './components/users/users.component';
import { BanksTableComponent } from './components/banks-table/banks-table.component';
import { BankCriteriaComponent } from './components/bank-criteria/bank-criteria.component';
// import { MISReportComponent } from './components/mis-report/mis-report.component';
import { LoansComponent } from './components/loans/loans.component';
import { EditDocumentComponent } from './components/masters/edit-document/edit-document.component';
import { DocumentListComponent } from './components/masters/document-list/document-list.component';

import { AddDisbursementComponent } from './components/add-disbursement/add-disbursement.component';
import { SubmitRemarkComponent } from './components/submit-remark/submit-remark.component';
import { AddShortCloseComponent } from './components/add-short-close/add-short-close.component';
import { NewRacComponent } from './components/new-rac/new-rac.component';
// import { AddShortCloseComponent } from './componenets/add-short-close/add-short-close.component';

import { DetailsComponent } from './components/Admin/leads/details/details.component';
import { OverViewComponent } from './components/Admin/leads/over-view/over-view.component';
import { ApplicationDetailsComponent } from './components/Admin/leads/application-details/application-details.component';
import{BankComponents} from './components/Admin/leads/bank/bank.component';
import { LoandisburmentComponent } from './components/Admin/LoanDisburment/loandisburment/loandisburment.component';
import {Loan} from './components/Admin/LoanDisburment/loan-details/loan-details.component';
import {OverView} from './components/Admin/LoanDisburment/over-view/over-view.component';
import {Bank} from './components/Admin/LoanDisburment/bank/bank.component';
// import { LoanDetailsComponent } from './components/Admin/LoanRejected/loan-details/loan-details.component';
// import { LoanRejectedComponent } from './components/Admin/LoanRejected/loan-rejected/loan-rejected.component'
// import{Apllication} from './components/Admin/LoanDisburment/application-details/application-details.component';
import {LoanRejectedComponent} from './components/Admin/LoanRejected/loan-rejected/loan-rejected.component'


import { BankRejectedComponent } from './components/Admin/LoanRejected/bank-rejected/bank-rejected.component';

// import { BankrejectedComponent } from './components/Admin/LoanRejected/bankrjected/bankrejected.component';
import { LoanOffersRejectedComponent } from './components/Admin/LoanRejected/loan-offers-rejected/loan-offers-rejected.component';
import { OverViewRejectedComponent } from './components/Admin/LoanRejected/over-view-rejected/over-view-rejected.component';
import { LoanDetailsRejectedComponent } from './components/Admin/LoanRejected/loan-details-rejected/loan-details-rejected.component';
import { ApplicationRejectedComponent } from './components/Admin/LoanRejected/application-rejected/application-rejected.component'








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
  Loan,OverView,Bank,
    OverviewComponent,
    AplicationDetailsComponent,
    LoanDetailsComponents,
    DocumentsComponent,
    LoanOffersComponent,
    BankComponent,
    VerificationReportsComponent,
    CommentsComponent,
    LoanDetails,
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
      ConnectorComponent,
      PayoutStructureComponent,
      CreateConnectorComponent,
      EditBankPayoutComponent,
      LoanAgeingReportComponent,
      RevenueReconReportComponent,
      CreatebankComponent,
      MastersprojectComponent,
      TableComponent,
      Table2Component,
      MastersprojectformComponent,
      AdharmodalComponent,
      GstinComponent,
      ItrmodalComponent,
      DrivingmodalComponent,
      CinmodalComponent,
      PancardmodalComponent,
      CreateNewCaseComponent,
      LoanComponent,
      CreatenewcaseDocumentComponent,
      CreatenewcaseProvisionalLetterComponent,
      CreanewcaseApplicantDerailsComponent,
      CreateApplicantComponent,




      UsersComponent,
      BanksTableComponent,
      BankCriteriaComponent,
      // MISReportComponent,
      LoansComponent,
      EditDocumentComponent,
      DocumentListComponent,

      AddDisbursementComponent,
      SubmitRemarkComponent,
      AddShortCloseComponent,
      NewRacComponent,
      /* AddShortCloseComponent, */






      DetailsComponent,
      OverViewComponent,
      ApplicationDetailsComponent,
      BankComponents,
      LoandisburmentComponent,
      // LoanDetailsComponent,
      LoanRejectedComponent,
      BankRejectedComponent,
      LoanOffersRejectedComponent,
      OverViewRejectedComponent,
      LoanDetailsRejectedComponent,
      ApplicationRejectedComponent,

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
  // schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

  bootstrap: [AppComponent]
})
export class AppModule { }
