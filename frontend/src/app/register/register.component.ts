import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../user-service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;
  welcomeText: string;
  emailText: string;
  pwdText: string;
  dataText: string;

  user: User;
  firstName: string;
  surname: string;
  email: string;
  password: string;
  companyName: string;
  companyNip: string;
  companyAddress: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {

    this.welcomeText = "Type your data to sign up...";
    this.emailText = "Given email is already taken!";
    this.pwdText = "Given password is too weak!";
    this.dataText = "Given data are not correct!";
    this.message = this.welcomeText;

    let socialUser = this.userService.socialUser;
    if(socialUser !== undefined) {
      let name = socialUser.name.split(" ");
      this.firstName = name[0] === undefined ? "" : name[0];
      this.surname = name[1] === undefined ? "" : name[1];
      this.email = socialUser.email;
      this.userService.socialUser = undefined;
    }
  }

  ngOnInit() {
  }

  register() {
    if(this.firstName != null && this.firstName != ""
      && this.surname != null && this.surname != ""
      && this.email != null && this.email != ""
      && this.password != null && this.password != ""
      && this.companyName != null && this.companyName != ""
      && this.companyNip != null && this.companyNip != ""
      && this.companyAddress != null && this.companyAddress != "") {

      this.user = new User(this.firstName, this.surname, this.email,
        this.password, this.companyName, this.companyAddress, this.companyNip);

      this.userService.save(this.user).subscribe(() => {
        this.router.navigate(['/login']);
      },(error) => {
        if(error.status == 400) {
          this.message = '.';
          setTimeout(() => this.message = this.dataText, 30);
        }
        else if(error.status == 406) {
          this.message = '.';
          setTimeout(() => this.message = this.pwdText, 30);
        }
        else if(error.status == 409) {
          this.message = '.';
          setTimeout(() => this.message = this.emailText, 30);
        }
      })
    }
    else {
      this.message = '.';
      setTimeout(() => this.message = this.welcomeText, 30);
    }
  }
}
