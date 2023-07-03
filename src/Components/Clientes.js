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
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';



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
    }

    async function formSuccess2(){
      const c = await DataStore.query(Cliente)
      setClientes(c)
      setOpenEditar(false)
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    
    const [clienteEditar, setClienteEditar] = useState(initialState)
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

    const [clienteDelete, setClienteDelete] = useState(initialState)
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleCloseDelete = () => {
      setOpenDelete(false);
    };

    const  handleDeleteClientClick = (cliente) => {
      setClienteDelete(cliente)
      openDeleter()
      console.log(cliente)
      console.log(clienteDelete)
    }

    const openDeleter = () => {
      setOpenDelete(true);
    }

    async function handleDeleteClient(cliente) {
      const toDelete = await DataStore.query(Cliente, cliente.id);
      DataStore.delete(toDelete);
      const c = await DataStore.query(Cliente)
      setClientes(c)
      setOpenDelete(false)
    }


    return (
      <div>
        <Typography>
          <h2 style={{textAlign: 'center'}}>CLIENTES</h2>
        </Typography>
        <Button variant="outlined" onClick={handleClickOpen} style={{ marginLeft: 20 }} startIcon={<AddIcon></AddIcon>}>
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

      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        maxWidth='lg'
        fullWidth={true}
        color='secondary'
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align='center'>{"Borrar cliente"}</DialogTitle>
        <DialogContent style={{ textAlign: 'center'}}>
          Vas a borrar el cliente {clienteDelete.nombre} {clienteDelete.apellido1} con DNI: {clienteDelete.dni}. Si continua con este proceso no podra recuperar los datos. ¿Quieres continuar?
          <br></br>
          <br></br>
          <Button variant="outlined" onClick={() => setOpenDelete(false)} startIcon={<CancelIcon />} style={{ marginRight: 10 }}>
                Cancelar
          </Button>
          <Button variant="contained" color='error' onClick={() => handleDeleteClient(clienteDelete)} startIcon={<DeleteIcon />}>
                Delete
          </Button>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
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
              <TableCell align="center"><PersonIcon></PersonIcon></TableCell>
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
              <Button variant="contained" color='error' onClick={() => handleDeleteClientClick(row)} startIcon={<DeleteIcon />}>
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