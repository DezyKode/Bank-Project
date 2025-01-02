import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Admin/login/login.component';
import { ManagerLoginComponent } from './components/Maneger/maneger-login/manager-login.component';
import { RegistrationComponent } from './components/Employee/registration/registration.component';
import { LeadComponent } from './components/lead/LeadDashboard/lead.component';
import { CheckeligibilityComponent } from './components/checkeligibility/checkeligibility.component';
import { NewtaskComponent } from './components/newtask/newtask.component';

// import { VreportComponent } from './components/verification/verification.component';
import { EmployeeDocumentsComponent } from './components/employee-documents/employee-documents.component';
import { BrowseempdocumentsComponent } from './components/browseempdocuments/browseempdocuments.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VreportComponent } from './components/vreport/vreport.component';
import { PersonalloanComponent } from './components/personalloan/personalloan.component';
// import { NewtaskComponent } from './components/newtask/newtask.component';
import { OverviewComponent } from './components/casedetails/overview/overview.component';
import { AplicationDetailsComponent } from './components/casedetails/aplication-details/aplication-details.component';
import { LoanDetailsComponent } from './components/casedetails/loan-details/loan-details.component';
import { BankComponent } from './components/casedetails/bank/bank.component';
import { DocumentsComponent } from './components/casedetails/documents/documents.component';
import { LoanOffersComponent } from './components/casedetails/loan-offers/loan-offers.component';
import { DocumentsComponents } from './components/creatnewlead/documents-1/documents.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'managerlogin',component:ManagerLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'checkeligibility',component:CheckeligibilityComponent},
  {path:'personalloan',component:PersonalloanComponent},
  {path:'lead',component:LeadComponent},

  {path:'newtask',component:NewtaskComponent},
  {path:'Overview',component:OverviewComponent},
  {path:"Application-details",component:AplicationDetailsComponent},
  {path:'loan-details',component:LoanDetailsComponent}, 
  {path:"bank",component:BankComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'loan-offers',component:LoanOffersComponent},
  // {path:'verification',component:VerificationComponent},
  {path:'newtask',component:NewtaskComponent},
  {path:'verify',component:VreportComponent},
  {path:'empdocuments',component:EmployeeDocumentsComponent},
  {path:'empdoc',component:BrowseempdocumentsComponent},
  {path:'verification',component:VerificationComponent},
  {path:'vreport',component:VreportComponent},
  {path:'documents-1',component:DocumentsComponents},
      // { path: '', redirectTo: '/vreport', pathMatch: 'full' }
  {path:'',component:VerificationComponent, children:[
    // {path:'vreport',component:VreportComponent},
  ]}


 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure the RouterModule is initialized with routes
  
exports: [RouterModule],
})
export class AppRoutingModule {}
