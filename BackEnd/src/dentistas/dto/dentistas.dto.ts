export class CreateDentistaDTO {
  readonly id_sucursal: Number;
  readonly rut: String;
  readonly nombre: String;
  readonly apellidos: String;
  readonly telefono: String;
  readonly email: string;
  readonly direccion: string;
  readonly sexo: string;
  readonly nombre_usuario: string;
  readonly password: string;
  readonly agenda_online: boolean;
  readonly ciudad: string;
  readonly duracion_consulta: number;
}