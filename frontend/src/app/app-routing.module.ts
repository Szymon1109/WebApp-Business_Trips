import { NgModule } from '@angular/core';
import {Routes} from "@angular/router/src/config";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {HomePanelComponent} from "./home/home-panel/home-panel.component";
import {EditProfilePanelComponent} from "./home/profile-tab/edit-profile-panel/edit-profile-panel.component";
import {ChangePwdPanelComponent} from "./home/profile-tab/change-pwd-panel/change-pwd-panel.component";
import {DelegationPanelComponent} from "./home/delegation-tab/delegation-panel/delegation-panel.component";
import {AddPanelComponent} from "./home/delegation-tab/add-panel/add-panel.component";
import {EditDelegPanelComponent} from "./home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePanelComponent
      },
      {
        path: 'profile/edit',
        component: EditProfilePanelComponent
      },
      {
        path: 'profile/password',
        component: ChangePwdPanelComponent
      },
      {
        path: 'delegation/list',
        component: DelegationPanelComponent
      },
      {
        path: 'delegation/add',
        component: AddPanelComponent
      },
      {
        path: 'delegation/edit',
        component: EditDelegPanelComponent
      }
    ]
  },
  { path: '', pathMatch:'full', redirectTo: 'login' },
  { path: '**', pathMatch:'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
