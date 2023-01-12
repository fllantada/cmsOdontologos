
//citas
export type Cita = 
    {
        id_paciente: number,
        nombre_paciente: string,
        hora_inicio: string,
        hora_fin: string,
        duracion: number,
        id_dentista: number,
        nombre_dentista: string,
        fecha: Date,
        id_estado: number,
        nombre_estado: string ,
        id_situacion:number,
        descripcion_situacion:string
    }

//profesionales
export type Profesional = {
    id_professional: number,
    nombre: string,
    apellido: string,
    celular: string,
    citas: Cita[]
}

export type Paciente = {
    id_paciente: number,
    nombre: string,
    apellido: string

}
export type Estado_cita = {
    id_estado_cita: number,
    descripcion: string
}
export type Situacion = {
    id_situacion: number,
    descripcion: string
}
//Pagos
export type Pagos = {
    id_pagos: number
    nombre_pagador: string,
    monto_pago: number,
    nombre_banco: string,
    fecha_recepcion: Date,
    fecha_vencimiento: Date,
    fecha_creacion: Date,
    rut_emisor: number
}
import { type } from "os"
export type Usuario = {
    id_usuario: number,
    nombre_usuario: string,
}
