import { Component, OnInit } from '@angular/core';
import {Delegation} from "../../../model/delegation";
import {DelegationService} from "../../../delegation-service/delegation.service";

@Component({
  selector: 'app-confirmation-request-panel',
  templateUrl: './confirmation-request-panel.component.html',
  styleUrls: ['./confirmation-request-panel.component.css']
})
export class ConfirmationRequestPanelComponent implements OnInit {

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
    this.welcomeText = "Choose confirmation request to confirm delegation...";
    this.errorText = "Given delegation cannot be confirmed!";
    this.successText = "Given delegation has been confirmed!";
    this.message = this.welcomeText;

    this.chosenId = "";
    this.chosenDel = "";

    this.loadDelegations();
  }

  ngOnInit() {
  }

  loadDelegations() {
    this.delegationService.findRequestedByEmailAndConfirmation(true).subscribe(
      data => {
        this.delegations = data;
      });
  }

  confirm() {
    if (this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {

      this.delegationService.answerRequest(this.chosenId).subscribe(() => {
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
    } else {
      this.message = '.';
      setTimeout(() => this.message = this.welcomeText, 30);
    }
  }

  onChange(event) {
    this.chosenId = event.id;

    if (event == "") {
      this.description = "";
    } else {
      this.description = event.description;
    }
  }
}
