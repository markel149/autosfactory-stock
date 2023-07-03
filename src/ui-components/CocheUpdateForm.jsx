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
    modelo: "",
    matricula: "",
    color: "",
    kilometros: "",
    precioCompra: "",
    precioVenta: "",
    notas: "",
  };
  const [marca, setMarca] = React.useState(initialValues.marca);
  const [modelo, setModelo] = React.useState(initialValues.modelo);
  const [matricula, setMatricula] = React.useState(initialValues.matricula);
  const [color, setColor] = React.useState(initialValues.color);
  const [kilometros, setKilometros] = React.useState(initialValues.kilometros);
  const [precioCompra, setPrecioCompra] = React.useState(
    initialValues.precioCompra
  );
  const [precioVenta, setPrecioVenta] = React.useState(
    initialValues.precioVenta
  );
  const [notas, setNotas] = React.useState(initialValues.notas);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cocheRecord
      ? { ...initialValues, ...cocheRecord }
      : initialValues;
    setMarca(cleanValues.marca);
    setModelo(cleanValues.modelo);
    setMatricula(cleanValues.matricula);
    setColor(cleanValues.color);
    setKilometros(cleanValues.kilometros);
    setPrecioCompra(cleanValues.precioCompra);
    setPrecioVenta(cleanValues.precioVenta);
    setNotas(cleanValues.notas);
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
    marca: [{ type: "Required" }],
    modelo: [{ type: "Required" }],
    matricula: [{ type: "Required" }],
    color: [],
    kilometros: [],
    precioCompra: [{ type: "Required" }],
    precioVenta: [],
    notas: [],
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
          modelo,
          matricula,
          color,
          kilometros,
          precioCompra,
          precioVenta,
          notas,
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
        isRequired={true}
        isReadOnly={false}
        value={marca}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              marca: value,
              modelo,
              matricula,
              color,
              kilometros,
              precioCompra,
              precioVenta,
              notas,
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
        label="Modelo"
        isRequired={true}
        isReadOnly={false}
        value={modelo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              marca,
              modelo: value,
              matricula,
              color,
              kilometros,
              precioCompra,
              precioVenta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.modelo ?? value;
          }
          if (errors.modelo?.hasError) {
            runValidationTasks("modelo", value);
          }
          setModelo(value);
        }}
        onBlur={() => runValidationTasks("modelo", modelo)}
        errorMessage={errors.modelo?.errorMessage}
        hasError={errors.modelo?.hasError}
        {...getOverrideProps(overrides, "modelo")}
      ></TextField>
      <TextField
        label="Matricula"
        isRequired={true}
        isReadOnly={false}
        value={matricula}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              marca,
              modelo,
              matricula: value,
              color,
              kilometros,
              precioCompra,
              precioVenta,
              notas,
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
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              marca,
              modelo,
              matricula,
              color: value,
              kilometros,
              precioCompra,
              precioVenta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <TextField
        label="Kilometros"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={kilometros}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              marca,
              modelo,
              matricula,
              color,
              kilometros: value,
              precioCompra,
              precioVenta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.kilometros ?? value;
          }
          if (errors.kilometros?.hasError) {
            runValidationTasks("kilometros", value);
          }
          setKilometros(value);
        }}
        onBlur={() => runValidationTasks("kilometros", kilometros)}
        errorMessage={errors.kilometros?.errorMessage}
        hasError={errors.kilometros?.hasError}
        {...getOverrideProps(overrides, "kilometros")}
      ></TextField>
      <TextField
        label="Precio compra"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={precioCompra}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              marca,
              modelo,
              matricula,
              color,
              kilometros,
              precioCompra: value,
              precioVenta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.precioCompra ?? value;
          }
          if (errors.precioCompra?.hasError) {
            runValidationTasks("precioCompra", value);
          }
          setPrecioCompra(value);
        }}
        onBlur={() => runValidationTasks("precioCompra", precioCompra)}
        errorMessage={errors.precioCompra?.errorMessage}
        hasError={errors.precioCompra?.hasError}
        {...getOverrideProps(overrides, "precioCompra")}
      ></TextField>
      <TextField
        label="Precio venta"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={precioVenta}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              marca,
              modelo,
              matricula,
              color,
              kilometros,
              precioCompra,
              precioVenta: value,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.precioVenta ?? value;
          }
          if (errors.precioVenta?.hasError) {
            runValidationTasks("precioVenta", value);
          }
          setPrecioVenta(value);
        }}
        onBlur={() => runValidationTasks("precioVenta", precioVenta)}
        errorMessage={errors.precioVenta?.errorMessage}
        hasError={errors.precioVenta?.hasError}
        {...getOverrideProps(overrides, "precioVenta")}
      ></TextField>
      <TextField
        label="Notas"
        isRequired={false}
        isReadOnly={false}
        value={notas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              marca,
              modelo,
              matricula,
              color,
              kilometros,
              precioCompra,
              precioVenta,
              notas: value,
            };
            const result = onChange(modelFields);
            value = result?.notas ?? value;
          }
          if (errors.notas?.hasError) {
            runValidationTasks("notas", value);
          }
          setNotas(value);
        }}
        onBlur={() => runValidationTasks("notas", notas)}
        errorMessage={errors.notas?.errorMessage}
        hasError={errors.notas?.hasError}
        {...getOverrideProps(overrides, "notas")}
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
