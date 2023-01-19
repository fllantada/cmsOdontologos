import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearEstadoCita(3);
  const estado_cita = db.collection("estadoCita");
  await estado_cita.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearEstadoCita(n) {
  const estado = [];

  for (let i = 0; i < n; i++) {
    estado.push(
        {
            id_estado_cita: 1,
            estado_cita: 'Aprobada',
        },
        {
            id_estado_cita: 2,
            estado_cita: 'En curso',
        },
        {
            id_estado_cita: 3,
            estado_cita: 'Cancelada',
        },     
    );
  }

  return estado;
}