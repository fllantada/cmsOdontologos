import { Schema } from "mongoose";

export const PagosSchema = new Schema ({
id: {
    type: Number,
    default: 0,
},
id_medio_pago: {
    type: Schema.Types.ObjectId,
    required: true,
},
medio_pago: {
    type: String,
    required: true,
},
fecha_recepcion: {
    type: Date
},
fecha_vencimiento: {
    type: Date
},
fecha_creacion: {
    type: Date
}
})