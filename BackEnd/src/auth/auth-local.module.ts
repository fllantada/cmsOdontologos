import { DentistasModule } from 'src/dentistas/dentistas.module';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthLocalService } from './auth-local.service';
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
          secret: configService.get('JWT_SECRET_LOCAL'),
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
  providers: [LocalStrategy, JwtStrategy],
  exports: [AuthLocalService],
})
export class AuthModule {}