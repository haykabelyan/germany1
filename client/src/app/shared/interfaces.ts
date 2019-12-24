export interface User {
  readonly _id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdAt: Date;
  readonly companyId: string;
  readonly username: string;
  readonly twilioAccountSid: string;
  readonly twilioApplicationSid: string;
  readonly twilioAuthToken: string;
  readonly password: string;
}



export interface Project {
  name: string;
  ticketListId: string;
  description: string;
  voipProvider: string;
  userIds: [];
}

export interface Ticket {
  status: string;
  _id: string;
  kvkNumber: 30257340
  companyName: string;
  location: string;
  houseNumber1: string;
  postalCode: string;
  residence: string;
  phoneNumber: string;
  bankAccount: string;
  sex: string;
  initials: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  currentSupplier: string;
  billingAddress: string;
  invoiceHouseNumber1: string;
  invoiceHouseNumber2: string;
  invoicePostalCode: string;
  invoiceLocation: string;
  listId: string;
  companyId: string;
  createdAt: string;
}
