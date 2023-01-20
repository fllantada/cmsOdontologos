export interface Pagos {
    id_pagos: number;
    nombre_pagador: string;
    monto_pago: number;
    nombre_banco: string;
    fecha_recepcion: Date;
    fecha_vencimiento: Date;
    fecha_creacion: Date;
    rut_emisor: number;
  };