import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearAcciones();
  const acciones = db.collection("acciones");
  await acciones.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearAcciones() {
  const acciones = [];

  acciones.push(
    {
      prestacion: 'Extracción dentaria',
      precio: 10000,
      importe_profesional: 5500,
      importe_clinica: 4500, 
    },
    {
      prestacion: 'Limpieza dental',
      precio: 3000,
      importe_profesional: 2000,
      importe_clinica: 1000, 
    },
    {
      prestacion: 'Tratamiento de conducto',
      precio: 5500,
      importe_profesional: 3000,
      importe_clinica: 2500, 
    },
    {
      prestacion: 'Diagnóstico',
      precio: 2000,
      importe_profesional: 1300,
      importe_clinica: 700, 
    },
    {
      prestacion: 'Colocación de implante',
      precio: 15000,
      importe_profesional: 7000,
      importe_clinica: 8000, 
    },
  );

  return acciones;
}