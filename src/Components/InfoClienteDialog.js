import React, {useState, useEffect} from 'react';

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
import TablaCochesHistorico from './TablaCochesHistorico';


const initialState = []

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function InfoClienteDialog(props) {

    const [coches, setCoches] = useState(initialState)

    const handleClose = () => {
      props.setOpen(false);
      
    };
    
  
    useEffect(() => {
        const pullData = async() => {
        try {
            const c = await props.clienteInfo.Coches.values
            setCoches(c)
            console.log('c',c)
        } catch (e){
            console.log(e)
        }
    }
        pullData()
    },[props.clienteInfo.Coches])
    
    console.log('coches',coches)

  
  
    return (
        <div>
            <Dialog
                fullScreen
                open={props.open}
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
                {props.clienteInfo.nombre} {props.clienteInfo.apellido1} {props.clienteInfo.apellido2} - {props.clienteInfo.dni}
                </Typography>
            </Toolbar>
            </AppBar>   
            <Grid item xs={6} >
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    <h5 style={{textAlign: 'center'}}>Informacion de cliente</h5>
                </Typography>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <List style={{marginLeft: 20}}> 
                    <ListItem >
                    <ListItemText
                        primary="Nombre"
                        secondary={props.clienteInfo.nombre}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                        primary="Primer Apellido"
                        secondary={props.clienteInfo.apellido1}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                        primary="Segundo Apellido"
                        secondary={props.clienteInfo.apellido2}
                    />
                    </ListItem>
                    
                </List>
                </Grid>
                <Grid item xs={6}>
                <List style={{marginLeft: 20}}> 
                    <ListItem >
                    <ListItemText
                        primary="Telefono"
                        secondary={props.clienteInfo.telefono}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                        primary="Email"
                        secondary={props.clienteInfo.email}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                    primary="DNI"
                    secondary={props.clienteInfo.dni}
                    />
                    </ListItem>
                </List>
                </Grid>
                </Grid>
            </Grid>
            <Typography sx={{ ml: 2 }} variant="h6" component="div">
                    <h5 style={{textAlign: 'center'}}>Historico de compras</h5>
            </Typography>
            <TablaCochesHistorico coches={coches} heigh='30vh'></TablaCochesHistorico>
            </Dialog>
        </div>
    )
}

export default InfoClienteDialog
