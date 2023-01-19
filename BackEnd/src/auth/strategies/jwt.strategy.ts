import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../config/config.service';

const jwtStrategy = Strategy;
@Injectable()
export class JwtStrategy extends PassportStrategy(jwtStrategy) {
  constructor(configService: ConfigService) {
    const configObject = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    };
    if (!configObject.secretOrKey) {
      configObject.secretOrKey = 'default';
    }

    super(configObject);
  }

  async validate(payload: any) {
    return { _id: payload._id, nombre_usuario: payload.nombre_usuario };
  }
}
