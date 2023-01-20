import { Date, Document } from "mongoose";

export interface Pago extends Document{
    id: number;
    medio_pago: Medio_pago;
    fecha_recepcion: Date;
    fecha_vencimiento: Date;
    fecha_creacion: Date;
}


export interface Medio_pago extends Document {
    id: number;
    medio_pago: string;
}