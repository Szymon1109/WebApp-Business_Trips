export class User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
  companyAddress: string;
  companyNip: string;
  status: boolean;
  registrationDate: string;
  role: string;

  constructor(name: string, lastName: string, email: string, password: string,
              companyName: string, companyAddress: string, companyNip: string) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.companyName = companyName;
    this.companyAddress = companyAddress;
    this.companyNip = companyNip;
  }
}
