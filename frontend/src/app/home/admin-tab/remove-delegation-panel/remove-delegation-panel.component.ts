import { Component, OnInit } from '@angular/core';
import {Delegation} from "../../../model/delegation";
import {DelegationService} from "../../../delegation-service/delegation.service";
import {UserService} from "../../../user-service/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-remove-delegation-panel',
  templateUrl: './remove-delegation-panel.component.html',
  styleUrls: ['./remove-delegation-panel.component.css']
})
export class RemoveDelegationPanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;
  successText: string;

  users: Array<User>;
  chosenUser: string;
  name: string;
  lastName: string;

  delegations: Array<Delegation>;
  chosenId: string;
  chosenDel: string;
  description: string;

  constructor(private userService: UserService,
              private delegationService: DelegationService) {

    this.welcomeText = "Choose user and delegation to remove it...";
    this.errorText = "Given delegation cannot be removed!";
    this.successText = "Given delegation has been removed!";
    this.message = this.welcomeText;

    this.clearData();
    this.loadUsers();
  }

  ngOnInit() {

  }

  clearData() {
    this.chosenUser = "";
    this.name = "";
    this.lastName = "";

    this.chosenId = "";
    this.chosenDel = "";
    this.description = "";
  }

  loadUsers() {
    this.userService.findAllUsers().subscribe(
      data => {
        this.users = data;
      });
  }

  loadDelegations(email: string) {
    this.delegationService.findAllByEmail(email).subscribe(
      data => {
        this.delegations = data;
      });
  }

  delete() {
    if(this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {
      this.delegationService.deleteDelegation(this.chosenId).subscribe(() => {
          this.message = '.';
          setTimeout(() => this.message = this.successText, 30);

          this.loadUsers();
          this.onChangeUser("");
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

  onChangeUser(event) {
    this.clearData();
    this.chosenUser = event;

    if (event == "") {
      this.name = "";
      this.lastName = "";
      this.delegations = null;
    }
    else {
      this.name = event.name;
      this.lastName = event.lastName;
      this.loadDelegations(event.email);
    }
  }

  onChangeDel(event) {
    this.chosenId = event.id;

    if (event == "") {
      this.description = "";
    }
    else {
      this.description = event.description;
    }
  }
}
