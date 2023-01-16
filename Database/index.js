import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";

async function start() {
  const db = await connectMongo();
  const randomData = createRandomData(100);
  const dentistas = db.collection("dentistas");
  await dentistas.insertMany(randomData);
  process.exit(0);
}

start();

export async function connectMongo() {
  const url = "mongodb://localhost:27017";
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });

    const db = client.db("DBprueba");
    return db;
  } catch (error) {
    console.error(error);
  }
}

function createRandomData(n) {
  const dentistas = [];

  for (let i = 0; i < n; i++) {
    dentistas.push({
      idSucursal: faker.finance.account(8),
      rut: faker.finance.account(3),
      nombre: faker.name.fullName(),
      apellido: faker.name.lastName(),
      telefono: faker.phone.imei(),
      email: faker.internet.email(),        
      direccion: faker.address.buildingNumber(),
      nombreusuario: faker.name.fullName(),
      password: faker.random.alpha(8),
      agendaOnline: faker.random.numeric(1),
      ciudad: faker.address.cityName(),        
      duracionConsulta: faker.finance.account(1),
    });
  }

  return dentistas;
}