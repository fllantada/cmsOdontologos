Usuarios tiene roles

Usuario se registra al sistema

Se le crea un perfild e usuario invitado en el backend

en el front el ususario invitado solo tiene acceso a una pagina de instrucciones a seguir.

Usuario Admin crear una interfaz que vea los usuarios y poder cambiar roles ente invitado, admin, profesional

En caso de que se elija profesional se debe llamar al backend para que registre en el usuario un perfil profesional y asigne al id_profesional su correspondiente id de la tabla del perfil

si el rol es profesional tiene que tener un perfil profesional y un id profesional dentro de la entidad Usuarios

Esta responsabilidad de controlar que al pasar de rol Usuario a rol Profesional se crea un perfil profesional tiene que estar a cargod e un modulo del backend.

Un perfil profesional va a tener los siguientes

Perfil profesional minimo
{
datos de Usuario
sucursales donde tiene acceso.
}
ver que una sucursal puede tener varios profesionales y un profesional puede estar en mas de una sucursal. con lo cual son arreglos
Sucursal
{
provincia
ciudad
direccion
profesionales:[]

}

Entidades hasta ahora : Usuario, PerfilProfesional, Sucursal,

Ahora vamos a las entidades de negocio Cita, Liquidacion, Prestaciones, Pagos,

Cita: Viene de API dentalink hereda esa informacion coo entidad

Pago: Tiene un importe, un medio de pago, una id de paciente que abono, una id del profesional que recibió el pago

Prestaciones: Es una lista de posibles prestaciones que pueden ser realizadas seria como items de un ecomerce y tienen q poder ser editados desde una pantalla a la que ingres un admin

{
prestacion: lista de posibles tipo multipel choice
precio: (importe)
importe Profesional:
importe Darmas:
}
