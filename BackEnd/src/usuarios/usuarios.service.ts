import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './interfaces/usuarios.interface';
import { CreateUsuarioDTO } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel('Usuarios') private readonly usuarioModel: Model<Usuario>,
  ) {}

  async getUsuarios(): Promise<Usuario[]> {
    const usuarios = await this.usuarioModel.find({ isActive: true });
    return usuarios;
  }

  async getUsuario(usuarioID: string): Promise<Usuario> {
    let usuario;
    if (usuarioID.match(/^[0-9a-fA-F]{24}$/)) {
      usuario = await this.usuarioModel.findById(usuarioID);
    }
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuario;
  }

  async createUsuario(
    createUsuarioDTO: CreateUsuarioDTO,
  ): Promise<Usuario> {
    const usuario = new this.usuarioModel(createUsuarioDTO);
    return await usuario.save();
  }

  async deleteUsuario(usuarioID: string): Promise<Usuario> {
    let usuarioDeleted;
    if (usuarioID.match(/^[0-9a-fA-F]{24}$/)) {
      usuarioDeleted = await this.usuarioModel.findByIdAndDelete(usuarioID);
    }
    if (!usuarioDeleted) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuarioDeleted;
  }
  async updateUsuario(
    usuarioID: string,
    createUsuarioDTO: CreateUsuarioDTO,
  ): Promise<Usuario> {
    let usuarioUpdated;
    if (usuarioID.match(/^[0-9a-fA-F]{24}$/)) {
      usuarioUpdated = await this.usuarioModel.findByIdAndUpdate(
        usuarioID,
        createUsuarioDTO,
        { new: true },
      );
    }
    if (!usuarioUpdated) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuarioUpdated;
  }

  async auth(nombre_usuario: string): Promise<Usuario | undefined> {
    try {
      const usuario = await this.usuarioModel.findOne({nombre_usuario});
      if(!usuario){
        throw new NotFoundException()
      }
      return usuario

    } catch (error) {
      return error
    }
  }

}
