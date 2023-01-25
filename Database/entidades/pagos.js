import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearPagos();
  const pagos = db.collection("pagos");
  await pagos.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearPagos() {
  const pago = [];

  pago.push([
    {
      importe: '4900',
      medio_pago: 'efectivo',
    },
    {
      importe: '15000',
      medio_pago: 'tarjeta',
    },
    {
      importe: '10000',
      medio_pago: 'transferencia',
    },
    {
      importe: '2000',
      medio_pago: 'efectivo',
    },
    {
      importe: '12560',
      medio_pago: 'tarjeta',
    },
    {
      importe: '5500',
      medio_pago: 'transferencia',
    },
    {
      importe: '3000',
      medio_pago: 'bonificacion',
    },
    {
      importe: '4000',
      medio_pago: 'bonificacion',
    },
    {
      importe: '6480',
      medio_pago: 'efectivo',
    },
    {
      importe: '12040',
      medio_pago: 'transferencia',
    },   
  ]);

    return pago;

  }