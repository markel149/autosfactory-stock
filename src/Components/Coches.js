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
import { CocheCreateForm, CocheUpdateForm } from '../ui-components';
import Edit from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


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

    async function formSuccess2(){
      const c = await DataStore.query(Coche)
      // for (const item in c) {
      //   await DataStore.save(item)

      // }
      setCoches(c)
      setOpenEditar(false)
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

    const [cocheEditar, setCocheEditar] = useState(initialState)

    const [openEditar, setOpenEditar] = React.useState(false);

    const handleClickOpenEditar = (coche) => {
      setCocheEditar(coche)
      openEditor()
      console.log(coche)
      console.log(cocheEditar)
    };

    const openEditor = () => {
      setOpenEditar(true);
    }

    const handleCloseEditar = () => {
      setOpenEditar(false);
    };

    const [cocheDelete, setCocheDelete] = useState(initialState)
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleCloseDelete = () => {
      setOpenDelete(false);
    };

    const  handleDeleteCocheClick = (coche) => {
      setCocheDelete(coche)
      openDeleter()
    }

    const openDeleter = () => {
      setOpenDelete(true);
    }

    async function handleDeleteCoche(coche) {
      const toDelete = await DataStore.query(Coche, coche.id);
      DataStore.delete(toDelete);
      const c = await DataStore.query(Coche)
      setCoches(c)
      setOpenDelete(false)
    }
    const [cocheInfo, setCocheInfo] = useState(initialState)
    const [openInfo, setOpenInfo] = React.useState(false);

    const handleClickOpenInfo = (coche) => {
      setCocheInfo(coche)
      setOpenInfo(true);
    };

    const handleCloseInfo = () => {
      setOpenInfo(false);
    };

    return (
      <div>
        <Typography>
          <h2 style={{textAlign: 'center'}}>STOCK COCHES</h2>
        </Typography>
        
        <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft: 20}} startIcon={<AddIcon></AddIcon>}>
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

      <Dialog
        open={openEditar}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseEditar}
        maxWidth='lg'
        fullWidth={true}
        color='secondary'
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align='center'>{"Editar coche"}</DialogTitle>
        <DialogContent>
            <CocheUpdateForm onSuccess={formSuccess2} coche={cocheEditar}/>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>

      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        maxWidth='lg'
        fullWidth={true}
        color='secondary'
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align='center'>{"Borrar coche"}</DialogTitle>
        <DialogContent style={{ textAlign: 'center'}}>
          Vas a borrar el coche {cocheDelete.marca} {cocheDelete.modelo} con matricula {cocheDelete.matricula}. Si continua con este proceso no podra recuperar los datos. ¿Quieres continuar?
          <br></br>
          <br></br>
          <Button variant="outlined" onClick={() => setOpenDelete(false)} startIcon={<CancelIcon />} style={{ marginRight: 10 }}>
                Cancelar
          </Button>
          <Button variant="contained" color='error' onClick={() => handleDeleteCoche(cocheDelete)} startIcon={<DeleteIcon />}>
                Delete
          </Button>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen
        open={openInfo}
        onClose={handleCloseInfo}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseInfo}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {cocheInfo.marca} {cocheInfo.modelo} - {cocheInfo.matricula}
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography>
          <h3 style={{textAlign: 'center'}}>Información general</h3>
        </Typography>
        <List> 
          <ListItem >
            <ListItemText
              primary="Marca"
              secondary={cocheInfo.marca}
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
              primary="Modelo"
              secondary={cocheInfo.modelo}
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
              primary="Matricula"
              secondary={cocheInfo.matricula}
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
              primary="Notas"
              secondary={cocheInfo.notas}
            />
          </ListItem>
          <Divider />
        </List>
        <Typography>
          <h3 style={{textAlign: 'center'}}>Especificaciones tecnicas</h3>
        </Typography>
        <List>
          <ListItem >
            <ListItemText
              primary="Kilometros"
              secondary={cocheInfo.kilometros}
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
              primary="color"
              secondary={cocheInfo.color}
            />
          </ListItem>
          <Divider />
        </List>
        <Typography>
          <h3 style={{textAlign: 'center'}}>Detalles de compra</h3>
        </Typography>
        <List>
          <ListItem >
            <ListItemText
              primary="Precio de compra"
              secondary={cocheInfo.precioCompra}
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
              primary="Fecha de compra"
              secondary={cocheInfo.fechaCompra}
            />
          </ListItem>
          <Divider />
        </List>
        <Typography>
          <h3 style={{textAlign: 'center'}}>Detalles de venta</h3>
        </Typography>
        <List>
          <ListItem >
            <ListItemText
              primary="Precio de venta"
              secondary={cocheInfo.precioVenta}
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
              primary="Fecha de venta"
              secondary={cocheInfo.fechaVenta}
            />
          </ListItem>
          <Divider />
        </List>
      </Dialog>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center"><b>Marca</b></TableCell>
            <TableCell align="center"><b>Modelo</b></TableCell>
            <TableCell align="center"><b>Matricula</b></TableCell>
            <TableCell align="center"><b>Acciones</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coches.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"><DirectionsCarIcon></DirectionsCarIcon></TableCell>
              <TableCell align="center">{row.marca}</TableCell>
              <TableCell align="center">{row.modelo}</TableCell>
              <TableCell align="center">{row.matricula}</TableCell>
              <TableCell align="center">
              <Button variant="outlined" onClick={() => handleClickOpenInfo(row)} startIcon={<InfoIcon />} style={{ marginRight: 10 }}>
                Detalles
              </Button>
              <Button variant="outlined" onClick={() => handleClickOpenEditar(row)} startIcon={<Edit />} style={{ marginRight: 10 }}>
                Editar
              </Button>
              <Button variant="contained" color='error' onClick={() => handleDeleteCocheClick(row)} startIcon={<DeleteIcon />}>
                Borrar
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    );
  }
  
  export default Coches