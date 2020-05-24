import { Component, OnInit } from '@angular/core';
import {Delegation} from "../../../model/delegation";
import {DelegationService} from "../../../delegation-service/delegation.service";
import {AuthService} from "../../../auth-service/auth.service";
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-unconfirmed-list-panel',
  templateUrl: './unconfirmed-list-panel.component.html',
  styleUrls: ['./unconfirmed-list-panel.component.css']
})
export class UnconfirmedListPanelComponent implements OnInit {

  delegations: Array<Delegation>;

  constructor(private delegationService: DelegationService,
              private authService: AuthService) {

    //TODO:
    /*this.delegationService.findByEmail().subscribe(
      data => {
        this.delegations = this.editData(data);
      })*/
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

  public savePDF(del: Delegation) {
    let doc = this.pdf(del);
    doc.save('delegation_export.pdf');
  }

  public pdf(del: Delegation): jsPDF {
    let doc = new jsPDF();
    let email = this.authService.getEmailLogged();

    doc.setFontType('bold');
    doc.setFont('Numans');
    doc.text('DELEGATION DATA',30,30);

    doc.setFontType('normal');
    doc.text('ID:',30,50).text(del.id.toString(),90,50);
    doc.text('Description:',30,60).text(del.description.toString(),90,60);
    doc.text('Email:',30,70).text(email,90,70);
    doc.text('Start time:',30,80).text(del.dateTimeStart.toString(),90,80);
    doc.text('Stop time:',30,90).text(del.dateTimeStop.toString(),90,90);
    doc.text('Travel diet amount:',30,100).text(del.travelDietAmount.toString(),90,100);
    doc.text('Breakfast number:',30,110).text(del.breakfastNumber.toString(),90,110);
    doc.text('Dinner number:',30,120).text(del.dinnerNumber.toString(),90,120);
    doc.text('Supper number:',30,130).text(del.supperNumber.toString(),90,130);
    doc.text('Transport:',30,140).text(del.transport.toString(),90,140);
    doc.text('Ticket price:',30,150).text(del.ticketPrice.toString(),90,150);
    doc.text('Auto capacity:',30,160).text(del.autoCapacity.toString(),90,160);
    doc.text('Distance:',30,170).text(del.distance.toString(),90,170);
    doc.text('ACC price:',30,180).text(del.accommodationPrice.toString(),90,180);
    doc.text('Other tickets price:',30,190).text(del.otherTicketsPrice.toString(),90,190);
    doc.text('Other outlay desc.:',30,200).text(del.otherOutlayDesc.toString(),90,200);
    doc.text('Other outlay price:',30,210).text(del.otherOutlayPrice.toString(),90,210);

    doc.setFontSize(15);
    doc.setFontType('italic');
    doc.text('Business Trips Management System © 2020',60,280);

    return doc;
  }

  public print(del: Delegation) {
    let doc = this.pdf(del);
    doc.setProperties({
      title: "Printing delegation"
    });
    doc.autoPrint();
    window.open(doc.output('bloburl'));
  }
}
