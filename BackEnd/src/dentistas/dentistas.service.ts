import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dentista } from './interfaces/dentistas.interface';
import { CreateDentistaDTO } from './dto/dentistas.dto';

@Injectable()
export class DentistasService {
  constructor(
    @InjectModel('Dentista') private readonly dentistaModel: Model<Dentista>,
  ) {}

  async getDentistas(): Promise<Dentista[]> {
    const dentistas = await this.dentistaModel.find({ isActive: true });
    return dentistas;
  }

  async getDentista(dentistaID: string): Promise<Dentista> {
    let dentista;
    if (dentistaID.match(/^[0-9a-fA-F]{24}$/)) {
      dentista = await this.dentistaModel.findById(dentistaID);
    }
    if (!dentista) {
      throw new NotFoundException('Dentista no encontrado');
    }
    return dentista;
  }

  async createDentista(
    createDentistaDTO: CreateDentistaDTO,
  ): Promise<Dentista> {
    const dentista = new this.dentistaModel(createDentistaDTO);
    return await dentista.save();
  }

  async deleteDentista(dentistaID: string): Promise<Dentista> {
    let dentistaDeleted;
    if (dentistaID.match(/^[0-9a-fA-F]{24}$/)) {
      dentistaDeleted = await this.dentistaModel.findByIdAndDelete(dentistaID);
    }
    if (!dentistaDeleted) {
      throw new NotFoundException('Dentista no encontrado');
    }
    return dentistaDeleted;
  }
  async updateDentista(
    dentistaID: string,
    createDentistaDTO: CreateDentistaDTO,
  ): Promise<Dentista> {
    let dentistaUpdated;
    if (dentistaID.match(/^[0-9a-fA-F]{24}$/)) {
      dentistaUpdated = await this.dentistaModel.findByIdAndUpdate(
        dentistaID,
        createDentistaDTO,
        { new: true },
      );
    }
    if (!dentistaUpdated) {
      throw new NotFoundException('Dentista no encontrado');
    }
    return dentistaUpdated;
  }

  async auth(nombre_usuario: string): Promise<Dentista | undefined> {
    try {
      const dentista = await this.dentistaModel.findOne({nombre_usuario});
      console.log(dentista)
  
      if(!dentista){
        throw new NotFoundException()
      }
      return dentista

    } catch (error) {
      return error
    }
  }

}
