/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Cliente } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ClienteCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Nombre: "",
    Apellido1: "",
    Apellido2: "",
    email: "",
    Telefono: "",
    dni: "",
  };
  const [Nombre, setNombre] = React.useState(initialValues.Nombre);
  const [Apellido1, setApellido1] = React.useState(initialValues.Apellido1);
  const [Apellido2, setApellido2] = React.useState(initialValues.Apellido2);
  const [email, setEmail] = React.useState(initialValues.email);
  const [Telefono, setTelefono] = React.useState(initialValues.Telefono);
  const [dni, setDni] = React.useState(initialValues.dni);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.Nombre);
    setApellido1(initialValues.Apellido1);
    setApellido2(initialValues.Apellido2);
    setEmail(initialValues.email);
    setTelefono(initialValues.Telefono);
    setDni(initialValues.dni);
    setErrors({});
  };
  const validations = {
    Nombre: [],
    Apellido1: [],
    Apellido2: [],
    email: [{ type: "Email" }],
    Telefono: [{ type: "Phone" }],
    dni: [],
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
          Nombre,
          Apellido1,
          Apellido2,
          email,
          Telefono,
          dni,
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
          await DataStore.save(new Cliente(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClienteCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={Nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre: value,
              Apellido1,
              Apellido2,
              email,
              Telefono,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.Nombre ?? value;
          }
          if (errors.Nombre?.hasError) {
            runValidationTasks("Nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("Nombre", Nombre)}
        errorMessage={errors.Nombre?.errorMessage}
        hasError={errors.Nombre?.hasError}
        {...getOverrideProps(overrides, "Nombre")}
      ></TextField>
      <TextField
        label="Apellido1"
        isRequired={false}
        isReadOnly={false}
        value={Apellido1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido1: value,
              Apellido2,
              email,
              Telefono,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.Apellido1 ?? value;
          }
          if (errors.Apellido1?.hasError) {
            runValidationTasks("Apellido1", value);
          }
          setApellido1(value);
        }}
        onBlur={() => runValidationTasks("Apellido1", Apellido1)}
        errorMessage={errors.Apellido1?.errorMessage}
        hasError={errors.Apellido1?.hasError}
        {...getOverrideProps(overrides, "Apellido1")}
      ></TextField>
      <TextField
        label="Apellido2"
        isRequired={false}
        isReadOnly={false}
        value={Apellido2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido1,
              Apellido2: value,
              email,
              Telefono,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.Apellido2 ?? value;
          }
          if (errors.Apellido2?.hasError) {
            runValidationTasks("Apellido2", value);
          }
          setApellido2(value);
        }}
        onBlur={() => runValidationTasks("Apellido2", Apellido2)}
        errorMessage={errors.Apellido2?.errorMessage}
        hasError={errors.Apellido2?.hasError}
        {...getOverrideProps(overrides, "Apellido2")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido1,
              Apellido2,
              email: value,
              Telefono,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={Telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido1,
              Apellido2,
              email,
              Telefono: value,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.Telefono ?? value;
          }
          if (errors.Telefono?.hasError) {
            runValidationTasks("Telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("Telefono", Telefono)}
        errorMessage={errors.Telefono?.errorMessage}
        hasError={errors.Telefono?.hasError}
        {...getOverrideProps(overrides, "Telefono")}
      ></TextField>
      <TextField
        label="Dni"
        isRequired={false}
        isReadOnly={false}
        value={dni}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido1,
              Apellido2,
              email,
              Telefono,
              dni: value,
            };
            const result = onChange(modelFields);
            value = result?.dni ?? value;
          }
          if (errors.dni?.hasError) {
            runValidationTasks("dni", value);
          }
          setDni(value);
        }}
        onBlur={() => runValidationTasks("dni", dni)}
        errorMessage={errors.dni?.errorMessage}
        hasError={errors.dni?.hasError}
        {...getOverrideProps(overrides, "dni")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
