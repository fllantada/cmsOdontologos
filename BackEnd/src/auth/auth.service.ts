import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DentistasService } from 'src/dentistas/dentistas.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
    constructor(private dentistasService: DentistasService, private jwtService: JwtService) {}

async validateUser(email: string): Promise<any> {
  const user = await this.dentistasService.auth(email);
  if (user) {
    const { password, ...result } = user;
    return result;
  }
  return null;
}

async login(jwt: string){
  const token = jwt.split(' ')[1]
  const payload = this.jwtService.decode(token);
  if(payload){
   const user = await this.dentistasService.auth(payload)
   const token = this.jwtService.sign({user})
   return token
  }
  throw new UnauthorizedException()
}
}
