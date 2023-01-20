import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usuariosService: UsuariosService, private jwtService: JwtService) {}

async validateUser(username: string, pass: string): Promise<any> {
  const user = await this.usuariosService.auth(username);
  if (user && user.password === pass) {
    const { password, ...result } = user;
    return result;
  }
  return null;
}

async login(user: any) {
    const payload = { nombre_usuario: user._doc.nombre_usuario, _id: user._doc._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }



}