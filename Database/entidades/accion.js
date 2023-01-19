import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearAccion(20);
  const acciones = db.collection("acciones");
  await acciones.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearAccion(n) {
  const accion = [];

  for (let i = 0; i < n; i++) {
    accion.push({
      id_accion: faker.finance.account(8),
      accion: faker.lorem.lines(1),
      id_cita: faker.finance.account(8),
      prestaciones: faker.datatype.array(4),
      estado_cuenta: faker.datatype.boolean(),
      id_pago: faker.finance.account(8),   
    });
  }

  return accion;
}