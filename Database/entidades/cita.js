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
    cita.push(
      {
        _id: faker.database.mongodbObjectId(),

        fecha: faker.helpers.arrayElement(['2023-01-24', '2023-02-15', '2023-03-20', '2023-05-16', '2023-11-23']),
        hora: faker.helpers.arrayElement(['10hs',  '10.30hs', '11hs', '13hs', '15hs', '16.30hs']),
        paciente: '35785321',
        profesional: '541c2b97bac0595474108b48',

        estado: faker.helpers.arrayElement(['pendiente', 'confirmada', 'cancelada', 'finalizada']),
        estado_cuenta: faker.helpers.arrayElement(['saldada', 'deuda', 'saldo a favor']),
        acciones: [
          {
          prestacion: 'Diagnóstico',
          precio: 2000,
          importe_profesional: 1300,
          importe_clinica: 700, 
          },
          {
            prestacion: 'Tratamiento de conducto',
            precio: 5500,
            importe_profesional: 3000,
            importe_clinica: 2500, 
          },
        ],
        pagos: [
          {
            importe: '2000',
            medio_pago: 'efectivo',
          },
          {
            importe: '5500',
            medio_pago: 'transferencia',
          }
        ],
      },
      
      {
        _id: faker.database.mongodbObjectId(),

        fecha: faker.helpers.arrayElement(['2023-01-24', '2023-02-15', '2023-03-20', '2023-05-16', '2023-11-23']),
        hora: faker.helpers.arrayElement(['10hs', '13hs', '16hs', '19hs']),
        paciente: '30159632',
        profesional: '589a3d59sdf0595426335a77',

        estado: faker.helpers.arrayElement(['pendiente', 'confirmada', 'cancelada', 'finalizada']),
        estado_cuenta: faker.helpers.arrayElement(['saldada', 'deuda', 'saldo a favor']),
        acciones: [
          {
            prestacion: 'Limpieza dental',
            precio: 3000,
            importe_profesional: 2000,
            importe_clinica: 1000, 
          },
          {
            prestacion: 'Colocación de implante',
            precio: 15000,
            importe_profesional: 7000,
            importe_clinica: 8000, 
          }
        ],
        pagos: [
          {
            importe: '15000',
            medio_pago: 'tarjeta',
          },
          {
            importe: '3000',
            medio_pago: 'bonificacion',
          }
        ],
      },

    );
  }

  return cita;
}