import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}
  
  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req: any) {
    return this.authService.login(req.token);
  }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req:any) {
    return req.user;
  }
}