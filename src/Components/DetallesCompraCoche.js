import React from 'react';


import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';

export function DetallesCompraCoche({ cocheInfo }) {


    return (
        <Grid item xs={6} >
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <h5 style={{textAlign: 'center'}}>Detalles de compra</h5>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List> 
                        <ListItem >
                            <ListItemText
                                primary="Precio Compra"
                                secondary={cocheInfo.precioCompra}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Fecha Compra"
                                secondary={cocheInfo.fechaCompra}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Localidad Vendedor"
                                secondary={cocheInfo.localidadVendedor}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="NIF/CIF Vendedor"
                                secondary={cocheInfo.nifVendedor}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Telefono Vendedor"
                                secondary={cocheInfo.telefonoVendedor}
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List> 
                        <ListItem >
                            <ListItemText
                                primary="Numero de factura"
                                secondary={cocheInfo.numeroFactura}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Nombre Vendedor"
                                secondary={cocheInfo.nombreVendedor}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Precio reparaciones"
                                secondary={cocheInfo.precioReparaciones}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Direccion Vendedor"
                                secondary={cocheInfo.direccionVendedor}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetallesCompraCoche
