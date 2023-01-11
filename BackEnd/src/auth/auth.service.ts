import { Injectable } from '@nestjs/common';
import { DentistasService } from 'src/dentistas/dentistas.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private dentistasService: DentistasService, private jwtService: JwtService) {}

async validateUser(username: string, pass: string): Promise<any> {
  console.log(username, pass)
  const user = await this.dentistasService.auth(username);
  if (user && user.password === pass) {
    const { password, ...result } = user;
    return result;
  }
  return null;
}

async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}