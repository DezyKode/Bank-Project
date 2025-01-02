import { NgModule } from '@angular/core';
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
// import { CommentsComponent } from './components/comments/comments.component';




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


    OverviewComponent,
    AplicationDetailsComponent,
    LoanDetailsComponent,
    DocumentsComponent,
    LoanOffersComponent,
    BankComponent,
    VerificationReportsComponent,
    CommentsComponent,
    VreportComponent,


    EmployeeDocumentsComponent,
    BrowseempdocumentsComponent,

    VerificationComponent,
    VreportComponent,
    CommentsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    // NgChartsModule,
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
