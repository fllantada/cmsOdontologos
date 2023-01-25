import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class FrontEndStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("JWT_FRONTEND_SECRET"),
    });
  }

  public validate(token: string): boolean{
    try {
      const isValid = jwt.verify(token, 'secret');
      if(!isValid){
      }
      return true
      
    } catch (error) {
      console.log(error)
      return false
    }
  }
}