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
    FormsModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
