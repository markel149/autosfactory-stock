import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Coche } from '../models';
import { Typography } from '@mui/material';
import CreateCocheDialog from './CreateCocheDialog';
import EditCocheDialog from './EditCocheDialog';
import DeleteCocheDialog from './DeleteCocheDialog';
import InfoCocheDialog from './InfoCocheDialog';
import TablaCoches from './TablaCoches';

const initialState = []

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
    
    const [cocheEditar, setCocheEditar] = useState(initialState)
    const [openEditar, setOpenEditar] = React.useState(false);

    const [cocheDelete, setCocheDelete] = useState(initialState)
    const [openDelete, setOpenDelete] = React.useState(false);

    const [cocheInfo, setCocheInfo] = useState(initialState)
    const [openInfo, setOpenInfo] = React.useState(false);

    
    return (
      <div>
        <Typography component={'span'}> 
          <p style={{textAlign: 'center'}}>STOCK COCHES</p>
        </Typography>
        
        <CreateCocheDialog setCoches={setCoches}></CreateCocheDialog>

        <EditCocheDialog cocheEditar={cocheEditar} open={openEditar} setOpen={setOpenEditar} setCoches={setCoches}></EditCocheDialog>

        <DeleteCocheDialog cocheDelete={cocheDelete} open={openDelete} setOpen={setOpenDelete} setCoches={setCoches}></DeleteCocheDialog>

        <InfoCocheDialog cocheInfo={cocheInfo} open={openInfo} setOpen={setOpenInfo}></InfoCocheDialog>
        
        <TablaCoches coches={coches} setCocheDelete={setCocheDelete} setCocheEditar={setCocheEditar} setCocheInfo={setCocheInfo} setOpenDelete={setOpenDelete} setOpenEditar={setOpenEditar} setOpenInfo={setOpenInfo}></TablaCoches>

        
        
      </div>
    );
  }
  
  export default Coches