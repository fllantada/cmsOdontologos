import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DentistasModule } from './dentistas/dentistas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DentistasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
