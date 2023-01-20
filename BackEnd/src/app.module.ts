import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PagosModule } from './pagos/pagos.module';
import { CitasModule } from './citas/citas.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    // forRootAsync es una funcion asincrona que devuelve las opciones del modulo de mongoose y recibe como parametro el servicio de configuracion
    MongooseModule.forRootAsync({
      // importo el modulo de configuracion para poder usar el servicio de configuracion en el modulo de mongoose
      imports: [ConfigModule],
      // uso el servicio de configuracion para obtener la uri de la base de datos y crear las opciones del modulo de mongoose
      useFactory: async (configService: ConfigService) => {
        // useFactory es una funcion asincrona que devuelve las opciones del modulo de mongoose y recibe como parametro el servicio de configuracion
        const options: MongooseModuleOptions = {
          uri: configService.get('MONGO_URI')
        };
        // devuelvo las opciones del modulo de mongoose para que las use el modulo de mongoose
        return options;
      },
      // inyecto el servicio de configuracion en el modulo de mongoose para poder usarlo en el useFactory
      inject: [ConfigService],
    }),
  UsuariosModule, PagosModule, CitasModule, AuthModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
