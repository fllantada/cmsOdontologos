interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  id_profesional: number;
}

interface PerfilProfesional {
  id: number;
  id_usuario: number;
  sucursales: Sucursal[];
}

interface Sucursal {
  id: number;
  provincia: string;
  ciudad: string;
  direccion: string;
  profesionales: number[];
}

interface Cita {
  //se hereda en realidad
  id: number;
  fecha: Date;
  hora: string;
  id_paciente: number;
  id_profesional: number;
  acciones: AccionRealizada[];
}

interface Liquidacion {
  id: number;
  id_profesional: number;
  fecha: Date;
  acciones: AccionRealizada[];
  pagos: Pago[];
  importe: number;
}

interface Prestacion {
  id: number;
  prestacion: string;
  precio: number;
  importe_profesional: number;
  importe_clinica: number;
}

interface Pago {
  id: number;
  id_cita: number;
  importe: number;
  medio_pago: string;
}

interface AccionRealizada {
  id: number;
  id_cita: number;
  prestacion: String[];
  profesional: number;
  estado_cuenta: boolean;
  pago_asociado?: number;
}
