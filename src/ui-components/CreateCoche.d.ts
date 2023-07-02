/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateCocheInputValues = {
    marca?: string;
    modelo?: string;
    matricula?: string;
    color?: string;
    kilometros?: number;
    precioCompra?: number;
    precioVenta?: number;
    notas?: string;
};
export declare type CreateCocheValidationValues = {
    marca?: ValidationFunction<string>;
    modelo?: ValidationFunction<string>;
    matricula?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    kilometros?: ValidationFunction<number>;
    precioCompra?: ValidationFunction<number>;
    precioVenta?: ValidationFunction<number>;
    notas?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateCocheOverridesProps = {
    CreateCocheGrid?: PrimitiveOverrideProps<GridProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    modelo?: PrimitiveOverrideProps<TextFieldProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    kilometros?: PrimitiveOverrideProps<TextFieldProps>;
    precioCompra?: PrimitiveOverrideProps<TextFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notas?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateCocheProps = React.PropsWithChildren<{
    overrides?: CreateCocheOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateCocheInputValues) => CreateCocheInputValues;
    onSuccess?: (fields: CreateCocheInputValues) => void;
    onError?: (fields: CreateCocheInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateCocheInputValues) => CreateCocheInputValues;
    onValidate?: CreateCocheValidationValues;
} & React.CSSProperties>;
export default function CreateCoche(props: CreateCocheProps): React.ReactElement;
