import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthLocalService } from './auth/auth-local.service';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService, private readonly authLocalService: AuthLocalService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req: any) {
    return this.authLocalService.login(req.token);
  }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req:any) {
    return req.user;
  }
}