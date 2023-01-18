import { Schema } from 'mongoose';

export const CitasSchema = new Schema({
  nombre_paciente: { type: String, required: true },
  hora_inicio: { type: String, required: true },
  hora_fin: { type: String, required: true },
  duracion: { type: Number, required: true },
  id_dentista: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  fecha: { type: String, required: true },
  id_estado: { type: Number, required: true },
  nombre_estado: { type: String, required: true },
  id_situacion: { type: Number, required: true },
  descripcion_situacion: { type: String, required: true },
});
