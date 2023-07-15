import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DataStore } from '@aws-amplify/datastore';
import { Cliente } from '../models';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function DeleteClientDialog({ clienteDelete, open, setOpen, setClientes }) {

    const handleClose = () => {
      setOpen(false);
    };



    async function handleDeleteCliente(cliente) {
        const toDelete = await DataStore.query(Cliente, cliente.id);
        DataStore.delete(toDelete);
        const c = await DataStore.query(Cliente)
        setClientes(c)
        setOpen(false)
      }

    return (
        <div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
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
                <Button variant="outlined" onClick={() => setOpen(false)} startIcon={<CancelIcon />} style={{ marginRight: 10 }}>
                        Cancelar
                </Button>
                <Button variant="contained" color='error' onClick={() => handleDeleteCliente(clienteDelete)} startIcon={<DeleteIcon />}>
                        Delete
                </Button>
            </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
        </div>
    )
}

export default DeleteClientDialog
