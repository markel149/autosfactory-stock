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
export declare type CocheCreateFormInputValues = {
    marca?: string;
    modelo?: string;
    matricula?: string;
    color?: string;
    kilometros?: number;
    precioCompra?: number;
    precioVenta?: number;
    notas?: string;
};
export declare type CocheCreateFormValidationValues = {
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
export declare type CocheCreateFormOverridesProps = {
    CocheCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    modelo?: PrimitiveOverrideProps<TextFieldProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    kilometros?: PrimitiveOverrideProps<TextFieldProps>;
    precioCompra?: PrimitiveOverrideProps<TextFieldProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notas?: PrimitiveOverrideProps<TextFieldProps>;
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
