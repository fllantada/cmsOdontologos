import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { FrontEndAuthGuard } from './guards/front-end-auth.guard';
import { AuthService } from './auth.service';
  

@Controller('auth')
@UseGuards(FrontEndAuthGuard)
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}
    
    @Post('/login')
    async login(@Request() req: any) {
    return this.authService.login(req.headers.authorization);
  }
}


