/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarHeaderProps } from "./NavBarHeader";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderCollectionOverridesProps = {
    NavBarHeaderCollection?: PrimitiveOverrideProps<CollectionProps>;
    NavBarHeader?: NavBarHeaderProps;
} & EscapeHatchProps;
export declare type NavBarHeaderCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NavBarHeaderProps;
} & {
    overrides?: NavBarHeaderCollectionOverridesProps | undefined | null;
}>;
export default function NavBarHeaderCollection(props: NavBarHeaderCollectionProps): React.ReactElement;
