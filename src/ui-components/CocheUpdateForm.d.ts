/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, CheckboxFieldProps, GridProps, HeadingProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Coche } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CocheUpdateFormInputValues = {
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
    numeroFacturaVenta?: string;
    precioReparaciones?: number;
    vendido?: boolean;
    precioVenta?: number;
    notasVenta?: string;
    fechaVenta?: string;
    clienteID?: string;
    alerta?: boolean;
    notas?: string;
};
export declare type CocheUpdateFormValidationValues = {
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
    numeroFacturaVenta?: ValidationFunction<string>;
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
export declare type CocheUpdateFormOverridesProps = {
    CocheUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    numeroFacturaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    precioReparaciones?: PrimitiveOverrideProps<TextFieldProps>;
    vendido?: PrimitiveOverrideProps<SwitchFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notasVenta?: PrimitiveOverrideProps<TextAreaFieldProps>;
    fechaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    clienteID?: PrimitiveOverrideProps<AutocompleteProps>;
    SectionalElement4?: PrimitiveOverrideProps<HeadingProps>;
    alerta?: PrimitiveOverrideProps<CheckboxFieldProps>;
    notas?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CocheUpdateFormProps = React.PropsWithChildren<{
    overrides?: CocheUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coche?: Coche;
    onSubmit?: (fields: CocheUpdateFormInputValues) => CocheUpdateFormInputValues;
    onSuccess?: (fields: CocheUpdateFormInputValues) => void;
    onError?: (fields: CocheUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CocheUpdateFormInputValues) => CocheUpdateFormInputValues;
    onValidate?: CocheUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CocheUpdateForm(props: CocheUpdateFormProps): React.ReactElement;
