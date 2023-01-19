import { faker } from "@faker-js/faker";
import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearUruarios(100);
  const usuarios = db.collection("usuarios");
  await usuarios.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearUruarios(n) {
  const usuarios = [];

  for (let i = 0; i < n; i++) {
    usuarios.push({
      id_usuario: faker.finance.account(8),
      nombre: faker.name.fullName(),
      apellido: faker.name.lastName(),
      dni: faker.finance.account(8),
      email: faker.internet.email(),   
      telefono: faker.phone.imei(),     
      direccion: faker.address.buildingNumber(),
      id_rol: faker.finance.account(8),
      nombre_usuario: faker.internet.userName(),
      password: faker.random.alpha(8),      
    });
  }

  return usuarios;
}