import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearLiquidacion(50);
  const liquidaciones = db.collection("liquidaciones");
  await liquidaciones.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearLiquidacion(n) {
  const liquidacion = [];

  for (let i = 0; i < n; i++) {
    liquidacion.push({
      id_liquidacion: faker.finance.account(8),
      id_profesional: faker.finance.account(8), 
      fecha: faker.date.between('2023-01-01', '2023-12-31'),
      acciones: faker.datatype.array(10),  
      pagos: faker.datatype.array(10),  
      importe: faker.finance.amount(1000, 100000, 0, '$'),      
    });
  }

  return liquidacion;
}