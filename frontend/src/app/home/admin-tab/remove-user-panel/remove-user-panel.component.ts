import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../user-service/user.service";

@Component({
  selector: 'app-remove-user-panel',
  templateUrl: './remove-user-panel.component.html',
  styleUrls: ['./remove-user-panel.component.css']
})
export class RemoveUserPanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;
  successText: string;

  users: Array<User>;
  user: User;
  name: string;
  lastName: string;
  chosenId: string;
  chosenUser: string;

  constructor(private userService: UserService) {
    this.welcomeText = "Choose user to remove it...";
    this.errorText = "Given user cannot be made removed!";
    this.successText = "Given user has been removed!";
    this.message = this.welcomeText;

    this.chosenId = "";
    this.chosenUser = "";

    this.loadUsers();
  }

  ngOnInit() {
  }

  loadUsers() {
    this.userService.findAllUsers().subscribe(
      data => {
        this.users = data;
      });
  }

  delete() {
    if(this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {

      this.userService.delete(this.chosenId).subscribe(() => {
          this.message = '.';
          setTimeout(() => this.message = this.successText, 30);

          this.chosenId = "";
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
    this.chosenId = event.id;

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
