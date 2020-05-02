import { Component, OnInit } from '@angular/core';
import {DelegationService} from "../../../delegation-service/delegation.service";
import {Delegation} from "../../../model/delegation";

@Component({
  selector: 'app-delegation-panel',
  templateUrl: './delegation-panel.component.html',
  styleUrls: ['./delegation-panel.component.css']
})
export class DelegationPanelComponent implements OnInit {

  delegations: Array<Delegation>;

  constructor(private delegationService: DelegationService) {
    this.delegationService.findByEmail().subscribe(
      data => {
        this.delegations = this.editData(data);
      })
  }

  ngOnInit() {

  }

  editData(array: Array<Delegation>): Array<Delegation> {
    array.forEach(function(del) {

      del.dateTimeStart = del.dateTimeStart
        .split("-")
        .join(".")
        .replace("T", " ")
        .substr(0,16);

      del.dateTimeStop = del.dateTimeStop
        .split("-")
        .join(".")
        .replace("T", " ")
        .substr(0,16);

      if(del.transport == "CAR") {
        del.ticketPrice = "-";

        if(del.distance == null) {
          del.distance = "0";
        }
      }
      else {
        del.autoCapacity = "-";
        del.distance = "-";
      }

      if(del.accommodationPrice == null) {
        del.accommodationPrice = "0";
      }
      if(del.otherTicketsPrice == null) {
        del.otherTicketsPrice = "0;"
      }
      if(del.otherOutlayDesc == null) {
        del.otherOutlayDesc = "-";
      }
      if(del.otherOutlayPrice == null) {
        del.otherOutlayPrice = "0";
      }
    });
    return array;
  }
}
