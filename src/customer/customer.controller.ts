import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerRegisterForm } from './form/customer-register-form';
import { CustomerListMessage } from './message/customer-list.message';
import { CustomerMessage } from './message/customer.message';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/:id')
  getCustomerProfile(): CustomerMessage {
    const entity = { id: '1', name: 'hello god from customer profile' };
    const message = new CustomerMessage(entity);
    return message;
  }

  @Get('')
  getCustomers(): CustomerListMessage {
    const entities = [{ id: '1', name: 'hello god from customer profile' }];
    const message = new CustomerListMessage({
      customers: entities,
      count: entities.length,
    });

    return message;
  }

  @Post()
  registerCustomer(
    @Body() registerForm: CustomerRegisterForm,
  ): CustomerMessage {
    const entity = { id: '1', name: 'hello god from customer profile' };
    const message = new CustomerMessage(entity);
    return message;
  }
}
