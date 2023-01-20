import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const JWT_SECRET = configService.get("JWT_SECRET");
        const JWT_EXPIRES_IN = configService.get("JWT_EXPIRES_IN");
        if (!JWT_SECRET) {
          throw new Error("No se encontro la variable de entorno JWT_SECRET en el archivo .env");
        }
        const options: JwtModuleOptions = {
          secret: JWT_SECRET,
        };
        if (JWT_EXPIRES_IN) {
          options.signOptions = {
            expiresIn: JWT_EXPIRES_IN,
          };
        }
        return options;
      },
      inject: [ConfigService],
    }),
    forwardRef(() => UsuariosModule),
    ConfigModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}