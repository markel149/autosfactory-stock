import React from 'react';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import InformacionGeneralCoche from './InformacionGeneralCoche'
import EspecificacionesTecnicasCoche from './EspecificacionesTecnicasCoche';



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
            <Grid item xs={6} >
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    <h5 style={{textAlign: 'center'}}>Detalles de compra</h5>
                </Typography>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <List style={{marginLeft: 20}}> 
                    <ListItem >
                    <ListItemText
                        primary="Nombre vendedor"
                        secondary={cocheInfo.nombreVendedor}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                        primary="Importe compra"
                        secondary={cocheInfo.precioCompra}
                    />
                    </ListItem>
                </List>
                </Grid>
                <Grid item xs={6}>
                <List style={{marginLeft: 20}}> 
                    <ListItem >
                    <ListItemText
                        primary="NIF/CIF Vendedor"
                        secondary={cocheInfo.nifVendedor}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                    primary="Nº Factura Compra"
                    secondary={cocheInfo.numeroFactura}
                    />
                </ListItem>
                </List>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} >
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    <h5 style={{textAlign: 'center'}}>Detalles de venta</h5>
                </Typography>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <List> 
                    <ListItem >
                    <ListItemText
                        primary="Año"
                        secondary="No seais impacientes que todavia no he metido esto."
                    />
                    </ListItem>
                </List>
                </Grid>
                <Grid item xs={6}>
                <List> 
                    <ListItem >
                    <ListItemText
                        primary="C.C."
                        secondary="No seais impacientes que todavia no he metido esto."
                    />
                    </ListItem>
                </List>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
            </Dialog>
        </div>
    )
}

export default InfoCocheDialog
