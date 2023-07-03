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
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono: "",
    dni: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [apellido1, setApellido1] = React.useState(initialValues.apellido1);
  const [apellido2, setApellido2] = React.useState(initialValues.apellido2);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [dni, setDni] = React.useState(initialValues.dni);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setApellido1(initialValues.apellido1);
    setApellido2(initialValues.apellido2);
    setEmail(initialValues.email);
    setTelefono(initialValues.telefono);
    setDni(initialValues.dni);
    setErrors({});
  };
  const validations = {
    nombre: [{ type: "Required" }],
    apellido1: [{ type: "Required" }],
    apellido2: [],
    email: [{ type: "Email" }],
    telefono: [],
    dni: [{ type: "Required" }],
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
          nombre,
          apellido1,
          apellido2,
          email,
          telefono,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Nombre</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Apellido1</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={apellido1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1: value,
              apellido2,
              email,
              telefono,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.apellido1 ?? value;
          }
          if (errors.apellido1?.hasError) {
            runValidationTasks("apellido1", value);
          }
          setApellido1(value);
        }}
        onBlur={() => runValidationTasks("apellido1", apellido1)}
        errorMessage={errors.apellido1?.errorMessage}
        hasError={errors.apellido1?.hasError}
        {...getOverrideProps(overrides, "apellido1")}
      ></TextField>
      <TextField
        label="Apellido2"
        isRequired={false}
        isReadOnly={false}
        value={apellido2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2: value,
              email,
              telefono,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.apellido2 ?? value;
          }
          if (errors.apellido2?.hasError) {
            runValidationTasks("apellido2", value);
          }
          setApellido2(value);
        }}
        onBlur={() => runValidationTasks("apellido2", apellido2)}
        errorMessage={errors.apellido2?.errorMessage}
        hasError={errors.apellido2?.hasError}
        {...getOverrideProps(overrides, "apellido2")}
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
              nombre,
              apellido1,
              apellido2,
              email: value,
              telefono,
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
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono: value,
              dni,
            };
            const result = onChange(modelFields);
            value = result?.telefono ?? value;
          }
          if (errors.telefono?.hasError) {
            runValidationTasks("telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("telefono", telefono)}
        errorMessage={errors.telefono?.errorMessage}
        hasError={errors.telefono?.hasError}
        {...getOverrideProps(overrides, "telefono")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Dni</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={dni}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
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
