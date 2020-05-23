import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth-service/auth.service";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private socialLogged: boolean;
  private userLogged: boolean;
  private adminLogged: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) {
    this.socialLogged = this.authService.getSocialLogin() == "true";

    let userLogged: boolean = false;
    let adminLogged: boolean = false;

    this.userService.findByEmail().subscribe(user => {
      user.roles.forEach(function (role) {
        if (role.roleName == "USER") {
          userLogged = true;
        }
        if(role.roleName == "ADMIN") {
          adminLogged = true;
        }
      });
      this.userLogged = userLogged;
      this.adminLogged = adminLogged;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.userService.socialUser = undefined;
    this.router.navigate(['/login']);
  }
}
