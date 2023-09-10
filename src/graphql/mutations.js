/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
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
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
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
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
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
export const createCoche = /* GraphQL */ `
  mutation CreateCoche(
    $input: CreateCocheInput!
    $condition: ModelCocheConditionInput
  ) {
    createCoche(input: $input, condition: $condition) {
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
export const updateCoche = /* GraphQL */ `
  mutation UpdateCoche(
    $input: UpdateCocheInput!
    $condition: ModelCocheConditionInput
  ) {
    updateCoche(input: $input, condition: $condition) {
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
export const deleteCoche = /* GraphQL */ `
  mutation DeleteCoche(
    $input: DeleteCocheInput!
    $condition: ModelCocheConditionInput
  ) {
    deleteCoche(input: $input, condition: $condition) {
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
