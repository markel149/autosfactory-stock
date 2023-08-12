import React from 'react';


import {
DataGrid,
GridToolbarContainer,
GridToolbarColumnsButton,
GridToolbarFilterButton,
GridToolbarExport,
GridToolbarDensitySelector,
GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Edit from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';



  

export function TablaClientes({ clientes, setOpenEditar, setClienteEditar, setOpenDelete, setClienteDelete, setClienteInfo, setOpenInfo }) {


    const handleClickOpenEditar = (cliente) => {
        setClienteEditar(cliente)
        setOpenEditar(true);
    };

    const handleClickOpenInfo = (cliente) => {
        setClienteInfo(cliente)
        console.log(cliente)
        setOpenInfo(true);
    };
  
    const  handleDeleteClienteClick = (cliente) => {
        setClienteDelete(cliente)
        setOpenDelete(true);
    };

    function CustomToolbar() {
        return (
          <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
            <GridToolbarQuickFilter />
          </GridToolbarContainer>
        );
      }

  
    function renderClientIcon() {
        return (
            <PersonIcon></PersonIcon>        
        )
    }

    const columns = [
        { 
          headerName: '',
          field: 'Icono',
          renderCell: renderClientIcon,
          status: false,
          
        },
        {
          field: 'nombre',
          headerName: 'Nombre',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'apellido1',
          headerName: 'Apellido',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'apellido2',
          headerName: 'Segundo Apellido',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            minWidth: 150,
            editable: false,
        },
        {
            field: 'telefono',
            headerName: 'Telefono',
            flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
            field: 'dni',
            headerName: 'DNI',
            flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          minWidth: 150,
          headerName: 'Acciones',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          flex: 1,
          hideable: false,
          renderCell: (cellValues) => {return (
            <div>
            <IconButton variant="outlined" onClick={() => handleClickOpenInfo(cellValues.row)} style={{ marginRight: 10 }} color='primary'> <InfoIcon></InfoIcon></IconButton>
            <IconButton variant="outlined" onClick={() => handleClickOpenEditar(cellValues.row)} startIcon={<Edit />} style={{ marginRight: 10 }}><Edit></Edit></IconButton>
            <IconButton variant="contained" color='error' onClick={() => handleDeleteClienteClick(cellValues.row)}><DeleteIcon></DeleteIcon></IconButton>
            </div>
        )},
        }
      ];
  


    return (
        <div>
        <Box sx={{
                height: '75vh',
                width: '95%',
                margin: 'auto',
                '& .super-app-theme--cell': {
                  backgroundColor: 'rgba(224, 183, 60, 0.55)',
                  color: '#1a3e72',
            
                },
                '& .super-app.vendido': {
                  color: '#299c17',
                  fontWeight: '600',
                },
                '& .super-app.sinvender': {
                  color: '#9c1732',
                  fontWeight: '600',
                },
              }}
        >
          
          <DataGrid
            slots={{
              toolbar: CustomToolbar,
            }}
            getRowId={(row) => row.id}
            rows={clientes}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 25,
                },
              },
            }}
            checkboxSelection={false}
            disableRowSelectionOnClick={true}
            pageSizeOptions={[5, 10, 25, 50, 100]}
            sx={{
              boxShadow: 2,
              border: 0.5,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
              '& .super-app-theme--header': {
                // backgroundColor: 'rgba(108, 247, 119, 0.8)',
                // fontWeight: 'bold'
              },
            }}
          >
          </DataGrid>
        </Box>



        </div>
    )
}

export default TablaClientes
