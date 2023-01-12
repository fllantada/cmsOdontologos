import { Document } from 'mongoose';
export interface Dentista extends Document {
  id_sucursal: Number;
  rut: String;
  nombre: String;
  apellidos: String;
  telefono: String;
  email: string;
  direccion: string;
  nombre_usuario: string;
  password: string;
  agenda_online: boolean;
  ciudad: string;
  duracion_consulta: number;
}









