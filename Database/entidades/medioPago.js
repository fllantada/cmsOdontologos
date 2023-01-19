import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearMedioPago(10);
  const medio_pago = db.collection("medioDePago");
  await medio_pago.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearMedioPago(n) {
  const medioDePago = [];

  for (let i = 0; i < n; i++) {
    medioDePago.push({
      id_medio_pago: faker.finance.account(8),
      medio_pago: faker.finance.transactionType(),
    });
  }

  return medioDePago;
}