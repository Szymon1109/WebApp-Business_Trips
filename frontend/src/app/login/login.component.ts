import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth-service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;

  email: string;
  password: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {

    this.welcomeText = "Type your data to sign in...";
    this.errorText = "Given data are not correct!";
    this.message = this.welcomeText;
  }

  ngOnInit() {
  }

  checkLogin() {
    if(this.email != null && this.email != "" && this.password != null && this.password != "") {
      this.authService.authenticationService(this.email, this.password).subscribe(() => {
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
}
