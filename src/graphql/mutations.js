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
