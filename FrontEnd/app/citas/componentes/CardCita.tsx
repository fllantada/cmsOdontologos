
import { Cita } from "../domain/Cita.entity";
import Alert from "@mui/material/Alert";
import Grid from '@mui/material/Unstable_Grid2'; // Grid2
import { Box, Card } from '@mui/material';
import { HourRangeBox } from "./StyledComponents/HourRangebox";



const CardCita: React.FC<{ cita: Cita }> = ({ cita }) => {
  return (
    <Grid xs={3} spacing={1} >
      <Card key={cita.id_situacion}  >
         <HourRangeBox text={cita.hora_inicio} />
         <Box sx={{ display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',}}>
        Horario: {cita.hora_inicio}  a  {cita.hora_fin}</Box> 
         
        <p>Paciente: {cita.nombre_paciente}</p>
        <p>Dentista: {cita.nombre_dentista}</p>
        <h3>Estado: {cita.nombre_estado}</h3>
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
      </Card>
    </Grid>
  );
};
export default CardCita;
