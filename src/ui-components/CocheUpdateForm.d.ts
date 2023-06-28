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
    matricula?: string;
    precio?: number;
};
export declare type CocheUpdateFormValidationValues = {
    marca?: ValidationFunction<string>;
    matricula?: ValidationFunction<string>;
    precio?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CocheUpdateFormOverridesProps = {
    CocheUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    precio?: PrimitiveOverrideProps<TextFieldProps>;
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
