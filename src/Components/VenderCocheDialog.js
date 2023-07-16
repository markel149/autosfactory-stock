import React from 'react';

import { CocheUpdateForm } from '../ui-components';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DataStore } from '@aws-amplify/datastore';
import { Coche } from '../models';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function VenderCocheDialog({ cocheVender, open, setOpen, setCoches }) {

    const handleClose = () => {
      setOpen(false);
    };

    async function formSuccess(){
        const c = await DataStore.query(Coche)
        setCoches(c)
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
            <DialogTitle align='center'>Vender el coche {cocheVender.marca} {cocheVender.modelo} - {cocheVender.matricula}</DialogTitle>
            <DialogContent>
                <CocheUpdateForm onSuccess={formSuccess} coche={cocheVender}/>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default VenderCocheDialog
