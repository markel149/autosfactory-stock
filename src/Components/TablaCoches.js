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
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';


  

export function TablaCoches({ coches, setOpenEditar, setCocheEditar, setCocheVender, setOpenDelete, setCocheDelete, setCocheInfo, setOpenInfo, setOpenVender }) {


    const handleClickOpenEditar = (coche) => {
        setCocheEditar(coche)
        setOpenEditar(true);
    };

    const handleClickOpenInfo = (coche) => {
        setCocheInfo(coche)
        console.log(coche)
        setOpenInfo(true);
    };

    const handleClickOpenVender = (coche) => {
        setCocheVender(coche)
        console.log(coche)
        setOpenVender(true);
    };
  
    const  handleDeleteCocheClick = (coche) => {
        setCocheDelete(coche)
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

  
    function renderCarIcon() {
        return (
            <DirectionsCarIcon></DirectionsCarIcon>
        )
    }
// eslint-disable-next-line
    const columns = [
        { 
          headerName: '',
          field: 'Icono',
          renderCell: renderCarIcon,
          status: false,
          
        },
        { 
          field: 'id',
          headerName: 'ID',
          flex: 1,
          minWidth: 150,
        },
        {
          field: 'matricula',
          headerName: 'Matricula',
          flex: 1,
          editable: false,
          minWidth: 150,
        },
        {
          field: 'marca',
          headerName: 'Marca',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'modelo',
          headerName: 'Modelo',
          flex: 1,
          editable: false,
          minWidth: 150,
        },
        {
          field: 'color',
          headerName: 'Color',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'kilometros',
          headerName: 'Kilometros',
          flex: 1,
          minWidth: 100,
          editable: false,
        },
        ,
        {
          field: 'precioCompra',
          headerName: 'Importe Compra',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'precioVenta',
          headerName: 'Importe Venta',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'notas',
          headerName: 'Notas',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'fechaCompra',
          headerName: 'Fecha Compra',
          flex: 1,
          minWidth: 100,
          editable: false,
        },
        {
          field: 'fechaVenta',
          headerName: 'Fecha Venta',
          flex: 1,
          minWidth: 100,
          editable: false,
        },
        {
          field: 'localidadVendedor',
          headerName: 'Localidad Vendedor',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'nifVendedor',
          headerName: 'NIF/CIF Vendedor',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'numeroFactura',
          headerName: 'Numero Factura',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'anio',
          headerName: 'Año',
          flex: 1,
          minWidth: 75,
          editable: false,
        },
        {
          field: 'combustible',
          headerName: 'Combustible',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'cambio',
          headerName: 'Cambio',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'potencia',
          headerName: 'Potencia',
          flex: 1,
          minWidth: 75,
          editable: false,
        },
        {
          field: 'cc',
          headerName: 'CC',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'nombreVendedor',
          headerName: 'Nombre Vendedor',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'precioVentaPublico',
          headerName: 'PVP',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'precioReparaciones',
          headerName: 'PrecioReparaciones',
          flex: 1,
          minWidth: 150,
          editable: false,
        },
        {
          field: 'vendido',
          headerName: 'Estado',
          minWidth: 100,
          flex: 1,
          editable: false,
          valueGetter: (params) => {
            if (params.value) {
              return 'Vendido';
            }
            return 'En Stock';
          },
          cellClassName: (params) => {
            if (params.value == null) {
              return '';
            }
      
            return clsx('super-app', {
              vendido: params.value === 'Vendido',
              sinvender: params.value === 'En Stock',
            });
          },
        },
        {
          field: 'alerta',
          headerName: 'Alerta',
          minWidth: 100,
          flex: 1,
          editable: false,
          valueGetter: (params) => {
            if (params.value) {
              return 'Alerta';
            }
              return 'Sin alertas';
          },
          cellClassName: (params) => {
            if (params.value == null) {
              return '';
            }
      
            return clsx('super-app', {
              alerta: params.value === 'Alerta',
              noalerta: params.value === 'Sin alertas',
            });
          },
        },
        {
          minWidth: 250,
          headerName: 'Acciones',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          flex: 1,
          hideable: false,
          renderCell: (cellValues) => {return (
            <div>
            <IconButton variant="outlined" onClick={() => handleClickOpenVender(cellValues.row)} color='success' style={{ marginRight: 10 }}> <AttachMoneyIcon></AttachMoneyIcon></IconButton>
            <IconButton variant="outlined" onClick={() => handleClickOpenInfo(cellValues.row)} style={{ marginRight: 10 }} color='primary'> <InfoIcon></InfoIcon></IconButton>
            <IconButton variant="outlined" onClick={() => handleClickOpenEditar(cellValues.row)} startIcon={<Edit />} style={{ marginRight: 10 }}><Edit></Edit></IconButton>
            <IconButton variant="contained" color='error' onClick={() => handleDeleteCocheClick(cellValues.row)}><DeleteIcon></DeleteIcon></IconButton>
            </div>
        )},
        }
      ];
  


    return (
        <div style={{overflowX: 'scroll'}}>
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
                '& .super-app.alerta': {
                  backgroundColor: '#E7625F',
                  fontWeight: '600',
                },
                '& .super-app.noalerta': {
                  color: '#ffffff',
                  backgroundColor: '#299c17',
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
                  pageSize: 25,
                },
              },
              columns: {
                columnVisibilityModel: {
                  // Hide columns status and traderName, the other columns will remain visible
                  color: false,
                  kilometros: false,
                  precioCompra: false,
                  precioVenta: false,
                  notas: false,
                  fechaCompra: false,
                  fechaVenta: false,
                  localidadVendedor: false,
                  nifVendedor: false,
                  numeroFactura: false,
                  anio: false,
                  combustible: false,
                  cambio: false,
                  potencia: false,
                  cc: false,
                  nombreVendedor: false,
                  precioVentaPublico: false,
                  precioReparaciones: false,
                  id: false
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

export default TablaCoches
