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
// <<<<<<< HEAD
import { CardComponent } from './components/lead/card/card.component';
// import { NgChartsModule } from 'ng2-charts';
// import { ChartsModule } from 'ng2-charts';  // Correct import for ChartsModule in v3.x+

// =======
// import { CardComponent } from './components/lead/card/card.component';
import { LeadComponent } from './components/lead/LeadDashboard/lead.component';
// >>>>>>> 87ffee3aa0651cd3c10cb04c795af6b20592cfd7

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ChartsModule 
    // ChartsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
