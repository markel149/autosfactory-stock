import React from 'react';

import { ClienteCreateForm } from '../ui-components';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { DataStore } from '@aws-amplify/datastore';
import { Cliente } from '../models';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function ClienteCreateDialog({ setClientes }) {

    const [open, setOpen] = React.useState(false);
    const handleClose2 = () => {
        setOpen2(false);
    };
    const [open2, setOpen2] = React.useState(false);
    const action = (
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose2}
          >
        <CloseIcon fontSize="small" />
          </IconButton>
      );

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    

    async function formSuccess(){
        const c = await DataStore.query(Cliente)
        setClientes(c)
        setOpen(false)
        setOpen2(true)
        
    }

    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft: 45, marginBottom: 20}} startIcon={<AddIcon></AddIcon>}>
          Añadir Cliente
        </Button>
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle align='center'>{"Alta de nuevo coche"}</DialogTitle>
            <DialogContent>
                <ClienteCreateForm onSuccess={formSuccess}></ClienteCreateForm>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
        <Snackbar
            open={open2}
            autoHideDuration={6000}
            onClose={handleClose2}
            message="Cliente dado de alta"
            action={action}
        />
        </div>
    )
}

export default ClienteCreateDialog
