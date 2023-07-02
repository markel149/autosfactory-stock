import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCoche = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coche, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly marca?: string | null;
  readonly modelo?: string | null;
  readonly matricula?: string | null;
  readonly color?: string | null;
  readonly kilometros?: number | null;
  readonly precioCompra?: number | null;
  readonly precioVenta?: number | null;
  readonly notas?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoche = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coche, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly marca?: string | null;
  readonly modelo?: string | null;
  readonly matricula?: string | null;
  readonly color?: string | null;
  readonly kilometros?: number | null;
  readonly precioCompra?: number | null;
  readonly precioVenta?: number | null;
  readonly notas?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coche = LazyLoading extends LazyLoadingDisabled ? EagerCoche : LazyCoche

export declare const Coche: (new (init: ModelInit<Coche>) => Coche) & {
  copyOf(source: Coche, mutator: (draft: MutableModel<Coche>) => MutableModel<Coche> | void): Coche;
}