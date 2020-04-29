import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user-service/user.service";

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

  constructor(private userService: UserService) {

    this.userService.findByEmail().subscribe(user => {
      this.fullName = user.name + " " + user.lastName;
      this.email = user.email;
      this.companyName = user.companyName;
      this.companyAddress = user.companyAddress;
      this.companyNip = user.companyNip;
      this.registrationDate = user.registrationDate;

      let roles = "";
      user.roles.forEach(function (role) {
        roles += role.roleName.toString() + " ";
      });
      this.roles = roles;

      if(user.status == true) {
        this.status = "ACTIVE";
      } else {
        this.status = "INACTIVE";
      }
    });
  }

  ngOnInit() {

  }
}
