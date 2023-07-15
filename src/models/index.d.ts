import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellido1: string;
  readonly apellido2?: string | null;
  readonly email?: string | null;
  readonly telefono?: string | null;
  readonly dni: string;
  readonly Coches?: (Coche | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellido1: string;
  readonly apellido2?: string | null;
  readonly email?: string | null;
  readonly telefono?: string | null;
  readonly dni: string;
  readonly Coches: AsyncCollection<Coche>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cliente = LazyLoading extends LazyLoadingDisabled ? EagerCliente : LazyCliente

export declare const Cliente: (new (init: ModelInit<Cliente>) => Cliente) & {
  copyOf(source: Cliente, mutator: (draft: MutableModel<Cliente>) => MutableModel<Cliente> | void): Cliente;
}

type EagerCoche = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coche, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly matricula: string;
  readonly marca: string;
  readonly modelo: string;
  readonly color?: string | null;
  readonly kilometros?: number | null;
  readonly precioCompra: number;
  readonly precioVenta?: number | null;
  readonly notas?: string | null;
  readonly fechaCompra?: string | null;
  readonly fechaVenta?: string | null;
  readonly localidadVendedor?: string | null;
  readonly nifVendedor?: string | null;
  readonly numeroFactura?: string | null;
  readonly anio?: number | null;
  readonly combustible?: string | null;
  readonly cambio?: string | null;
  readonly potencia?: number | null;
  readonly cc?: string | null;
  readonly nombreVendedor?: string | null;
  readonly precioVentaPublico?: number | null;
  readonly precioReparaciones?: number | null;
  readonly vendido?: boolean | null;
  readonly clienteID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoche = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coche, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly matricula: string;
  readonly marca: string;
  readonly modelo: string;
  readonly color?: string | null;
  readonly kilometros?: number | null;
  readonly precioCompra: number;
  readonly precioVenta?: number | null;
  readonly notas?: string | null;
  readonly fechaCompra?: string | null;
  readonly fechaVenta?: string | null;
  readonly localidadVendedor?: string | null;
  readonly nifVendedor?: string | null;
  readonly numeroFactura?: string | null;
  readonly anio?: number | null;
  readonly combustible?: string | null;
  readonly cambio?: string | null;
  readonly potencia?: number | null;
  readonly cc?: string | null;
  readonly nombreVendedor?: string | null;
  readonly precioVentaPublico?: number | null;
  readonly precioReparaciones?: number | null;
  readonly vendido?: boolean | null;
  readonly clienteID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coche = LazyLoading extends LazyLoadingDisabled ? EagerCoche : LazyCoche

export declare const Coche: (new (init: ModelInit<Coche>) => Coche) & {
  copyOf(source: Coche, mutator: (draft: MutableModel<Coche>) => MutableModel<Coche> | void): Coche;
}