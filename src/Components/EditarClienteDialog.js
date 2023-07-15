import React from 'react';

import { ClienteUpdateForm } from '../ui-components';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DataStore } from '@aws-amplify/datastore';
import { Cliente } from '../models';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function EditarClienteDialog({ clienteEditar, open, setOpen, setClientes }) {

    const handleClose = () => {
      setOpen(false);
    };

    async function formSuccess(){
        const c = await DataStore.query(Cliente)
        setClientes(c)
        setOpen(false)
        
    }

    return (
        <div>
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle align='center'>{"Alta de nuevo liente"}</DialogTitle>
            <DialogContent>
                <ClienteUpdateForm onSuccess={formSuccess} cliente={clienteEditar}/>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default EditarClienteDialog
