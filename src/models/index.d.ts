import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly Apellido1?: string | null;
  readonly Apellido2?: string | null;
  readonly email?: string | null;
  readonly Telefono?: string | null;
  readonly dni?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCliente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cliente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly Apellido1?: string | null;
  readonly Apellido2?: string | null;
  readonly email?: string | null;
  readonly Telefono?: string | null;
  readonly dni?: string | null;
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
  readonly marca: string;
  readonly modelo: string;
  readonly matricula: string;
  readonly color?: string | null;
  readonly kilometros?: number | null;
  readonly precioCompra: number;
  readonly precioVenta?: number | null;
  readonly notas?: string | null;
  readonly Cliente?: Cliente | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cocheClienteId?: string | null;
}

type LazyCoche = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coche, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly marca: string;
  readonly modelo: string;
  readonly matricula: string;
  readonly color?: string | null;
  readonly kilometros?: number | null;
  readonly precioCompra: number;
  readonly precioVenta?: number | null;
  readonly notas?: string | null;
  readonly Cliente: AsyncItem<Cliente | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cocheClienteId?: string | null;
}

export declare type Coche = LazyLoading extends LazyLoadingDisabled ? EagerCoche : LazyCoche

export declare const Coche: (new (init: ModelInit<Coche>) => Coche) & {
  copyOf(source: Coche, mutator: (draft: MutableModel<Coche>) => MutableModel<Coche> | void): Coche;
}