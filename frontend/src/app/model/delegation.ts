export class Delegation {
  id: number;
  description: string;
  dateTimeStart: string;
  dateTimeStop: string;
  travelDietAmount: number;
  breakfastNumber: number;
  dinnerNumber: number;
  supperNumber: number;
  transport: string;
  ticketPrice: string;
  autoCapacity: string;
  distance: string;
  accommodationPrice: number;
  otherTicketsPrice: number;
  otherOutlayDesc: string;
  otherOutlayPrice: number;

  constructor(id: number, description: string, dateTimeStart: string,
              dateTimeStop: string, travelDietAmount: number, breakfastNumber: number,
              dinnerNumber: number, supperNumber: number, transport: string,
              ticketPrice: string, autoCapacity: string, distance: string,
              accommodationPrice: number, otherTicketsPrice: number,
              otherOutlayDesc: string, otherOutlayPrice: number) {
    this.id = id;
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
