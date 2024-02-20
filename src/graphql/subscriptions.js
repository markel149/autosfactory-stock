/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onCreateCliente(filter: $filter) {
      id
      nombre
      apellido1
      apellido2
      email
      telefono
      dni
      Coches {
        nextToken
        startedAt
        __typename
      }
      ciudad
      calle
      codigoPostal
      alerta
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onUpdateCliente(filter: $filter) {
      id
      nombre
      apellido1
      apellido2
      email
      telefono
      dni
      Coches {
        nextToken
        startedAt
        __typename
      }
      ciudad
      calle
      codigoPostal
      alerta
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente($filter: ModelSubscriptionClienteFilterInput) {
    onDeleteCliente(filter: $filter) {
      id
      nombre
      apellido1
      apellido2
      email
      telefono
      dni
      Coches {
        nextToken
        startedAt
        __typename
      }
      ciudad
      calle
      codigoPostal
      alerta
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCoche = /* GraphQL */ `
  subscription OnCreateCoche($filter: ModelSubscriptionCocheFilterInput) {
    onCreateCoche(filter: $filter) {
      matricula
      marca
      modelo
      id
      color
      kilometros
      combustible
      cambio
      anio
      potencia
      cc
      localidadVendedor
      nifVendedor
      numeroFactura
      numeroFacturaVenta
      precioCompra
      fechaCompra
      nombreVendedor
      direccionVendedor
      telefonoVendedor
      precioVentaPublico
      precioReparaciones
      vendido
      precioVenta
      notasVenta
      fechaVenta
      clienteID
      alerta
      notas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCoche = /* GraphQL */ `
  subscription OnUpdateCoche($filter: ModelSubscriptionCocheFilterInput) {
    onUpdateCoche(filter: $filter) {
      matricula
      marca
      modelo
      id
      color
      kilometros
      combustible
      cambio
      anio
      potencia
      cc
      localidadVendedor
      nifVendedor
      numeroFactura
      numeroFacturaVenta
      precioCompra
      fechaCompra
      nombreVendedor
      direccionVendedor
      telefonoVendedor
      precioVentaPublico
      precioReparaciones
      vendido
      precioVenta
      notasVenta
      fechaVenta
      clienteID
      alerta
      notas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCoche = /* GraphQL */ `
  subscription OnDeleteCoche($filter: ModelSubscriptionCocheFilterInput) {
    onDeleteCoche(filter: $filter) {
      matricula
      marca
      modelo
      id
      color
      kilometros
      combustible
      cambio
      anio
      potencia
      cc
      localidadVendedor
      nifVendedor
      numeroFactura
      numeroFacturaVenta
      precioCompra
      fechaCompra
      nombreVendedor
      direccionVendedor
      telefonoVendedor
      precioVentaPublico
      precioReparaciones
      vendido
      precioVenta
      notasVenta
      fechaVenta
      clienteID
      alerta
      notas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
