import React from 'react';


import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Grid  from '@mui/material/Grid';

export function InformacionGeneralCliente({ clienteInfo }) {

    return (
        <Grid item xs={6} >
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <List style={{marginLeft: 20}}> 
                    <ListItem >
                    <ListItemText
                        primary="Nombre"
                        secondary={clienteInfo.nombre}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                        primary="Primer Apellido"
                        secondary={clienteInfo.apellido1}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                        primary="Segundo Apellido"
                        secondary={clienteInfo.apellido2}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                    primary="Ciudad"
                    secondary={clienteInfo.ciudad}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                    primary="Codigo postal"
                    secondary={clienteInfo.codigoPostal}
                    />
                    </ListItem>
                    
                </List>
                </Grid>
                <Grid item xs={6}>
                <List style={{marginLeft: 20}}> 
                    <ListItem >
                    <ListItemText 
                        primary="Telefono"
                        secondary={clienteInfo.telefono}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                        primary="Email"
                        secondary={clienteInfo.email}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                    primary="DNI"
                    secondary={clienteInfo.dni}
                    />
                    </ListItem>
                    <ListItem >
                    <ListItemText
                    primary="Calle"
                    secondary={clienteInfo.calle}
                    />
                    </ListItem>
                </List>
                </Grid>
                </Grid>
            </Grid>
    
    )
}

export default InformacionGeneralCliente
