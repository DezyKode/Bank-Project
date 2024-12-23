import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Admin/login/login.component';
import { ManagerLoginComponent } from './components/Maneger/maneger-login/manager-login.component';
import { RegistrationComponent } from './components/Employee/registration/registration.component';
import {LeadComponent} from './components/lead/LeadDashboard/lead.component';
import { CheckeligibilityComponent } from './components/checkeligibility/checkeligibility.component';
// import { PersonalloanComponent } from './components/personalloan/personalloan.component';
import { GraphComponent } from './components/lead/graph/graph.component';

import { NewtaskComponent } from './components/newtask/newtask.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'managerlogin',component:ManagerLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'checkeligibility',component:CheckeligibilityComponent},
  // {path:'personalloan',component:PersonalloanComponent},
  {path:'lead',component:LeadComponent},
{path:"graph",component:GraphComponent},
  {path:'newtask',component:NewtaskComponent}

 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
