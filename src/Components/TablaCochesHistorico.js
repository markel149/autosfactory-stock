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
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


  

export function TablaCochesHistorico({ coches, setOpenEditar, setCocheEditar, setOpenDelete, setCocheDelete, setCocheInfo, setOpenInfo }) {


   

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

  
    function renderCarIcon() {
        return (
            <DirectionsCarIcon></DirectionsCarIcon>
        )
    }

    const columns = [
        { 
          headerName: '',
          field: 'Icono',
          renderCell: renderCarIcon,
          status: false,
          
        },
        {
          field: 'matricula',
          headerName: 'Matricula',
          flex: 1,
          editable: false,
        },
        {
          field: 'marca',
          headerName: 'Marca',
          flex: 1,
          editable: false,
        },
        {
          field: 'modelo',
          headerName: 'Modelo',
          flex: 1,
          editable: false,
        },
        {
          field: 'color',
          headerName: 'Color',
          flex: 1,
          editable: false,
        },
        {
          field: 'kilometros',
          headerName: 'Kilometros',
          flex: 1,
          editable: false,
        },
        {
          field: 'precioVenta',
          headerName: 'Importe',
          flex: 1,
          editable: false,
        },
        {
          field: 'fechaVenta',
          headerName: 'Fecha Compra',
          flex: 1,
          editable: false,
        },
        {
          field: 'combustible',
          headerName: 'Combustible',
          flex: 1,
          editable: false,
        },
        {
          field: 'anio',
          headerName: 'Año',
          flex: 1,
          editable: false,
        },
        {
          field: 'cambio',
          headerName: 'Cambio',
          flex: 1,
          editable: false,
        },
        {
          field: 'potencia',
          headerName: 'Potencia',
          flex: 1,
          editable: false,
        },
        {
          field: 'cc',
          headerName: 'CC',
          flex: 1,
          editable: false,
        }
      
      ];
  


    return (
        <div>
        <Box sx={{
                height: '50vh',
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
            rows={coches}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
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

export default TablaCochesHistorico
