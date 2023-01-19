import { Injectable } from '@nestjs/common';
import { DentistasService } from 'src/dentistas/dentistas.service';
import { JwtService } from '@nestjs/jwt';
import { loginPayload } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
    constructor(private dentistasService: DentistasService, private jwtService: JwtService) {}

async validateUser(email: string, token: string): Promise<any> {
  const user = await this.dentistasService.auth(email);
  if (user) {
    const { password, ...result } = user;
    return result;
  }
  return null;
}

async login(token: string) {
 const user = this.jwtService.decode(token) as any
 const payload = {user: user.nombre_usuario }
  
return {
   access_token: this.jwtService.sign(payload),
 };
}

}
