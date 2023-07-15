import React from 'react';

import { CocheCreateForm } from '../ui-components';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
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


export function CreateCocheDialog({ setCoches }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

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
        <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft: 45, marginBottom: 20}} startIcon={<AddIcon></AddIcon>}>
          Añadir Coche
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
                <CocheCreateForm onSuccess={formSuccess}></CocheCreateForm>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default CreateCocheDialog
