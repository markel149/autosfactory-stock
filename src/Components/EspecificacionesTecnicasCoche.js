import React from 'react';


import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';

export function EspecificacionesTecnicasCoche({ cocheInfo }) {


    return (
        <Grid item xs={6} >
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <h5 style={{textAlign: 'center'}}>Especificaciones tecnicas</h5>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List> 
                        <ListItem >
                            <ListItemText
                                primary="Año"
                                secondary={cocheInfo.anio}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Combustible"
                                secondary={cocheInfo.combustible}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Cambio"
                                secondary={cocheInfo.cambio}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Potencia"
                                secondary={cocheInfo.potencia}
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List> 
                        <ListItem >
                            <ListItemText
                                primary="C.C."
                                secondary={cocheInfo.cc}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Kilometros"
                                secondary={cocheInfo.kilometros}
                            />
                        </ListItem>
                        <ListItem >
                            <ListItemText
                                primary="Color"
                                secondary={cocheInfo.color}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EspecificacionesTecnicasCoche
