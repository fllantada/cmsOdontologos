import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearRolUruario(3);
  const roles = db.collection("rolUsuarios");
  await roles.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearRolUruario(n) {
  const rol = [];

  for (let i = 0; i < n; i++) {
    rol.push(
        {
            id_rol: 1,
            rol: 'Administrador',
        },
        {
            id_rol: 2,
            rol: 'Invitado',
        },
        {
            id_rol: 3,
            rol: 'Profesional',
        },
    );
  }

  return rol;
}