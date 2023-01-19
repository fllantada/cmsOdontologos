import { Cita } from "./Cita.entity";
//profesionales
export interface Profesional {
    id_professional: number;
    nombre: string;
    apellido: string;
    celular: string;
    citas: Cita[];
  };