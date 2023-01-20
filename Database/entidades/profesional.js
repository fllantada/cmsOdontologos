import { connectMongo } from "../index.js";

async function generarData() {
  const db = await connectMongo();
  const randomData = crearProfesionales();
  const profesionales = db.collection("profesionales");
  await profesionales.insertMany(randomData);
  process.exit(0);
}

generarData();

function crearProfesionales() {
  const profesional = [];
  
  profesional.push(
    {
      _id: '541c2b97bac0595474108b48',
      email: 'profesional1@darmas.com',
      sucursales: [
        {
          _id: '222f1f42bcf86cd788439022',
          direccion: 'Azcuénaga 1811',
          ciudad: 'Capital Federal',
          provincia: 'Buenos Aires',
          profesionales: [
            {
              _id: '541c2b97bac0595474108b48',
              email: 'profesional1@darmas.com',
            },
            {
              _id: '589a3d59sdf0595426335a77',
              email: 'profesional2@darmas.com',
            }
          ]
        },
        {
          _id: '222f1f42bcf86cd788439023',
          direccion: 'Pueyrredón 367',
          ciudad: 'Capital Federal',
          provincia: 'Buenos Aires',
          profesionales: [
            {
              _id: '541c2b97bac0595474108b48',
              email: 'profesional1@darmas.com',
            },
            {
              _id: '589a3d59sdf0595426335a77',
              email: 'profesional2@darmas.com',
            }
          ]
        },
      ]
    },
    {
      _id: '589a3d59sdf0595426335a77',
      email: 'profesional2@darmas.com',
      sucursales: [
        {
          _id: '222f1f42bcf86cd788439022',
          direccion: 'Azcuénaga 1811',
          ciudad: 'Capital Federal',
          provincia: 'Buenos Aires',
          profesionales: [
            {
              _id: '541c2b97bac0595474108b48',
              email: 'profesional1@darmas.com',
            },
            {
              _id: '589a3d59sdf0595426335a77',
              email: 'profesional2@darmas.com',
            }
          ]
        },
        {
          _id: '222f1f42bcf86cd788439023',
          direccion: 'Pueyrredón 367',
          ciudad: 'Capital Federal',
          provincia: 'Buenos Aires',
          profesionales: [
            {
              _id: '541c2b97bac0595474108b48',
              email: 'profesional1@darmas.com',
            },
            {
              _id: '589a3d59sdf0595426335a77',
              email: 'profesional2@darmas.com',
            }
          ]
        },
        {
          _id: '222f1f42bcf86cd788439024',
          direccion: 'Yerbal 1680',
          ciudad: 'Capital Federal',
          provincia: 'Buenos Aires',
          profesionales: [
            {
              _id: '589a3d59sdf0595426335a77',
              email: 'profesional2@darmas.com',
            }
          ]
        },
      ]
    },
  );

  return profesional;
}