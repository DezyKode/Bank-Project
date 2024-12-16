import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Admin/login/login.component';
import { ManagerLoginComponent } from './components/Maneger/maneger-login/manager-login.component';
// import { ManagerLoginComponent } from './components/Maneger/manager-login.component';
// import { LoginComponent } from './components/Manager/login/login.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'managerlogin',component:ManagerLoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
