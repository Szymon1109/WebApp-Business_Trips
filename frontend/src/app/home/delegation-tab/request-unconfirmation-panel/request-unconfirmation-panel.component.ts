import { Component, OnInit } from '@angular/core';
import {Delegation} from "../../../model/delegation";
import {DelegationService} from "../../../delegation-service/delegation.service";

@Component({
  selector: 'app-request-unconfirmation-panel',
  templateUrl: './request-unconfirmation-panel.component.html',
  styleUrls: ['./request-unconfirmation-panel.component.css']
})
export class RequestUnconfirmationPanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  errorText: string;
  successText: string;

  delegations: Array<Delegation>;
  delegation: Delegation;
  description: string;
  chosenId: string;
  chosenDel: string;

  constructor(private delegationService: DelegationService) {
    this.welcomeText = "Choose confirmed delegation to request unconfirmation...";
    this.errorText = "Given unconfirmation cannot be requested!";
    this.successText = "Given unconfirmation has been requested!";
    this.message = this.welcomeText;

    this.chosenId = "";
    this.chosenDel = "";

    this.loadDelegations();
  }

  ngOnInit() {
  }

  loadDelegations() {
    this.delegationService.findNotRequestedByEmailAndConfirmation(true).subscribe(
      data => {
        this.delegations = data;
      });
  }

  request() {
    if(this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {

      this.delegationService.requestByStatus(this.chosenId, false).subscribe(() => {
          this.message = '.';
          setTimeout(() => this.message = this.successText, 30);

          this.chosenId = "";
          this.chosenDel = "";
          this.description = "";
          this.loadDelegations();
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
      this.description = "";
    }
    else {
      this.description = event.description;
    }
  }
}
