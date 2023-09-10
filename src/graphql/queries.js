/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCliente = /* GraphQL */ `
  query GetCliente($id: ID!) {
    getCliente(id: $id) {
      id
      nombre
      apellido1
      apellido2
      email
      telefono
      dni
      Coches {
        items {
          matricula
          marca
          modelo
          id
          color
          kilometros
          precioCompra
          precioVenta
          notas
          fechaCompra
          fechaVenta
          localidadVendedor
          nifVendedor
          numeroFactura
          anio
          combustible
          cambio
          potencia
          cc
          nombreVendedor
          precioVentaPublico
          precioReparaciones
          vendido
          clienteID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listClientes = /* GraphQL */ `
  query ListClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncClientes = /* GraphQL */ `
  query SyncClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClientes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCoche = /* GraphQL */ `
  query GetCoche($id: ID!) {
    getCoche(id: $id) {
      matricula
      marca
      modelo
      id
      color
      kilometros
      precioCompra
      precioVenta
      notas
      fechaCompra
      fechaVenta
      localidadVendedor
      nifVendedor
      numeroFactura
      anio
      combustible
      cambio
      potencia
      cc
      nombreVendedor
      precioVentaPublico
      precioReparaciones
      vendido
      clienteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCoches = /* GraphQL */ `
  query ListCoches(
    $filter: ModelCocheFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        matricula
        marca
        modelo
        id
        color
        kilometros
        precioCompra
        precioVenta
        notas
        fechaCompra
        fechaVenta
        localidadVendedor
        nifVendedor
        numeroFactura
        anio
        combustible
        cambio
        potencia
        cc
        nombreVendedor
        precioVentaPublico
        precioReparaciones
        vendido
        clienteID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCoches = /* GraphQL */ `
  query SyncCoches(
    $filter: ModelCocheFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        matricula
        marca
        modelo
        id
        color
        kilometros
        precioCompra
        precioVenta
        notas
        fechaCompra
        fechaVenta
        localidadVendedor
        nifVendedor
        numeroFactura
        anio
        combustible
        cambio
        potencia
        cc
        nombreVendedor
        precioVentaPublico
        precioReparaciones
        vendido
        clienteID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const cochesByClienteID = /* GraphQL */ `
  query CochesByClienteID(
    $clienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocheFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cochesByClienteID(
      clienteID: $clienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        matricula
        marca
        modelo
        id
        color
        kilometros
        precioCompra
        precioVenta
        notas
        fechaCompra
        fechaVenta
        localidadVendedor
        nifVendedor
        numeroFactura
        anio
        combustible
        cambio
        potencia
        cc
        nombreVendedor
        precioVentaPublico
        precioReparaciones
        vendido
        clienteID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
