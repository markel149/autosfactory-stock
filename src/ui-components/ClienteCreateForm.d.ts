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
export declare type ClienteCreateFormInputValues = {
    Nombre?: string;
    Apellido1?: string;
    Apellido2?: string;
    email?: string;
    Telefono?: string;
    dni?: string;
};
export declare type ClienteCreateFormValidationValues = {
    Nombre?: ValidationFunction<string>;
    Apellido1?: ValidationFunction<string>;
    Apellido2?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    Telefono?: ValidationFunction<string>;
    dni?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteCreateFormOverridesProps = {
    ClienteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nombre?: PrimitiveOverrideProps<TextFieldProps>;
    Apellido1?: PrimitiveOverrideProps<TextFieldProps>;
    Apellido2?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    Telefono?: PrimitiveOverrideProps<TextFieldProps>;
    dni?: PrimitiveOverrideProps<TextFieldProps>;
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
