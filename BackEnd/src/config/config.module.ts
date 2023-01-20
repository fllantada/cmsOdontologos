import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      // inyecto el servicio de configuracion en el modulo de configuracion para poder usarlo en el useFactory
      provide: ConfigService,
      // uso useValue para ejecutar el servicio de configuracion una sola vez y devolver el resultado
      useValue: new ConfigService(),
    },
  ],
  // exporto el servicio de configuracion para poder usarlo en otros modulos
  exports: [ConfigService],
})
export class ConfigModule {}