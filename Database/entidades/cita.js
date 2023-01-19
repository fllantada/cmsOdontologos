import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearCita(10);
  const citas = db.collection("citas");
  await citas.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearCita(n) {
  const cita = [];

  for (let i = 0; i < n; i++) {
    cita.push({
      id_cita: faker.finance.account(8),    
      fecha: faker.date.between('2023-01-01', '2023-12-31'),
      hora: faker.datatype.datetime(),
      id_usuario: faker.finance.account(8),
      id_profesional: faker.finance.account(8),
      acciones: faker.datatype.array(5),
      id_estado_cita: faker.finance.account(8),
    });
  }

  return cita;
}