import { Controller, Get } from '@nestjs/common';
import { AdminMessage } from './message/admin.message';

@Controller('admin')
export class AdminController {
  constructor() {}
  @Get()
  getAdminProfile(): AdminMessage {
    return new AdminMessage('super-admin');
  }
}
