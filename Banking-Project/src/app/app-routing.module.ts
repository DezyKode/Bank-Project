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
import { VreportComponent } from './components/vreport/vreport.component';
import { OverviewComponent } from './components/casedetails/overview/overview.component';
import { AplicationDetailsComponent } from './components/casedetails/aplication-details/aplication-details.component';
import { LoanDetailsComponent } from './components/casedetails/loan-details/loan-details.component';
import { BankComponent } from './components/casedetails/bank/bank.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'managerlogin', component: ManagerLoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'checkeligibility', component: CheckeligibilityComponent },
  { path: 'personalloan', component: PersonalloanComponent },
  { path: 'lead', component: LeadComponent },
  { path: 'newtask', component: NewtaskComponent },
  { path: 'verify', component: VreportComponent },
  { path: 'empdocuments', component: EmployeeDocumentsComponent },
  { path: 'empdoc', component: BrowseempdocumentsComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'application-details', component: AplicationDetailsComponent },
  { path: 'loan-details', component: LoanDetailsComponent },
  { path: 'bank', component: BankComponent },
  { path: '', redirectTo: 'verification', pathMatch: 'full' },
  {
    path: 'verification',
    component: VerificationComponent,
    children: [
      { path: 'comments', component: CommentsComponent },
      { path: 'vreport', component: VreportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
