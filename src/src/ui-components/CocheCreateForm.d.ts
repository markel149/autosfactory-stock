/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    precioCompra?: number;
    precioVenta?: number;
    notas?: string;
    fechaCompra?: string;
    fechaVenta?: string;
    localidadVendedor?: string;
    nifVendedor?: string;
    numeroFactura?: string;
    anio?: number;
    combustible?: string;
    cambio?: string;
    potencia?: number;
    cc?: string;
    nombreVendedor?: string;
    precioVentaPublico?: number;
    precioReparaciones?: number;
    vendido?: boolean;
};
export declare type CocheCreateFormValidationValues = {
    matricula?: ValidationFunction<string>;
    marca?: ValidationFunction<string>;
    modelo?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    kilometros?: ValidationFunction<number>;
    precioCompra?: ValidationFunction<number>;
    precioVenta?: ValidationFunction<number>;
    notas?: ValidationFunction<string>;
    fechaCompra?: ValidationFunction<string>;
    fechaVenta?: ValidationFunction<string>;
    localidadVendedor?: ValidationFunction<string>;
    nifVendedor?: ValidationFunction<string>;
    numeroFactura?: ValidationFunction<string>;
    anio?: ValidationFunction<number>;
    combustible?: ValidationFunction<string>;
    cambio?: ValidationFunction<string>;
    potencia?: ValidationFunction<number>;
    cc?: ValidationFunction<string>;
    nombreVendedor?: ValidationFunction<string>;
    precioVentaPublico?: ValidationFunction<number>;
    precioReparaciones?: ValidationFunction<number>;
    vendido?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CocheCreateFormOverridesProps = {
    CocheCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    modelo?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    kilometros?: PrimitiveOverrideProps<TextFieldProps>;
    precioCompra?: PrimitiveOverrideProps<TextFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notas?: PrimitiveOverrideProps<TextFieldProps>;
    fechaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    localidadVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    nifVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    numeroFactura?: PrimitiveOverrideProps<TextFieldProps>;
    anio?: PrimitiveOverrideProps<TextFieldProps>;
    combustible?: PrimitiveOverrideProps<TextFieldProps>;
    cambio?: PrimitiveOverrideProps<TextFieldProps>;
    potencia?: PrimitiveOverrideProps<TextFieldProps>;
    cc?: PrimitiveOverrideProps<TextFieldProps>;
    nombreVendedor?: PrimitiveOverrideProps<TextFieldProps>;
    precioVentaPublico?: PrimitiveOverrideProps<TextFieldProps>;
    precioReparaciones?: PrimitiveOverrideProps<TextFieldProps>;
    vendido?: PrimitiveOverrideProps<SwitchFieldProps>;
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
