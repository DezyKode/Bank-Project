import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { TaskTableComponent } from './components/task-table/task-table.component';
import { MasterZoneComponent } from './components/master-zone/master-zone.component';

const routes: Routes = [

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



      // { path: '', redirectTo: '/vreport', pathMatch: 'full' }
//   {path:'',component:VerificationComponent, children:[
//     {path:'vreport',component:VreportComponent},
//     {path:'comments',component:CommentsComponent},


  // {path:'',component:VerificationComponent, children:[
  //   // {path:'vreport',component:VreportComponent},
  // ]}


  // ]},


  

  { path: '', redirectTo: 'verification', pathMatch: 'full' },
  {
    path: 'verification',component: VerificationComponent,
    children: [
      {path:'Overview',component:OverviewComponent},
      {path:"Application-details",component:AplicationDetailsComponent},
      {path:'loan-details',component:LoanDetailsComponent}, 
      {path:"bank",component:BankComponent},
      {path:'loan-offers',component:LoanOffersComponent},
      { path: 'comments', component: CommentsComponent },
      { path: 'vreport', component: VreportComponent },
      {path:'empdoc',component:BrowseempdocumentsComponent},
      ],
    },
 
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
