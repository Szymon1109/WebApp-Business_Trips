import { Component, OnInit } from '@angular/core';
import {Delegation} from "../../../model/delegation";
import {DelegationService} from "../../../delegation-service/delegation.service";
import {UserService} from "../../../user-service/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-edit-delegation-panel',
  templateUrl: './edit-delegation-panel.component.html',
  styleUrls: ['./edit-delegation-panel.component.css']
})
export class EditDelegationPanelComponent implements OnInit {

  message: string;
  welcomeText: string;
  dateFormatText: string;
  dateCompareText: string;
  errorText: string;
  successText: string;

  users: Array<User>;
  chosenUser: string;

  delegations: Array<Delegation>;
  chosenId: string;
  chosenDel: string;

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

  constructor(private userService: UserService,
              private delegationService: DelegationService) {

    this.welcomeText = "Choose user and delegation and type all data to edit it...";
    this.dateFormatText = "Given date format is not correct!";
    this.dateCompareText = "Stop date must be after start date!";
    this.errorText = "Given data are not correct!";
    this.successText = "Given delegation has been saved!";
    this.message = this.welcomeText;

    this.chosenUser = "";
    this.clearData();
    this.loadUsers();
  }

  ngOnInit() {

  }

  clearData() {
    this.chosenId = "";
    this.chosenDel = "";

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
    this.othOutlayPrice = "";
    this.othOutlayDesc = "";

    this.disableTicket = false;
    this.disableAuto = false;
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

  edit() {
    if(this.chosenId != null && this.chosenId != "" && this.chosenId != undefined
      && this.description != null && this.description != ""
      && this.dateStart != null && this.dateStop !== ""
      && this.travelDiet != null && this.travelDiet !== ""
      && this.breakfasts != null && this.breakfasts !== ""
      && this.dinners != null && this.dinners !== ""
      && this.suppers != null && this.suppers !== ""
      && this.transport != null && this.transport != "" && this.transport != undefined
      && this.ticketPrice != null && this.ticketPrice !== ""
      && this.autoCapacity != null && this.autoCapacity != "" && this.autoCapacity != undefined
      && this.distance != null && this.distance !== ""
      && this.accPrice != null && this.accPrice !== ""
      && this.othTicketsPrice != null && this.othTicketsPrice !== ""
      && this.othOutlayDesc != null && this.othOutlayDesc != ""
      && this.othOutlayPrice != null && this.othOutlayPrice !== "") {

      let regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
      if(regex.test(this.dateStart) && regex.test(this.dateStop)) {

        this.delegation = new Delegation(this.description, this.dateStart.replace(" ", "T"),
          this.dateStop.replace(" ", "T"), this.travelDiet, this.breakfasts, this.dinners,
          this.suppers, this.transport.toUpperCase(), this.ticketPrice == "-" ? "0" : this.ticketPrice,
          this.autoCapacity.toUpperCase(), this.distance == "-" ? "0" : this.distance, this.accPrice,
          this.othTicketsPrice, this.othOutlayDesc == "-" ? null : this.othOutlayDesc, this.othOutlayPrice);

        this.delegationService.editDelegation(this.chosenId, this.delegation).subscribe(() => {
            this.message = '.';
            setTimeout(() => this.message = this.successText, 30);

            this.chosenUser = "";
            this.loadUsers();
            this.onChangeUser("");
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

  onChangeUser(event) {
    this.clearData();
    this.chosenUser = event;

    if (event == "") {
      this.delegations = null;
    }
    else {
      this.loadDelegations(event.email);
    }
  }

  onChangeDel(event) {
    if(event == "") {
      this.clearData();
    }
    else {
      this.chosenId = event.id;

      this.description = event.description;
      this.dateStart = event.dateTimeStart.replace("T", " ").substr(0,16);
      this.dateStop = event.dateTimeStop.replace("T", " ").substr(0,16);
      this.travelDiet = event.travelDietAmount;
      this.breakfasts = event.breakfastNumber;
      this.dinners = event.dinnerNumber;
      this.suppers = event.supperNumber;
      this.transport = event.transport.toLowerCase();
      this.ticketPrice = event.ticketPrice;
      this.autoCapacity = event.autoCapacity == null ? "empty" : event.autoCapacity.toLowerCase();
      this.distance = event.distance;
      this.accPrice = event.accommodationPrice;
      this.othTicketsPrice = event.otherTicketsPrice.toString();
      this.othOutlayPrice = event.otherOutlayPrice.toString();
      this.othOutlayDesc = event.otherOutlayDesc == null ? "-" : this.othOutlayDesc;

      if(this.transport == "car") {
        this.disableTicket = true;
        this.disableAuto = false;
        this.ticketPrice = "-";
      }
      else {
        this.disableTicket = false;
        this.disableAuto = true;
        this.distance = "-";
      }
    }
  }
}
