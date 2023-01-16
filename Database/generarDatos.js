const { faker } = require('@faker-js/faker');

async function generardata(cantidad) {

    let dentistas = [];

    for (let i = 0; i < cantidad; i++) {
        const idSucursal = faker.finance.account(8);
        const rut = faker.finance.account(3);
        const nombre = faker.name.fullName();
        const apellido = faker.name.lastName();
        const telefono = faker.phone.imei();
        const email = faker.internet.email();        
        const direccion = faker.address.buildingNumber();
        const nombreusuario = faker.name.fullName();
        const password = faker.random.alpha(8);
        const agendaOnline = faker.random.numeric(1);
        const ciudad = faker.address.cityName();        
        const duracionConsulta = faker.finance.account(1);
   
        dentistas.push({
            idSucursal: idSucursal,
            rut: rut,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            direccion: direccion,
            nombreusuario: nombreusuario,
            password: password,
            agendaOnline: agendaOnline, 
            ciudad: ciudad,
            duracionConsulta: duracionConsulta,                  
        });
    }

    return dentistas;
}

console.log(generardata(10));