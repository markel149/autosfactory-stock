/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cliente, Coche } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClienteUpdateInputValues = {
    nombre?: string;
    apellido1?: string;
    apellido2?: string;
    email?: string;
    telefono?: string;
    dni?: string;
    Coches?: Coche[];
};
export declare type ClienteUpdateValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido1?: ValidationFunction<string>;
    apellido2?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    dni?: ValidationFunction<string>;
    Coches?: ValidationFunction<Coche>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteUpdateOverridesProps = {
    ClienteUpdateGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellido1?: PrimitiveOverrideProps<TextFieldProps>;
    apellido2?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    dni?: PrimitiveOverrideProps<TextFieldProps>;
    Coches?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ClienteUpdateProps = React.PropsWithChildren<{
    overrides?: ClienteUpdateOverridesProps | undefined | null;
} & {
    id?: string;
    cliente?: Cliente;
    onSubmit?: (fields: ClienteUpdateInputValues) => ClienteUpdateInputValues;
    onSuccess?: (fields: ClienteUpdateInputValues) => void;
    onError?: (fields: ClienteUpdateInputValues, errorMessage: string) => void;
    onChange?: (fields: ClienteUpdateInputValues) => ClienteUpdateInputValues;
    onValidate?: ClienteUpdateValidationValues;
} & React.CSSProperties>;
export default function ClienteUpdate(props: ClienteUpdateProps): React.ReactElement;
