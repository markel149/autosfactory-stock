/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Coche } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CocheUpdateForm(props) {
  const {
    id: idProp,
    coche: cocheModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    marca: "",
    matricula: "",
    precio: "",
  };
  const [marca, setMarca] = React.useState(initialValues.marca);
  const [matricula, setMatricula] = React.useState(initialValues.matricula);
  const [precio, setPrecio] = React.useState(initialValues.precio);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cocheRecord
      ? { ...initialValues, ...cocheRecord }
      : initialValues;
    setMarca(cleanValues.marca);
    setMatricula(cleanValues.matricula);
    setPrecio(cleanValues.precio);
    setErrors({});
  };
  const [cocheRecord, setCocheRecord] = React.useState(cocheModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Coche, idProp)
        : cocheModelProp;
      setCocheRecord(record);
    };
    queryData();
  }, [idProp, cocheModelProp]);
  React.useEffect(resetStateValues, [cocheRecord]);
  const validations = {
    marca: [],
    matricula: [],
    precio: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          marca,
          matricula,
          precio,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Coche.copyOf(cocheRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CocheUpdateForm")}
      {...rest}
    >
      <TextField
        label="Marca"
        isRequired={false}
        isReadOnly={false}
        value={marca}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              marca: value,
              matricula,
              precio,
            };
            const result = onChange(modelFields);
            value = result?.marca ?? value;
          }
          if (errors.marca?.hasError) {
            runValidationTasks("marca", value);
          }
          setMarca(value);
        }}
        onBlur={() => runValidationTasks("marca", marca)}
        errorMessage={errors.marca?.errorMessage}
        hasError={errors.marca?.hasError}
        {...getOverrideProps(overrides, "marca")}
      ></TextField>
      <TextField
        label="Matricula"
        isRequired={false}
        isReadOnly={false}
        value={matricula}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              marca,
              matricula: value,
              precio,
            };
            const result = onChange(modelFields);
            value = result?.matricula ?? value;
          }
          if (errors.matricula?.hasError) {
            runValidationTasks("matricula", value);
          }
          setMatricula(value);
        }}
        onBlur={() => runValidationTasks("matricula", matricula)}
        errorMessage={errors.matricula?.errorMessage}
        hasError={errors.matricula?.hasError}
        {...getOverrideProps(overrides, "matricula")}
      ></TextField>
      <TextField
        label="Precio"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={precio}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              marca,
              matricula,
              precio: value,
            };
            const result = onChange(modelFields);
            value = result?.precio ?? value;
          }
          if (errors.precio?.hasError) {
            runValidationTasks("precio", value);
          }
          setPrecio(value);
        }}
        onBlur={() => runValidationTasks("precio", precio)}
        errorMessage={errors.precio?.errorMessage}
        hasError={errors.precio?.hasError}
        {...getOverrideProps(overrides, "precio")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cocheModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cocheModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
