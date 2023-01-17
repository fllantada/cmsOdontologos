import { DentistasModule } from 'src/dentistas/dentistas.module';
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
    DentistasModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const options: JwtModuleOptions = {
          secret: configService.jwtSecret,
        };
        if (configService.jwtExpiresIn) {
          options.signOptions = {
            expiresIn: configService.jwtExpiresIn,
          };
        }
        return options;
      },
      inject: [ConfigService],
    }),
    forwardRef(() => DentistasModule),
    ConfigModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}