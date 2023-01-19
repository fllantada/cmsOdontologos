import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearSucursal(10);
  const sucursales = db.collection("sucursales");
  await sucursales.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearSucursal(n) {
  const sucursal = [];

  for (let i = 0; i < n; i++) {
    sucursal.push({
      id_sucursal: faker.finance.account(8),        
      direccion: faker.address.buildingNumber(),
      ciudad: faker.address.cityName(), 
      provincia: faker.address.country(),
      telefono: faker.phone.imei(), 
      email: faker.internet.email(), 
      profesionales: faker.datatype.array(20),
    });
  }

  return sucursal;
}
