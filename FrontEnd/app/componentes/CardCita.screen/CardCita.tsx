"use client"
import { Cita } from '../citas/entity_citas'
import Alert from '@mui/material/Alert'

 const CardCita: React.FC<{ c: Cita }> = ({ c }) => {
  return (

    <div key={c.id_paciente}>

      <p   >Hora inicio:{c.hora_inicio} a {c.hora_fin}</p>
      <p >Hora Fin {c.nombre_paciente}</p>
      <h1>Dentista: {c.nombre_dentista}</h1>
      <h2 color="blue">Estado {c.nombre_estado}</h2>
      <h1>   {c.id_situacion === 1 ? <Alert severity="error">{c.descripcion_situacion}</Alert>
        : c.id_situacion === 2 ? <Alert severity="warning">{c.descripcion_situacion}</Alert> :
          c.id_situacion === 3 ? <Alert severity="info">{c.descripcion_situacion}</Alert> :
            <Alert severity="success">{c.descripcion_situacion}</Alert>}</h1>
    </div>
  )

}
export default CardCita

 