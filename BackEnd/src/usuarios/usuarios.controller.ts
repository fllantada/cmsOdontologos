import {
  Controller,
  Get,
  Post,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}
  @Post()
  async create(@Res() res: any, @Body() createUsuarioDTO: CreateUsuarioDTO) {
    const usuario = await this.usuariosService.createUsuario(
      createUsuarioDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'usuario creado',
      usuario: usuario,
    });
  }
  @Get()
  async getUsuarios(@Res() res: any) {
    const usuarios = await this.usuariosService.getUsuarios();
    return res.status(HttpStatus.OK).json(usuarios);
  }
  @Get('/:usuarioID')
  async getUsuario(@Res() res: any, @Param('usuarioID') usuarioID: string) {
    const usuario = await this.usuariosService.getUsuario(usuarioID);
    return res.status(HttpStatus.OK).json(usuario);
  }
  @Delete('/:usuarioID')
  async deleteUsuario(
    @Res() res: any,
    @Param('usuarioID') usuarioID: string,
  ) {
    const usuarioDeleted = await this.usuariosService.deleteUsuario(
      usuarioID,
    );
    return res.status(HttpStatus.OK).json({
      message: 'usuario eliminado',
      usuario: usuarioDeleted,
    });
  }
  @Patch('/:usuarioID')
  async updateUsuario(
    @Res() res: any,
    @Param('usuarioID') usuarioID: string,
    @Body() createUsuarioDTO: CreateUsuarioDTO,
  ) {
    const usuarioUpdated = await this.usuariosService.updateUsuario(
      usuarioID,
      createUsuarioDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'usuario actualizado',
      usuario: usuarioUpdated,
    });
  }
}
