import React from 'react';


import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';

export function InformacionGeneralCoche({ cocheInfo }) {


    return (
            <Grid item xs={6} >
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    <h5 style={{textAlign: 'center'}}>Información general</h5>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <List style={{marginLeft: 20, fontSize:'100%'}}> 
                            <ListItem >
                                <ListItemText
                                    primary="Marca"
                                    secondary={cocheInfo.marca}
                                />
                            </ListItem>
                            <ListItem >
                                <ListItemText
                                    primary="Modelo"
                                    secondary={cocheInfo.modelo}
                                />
                            </ListItem>
                        </List>
                </Grid>
                <Grid item xs={6}>
                <   List style={{marginLeft: 20}}> 
                        <ListItem >
                            <ListItemText
                                primary="Matricula"
                                secondary={cocheInfo.matricula}
                            />
                            </ListItem>
                        </List>
                </Grid>
                </Grid>
                    <List style={{marginLeft: 20}}>
                        <ListItem >
                            <ListItemText
                            primary="Notas"
                            secondary={cocheInfo.notas}
                            />
                        </ListItem>
                    </List>
                </Grid>
    )
}

export default InformacionGeneralCoche
