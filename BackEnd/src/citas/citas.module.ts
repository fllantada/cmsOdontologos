import { Module } from '@nestjs/common';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitasSchema } from './schemas/citas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cita', schema: CitasSchema }]),
  ],
  controllers: [CitasController],
  providers: [CitasService],
})
export class CitasModule {}
