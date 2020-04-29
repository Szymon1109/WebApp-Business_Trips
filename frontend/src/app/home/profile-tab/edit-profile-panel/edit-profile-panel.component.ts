import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user-service/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-edit-profile-panel',
  templateUrl: './edit-profile-panel.component.html',
  styleUrls: ['./edit-profile-panel.component.css']
})
export class EditProfilePanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;
  successText: string;

  user: User;
  name: string;
  lastName: string;
  companyName: string;
  companyAddress: string;
  companyNip: string;

  constructor(private userService: UserService) {
    this.welcomeText = "Type new data to edit...";
    this.errorText = "Given data are not correct!";
    this.successText = "Your data has been changed!";
    this.message = this.welcomeText;

    this.userService.findByEmail().subscribe(user => {
      this.name = user.name;
      this.lastName = user.lastName;
      this.companyName = user.companyName;
      this.companyAddress = user.companyAddress;
      this.companyNip = user.companyNip;
    });
  }

  ngOnInit() {
  }

  edit() {
    if(this.name != null && this.name != ""
    && this.lastName!= null && this.lastName != ""
    && this.companyName!= null && this.companyName != ""
    && this.companyAddress!= null && this.companyAddress != ""
    && this.companyNip!= null && this.companyNip != "") {

      this.user = new User(this.name, this.lastName, "", "",
        this.companyName, this.companyAddress, this.companyNip);

      this.userService.editUser(this.user).subscribe(() => {
        this.message = '.';
        setTimeout(() => this.message = this.successText, 30);
      }, () => {
        this.message = '.';
        setTimeout(() => this.message = this.errorText, 30);
      })
    }
    else {
      this.message = '.';
      setTimeout(() => this.message = this.welcomeText, 30);
    }
  }
}
