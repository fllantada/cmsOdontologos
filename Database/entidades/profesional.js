import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearProfesionales(1);
  const profesionales = db.collection("profesionales");
  await profesionales.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearProfesionales(n) {
  const profesional = [];

  for (let i = 0; i < n; i++) {
    profesional.push({
      id_profesional: faker.finance.account(8),
      id_usuario: faker.finance.account(8),
      id_sucursal: faker.finance.account(8),
      agenda_online: faker.datatype.boolean(),
      duracion_consulta: faker.datatype.number({ min: 10, max: 60, precision: 10 }),
      sucursales: faker.datatype.array(5),
      citas: faker.datatype.array(10),          
    });
  }

  return profesional;
}