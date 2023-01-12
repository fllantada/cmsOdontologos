import { Schema } from "mongoose";


export const DentistasSchema = new Schema({
id_sucursal: {
  type: Number,
  required: true,
},
rut: {
   type: String,
  required: true,
},
nombre:{
  type: String,
  required: true
},
apellidos: {
  type: String,
  required: true
},
telefono: {
  type: String,
  required: true
},
direccion: {
  type: String,
  required: true,
},
email: {
  type: String,
  required: true,
  unique: true
},
nombre_usuario: {
  type: String,
  required: true
},
password: {
  type: String,
  required: true
},
agenda_online: {
  type: Boolean,
  default: true,
},
ciudad: {
  type: String,
  required: true,
},
duracion_consulta: {
  type: Number,
  required: true,
}
})