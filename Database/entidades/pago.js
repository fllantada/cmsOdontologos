import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearPago(50);
  const pagos = db.collection("pagos");
  await pagos.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearPago(n) {
  const pago = [];

  for (let i = 0; i < n; i++) {
    pago.push({
      id_pago: faker.finance.account(8),
      id_cita: faker.finance.account(8), 
      importe: faker.finance.amount(1000, 100000, 0, '$'),
      id_medio_pago: faker.finance.account(8),
      fecha: faker.date.between('2023-01-01', '2023-12-31'),
    });
  }

  return pago;
}