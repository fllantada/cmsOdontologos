import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { FrontEndAuthGuard } from './auth/guards/front-end-auth.guard';


@Controller()
@UseGuards(FrontEndAuthGuard)
export class AppController {
  constructor(
    private readonly appService: AppService
  ){}

  @Get('/')
  getHello() {
    return this.appService.getHello()
  }
}
