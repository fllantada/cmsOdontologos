import { Cita } from "../../componentes/citas/entity_citas";
//profesionales
export interface Profesional {
    id_professional: number;
    nombre: string;
    apellido: string;
    celular: string;
    citas: Cita[];
  };