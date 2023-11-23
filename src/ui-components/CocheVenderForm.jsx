/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Coche, Cliente } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CocheVenderForm(props) {
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
    precioVenta: "",
    notas: "",
    fechaVenta: "",
    precioVentaPublico: "",
    precioReparaciones: "",
    numeroFacturaVenta: "",
    vendido: false,
    clienteID: undefined,
    notasVenta: "",
  };
  const [precioVenta, setPrecioVenta] = React.useState(
    initialValues.precioVenta
  );
  const [notas, setNotas] = React.useState(initialValues.notas);
  const [fechaVenta, setFechaVenta] = React.useState(initialValues.fechaVenta);
  const [precioVentaPublico, setPrecioVentaPublico] = React.useState(
    initialValues.precioVentaPublico
  );
  const [precioReparaciones, setPrecioReparaciones] = React.useState(
    initialValues.precioReparaciones
  );
  const [numeroFacturaVenta, setNumeroFacturaVenta] = React.useState(
    initialValues.numeroFacturaVenta
  );
  const [vendido, setVendido] = React.useState(initialValues.vendido);
  const [clienteID, setClienteID] = React.useState(initialValues.clienteID);
  const [notasVenta, setNotasVenta] = React.useState(initialValues.notasVenta);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cocheRecord
      ? { ...initialValues, ...cocheRecord, clienteID }
      : initialValues;
    setPrecioVenta(cleanValues.precioVenta);
    setNotas(cleanValues.notas);
    setFechaVenta(cleanValues.fechaVenta);
    setPrecioVentaPublico(cleanValues.precioVentaPublico);
    setPrecioReparaciones(cleanValues.precioReparaciones);
    setNumeroFacturaVenta(cleanValues.numeroFacturaVenta);
    setVendido(cleanValues.vendido);
    setClienteID(cleanValues.clienteID);
    setCurrentClienteIDValue(undefined);
    setCurrentClienteIDDisplayValue("");
    setNotasVenta(cleanValues.notasVenta);
    setErrors({});
  };
  const [cocheRecord, setCocheRecord] = React.useState(cocheModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Coche, idProp)
        : cocheModelProp;
      setCocheRecord(record);
      const clienteIDRecord = record ? await record.clienteID : undefined;
      setClienteID(clienteIDRecord);
    };
    queryData();
  }, [idProp, cocheModelProp]);
  React.useEffect(resetStateValues, [cocheRecord, clienteID]);
  const [currentClienteIDDisplayValue, setCurrentClienteIDDisplayValue] =
    React.useState("");
  const [currentClienteIDValue, setCurrentClienteIDValue] =
    React.useState(undefined);
  const clienteIDRef = React.createRef();
  const clienteRecords = useDataStoreBinding({
    type: "collection",
    model: Cliente,
  }).items;
  const getDisplayValue = {
    clienteID: (r) => `${r?.dni}${" - "}${r?.nombre}${" "}${r?.apellido1}`,
  };
  const validations = {
    precioVenta: [],
    notas: [],
    fechaVenta: [],
    precioVentaPublico: [],
    precioReparaciones: [],
    numeroFacturaVenta: [],
    vendido: [],
    clienteID: [],
    notasVenta: [],
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
          precioVenta,
          notas,
          fechaVenta,
          precioVentaPublico,
          precioReparaciones,
          numeroFacturaVenta,
          vendido,
          clienteID,
          notasVenta,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
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
      {...getOverrideProps(overrides, "CocheVenderForm")}
      {...rest}
    >
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
              precioVenta: value,
              notas,
              fechaVenta,
              precioVentaPublico,
              precioReparaciones,
              numeroFacturaVenta,
              vendido,
              clienteID,
              notasVenta,
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
              precioVenta,
              notas: value,
              fechaVenta,
              precioVentaPublico,
              precioReparaciones,
              numeroFacturaVenta,
              vendido,
              clienteID,
              notasVenta,
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
      <TextField
        label="Fecha venta"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={fechaVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              precioVenta,
              notas,
              fechaVenta: value,
              precioVentaPublico,
              precioReparaciones,
              numeroFacturaVenta,
              vendido,
              clienteID,
              notasVenta,
            };
            const result = onChange(modelFields);
            value = result?.fechaVenta ?? value;
          }
          if (errors.fechaVenta?.hasError) {
            runValidationTasks("fechaVenta", value);
          }
          setFechaVenta(value);
        }}
        onBlur={() => runValidationTasks("fechaVenta", fechaVenta)}
        errorMessage={errors.fechaVenta?.errorMessage}
        hasError={errors.fechaVenta?.hasError}
        {...getOverrideProps(overrides, "fechaVenta")}
      ></TextField>
      <TextField
        label="Precio venta publico"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={precioVentaPublico}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              precioVenta,
              notas,
              fechaVenta,
              precioVentaPublico: value,
              precioReparaciones,
              numeroFacturaVenta,
              vendido,
              clienteID,
              notasVenta,
            };
            const result = onChange(modelFields);
            value = result?.precioVentaPublico ?? value;
          }
          if (errors.precioVentaPublico?.hasError) {
            runValidationTasks("precioVentaPublico", value);
          }
          setPrecioVentaPublico(value);
        }}
        onBlur={() =>
          runValidationTasks("precioVentaPublico", precioVentaPublico)
        }
        errorMessage={errors.precioVentaPublico?.errorMessage}
        hasError={errors.precioVentaPublico?.hasError}
        {...getOverrideProps(overrides, "precioVentaPublico")}
      ></TextField>
      <TextField
        label="Precio reparaciones"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={precioReparaciones}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              precioVenta,
              notas,
              fechaVenta,
              precioVentaPublico,
              precioReparaciones: value,
              numeroFacturaVenta,
              vendido,
              clienteID,
              notasVenta,
            };
            const result = onChange(modelFields);
            value = result?.precioReparaciones ?? value;
          }
          if (errors.precioReparaciones?.hasError) {
            runValidationTasks("precioReparaciones", value);
          }
          setPrecioReparaciones(value);
        }}
        onBlur={() =>
          runValidationTasks("precioReparaciones", precioReparaciones)
        }
        errorMessage={errors.precioReparaciones?.errorMessage}
        hasError={errors.precioReparaciones?.hasError}
        {...getOverrideProps(overrides, "precioReparaciones")}
      ></TextField>
      <TextField
        label="Numero factura venta"
        descriptiveText="Numero de factura emitido por Autos Alava Factory"
        isRequired={false}
        isReadOnly={false}
        value={numeroFacturaVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              precioVenta,
              notas,
              fechaVenta,
              precioVentaPublico,
              precioReparaciones,
              numeroFacturaVenta: value,
              vendido,
              clienteID,
              notasVenta,
            };
            const result = onChange(modelFields);
            value = result?.numeroFacturaVenta ?? value;
          }
          if (errors.numeroFacturaVenta?.hasError) {
            runValidationTasks("numeroFacturaVenta", value);
          }
          setNumeroFacturaVenta(value);
        }}
        onBlur={() =>
          runValidationTasks("numeroFacturaVenta", numeroFacturaVenta)
        }
        errorMessage={errors.numeroFacturaVenta?.errorMessage}
        hasError={errors.numeroFacturaVenta?.hasError}
        {...getOverrideProps(overrides, "numeroFacturaVenta")}
      ></TextField>
      <CheckboxField
        label="Vendido"
        name="vendido"
        value="vendido"
        isDisabled={false}
        checked={vendido}
        defaultValue={vendido}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              precioVenta,
              notas,
              fechaVenta,
              precioVentaPublico,
              precioReparaciones,
              numeroFacturaVenta,
              vendido: value,
              clienteID,
              notasVenta,
            };
            const result = onChange(modelFields);
            value = result?.vendido ?? value;
          }
          if (errors.vendido?.hasError) {
            runValidationTasks("vendido", value);
          }
          setVendido(value);
        }}
        onBlur={() => runValidationTasks("vendido", vendido)}
        errorMessage={errors.vendido?.errorMessage}
        hasError={errors.vendido?.hasError}
        {...getOverrideProps(overrides, "vendido")}
      ></CheckboxField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              precioVenta,
              notas,
              fechaVenta,
              precioVentaPublico,
              precioReparaciones,
              numeroFacturaVenta,
              vendido,
              clienteID: value,
              notasVenta,
            };
            const result = onChange(modelFields);
            value = result?.clienteID ?? value;
          }
          setClienteID(value);
          setCurrentClienteIDValue(undefined);
        }}
        currentFieldValue={currentClienteIDValue}
        label={"Cliente id"}
        items={clienteID ? [clienteID] : []}
        hasError={errors?.clienteID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("clienteID", currentClienteIDValue)
        }
        errorMessage={errors?.clienteID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.clienteID(
                clienteRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentClienteIDDisplayValue(
            value
              ? getDisplayValue.clienteID(
                  clienteRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentClienteIDValue(value);
        }}
        inputFieldRef={clienteIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Cliente id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Cliente"
          value={currentClienteIDDisplayValue}
          options={clienteRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.clienteID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentClienteIDValue(id);
            setCurrentClienteIDDisplayValue(label);
            runValidationTasks("clienteID", label);
          }}
          onClear={() => {
            setCurrentClienteIDDisplayValue("");
          }}
          defaultValue={clienteID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.clienteID?.hasError) {
              runValidationTasks("clienteID", value);
            }
            setCurrentClienteIDDisplayValue(value);
            setCurrentClienteIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("clienteID", currentClienteIDValue)}
          errorMessage={errors.clienteID?.errorMessage}
          hasError={errors.clienteID?.hasError}
          ref={clienteIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "clienteID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Notas venta"
        isRequired={false}
        isReadOnly={false}
        value={notasVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              precioVenta,
              notas,
              fechaVenta,
              precioVentaPublico,
              precioReparaciones,
              numeroFacturaVenta,
              vendido,
              clienteID,
              notasVenta: value,
            };
            const result = onChange(modelFields);
            value = result?.notasVenta ?? value;
          }
          if (errors.notasVenta?.hasError) {
            runValidationTasks("notasVenta", value);
          }
          setNotasVenta(value);
        }}
        onBlur={() => runValidationTasks("notasVenta", notasVenta)}
        errorMessage={errors.notasVenta?.errorMessage}
        hasError={errors.notasVenta?.hasError}
        {...getOverrideProps(overrides, "notasVenta")}
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
