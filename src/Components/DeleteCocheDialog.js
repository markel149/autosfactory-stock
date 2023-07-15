import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DataStore } from '@aws-amplify/datastore';
import { Coche } from '../models';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function DeleteCocheDialog({ cocheDelete, open, setOpen, setCoches }) {

    const handleClose = () => {
      setOpen(false);
    };



    async function handleDeleteCoche(coche) {
        const toDelete = await DataStore.query(Coche, coche.id);
        DataStore.delete(toDelete);
        const c = await DataStore.query(Coche)
        setCoches(c)
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
            <DialogTitle align='center'>{"Borrar coche"}</DialogTitle>
            <DialogContent style={{ textAlign: 'center'}}>
            Vas a borrar el coche {cocheDelete.marca} {cocheDelete.modelo} con matricula {cocheDelete.matricula}. Si continua con este proceso no podra recuperar los datos. ¿Quieres continuar?
            <br></br>
            <br></br>
            <Button variant="outlined" onClick={() => setOpen(false)} startIcon={<CancelIcon />} style={{ marginRight: 10 }}>
                    Cancelar
            </Button>
            <Button variant="contained" color='error' onClick={() => handleDeleteCoche(cocheDelete)} startIcon={<DeleteIcon />}>
                    Delete
            </Button>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
        </div>
    )
}

export default DeleteCocheDialog
