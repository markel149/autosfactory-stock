import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Cliente } from '../models';

import { Typography } from '@mui/material';
import TablaClientes from './TablaClientes';
import CreateClienteDialog from './CreateClienteDialog';
import EditarClienteDialog from './EditarClienteDialog';
import DeleteClientDialog from './DeleteClientDialog';
import InfoClienteDialog from './InfoClienteDialog';



const initialState = []

export function Clientes({ signOut, user }) {

    const [isLoading, setLoading] = useState(true);
    const [clientes, setClientes] = useState(initialState)
    useEffect(() => {
      const pullData = async() => {
        const c = await DataStore.query(Cliente)
        setClientes(c)
        setLoading(false)
        
      }

      pullData()
    },[])


    
    const [clienteEditar, setClienteEditar] = useState(initialState)
    const [openEditar, setOpenEditar] = React.useState(false);

    const [clienteDelete, setClienteDelete] = useState(initialState)
    const [openDelete, setOpenDelete] = React.useState(false);

    const [clienteInfo, setClienteInfo] = useState(initialState)
    const [openInfo, setOpenInfo] = React.useState(false);

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }

    return (
      <div>

        <Typography component={'span'}> 
          <p style={{textAlign: 'center'}}>CLIENTES</p>
        </Typography>

        <CreateClienteDialog setClientes={setClientes}></CreateClienteDialog>

        <EditarClienteDialog clienteEditar={clienteEditar} open={openEditar} setOpen={setOpenEditar} setClientes={setClientes}></EditarClienteDialog>

        <DeleteClientDialog clienteDelete={clienteDelete} open={openDelete} setOpen={setOpenDelete} setClientes={setClientes}></DeleteClientDialog>

        <InfoClienteDialog clienteInfo={clienteInfo} open={openInfo} setOpen={setOpenInfo} coches={clienteInfo.Coches}></InfoClienteDialog>

        <TablaClientes clientes={clientes} setOpenEditar={setOpenEditar} setClienteDelete={setClienteDelete} setOpenDelete={setOpenDelete} setClienteEditar={setClienteEditar} setClienteInfo={setClienteInfo} setOpenInfo={setOpenInfo}></TablaClientes>
       
      </div>
    );
  }
  
  export default Clientes