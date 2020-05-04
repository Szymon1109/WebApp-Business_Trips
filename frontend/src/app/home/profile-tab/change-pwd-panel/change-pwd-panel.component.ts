import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user-service/user.service";
import {AuthService} from "../../../auth-service/auth.service";

@Component({
  selector: 'app-change-pwd-panel',
  templateUrl: './change-pwd-panel.component.html',
  styleUrls: ['./change-pwd-panel.component.css']
})
export class ChangePwdPanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;
  errorOldText: string;
  errorNewText: string;
  successText: string;

  passwordOld: string;
  passwordNew1: string;
  passwordNew2: string;

  constructor(private userService: UserService,
              private authService: AuthService) {
    this.welcomeText = "Type current and new password to change...";
    this.errorText = "Given new password is too weak!";
    this.errorOldText = "Given current password is not correct!";
    this.errorNewText = "Given new passwords are not the same!";
    this.successText = "Your password has been changed!";
    this.message = this.welcomeText;
  }

  ngOnInit() {
  }

  change() {
    if (this.passwordNew1 != null && this.passwordNew1 != ""
      && this.passwordNew2 != null && this.passwordNew2 != ""
      && this.passwordOld != null && this.passwordOld != "") {

      if (this.passwordNew1 == this.passwordNew2) {
        if(this.authService.getPasswordLogged() == this.passwordOld) {

          this.userService.changePwd(this.passwordNew1).subscribe(() => {
            this.authService.setPasswordLogged(this.passwordNew1);
            this.passwordNew1 = "";
            this.passwordNew2 = "";
            this.passwordOld = "";

            this.message = '.';
            setTimeout(() => this.message = this.successText, 30);
          }, () => {
            this.message = '.';
            setTimeout(() => this.message = this.errorText, 30);
          })
        }
        else {
          this.message = '.';
          setTimeout(() => this.message = this.errorOldText, 30);
        }
      }
      else {
        this.message = '.';
        setTimeout(() => this.message = this.errorNewText, 30);
      }
    }
    else {
      this.message = '.';
      setTimeout(() => this.message = this.welcomeText, 30);
    }
  }
}
