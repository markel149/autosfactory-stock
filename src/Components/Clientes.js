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
import { ClienteCreateForm, ClienteUpdateForm } from '../ui-components';
import Edit from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

    async function formSuccess2(){
      const c = await DataStore.query(Cliente)
      // for (const item in c) {
      //   await DataStore.save(item)

      // }
      setClientes(c)
      setOpenEditar(false)
      // return (
      //   <Alert severity="success">This is a success alert — check it out!</Alert>
      // )

    }

    const [clienteEditar, setClienteEditar] = useState(initialState)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [openEditar, setOpenEditar] = React.useState(false);

    const handleClickOpenEditar = (cliente) => {
      setClienteEditar(cliente)
      openEditor()
      console.log(cliente)
      console.log(clienteEditar)
    };

    const openEditor = () => {
      setOpenEditar(true);
    }

    const handleCloseEditar = () => {
      setOpenEditar(false);
    };

    async function handleDeleteClient(cliente) {
      const toDelete = await DataStore.query(Cliente, cliente.id);
      DataStore.delete(toDelete);
    }

    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Mis clientes</h2>
        <Button variant="outlined" onClick={handleClickOpen}>
        Añadir Cliente
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth='lg'
        fullWidth={true}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align='center'>{"Alta de nuevo cliente"}</DialogTitle>
        <DialogContent>
            <ClienteCreateForm onSuccess={formSuccess}></ClienteCreateForm>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>

      <Dialog
        open={openEditar}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseEditar}
        maxWidth='lg'
        fullWidth={true}
        color='secondary'
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align='center'>{"Editar cliente"}</DialogTitle>
        <DialogContent>
            <ClienteUpdateForm onSuccess={formSuccess2} cliente={clienteEditar}/>
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
            <TableCell align="center"><b>Acciones</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.nombre}</TableCell>
              <TableCell align="center">{row.apellido1}</TableCell>
              <TableCell align="center">{row.apellido2}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.telefono}</TableCell>
              <TableCell align="center">{row.dni}</TableCell>
              <TableCell align="center">
              <Button variant="outlined" onClick={() => handleClickOpenEditar(row)} startIcon={<Edit />} style={{ marginRight: 10 }}>
                Edit
              </Button>
              <Button variant="contained" color='error' onClick={() => handleDeleteClient(row)} startIcon={<DeleteIcon />}>
                Delete
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    );
  }
  
  export default Clientes