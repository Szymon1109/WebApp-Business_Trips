import { Component, OnInit } from '@angular/core';
import {DelegationService} from "../../../delegation-service/delegation.service";
import {Delegation} from "../../../model/delegation";

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})
export class AddPanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  dateFormatText: string;
  dateCompareText: string;
  errorText: string;
  successText: string;

  delegation: Delegation;
  description: string;
  dateStart: string;
  dateStop: string;
  travelDiet: string;
  breakfasts: string;
  dinners: string;
  suppers: string;
  transport: string;
  ticketPrice: string;
  autoCapacity: string;
  distance: string;
  accPrice: string;
  othTicketsPrice: string;
  othOutlayPrice: string;
  othOutlayDesc: string;

  disableTicket: boolean;
  disableAuto: boolean;

  constructor(private delegationService: DelegationService) {
    this.welcomeText = "Type all data to add delegation...";
    this.dateFormatText = "Given date format is not correct!";
    this.dateCompareText = "Stop date must be after start date!";
    this.errorText = "Given data are not correct!";
    this.successText = "Given delegation has been saved!";
    this.message = this.welcomeText;

    this.disableTicket = false;
    this.disableAuto = false;
    this.transport = "";
    this.autoCapacity = "";
  }

  ngOnInit() {
  }

  save() {
    if(this.description != null && this.description != ""
      && this.dateStart != null && this.dateStart != ""
      && this.dateStop != null && this.dateStop != ""
      && this.travelDiet != null && this.travelDiet != ""
      && this.breakfasts != null && this.breakfasts != ""
      && this.dinners != null && this.dinners != ""
      && this.suppers != null && this.suppers != ""
      && this.transport != null && this.transport != "" && this.transport != undefined
      && this.ticketPrice != null && this.ticketPrice != ""
      && this.autoCapacity != null && this.autoCapacity != "" && this.autoCapacity != undefined
      && this.distance != null && this.distance != ""
      && this.accPrice != null && this.accPrice != ""
      && this.othTicketsPrice != null && this.othTicketsPrice != ""
      && this.othOutlayPrice != null && this.othOutlayPrice != ""
      && this.othOutlayDesc != null && this.othOutlayDesc != "") {

      let regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
      if(regex.test(this.dateStart) && regex.test(this.dateStop)) {

        this.delegation = new Delegation(this.description, this.dateStart.replace(" ", "T"),
          this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners,
          this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice,
          this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice,
          this.othTicketsPrice, this.othOutlayDesc == "-" ? null : this.othOutlayDesc, this.othOutlayPrice);

        this.delegationService.addDelegation(this.delegation).subscribe(() => {
          this.message = '.';
          setTimeout(() => this.message = this.successText, 30);

          this.description = "";
          this.dateStart = "";
          this.dateStop = "";
          this.travelDiet = "";
          this.breakfasts = "";
          this.dinners = "";
          this.suppers = "";
          this.transport = "";
          this.ticketPrice = "";
          this.autoCapacity = "";
          this.distance = "";
          this.accPrice = "";
          this.othTicketsPrice = "";
          this.othOutlayDesc = "";
          this.othOutlayPrice = "";

          this.disableTicket = false;
          this.disableAuto = false;
        },
          error => {
          if(error.status == 400) {
            this.message = '.';
            setTimeout(() => this.message = this.errorText, 30);
          }
          else if(error.status == 406){
            this.message = '.';
            setTimeout(() => this.message = this.dateCompareText, 30);
          }
        })
      }
      else {
        this.message = '.';
        setTimeout(() => this.message = this.dateFormatText, 30);
      }
    }
    else {
      this.message = '.';
      setTimeout(() => this.message = this.welcomeText, 30);
    }
  }

  onChange(event) {
    if(event == "") {
      this.disableTicket = false;
      this.disableAuto = false;
      this.ticketPrice = "";
      this.distance = "";
      this.autoCapacity = "";
    }
    else if(event == "car") {
      this.disableTicket = true;
      this.disableAuto = false;
      this.ticketPrice = "-";
      this.distance = "";
      this.autoCapacity = "";
    }
    else {
      this.disableTicket = false;
      this.disableAuto = true;
      this.ticketPrice = "";
      this.distance = "-";
      this.autoCapacity = "empty";
    }
  }
}
