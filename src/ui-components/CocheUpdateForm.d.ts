/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Coche } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CocheUpdateFormInputValues = {
    marca?: string;
    modelo?: string;
    matricula?: string;
    color?: string;
    kilometros?: number;
    precioCompra?: number;
    precioVenta?: number;
    notas?: string;
    fechaCompra?: string;
    fechaVenta?: string;
};
export declare type CocheUpdateFormValidationValues = {
    marca?: ValidationFunction<string>;
    modelo?: ValidationFunction<string>;
    matricula?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    kilometros?: ValidationFunction<number>;
    precioCompra?: ValidationFunction<number>;
    precioVenta?: ValidationFunction<number>;
    notas?: ValidationFunction<string>;
    fechaCompra?: ValidationFunction<string>;
    fechaVenta?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CocheUpdateFormOverridesProps = {
    CocheUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    modelo?: PrimitiveOverrideProps<TextFieldProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    kilometros?: PrimitiveOverrideProps<TextFieldProps>;
    precioCompra?: PrimitiveOverrideProps<TextFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notas?: PrimitiveOverrideProps<TextFieldProps>;
    fechaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVenta?: PrimitiveOverrideProps<TextFieldProps>;
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
