"use client"

import Alert from '@mui/material/Alert'
import jsonData from './mocker_citas.json'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#001960",
    color: "white",
    fontSize: 16,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));


 const Citas = () => {

 let citas = jsonData;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Hora</StyledTableCell>
            <StyledTableCell align="right">Paciente</StyledTableCell>
            <StyledTableCell align="right">Doctor&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Estado de la cita&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Situación&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {citas.map((c) => (
            <StyledTableRow key={c.id_paciente}>

              <StyledTableCell align="right"  >{c.hora_inicio} a {c.hora_fin}</StyledTableCell>
              <StyledTableCell align="right">{c.nombre_paciente}</StyledTableCell>
              <StyledTableCell align="right">{c.nombre_dentista}</StyledTableCell>
              <StyledTableCell align="right">{c.nombre_estado}</StyledTableCell>
              <StyledTableCell >   {c.id_situacion === 1 ? <Alert severity="error">{c.descripcion_situacion}</Alert>
                : c.id_situacion === 2 ? <Alert severity="warning">{c.descripcion_situacion}</Alert> :
                  c.id_situacion === 3 ? <Alert severity="info">{c.descripcion_situacion}</Alert> :
                    <Alert severity="success">{c.descripcion_situacion}</Alert>}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default Citas


















    



