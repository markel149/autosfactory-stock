import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Cliente } from '../models';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ClienteCreateForm } from '../ui-components';

const initialState = []

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Clientes({ signOut, user }) {
    const [clientes, setClientes] = useState(initialState)

    useEffect(() => {
      const pullData = async() => {
        const c = await DataStore.query(Cliente)
        console.log(c)
        setClientes(c)
      }

      pullData()
    },[])

    async function formSuccess(){
      const c = await DataStore.query(Cliente)
      setClientes(c)
      setOpen(false)
      // return (
      //   <Alert severity="success">This is a success alert — check it out!</Alert>
      // )

    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Stock clientes</h2>
        <Button variant="outlined" onClick={handleClickOpen}>
        Añadir Cliente
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Estas dando de alta un nuevo cliente"}</DialogTitle>
        <DialogContent>
            <ClienteCreateForm onSuccess={formSuccess}></ClienteCreateForm>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Nombre</b></TableCell>
            <TableCell align="center"><b>Apellido</b></TableCell>
            <TableCell align="center"><b>Segundo Apellido</b></TableCell>
            <TableCell align="center"><b>Email</b></TableCell>
            <TableCell align="center"><b>Telefono</b></TableCell>
            <TableCell align="center"><b>DNI</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.Nombre}</TableCell>
              <TableCell align="center">{row.Apellido1}</TableCell>
              <TableCell align="center">{row.Apellido2}</TableCell>
              <TableCell align="center">{row.Apellido2}</TableCell>
              <TableCell align="center">{row.Apellido2}</TableCell>
              <TableCell align="center">{row.Apellido2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    );
  }
  
  export default Clientes