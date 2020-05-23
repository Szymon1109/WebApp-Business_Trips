import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth-service/auth.service";
import {UserService} from "./user-service/user.service";
import { HomePanelComponent } from './home/home-panel/home-panel.component';
import { EditProfilePanelComponent } from './home/profile-tab/edit-profile-panel/edit-profile-panel.component';
import { ChangePwdPanelComponent } from './home/profile-tab/change-pwd-panel/change-pwd-panel.component';
import { AddPanelComponent } from './home/delegation-tab/add-panel/add-panel.component';
import { EditDelegPanelComponent } from './home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component';
import { RemoveDelegPanelComponent } from './home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component';
import {DelegationService} from "./delegation-service/delegation.service";
import {AuthGuard} from "./auth-guard/auth.guard";
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'ng4-social-login';
import { ConfirmedListPanelComponent } from './home/delegation-tab/confirmed-list-panel/confirmed-list-panel.component';
import { UnconfirmedListPanelComponent } from './home/delegation-tab/unconfirmed-list-panel/unconfirmed-list-panel.component';
import { RequestConfirmationPanelComponent } from './home/delegation-tab/request-confirmation-panel/request-confirmation-panel.component';
import { RequestUnconfirmationPanelComponent } from './home/delegation-tab/request-unconfirmation-panel/request-unconfirmation-panel.component';
import { UserAdminPanelComponent } from './home/admin-tab/user-admin-panel/user-admin-panel.component';
import { RemoveUserPanelComponent } from './home/admin-tab/remove-user-panel/remove-user-panel.component';
import { ConfirmationRequestPanelComponent } from './home/admin-tab/confirmation-request-panel/confirmation-request-panel.component';
import { UnconfirmationRequestPanelComponent } from './home/admin-tab/unconfirmation-request-panel/unconfirmation-request-panel.component';
import { EditDelegationPanelComponent } from './home/admin-tab/edit-delegation-panel/edit-delegation-panel.component';
import { RemoveDelegationPanelComponent } from './home/admin-tab/remove-delegation-panel/remove-delegation-panel.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('640403541746-94fshk3mo7g5pr38k2tf5uc77ocoghs5.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('239279973988150')
  }
], false);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomePanelComponent,
    EditProfilePanelComponent,
    ChangePwdPanelComponent,
    AddPanelComponent,
    EditDelegPanelComponent,
    RemoveDelegPanelComponent,
    ConfirmedListPanelComponent,
    UnconfirmedListPanelComponent,
    RequestConfirmationPanelComponent,
    RequestUnconfirmationPanelComponent,
    UserAdminPanelComponent,
    RemoveUserPanelComponent,
    ConfirmationRequestPanelComponent,
    UnconfirmationRequestPanelComponent,
    EditDelegationPanelComponent,
    RemoveDelegationPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    DelegationService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
