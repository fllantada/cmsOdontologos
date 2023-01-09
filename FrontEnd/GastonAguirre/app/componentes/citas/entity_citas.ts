
//citas
export type Cita = {
    id_cita: number,
    fecha: Date,
    horario_inicial: string,
    horario_final:string,
    paciente: Paciente,
    doctor: Profesional,
    estado_cita: Estado_cita,
    situacion: Situacion,

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
