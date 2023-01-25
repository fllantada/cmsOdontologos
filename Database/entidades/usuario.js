import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearUsuarios();
  const usuarios = db.collection("usuarios");
  await usuarios.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearUsuarios() {
  const usuarios = [];
  
  usuarios.push(
    {
      _id: '517f1f88bcf86cd799774826',
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'administrador1@darmas.com',
      password: '12345abc',
      telefono: 2345484965,
      rol: 'administrador',
    },
    {
      _id: '308f1f77bcf86cd799439011',
      nombre: 'Pedro',
      apellido: 'Balbo',
      email: 'administrador2@darmas.com',
      password: 'pb987454',
      telefono: 2346458598,
      rol: 'administrador',
    },
    {
      _id: '407f191e810c19729de860ea',
      nombre: 'Pablo',
      apellido: 'Fernandez',
      email: 'profesional1@darmas.com',
      password: 'mkl32456',
      telefono: 0114072016,
      rol: 'profesional',
    },
    {
      _id: '890p589e810h19729ji985lp',
      nombre: 'Marina',
      apellido: 'Cuel',
      email: 'profesional2@darmas.com',
      password: '36995874',
      telefono: 2348979525,
      rol: 'profesional',
    },
    {
      _id: '00000020f51bb4362eee2a4d',
      nombre: 'Gabriel',
      apellido: 'Dadario',
      email: 'paciente1@darmas.com',
      password: 'holamundo1',
      telefono: 2347589874,
      rol: 'paciente',
    },
    {
      _id: '11111120f51dd1478fdg154h',
      nombre: 'Martina',
      apellido: 'Santoro',
      email: 'paciente2@darmas.com',
      password: '15487987m',
      telefono: 01144516135,
      rol: 'paciente',
    },
  );

  return usuarios;
}
