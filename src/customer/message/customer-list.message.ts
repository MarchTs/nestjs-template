import { CustomerMessage } from './customer.message';

export class CustomerListMessage {
  constructor(data: { customers: any; count: number }) {
    this.customers = data.customers;
    this.count = data.count;
  }

  customers: CustomerMessage[];
  count: number;
}
