import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      // inyecto el servicio de configuracion en el modulo de configuracion para poder usarlo en el useFactory
      provide: ConfigService,
      // useValue es una funcion que devuelve el servicio de configuracion y recibe como parametro el path del archivo .env que se pasa como parametro en el constructor del servicio de configuracion (src\config\config.service.ts)
      useValue: new ConfigService(`${process.env.NODE_ENV}.env`),
    },
  ],
  // exporto el servicio de configuracion para poder usarlo en otros modulos
  exports: [ConfigService],
})
export class ConfigModule {}