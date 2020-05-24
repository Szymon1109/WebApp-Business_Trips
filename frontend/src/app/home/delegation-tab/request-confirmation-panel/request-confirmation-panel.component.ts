import { Component, OnInit } from '@angular/core';
import {Delegation} from "../../../model/delegation";
import {DelegationService} from "../../../delegation-service/delegation.service";

@Component({
  selector: 'app-request-confirmation-panel',
  templateUrl: './request-confirmation-panel.component.html',
  styleUrls: ['./request-confirmation-panel.component.css']
})
export class RequestConfirmationPanelComponent implements OnInit {

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
    this.welcomeText = "Choose delegation to remove it...";
    this.errorText = "Given delegation cannot be removed!";
    this.successText = "Given delegation has been removed!";
    this.message = this.welcomeText;

    this.chosenId = "";
    this.chosenDel = "";

    this.loadDelegations();
  }

  ngOnInit() {
  }

  loadDelegations() {
    //TODO:
    /*this.delegationService.findFutureByEmail().subscribe(
      data => {
        this.delegations = data;
      });*/
  }

  delete() {
    if(this.chosenId != null && this.chosenId != "" && this.chosenId != undefined) {

      this.delegationService.deleteDelegation(this.chosenId).subscribe(() => {
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
