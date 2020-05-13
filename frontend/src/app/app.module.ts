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
import { DelegationPanelComponent } from './home/delegation-tab/delegation-panel/delegation-panel.component';
import { AddPanelComponent } from './home/delegation-tab/add-panel/add-panel.component';
import { EditDelegPanelComponent } from './home/delegation-tab/edit-deleg-panel/edit-deleg-panel.component';
import { RemoveDelegPanelComponent } from './home/delegation-tab/remove-deleg-panel/remove-deleg-panel.component';
import {DelegationService} from "./delegation-service/delegation.service";
import {AuthGuard} from "./auth-guard/auth.guard";
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'ng4-social-login';

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
    DelegationPanelComponent,
    AddPanelComponent,
    EditDelegPanelComponent,
    RemoveDelegPanelComponent
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
