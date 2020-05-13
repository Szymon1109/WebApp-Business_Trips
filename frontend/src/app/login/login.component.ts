import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AuthService as MyAuthService} from "../auth-service/auth.service";
import { AuthService as SocialAuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from "ng4-social-login";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;
  errorSocialLogin: string;

  email: string;
  password: string;
  socialUser: SocialUser;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private myAuthService: MyAuthService,
              private socialAuthService: SocialAuthService,
              private userService: UserService) {

    this.welcomeText = "Type your data to sign in...";
    this.errorText = "Given data are not correct!";
    this.errorSocialLogin = "Unable to get all social data!";
    this.message = this.welcomeText;
  }

  ngOnInit() {
  }

  checkLogin() {
    if(this.email != null && this.email != "" && this.password != null && this.password != "") {
      this.myAuthService.authenticationService(this.email, this.password).subscribe(() => {
        this.router.navigate(['/home']);
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

  async socialLogin(service: string) {
    if(service == "google") {
      await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
        this.socialUser = user;
      });
    }
    else if(service == "facebook") {
      await this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
        this.socialUser = user;
      })
    }

    if(this.socialUser !== undefined && this.socialUser !== null
      && this.socialUser.name !== undefined && this.socialUser.name !== null
      && this.socialUser.email !== undefined && this.socialUser.email !== null) {

      this.userService.checkEmail(this.socialUser.email).subscribe(value => {
        if (value) {
          this.myAuthService.authenticationSocialService(this.socialUser.email);
          this.router.navigate(['/home']);
        }
        else {
          this.router.navigate(['/register']);
          this.userService.socialUser = this.socialUser;
        }
      })
    }
    else {
      this.message = '.';
      setTimeout(() => this.message = this.errorSocialLogin, 30);
    }
  }
}
