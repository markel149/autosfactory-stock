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
    matricula?: string;
    precio?: number;
};
export declare type CocheCreateFormValidationValues = {
    marca?: ValidationFunction<string>;
    matricula?: ValidationFunction<string>;
    precio?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CocheCreateFormOverridesProps = {
    CocheCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    marca?: PrimitiveOverrideProps<TextFieldProps>;
    matricula?: PrimitiveOverrideProps<TextFieldProps>;
    precio?: PrimitiveOverrideProps<TextFieldProps>;
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
