import { Cita } from "./domain/Cita.entity";
import getMockCitas from "./infraestructura/servicios/getMockCitas";
import CardCita from "./componentes/CardCita";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2;
import Box from '@mui/material/Box';

export const CitasScreen: React.FC = () => {
  let citas: Cita[] = getMockCitas();
  return (
    <Box sx={{ margin:'10px', width: '95%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        {citas.map((cita: Cita ) => {
          return <CardCita cita={cita} />;
        })}
        </Grid>  
   </Box>
)
      }
