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
import { LoanDetailsComponents } from './components/casedetails/loan-details/loan-details.component';
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
import { LoanComponent } from './components/loan/loan.component';
import { CreatenewcaseDocumentComponent } from './components/createnewcase-document/createnewcase-document.component';
import { CreatenewcaseProvisionalLetterComponent } from './components/createnewcase-provisional-letter/createnewcase-provisional-letter.component';
import { CreateLeadComponent } from './create-lead/create-lead/create-lead.component';
import { LeadDumpReportComponent } from './leadDump-report/lead-dump-report/lead-dump-report.component';
import { ImportFileComponent } from './import-File/import-file/import-file.component';
import { LoanStaticsComponent } from './components/loan-statics/loan-statics.component';
import { UsersComponent } from './components/users/users.component';
import { BanksTableComponent } from './components/banks-table/banks-table.component';
import { BankCriteriaComponent } from './components/bank-criteria/bank-criteria.component';
// import { MISReportComponent } from './components/mis-report/mis-report.component';
import { LoansComponent } from './components/loans/loans.component';
import { EditDocumentComponent } from './components/masters/edit-document/edit-document.component';
import { DocumentListComponent } from './components/masters/document-list/document-list.component';

import {DetailsComponent} from './components/Admin/leads/details/details.component';
import {LoanDetails} from './components/Admin/leads/loan-details/loan-details.component';
import {ApplicationDetailsComponent} from './components/Admin/leads/application-details/application-details.component'
import{OverViewComponent} from './components/Admin/leads/over-view/over-view.component';
import{BankComponents} from './components/Admin/leads/bank/bank.component'


import { PayoutStructureComponent } from './components/payout-structure/payout-structure.component';
import { ConnectorComponent } from './components/connector/connector.component';
import { CreateConnectorComponent } from './components/create-connector/create-connector.component';
import { EditBankPayoutComponent } from './components/edit-bank-payout/edit-bank-payout.component';
import { LoanAgeingReportComponent } from './components/loan-ageing-report/loan-ageing-report.component';
import { RevenueReconReportComponent } from './components/revenue-recon-report/revenue-recon-report.component';

import { AddDisbursementComponent } from './components/add-disbursement/add-disbursement.component';
import { SubmitRemarkComponent } from './components/submit-remark/submit-remark.component';
import { AddShortCloseComponent } from './components/add-short-close/add-short-close.component';
import { NewRacComponent } from './components/new-rac/new-rac.component';

import {LoandisburmentComponent} from './components/Admin/LoanDisburment/loandisburment/loandisburment.component';
import {Loan} from './components/Admin/LoanDisburment/loan-details/loan-details.component';
import {Application} from './components/Admin/LoanDisburment/application-details/application-details.component';
import{OverView} from './components/Admin/LoanDisburment/over-view/over-view.component';
import{Bank} from './components/Admin/LoanDisburment/bank/bank.component'
import {LoanRejectedComponent} from './components/Admin/LoanRejected/loan-rejected/loan-rejected.component'
// import {LoanRejected} from './components/Admin/LoanRejected/loanRejected/loan-rejected.component';
import {ApplicationRejectedComponent} from './components/Admin/LoanRejected/application-rejected/application-rejected.component';
import { OverViewRejectedComponent } from './components/Admin/LoanRejected/over-view-rejected/over-view-rejected.component';
import { BankRejectedComponent } from './components/Admin/LoanRejected/bank-rejected/bank-rejected.component';
import { LoanDetailsRejectedComponent } from './components/Admin/LoanRejected/loan-details-rejected/loan-details-rejected.component';
import { LoanOffersRejectedComponent } from './components/Admin/LoanRejected/loan-offers-rejected/loan-offers-rejected.component';
import {LoansallComponent} from'./components/Admin/LoansAll/loansall/loansall.component'
import {OverviewallComponent} from './components/Admin/LoansAll/overviewall/overviewall.component'
import{LoanOffersAllComponent} from "./components/Admin/LoansAll/loan-offers-all/loan-offers-all.component"
import{LoanDetailsAllComponent} from './components/Admin/LoansAll/loan-details-all/loan-details-all.component';
import {BankallComponent} from "./components/Admin/LoansAll/bankall/bankall.component";

import { ApplicationAllComponent } from "./components/Admin/LoansAll/application-all/application-all.component";

