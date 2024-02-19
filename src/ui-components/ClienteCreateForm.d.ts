/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClienteCreateFormInputValues = {
    nombre?: string;
    apellido1?: string;
    apellido2?: string;
    email?: string;
    telefono?: string;
    dni?: string;
    Coches?: string;
    ciudad?: string;
    calle?: string;
    codigoPostal?: string;
    matricula?: string;
    marca?: string;
    modelo?: string;
    color?: string;
    kilometros?: number;
    combustible?: string;
    cambio?: string;
    anio?: number;
    potencia?: number;
    cc?: string;
    localidadVendedor?: string;
    nifVendedor?: string;
    numeroFactura?: string;
    numeroFacturaVenta?: string;
    precioCompra?: number;
    fechaCompra?: string;
    nombreVendedor?: string;
    direccionVendedor?: string;
    telefonoVendedor?: string;
    precioVentaPublico?: number;
    precioReparaciones?: number;
    vendido?: boolean;
    precioVenta?: number;
    notasVenta?: string;
    fechaVenta?: string;
    clienteID?: string;
    notas?: string;
};
export declare type ClienteCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido1?: ValidationFunction<string>;
    apellido2?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    dni?: ValidationFunction<string>;
    Coches?: ValidationFunction<string>;
    ciudad?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<string>;
    matricula?: ValidationFunction<string>;
    marca?: ValidationFunction<string>;
    modelo?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    kilometros?: ValidationFunction<number>;
    combustible?: ValidationFunction<string>;
    cambio?: ValidationFunction<string>;
    anio?: ValidationFunction<number>;
    potencia?: ValidationFunction<number>;
    cc?: ValidationFunction<string>;
    localidadVendedor?: ValidationFunction<string>;
    nifVendedor?: ValidationFunction<string>;
    numeroFactura?: ValidationFunction<string>;
    numeroFacturaVenta?: ValidationFunction<string>;
    precioCompra?: ValidationFunction<number>;
    fechaCompra?: ValidationFunction<string>;
    nombreVendedor?: ValidationFunction<string>;
    direccionVendedor?: ValidationFunction<string>;
    telefonoVendedor?: ValidationFunction<string>;
    precioVentaPublico?: ValidationFunction<number>;
    precioReparaciones?: ValidationFunction<number>;
    vendido?: ValidationFunction<boolean>;
    precioVenta?: ValidationFunction<number>;
    notasVenta?: ValidationFunction<string>;
    fechaVenta?: ValidationFunction<string>;
    clienteID?: ValidationFunction<string>;
    notas?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteCreateFormOverridesProps = {
    ClienteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellido1?: PrimitiveOverrideProps<TextFieldProps>;
    apellido2?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    dni?: PrimitiveOverrideProps<TextFieldProps>;
    Coches?: PrimitiveOverrideProps<AutocompleteProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    modelo?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    kilometros?: PrimitiveOverrideProps<TextFieldProps>;
    combustible?: PrimitiveOverrideProps<TextFieldProps>;
    cambio?: PrimitiveOverrideProps<TextFieldProps>;
    anio?: PrimitiveOverrideProps<TextFieldProps>;
    potencia?: PrimitiveOverrideProps<TextFieldProps>;
    cc?: PrimitiveOverrideProps<TextFieldProps>;
    localidadVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    nifVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    numeroFactura?: PrimitiveOverrideProps<TextFieldProps>;
    numeroFacturaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    precioCompra?: PrimitiveOverrideProps<TextFieldProps>;
    fechaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    nombreVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    direccionVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    telefonoVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    precioVentaPublico?: PrimitiveOverrideProps<TextFieldProps>;
    precioReparaciones?: PrimitiveOverrideProps<TextFieldProps>;
    vendido?: PrimitiveOverrideProps<SwitchFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notasVenta?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    clienteID?: PrimitiveOverrideProps<AutocompleteProps>;
    notas?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClienteCreateFormProps = React.PropsWithChildren<{
    overrides?: ClienteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClienteCreateFormInputValues) => ClienteCreateFormInputValues;
    onSuccess?: (fields: ClienteCreateFormInputValues) => void;
    onError?: (fields: ClienteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClienteCreateFormInputValues) => ClienteCreateFormInputValues;
    onValidate?: ClienteCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClienteCreateForm(props: ClienteCreateFormProps): React.ReactElement;
