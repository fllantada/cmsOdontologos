import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearPrestacion(20);
  const prestaciones = db.collection("prestaciones");
  await prestaciones.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearPrestacion(n) {
  const prestacion = [];

  for (let i = 0; i < n; i++) {
    prestacion.push({
      id_prestacion: faker.finance.account(8),    
      prestacion: faker.lorem.lines(1),
      id_accion: faker.finance.account(8), 
      precio: faker.finance.amount(1000, 100000, 0, '$'),
      importe_profesional: faker.finance.amount(1000, 10000, 0, '$'),
      importe_clinica: faker.finance.amount(1000, 10000, 0, '$'),
    });
  }

  return prestacion;
}