export class Delegation {
  id: number;
  description: string;
  dateTimeStart: string;
  dateTimeStop: string;
  travelDietAmount: string;
  breakfastNumber: string;
  dinnerNumber: string;
  supperNumber: string;
  transport: string;
  ticketPrice: string;
  autoCapacity: string;
  distance: string;
  accommodationPrice: string;
  otherTicketsPrice: string;
  otherOutlayDesc: string;
  otherOutlayPrice: string;

  constructor(description: string, dateTimeStart: string,
              dateTimeStop: string, travelDietAmount: string, breakfastNumber: string,
              dinnerNumber: string, supperNumber: string, transport: string,
              ticketPrice: string, autoCapacity: string, distance: string,
              accommodationPrice: string, otherTicketsPrice: string,
              otherOutlayDesc: string, otherOutlayPrice: string) {
    this.description = description;
    this.dateTimeStart = dateTimeStart;
    this.dateTimeStop = dateTimeStop;
    this.travelDietAmount = travelDietAmount;
    this.breakfastNumber = breakfastNumber;
    this.dinnerNumber = dinnerNumber;
    this.supperNumber = supperNumber;
    this.transport = transport;
    this.ticketPrice = ticketPrice;
    this.autoCapacity = autoCapacity;
    this.distance = distance;
    this.accommodationPrice = accommodationPrice;
    this.otherTicketsPrice = otherTicketsPrice;
    this.otherOutlayDesc = otherOutlayDesc;
    this.otherOutlayPrice = otherOutlayPrice;
  }
}
