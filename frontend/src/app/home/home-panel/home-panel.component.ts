import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user-service/user.service";
import {AuthService} from "../../auth-service/auth.service";

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.css']
})
export class HomePanelComponent implements OnInit {

  fullName: string;
  email: string;
  companyName: string;
  companyAddress: string;
  companyNip: string;
  roles: string;
  status: string;
  registrationDate: string;
  photoUrl: string;

  constructor(private userService: UserService,
              private authService: AuthService) {

    this.userService.findByEmail().subscribe(user => {
      this.fullName = user.name + " " + user.lastName;
      this.email = user.email;
      this.companyName = user.companyName;
      this.companyAddress = user.companyAddress;
      this.companyNip = "NIP: " + user.companyNip;
      this.registrationDate = "Registration date: " + user.registrationDate;

      let roles = "Roles: ";
      user.roles.forEach(function (role) {
        roles += role.roleName.toString() + " ";
      });
      this.roles = roles;

      if(user.status == true) {
        this.status = "Status: ACTIVE";
      } else {
        this.status = "Status: NOT ACTIVE";
      }
    });

    if(this.socialLogged()) {
      this.photoUrl = this.userService.socialUser.photoUrl;
    }
  }

  ngOnInit() {
  }

  socialLogged(): boolean {
    return this.authService.getSocialLogin() == "true";
  }


}
