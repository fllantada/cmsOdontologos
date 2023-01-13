"use client";
import { Cita } from "../../componentes/citas/entity_citas";
import Alert from "@mui/material/Alert";

const CardCita: React.FC<{ cita: Cita }> = ({ cita }) => {
  return (
    <div key={cita.id_paciente}>
      <p>
        Hora inicio:{cita.hora_inicio} a {cita.hora_fin}
      </p>
      <p>Hora Fin {cita.nombre_paciente}</p>
      <h1>Dentista: {cita.nombre_dentista}</h1>
      <h2 color='blue'>Estado {cita.nombre_estado}</h2>
      <h1>
        {" "}
        {cita.id_situacion === 1 ? (
          <Alert severity='error'>{cita.descripcion_situacion}</Alert>
        ) : cita.id_situacion === 2 ? (
          <Alert severity='warning'>{cita.descripcion_situacion}</Alert>
        ) : cita.id_situacion === 3 ? (
          <Alert severity='info'>{cita.descripcion_situacion}</Alert>
        ) : (
          <Alert severity='success'>{cita.descripcion_situacion}</Alert>
        )}
      </h1>
    </div>
  );
};
export default CardCita;
