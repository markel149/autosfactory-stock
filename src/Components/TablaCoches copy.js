import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Edit from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';






export function TablaCoches({ coches, setOpenEditar, setCocheEditar, setOpenDelete, setCocheDelete, setCocheInfo, setOpenInfo }) {

    const handleClickOpenEditar = (coche) => {
        setCocheEditar(coche)
        setOpenEditar(true);
    };

    const handleClickOpenInfo = (coche) => {
        setCocheInfo(coche)
        setOpenInfo(true);
    };
  
    const  handleDeleteCocheClick = (coche) => {
        setCocheDelete(coche)
        setOpenDelete(true);
    };
  


    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"><b>Marca</b></TableCell>
                    <TableCell align="center"><b>Modelo</b></TableCell>
                    <TableCell align="center"><b>Matricula</b></TableCell>
                    <TableCell align="center"><b>Estado</b></TableCell>
                    <TableCell align="center"><b>Acciones</b></TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
          {coches.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"><DirectionsCarIcon></DirectionsCarIcon></TableCell>
              <TableCell align="center">{row.marca}</TableCell>
              <TableCell align="center">{row.modelo}</TableCell>
              <TableCell align="center">{row.matricula}</TableCell>
              <TableCell align="center"><p>VENDIDO</p></TableCell>
              <TableCell align="center">
              <Button variant="outlined" onClick={() => handleClickOpenInfo(row)} startIcon={<AttachMoneyIcon />} color='success' style={{ marginRight: 10 }}>
                Vender
              </Button>
              <Button variant="outlined" onClick={() => handleClickOpenInfo(row)} startIcon={<InfoIcon />} style={{ marginRight: 10 }}>
                Detalles
              </Button>
              <Button variant="outlined" onClick={() => handleClickOpenEditar(row)} startIcon={<Edit />} style={{ marginRight: 10 }}>
                Editar
              </Button>
              <Button variant="contained" color='error' onClick={() => handleDeleteCocheClick(row)} startIcon={<DeleteIcon />}>
                Borrar
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>



        </div>
    )
}

export default TablaCoches
