import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Coche } from '../models';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CocheCreateForm } from '../ui-components';

const initialState = []

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Coches({ signOut, user }) {
    const [coches, setCoches] = useState(initialState)

    useEffect(() => {
      const pullData = async() => {
        const c = await DataStore.query(Coche)
        console.log(c)
        setCoches(c)
      }

      pullData()
    },[])

    async function formSuccess(){
      const c = await DataStore.query(Coche)
      setCoches(c)
      setOpen(false)
      // return (
      //   <Alert severity="success">This is a success alert — check it out!</Alert>
      // )

    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Stock coches</h2>
        <Button variant="outlined" onClick={handleClickOpen}>
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

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Marca</b></TableCell>
            <TableCell align="center"><b>Modelo</b></TableCell>
            <TableCell align="center"><b>Matricula</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coches.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.marca}</TableCell>
              <TableCell align="center">{row.modelo}</TableCell>
              <TableCell align="center">{row.matricula}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    );
  }
  
  export default Coches