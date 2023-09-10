/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, HeadingProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CocheCreateFormInputValues = {
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
    precioCompra?: number;
    fechaCompra?: string;
    nombreVendedor?: string;
    direccionVendedor?: string;
    telefonoVendedor?: string;
    precioVentaPublico?: number;
    precioReparaciones?: number;
    vendido?: boolean;
    precioVenta?: number;
    numeroFacturaVenta?: string;
    notasVenta?: string;
    fechaVenta?: string;
    clienteID?: string;
    notas?: string;
};
export declare type CocheCreateFormValidationValues = {
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
    precioCompra?: ValidationFunction<number>;
    fechaCompra?: ValidationFunction<string>;
    nombreVendedor?: ValidationFunction<string>;
    direccionVendedor?: ValidationFunction<string>;
    telefonoVendedor?: ValidationFunction<string>;
    precioVentaPublico?: ValidationFunction<number>;
    precioReparaciones?: ValidationFunction<number>;
    vendido?: ValidationFunction<boolean>;
    precioVenta?: ValidationFunction<number>;
    numeroFacturaVenta?: ValidationFunction<string>;
    notasVenta?: ValidationFunction<string>;
    fechaVenta?: ValidationFunction<string>;
    clienteID?: ValidationFunction<string>;
    notas?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CocheCreateFormOverridesProps = {
    CocheCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    modelo?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    kilometros?: PrimitiveOverrideProps<TextFieldProps>;
    combustible?: PrimitiveOverrideProps<TextFieldProps>;
    cambio?: PrimitiveOverrideProps<TextFieldProps>;
    anio?: PrimitiveOverrideProps<TextFieldProps>;
    potencia?: PrimitiveOverrideProps<TextFieldProps>;
    cc?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<HeadingProps>;
    localidadVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    nifVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    numeroFactura?: PrimitiveOverrideProps<TextFieldProps>;
    precioCompra?: PrimitiveOverrideProps<TextFieldProps>;
    fechaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    nombreVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    direccionVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    telefonoVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    precioVentaPublico?: PrimitiveOverrideProps<TextFieldProps>;
    precioReparaciones?: PrimitiveOverrideProps<TextFieldProps>;
    vendido?: PrimitiveOverrideProps<SwitchFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    numeroFacturaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notasVenta?: PrimitiveOverrideProps<TextAreaFieldProps>;
    fechaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    clienteID?: PrimitiveOverrideProps<AutocompleteProps>;
    SectionalElement4?: PrimitiveOverrideProps<HeadingProps>;
    notas?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CocheCreateFormProps = React.PropsWithChildren<{
    overrides?: CocheCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CocheCreateFormInputValues) => CocheCreateFormInputValues;
    onSuccess?: (fields: CocheCreateFormInputValues) => void;
    onError?: (fields: CocheCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CocheCreateFormInputValues) => CocheCreateFormInputValues;
    onValidate?: CocheCreateFormValidationValues;
} & React.CSSProperties>;
export default function CocheCreateForm(props: CocheCreateFormProps): React.ReactElement;
