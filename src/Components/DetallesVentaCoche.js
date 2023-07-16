import React from 'react';


import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';

export function DetallesVentaCoche({ cocheInfo }) {


    return (
        <Grid item xs={6} >
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <h5 style={{textAlign: 'center'}}>Detalles de venta</h5>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List> 
                        <ListItem >
                            <ListItemText
                                primary="Precio Venta"
                                secondary={cocheInfo.precioVenta}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Fecha Venta"
                                secondary={cocheInfo.fechaVenta}
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List> 
                    <ListItem >
                            <ListItemText
                                primary="ID Cliente"
                                secondary={cocheInfo.clienteID}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Vendido"
                                secondary={cocheInfo.vendido}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetallesVentaCoche
