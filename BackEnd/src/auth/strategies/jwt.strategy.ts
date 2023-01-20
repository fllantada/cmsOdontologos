import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../config/config.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const JWT_SECRET = configService.get("JWT_SECRET");
    if (!JWT_SECRET) {
      throw new Error("No se encontro la variable de entorno JWT_SECRET en el archivo .env");
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { _id: payload._id, nombre_usuario: payload.nombre_usuario };
  }
}
