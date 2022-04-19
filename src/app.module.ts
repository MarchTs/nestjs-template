import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [],
  controllers: [AppController, CustomerController, AdminController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
