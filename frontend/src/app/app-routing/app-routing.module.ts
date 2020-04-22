import { NgModule } from '@angular/core';
import {Routes} from "@angular/router/src/config";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch:'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
