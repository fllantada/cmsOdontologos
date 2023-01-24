import { DentistasModule } from 'src/dentistas/dentistas.module';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { FrontEndStrategy } from './strategies/front-end.strategy';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    DentistasModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const options: JwtModuleOptions = {
          secret: configService.get('JWT_SECRET'),
        };
        if (configService.get("JWT_EXPIRES_IN")) {
          options.signOptions = {
            expiresIn: configService.get("JWT_EXPIRES_IN"),
          };
        }
        return options;
      },
      inject: [ConfigService],
    }),
    forwardRef(() => DentistasModule),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, FrontEndStrategy, JwtStrategy],
  exports: [AuthService, FrontEndStrategy],
})
export class AuthModule {}