import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

console.log(process.env);
//.env >>>> { NODE_ENV: 'development' }
//development.env >>>>> { PORT: '3000', DB_HOST: 'localhost', DB_PORT: '3306')

@Module({
  providers: [
    {
      // inyecto el servicio de configuracion en el modulo de configuracion para poder usarlo en el useFactory
      provide: ConfigService,
      // useValue es una funcion que devuelve el servicio de configuracion y recibe como parametro el path del archivo .env que se pasa como parametro en el constructor del servicio de configuracion (src\config\config.service.ts)
      useValue: new ConfigService(),
    },
  ],
  // exporto el servicio de configuracion para poder usarlo en otros modulos
  exports: [ConfigService],
})
export class ConfigModule {}
