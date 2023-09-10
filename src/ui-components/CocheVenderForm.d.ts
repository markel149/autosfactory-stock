/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Coche } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CocheVenderFormInputValues = {
    precioVenta?: number;
    notas?: string;
    fechaVenta?: string;
    precioVentaPublico?: number;
    precioReparaciones?: number;
    vendido?: boolean;
    clienteID?: string;
};
export declare type CocheVenderFormValidationValues = {
    precioVenta?: ValidationFunction<number>;
    notas?: ValidationFunction<string>;
    fechaVenta?: ValidationFunction<string>;
    precioVentaPublico?: ValidationFunction<number>;
    precioReparaciones?: ValidationFunction<number>;
    vendido?: ValidationFunction<boolean>;
    clienteID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CocheVenderFormOverridesProps = {
    CocheVenderFormGrid?: PrimitiveOverrideProps<GridProps>;
    precioVenta?: PrimitiveOverrideProps<TextFieldProps>;
    notas?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVenta?: PrimitiveOverrideProps<TextFieldProps>;
    precioVentaPublico?: PrimitiveOverrideProps<TextFieldProps>;
    precioReparaciones?: PrimitiveOverrideProps<TextFieldProps>;
    vendido?: PrimitiveOverrideProps<SwitchFieldProps>;
    clienteID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CocheVenderFormProps = React.PropsWithChildren<{
    overrides?: CocheVenderFormOverridesProps | undefined | null;
} & {
    id?: string;
    coche?: Coche;
    onSubmit?: (fields: CocheVenderFormInputValues) => CocheVenderFormInputValues;
    onSuccess?: (fields: CocheVenderFormInputValues) => void;
    onError?: (fields: CocheVenderFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CocheVenderFormInputValues) => CocheVenderFormInputValues;
    onValidate?: CocheVenderFormValidationValues;
} & React.CSSProperties>;
export default function CocheVenderForm(props: CocheVenderFormProps): React.ReactElement;
