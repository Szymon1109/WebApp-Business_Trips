import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../user-service/user.service";

@Component({
  selector: 'app-user-admin-panel',
  templateUrl: './user-admin-panel.component.html',
  styleUrls: ['./user-admin-panel.component.css']
})
export class UserAdminPanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;
  successText: string;

  users: Array<User>;
  user: User;
  name: string;
  lastName: string;
  chosenEmail: string;
  chosenUser: string;

  constructor(private userService: UserService) {
    this.welcomeText = "Choose user to make it admin...";
    this.errorText = "Given user cannot be made admin!";
    this.successText = "Given user has been made admin!";
    this.message = this.welcomeText;

    this.chosenEmail = "";
    this.chosenUser = "";

    this.loadUsers();
  }

  ngOnInit() {
  }

  loadUsers() {
    this.userService.findAllNotAdmins().subscribe(
      data => {
        this.users = data;
      });
  }

  makeAdmin() {
    if(this.chosenEmail != null && this.chosenEmail != "" && this.chosenEmail != undefined) {

      this.userService.makeAdmin(this.chosenEmail).subscribe(() => {
          this.message = '.';
          setTimeout(() => this.message = this.successText, 30);

          this.chosenEmail = "";
          this.chosenUser = "";
          this.name = "";
          this.lastName = "";
          this.loadUsers();
        },
        () => {
          this.message = '.';
          setTimeout(() => this.message = this.errorText, 30);
        })
    }
    else {
      this.message = '.';
      setTimeout(() => this.message = this.welcomeText, 30);
    }
  }

  onChange(event) {
    this.chosenEmail = event.email;

    if (event == "") {
      this.name = "";
      this.lastName = "";
    }
    else {
      this.name = event.name;
      this.lastName = event.lastName;
    }
  }
}
