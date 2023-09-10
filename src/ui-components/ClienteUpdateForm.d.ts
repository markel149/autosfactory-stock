/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, CheckboxFieldProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cliente, Coche } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClienteUpdateFormInputValues = {
    nombre?: string;
    apellido1?: string;
    apellido2?: string;
    email?: string;
    telefono?: string;
    dni?: string;
    Coches?: Coche[];
    ciudad?: string;
    calle?: string;
    codigoPostal?: string;
    alerta?: boolean;
};
export declare type ClienteUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido1?: ValidationFunction<string>;
    apellido2?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    dni?: ValidationFunction<string>;
    Coches?: ValidationFunction<Coche>;
    ciudad?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<string>;
    alerta?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClienteUpdateFormOverridesProps = {
    ClienteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    alerta?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type ClienteUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClienteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cliente?: Cliente;
    onSubmit?: (fields: ClienteUpdateFormInputValues) => ClienteUpdateFormInputValues;
    onSuccess?: (fields: ClienteUpdateFormInputValues) => void;
    onError?: (fields: ClienteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClienteUpdateFormInputValues) => ClienteUpdateFormInputValues;
    onValidate?: ClienteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClienteUpdateForm(props: ClienteUpdateFormProps): React.ReactElement;
