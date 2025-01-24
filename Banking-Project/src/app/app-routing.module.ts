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
const routes: Routes = [
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
  { path:"DocumentList",component:DocumentsListComponent},
  {path:"create-modal",component:CreateDocumentComponent},
 
 
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
 