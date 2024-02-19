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
export declare type NewForm1InputValues = {
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
    alerta?: boolean;
    notas?: string;
};
export declare type NewForm1ValidationValues = {
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
    alerta?: ValidationFunction<boolean>;
    notas?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm1OverridesProps = {
    NewForm1Grid?: PrimitiveOverrideProps<GridProps>;
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
    alerta?: PrimitiveOverrideProps<SwitchFieldProps>;
    notas?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm1Props = React.PropsWithChildren<{
    overrides?: NewForm1OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onSuccess?: (fields: NewForm1InputValues) => void;
    onError?: (fields: NewForm1InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onValidate?: NewForm1ValidationValues;
} & React.CSSProperties>;
export default function NewForm1(props: NewForm1Props): React.ReactElement;
