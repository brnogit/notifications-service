import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string { //metodo
    return this.appService.getHello();
  }
}
