import { NgModule } from '@angular/core';
import {Routes} from "@angular/router/esm5/src/config";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {HomePanelComponent} from "./home/home-panel/home-panel.component";
import {EditProfilePanelComponent} from "./home/profile-tab/edit-profile-panel/edit-profile-panel.component";
import {ChangePwdPanelComponent} from "./home/profile-tab/change-pwd-panel/change-pwd-panel.component";
import {AddPanelComponent} from "./home/delegation-tab/add-panel/add-panel.component";
import {EditDelegPanelComponent} from "./home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component";
import {RemoveDelegPanelComponent} from "./home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component";
import {AuthGuard} from "./auth-guard/auth.guard";
import {ConfirmedListPanelComponent} from "./home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component";
import {UnconfirmedListPanelComponent} from "./home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component";
import {RequestConfirmationPanelComponent} from "./home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component";
import {RequestUnconfirmationPanelComponent} from "./home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component";
import {UserAdminPanelComponent} from "./home/admin-tab/user-admin-panel/user-admin-panel.component";
import {RemoveUserPanelComponent} from "./home/admin-tab/remove-user-panel/remove-user-panel.component";
import {ConfirmationRequestPanelComponent} from "./home/admin-tab/confirmation-request-panel/confirmation-request-panel.component";
import {UnconfirmationRequestPanelComponent} from "./home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component";
import {EditDelegationPanelComponent} from "./home/admin-tab/edit-delegation-panel/edit-delegation-panel.component";
import {RemoveDelegationPanelComponent} from "./home/admin-tab/remove-delegation-panel/remove-delegation-panel.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        children: [
          {
            path: 'edit',
            component: EditProfilePanelComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'password',
            component: ChangePwdPanelComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'delegation',
        children: [
          {
            path: 'list',
            children: [
              {
                path: 'confirmed',
                component: ConfirmedListPanelComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'unconfirmed',
                component: UnconfirmedListPanelComponent,
                canActivate: [AuthGuard]
              }
            ]
          },
          {
            path: 'request',
            children: [
              {
                path: 'confirmation',
                component: RequestConfirmationPanelComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'unconfirmation',
                component: RequestUnconfirmationPanelComponent,
                canActivate: [AuthGuard]
              }
            ]
          },
          {
            path: 'add',
            component: AddPanelComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'edit',
            component: EditDelegPanelComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'remove',
            component: RemoveDelegPanelComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: 'user',
            children: [
              {
                path: 'make-admin',
                component: UserAdminPanelComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'remove',
                component: RemoveUserPanelComponent,
                canActivate: [AuthGuard]
              }
            ]
          },
          {
            path: 'request',
            children: [
              {
                path: 'confirmation',
                component: ConfirmationRequestPanelComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'unconfirmation',
                component: UnconfirmationRequestPanelComponent,
                canActivate: [AuthGuard]
              }
            ]
          },
          {
            path: 'delegation',
            children: [
              {
                path: 'edit',
                component: EditDelegationPanelComponent,
                canActivate: [AuthGuard]
              },
              {
                path: 'remove',
                component: RemoveDelegationPanelComponent,
                canActivate: [AuthGuard]
              }
            ]
          },
        ]
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
