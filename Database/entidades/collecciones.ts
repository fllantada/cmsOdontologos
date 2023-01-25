//ID de 12 bytes: 4 bytes marca de tiempo, 5 bytes valor ramdom y 3 bytes contador incremental.

interface Usuario {
  _id: string; // Object Id de Mongo ver el type
  nombre: string;
  apellido: string;
  email: string; //rol de ID tiene q ser unico
  password: string;
  telefono: number;
  rol: RolUsuario; // Object Id Mongo ver el type
}

type RolUsuario = "paciente" | "profesional" | "administrador";

interface Profesional {
  _id: string; // Object Id de Mongo ver el type
  email: string;
  sucursales: Sucursal[];
}

interface Sucursal {
  _id: string; // Object Id de Mongo ver el type
  direccion: string;
  ciudad: string;
  provincia: string;
  profesionales: Profesional[];
}

interface Cita {
  //objeto dinamico
  _id: string; // Object Id de Mongo ver el type

  //creacionales
  fecha: Date;
  hora: string;
  paciente: number; //dni paciente
  profesional: number;

  //dinamicos
  estado: EstadoCita;
  estado_cuenta: EstadoCuenta;
  acciones: Acciones[];
  pagos: Pagos[];
}

type EstadoCuenta = "saldada" | "deuda" | "saldo a favor";
type EstadoCita = "pendiente" | "confirmada" | "cancelada" | "finalizada";
type MedioPago = "efectivo" | "tarjeta" | "transferencia" | "bonificacion";

interface Pagos {
  importe: number;
  medio_pago: MedioPago;
};

interface Acciones {
  prestacion: string;
  precio: number;
  importe_profesional: number;
  importe_clinica: number;
};

//ValueObject
/*
interface Accion {
  prestacion: Prestacion[];
}

//Entidad
interface Prestacion {
  _id: string; // Object Id de Mongo ver el type
  prestacion: string;
  id_accion: number;
  precio: number;
  importe_profesional: number;
  importe_clinica: number;
}

interface Pago {
  _id: string; // Object Id de Mongo ver el type
  id_cita: number;
  importe: number;
  id_medio_pago: number;
  fecha_recepcion: Date;
}

type MedioPago = "efectivo" | "tarjeta" | "transferencia" | "bonificacion";
 */