import{LoansCompletedComponent} from './components/Admin/LoansCompleted/loans-completed/loans-completed.component';
import { ApplicationCompletedComponent } from  './components/Admin/LoansCompleted/application-completed/application-completed.component'
import {OverviewCompletedComponent} from './components/Admin/LoansCompleted/overview-completed/overview-completed.component';
import  {LoanOffersCompletedComponent} from './components/Admin/LoansCompleted/loan-offers-completed/loan-offers-completed.component';
import {LoanDetailsCompletedComponent} from './components/Admin/LoansCompleted/loan-details-completed/loan-details-completed.component';
import { BankCompletedComponent } from './components/Admin/LoansCompleted/bank-completed/bank-completed.component';
const routes: Routes = [



 
  {path:'tasks-report', component:TaskReportComponent},
  { path: 'edit-document', component: EditDocumentComponent },
  {path:'loan-statics', component:LoanStaticsComponent},
  {path:'task-table', component:TaskTableComponent},
  {path:'leadDump-report', component:LeadDumpReportComponent},
  {path:'import-File', component:ImportFileComponent},
  {path:'create-lead', component:CreateLeadComponent},
  {path:'connector', component:ConnectorComponent},
  {path:'payout-structure', component:PayoutStructureComponent},
  {path:'create-connector', component:CreateConnectorComponent},
  {path:'edit-bank-payout', component:EditBankPayoutComponent},
  {path:'loan-ageing-report', component:LoanAgeingReportComponent},
  {path:'revenue-recon-report', component:RevenueReconReportComponent},
  {path:'add-disbursement', component:AddDisbursementComponent},
  {path:'submit-remark', component:SubmitRemarkComponent},
  {path:'add-short-close', component:AddShortCloseComponent},
  {path:'new-rac', component:NewRacComponent},
  
  


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
  // {path:'loan-details',component:LoanDetailsComponents},
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
  {path:"DocumentListComponent",component:DocumentListComponent},
  // {path:"mis-report", component:MISReportComponent},
  {path:"loans", component:LoansComponent},
 {path:"DetailsComponent",component:DetailsComponent, 
  children: [{path:"over-view",component:OverViewComponent},
    {path:"application-details",component:ApplicationDetailsComponent},
    {path:"loan-details",component:LoanDetails},
    {path:"Bank",component:BankComponents}

 ]}
 ,{path:"loandisburment",component:LoandisburmentComponent, 
  children: [{path:"over-view",component:OverView},
    {path:"application-details",component:Application},
    {path:"loan-details",component:Loan},
    {path:"Bank",component:Bank}

 ]}
 ,{path:"LoanRejectedComponent",component:LoanRejectedComponent, 
  children: [{path:"over-view",component:OverViewRejectedComponent},
    {path:"application-details",component:ApplicationRejectedComponent},
    {path:"loan-details",component:LoanDetailsRejectedComponent},
    {path:"Bank",component:BankRejectedComponent},
    {path:"loan-offers",component:LoanOffersRejectedComponent}

 ]}
 ,{path:"LoansallComponent",component:LoansallComponent, 
  children: [{path:"over-view",component:OverviewallComponent},
    {path:"application-details",component:ApplicationAllComponent},
    {path:"loan-details",component:LoanDetailsAllComponent},
    {path:"Bank",component:BankallComponent},
    {path:"loan-offers",component:LoanOffersAllComponent}

 ]}
 
 ,{path:"LoansCompletedComponent",component:LoansCompletedComponent, 
  children: [{path:"over-view",component:OverviewCompletedComponent},
    {path:"application-details",component:ApplicationCompletedComponent},
    {path:"loan-details",component:LoanDetailsCompletedComponent},
    {path:"Bank",component:BankCompletedComponent},
    {path:"loan-offers",component:LoanOffersCompletedComponent}

 ]}
 ,
  {
    path: 'verification', component: VerificationComponent,
    children: [
      { path: 'Overview', component: OverviewComponent },
      { path: 'Application-details', component: AplicationDetailsComponent },
      { path: 'loan-details', component: LoanDetailsComponents },
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

  {path:'createbank',component:CreatebankComponent},
  {path:'mastersproject',component:MastersprojectComponent},
  {path:'table',component:TableComponent},
  {path:'table2',component:Table2Component},
  {path:'mastersprojectform',component:MastersprojectformComponent},
  {path:'adharmodal',component:AdharmodalComponent},
  {path:'gstin',component:GstinComponent},
  {path:'itrmodal',component:ItrmodalComponent},
  {path:'drivingmodal',component:DrivingmodalComponent},
  {path:'cinmodal',component:CinmodalComponent},
  {path:'pancardmodal',component:PancardmodalComponent},

  {
    path:'createNewCase',component:CreatenewcaseComponent,
    children:[
      {path:'loanrequirement',component:LoanrequirementComponent},
      {path:'applicantdetails',component:ApplicantdetailsComponent},
      {path:'loan',component:LoanComponent},
      {path:'createnewcaseDocument',component:CreatenewcaseDocumentComponent},
      {path:'createnewcaseProvisionalLetter',component:CreatenewcaseProvisionalLetterComponent},
    

    ]
  },

  {path:'createnewcase',component:CreatenewcaseComponent },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule],
})
export class AppRoutingModule {}
 