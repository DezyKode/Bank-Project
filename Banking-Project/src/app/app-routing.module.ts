import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Admin/login/login.component';
import { ManagerLoginComponent } from './components/Maneger/maneger-login/manager-login.component';
import { RegistrationComponent } from './components/Employee/registration/registration.component';
import {LeadComponent} from './components/lead/LeadDashboard/lead.component';
import { CheckeligibilityComponent } from './components/checkeligibility/checkeligibility.component';
import { PersonalloanComponent } from './components/personalloan/personalloan.component';

import { NewtaskComponent } from './components/newtask/newtask.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VreportComponent } from './components/vreport/vreport.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'managerlogin',component:ManagerLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'checkeligibility',component:CheckeligibilityComponent},
  {path:'personalloan',component:PersonalloanComponent},
  {path:'lead',component:LeadComponent},
  {path:'verification',component:VerificationComponent},
  {path:'newtask',component:NewtaskComponent},
  {path:'vreport',component:VreportComponent},
  
      // { path: '', redirectTo: '/vreport', pathMatch: 'full' }
  {path:'',component:VerificationComponent, children:[
    // {path:'vreport',component:VreportComponent},
  ]}
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
