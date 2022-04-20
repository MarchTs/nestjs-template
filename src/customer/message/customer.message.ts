export class CustomerMessage {
  public id: string;
  public name: string;

  constructor(data: any);
  constructor(id: string, name: string);
  constructor(arg1?: any, arg2?: any) {
    if (typeof arg1 === 'string') {
      this.id = arg1;
      this.name = arg2;
    } else {
      this.id = arg1.id;
      this.name = arg1.name;
    }
  }
}
