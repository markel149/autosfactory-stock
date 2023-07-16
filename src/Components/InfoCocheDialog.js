import React from 'react';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import InformacionGeneralCoche from './InformacionGeneralCoche'
import EspecificacionesTecnicasCoche from './EspecificacionesTecnicasCoche';
import DetallesCompraCoche from './DetallesCompraCoche';
import DetallesVentaCoche from './DetallesVentaCoche';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function InfoCocheDialog({ cocheInfo, open, setOpen }) {

    const handleClose = () => {
      setOpen(false);
    };


    return (
        <div>
            <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose }
                aria-label="close"
                >
                <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {cocheInfo.marca} {cocheInfo.modelo} - {cocheInfo.matricula}
                </Typography>
            </Toolbar>
            </AppBar>
            <Grid container spacing={2}>
                <InformacionGeneralCoche cocheInfo={cocheInfo}></InformacionGeneralCoche>
                <EspecificacionesTecnicasCoche cocheInfo={cocheInfo}></EspecificacionesTecnicasCoche>
            </Grid>    
            <Grid container spacing={2}>
                <DetallesCompraCoche cocheInfo={cocheInfo}></DetallesCompraCoche>
                <DetallesVentaCoche cocheInfo={cocheInfo}></DetallesVentaCoche>
            
            </Grid>
            </Dialog>
        </div>
    )
}

export default InfoCocheDialog
