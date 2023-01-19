interface Usuario {
  id_usuario: number;
  nombre: string;
  apellido: string;
  dni: number;
  email: string;
  telefono: number;
  direccion: string;
  id_rol: number;
  nombre_usuario: string;
  password: string;
}

interface RolUsuario {
  id_rol: number;
  rol: string;
}

interface Profesional {
  id_profesional: number;
  id_usuario: number;
  id_sucursal: number;
  agenda_online: boolean;
  duracion_consulta: number;
  sucursales: Sucursal[];
  citas: Cita[];
}

interface Sucursal {
  id_sucursal: number;
  direccion: string;
  ciudad: string;
  provincia: string;
  telefono: number;
  email: string;
  profesionales: Profesional[];
}

interface Cita {
  id_cita: number;
  fecha: Date;
  hora: string;
  id_usuario: number;     
  id_profesional: number;
  acciones: Accion[];
  id_estado_cita: number;
}

interface EstadoCita{
  id_estado_cita: number;
  estado_cita: string;
}

interface Accion {
  id_accion: number;
  accion: string;
  id_cita: number;
  prestacion: Prestacion[];
  estado_cuenta: boolean;
  id_pago: number;
}

interface Prestacion {
  id_prestacion: number;
  prestacion: string;
  id_accion: number;
  precio: number;
  importe_profesional: number;
  importe_clinica: number;
}

interface Pago {
  id_pago: number;
  id_cita: number;
  importe: number;
  id_medio_pago: number;
  fecha_recepcion: Date;
}

interface MedioPago {
  id_medio_pago: number;
  medio_pago: string;
}

interface Liquidacion {
  id_liquidacion: number;
  id_profesional: number;
  fecha: Date;
  acciones: Accion[];
  pagos: Pago[];
  importe: number;
}