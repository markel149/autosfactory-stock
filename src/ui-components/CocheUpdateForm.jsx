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
  Heading,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextAreaField,
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
    matricula: "",
    marca: "",
    modelo: "",
    color: "",
    kilometros: "",
    combustible: "",
    cambio: "",
    anio: "",
    potencia: "",
    cc: "",
    localidadVendedor: "",
    nifVendedor: "",
    numeroFactura: "",
    precioCompra: "",
    fechaCompra: "",
    nombreVendedor: "",
    direccionVendedor: "",
    telefonoVendedor: "",
    precioVentaPublico: "",
    numeroFacturaVenta: "",
    precioReparaciones: "",
    vendido: false,
    precioVenta: "",
    notasVenta: "",
    fechaVenta: "",
    clienteID: undefined,
    alerta: false,
    notas: "",
  };
  const [matricula, setMatricula] = React.useState(initialValues.matricula);
  const [marca, setMarca] = React.useState(initialValues.marca);
  const [modelo, setModelo] = React.useState(initialValues.modelo);
  const [color, setColor] = React.useState(initialValues.color);
  const [kilometros, setKilometros] = React.useState(initialValues.kilometros);
  const [combustible, setCombustible] = React.useState(
    initialValues.combustible
  );
  const [cambio, setCambio] = React.useState(initialValues.cambio);
  const [anio, setAnio] = React.useState(initialValues.anio);
  const [potencia, setPotencia] = React.useState(initialValues.potencia);
  const [cc, setCc] = React.useState(initialValues.cc);
  const [localidadVendedor, setLocalidadVendedor] = React.useState(
    initialValues.localidadVendedor
  );
  const [nifVendedor, setNifVendedor] = React.useState(
    initialValues.nifVendedor
  );
  const [numeroFactura, setNumeroFactura] = React.useState(
    initialValues.numeroFactura
  );
  const [precioCompra, setPrecioCompra] = React.useState(
    initialValues.precioCompra
  );
  const [fechaCompra, setFechaCompra] = React.useState(
    initialValues.fechaCompra
  );
  const [nombreVendedor, setNombreVendedor] = React.useState(
    initialValues.nombreVendedor
  );
  const [direccionVendedor, setDireccionVendedor] = React.useState(
    initialValues.direccionVendedor
  );
  const [telefonoVendedor, setTelefonoVendedor] = React.useState(
    initialValues.telefonoVendedor
  );
  const [precioVentaPublico, setPrecioVentaPublico] = React.useState(
    initialValues.precioVentaPublico
  );
  const [numeroFacturaVenta, setNumeroFacturaVenta] = React.useState(
    initialValues.numeroFacturaVenta
  );
  const [precioReparaciones, setPrecioReparaciones] = React.useState(
    initialValues.precioReparaciones
  );
  const [vendido, setVendido] = React.useState(initialValues.vendido);
  const [precioVenta, setPrecioVenta] = React.useState(
    initialValues.precioVenta
  );
  const [notasVenta, setNotasVenta] = React.useState(initialValues.notasVenta);
  const [fechaVenta, setFechaVenta] = React.useState(initialValues.fechaVenta);
  const [clienteID, setClienteID] = React.useState(initialValues.clienteID);
  const [alerta, setAlerta] = React.useState(initialValues.alerta);
  const [notas, setNotas] = React.useState(initialValues.notas);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cocheRecord
      ? { ...initialValues, ...cocheRecord, clienteID }
      : initialValues;
    setMatricula(cleanValues.matricula);
    setMarca(cleanValues.marca);
    setModelo(cleanValues.modelo);
    setColor(cleanValues.color);
    setKilometros(cleanValues.kilometros);
    setCombustible(cleanValues.combustible);
    setCambio(cleanValues.cambio);
    setAnio(cleanValues.anio);
    setPotencia(cleanValues.potencia);
    setCc(cleanValues.cc);
    setLocalidadVendedor(cleanValues.localidadVendedor);
    setNifVendedor(cleanValues.nifVendedor);
    setNumeroFactura(cleanValues.numeroFactura);
    setPrecioCompra(cleanValues.precioCompra);
    setFechaCompra(cleanValues.fechaCompra);
    setNombreVendedor(cleanValues.nombreVendedor);
    setDireccionVendedor(cleanValues.direccionVendedor);
    setTelefonoVendedor(cleanValues.telefonoVendedor);
    setPrecioVentaPublico(cleanValues.precioVentaPublico);
    setNumeroFacturaVenta(cleanValues.numeroFacturaVenta);
    setPrecioReparaciones(cleanValues.precioReparaciones);
    setVendido(cleanValues.vendido);
    setPrecioVenta(cleanValues.precioVenta);
    setNotasVenta(cleanValues.notasVenta);
    setFechaVenta(cleanValues.fechaVenta);
    setClienteID(cleanValues.clienteID);
    setCurrentClienteIDValue(undefined);
    setCurrentClienteIDDisplayValue("");
    setAlerta(cleanValues.alerta);
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
    clienteID: (r) =>
      `${r?.nombre}${" "}${r?.apellido1}${" "}${r?.apellido2}${" - "}${r?.dni}`,
  };
  const validations = {
    matricula: [{ type: "Required" }],
    marca: [{ type: "Required" }],
    modelo: [{ type: "Required" }],
    color: [],
    kilometros: [],
    combustible: [],
    cambio: [],
    anio: [],
    potencia: [],
    cc: [],
    localidadVendedor: [],
    nifVendedor: [],
    numeroFactura: [],
    precioCompra: [{ type: "Required" }],
    fechaCompra: [],
    nombreVendedor: [],
    direccionVendedor: [],
    telefonoVendedor: [],
    precioVentaPublico: [],
    numeroFacturaVenta: [],
    precioReparaciones: [],
    vendido: [],
    precioVenta: [],
    notasVenta: [],
    fechaVenta: [],
    clienteID: [],
    alerta: [],
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
          matricula,
          marca,
          modelo,
          color,
          kilometros,
          combustible,
          cambio,
          anio,
          potencia,
          cc,
          localidadVendedor,
          nifVendedor,
          numeroFactura,
          precioCompra,
          fechaCompra,
          nombreVendedor,
          direccionVendedor,
          telefonoVendedor,
          precioVentaPublico,
          numeroFacturaVenta,
          precioReparaciones,
          vendido,
          precioVenta,
          notasVenta,
          fechaVenta,
          clienteID,
          alerta,
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
      {...getOverrideProps(overrides, "CocheUpdateForm")}
      {...rest}
    >
      <Heading
        children="Información general"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Matricula</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={matricula}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula: value,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Marca</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={marca}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca: value,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Modelo</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={modelo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo: value,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
      <Heading
        children="Especificaciones tecnicas"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color: value,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
              matricula,
              marca,
              modelo,
              color,
              kilometros: value,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
        label="Combustible"
        isRequired={false}
        isReadOnly={false}
        value={combustible}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible: value,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.combustible ?? value;
          }
          if (errors.combustible?.hasError) {
            runValidationTasks("combustible", value);
          }
          setCombustible(value);
        }}
        onBlur={() => runValidationTasks("combustible", combustible)}
        errorMessage={errors.combustible?.errorMessage}
        hasError={errors.combustible?.hasError}
        {...getOverrideProps(overrides, "combustible")}
      ></TextField>
      <TextField
        label="Cambio"
        isRequired={false}
        isReadOnly={false}
        value={cambio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio: value,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.cambio ?? value;
          }
          if (errors.cambio?.hasError) {
            runValidationTasks("cambio", value);
          }
          setCambio(value);
        }}
        onBlur={() => runValidationTasks("cambio", cambio)}
        errorMessage={errors.cambio?.errorMessage}
        hasError={errors.cambio?.hasError}
        {...getOverrideProps(overrides, "cambio")}
      ></TextField>
      <TextField
        label="Anio"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={anio}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio: value,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.anio ?? value;
          }
          if (errors.anio?.hasError) {
            runValidationTasks("anio", value);
          }
          setAnio(value);
        }}
        onBlur={() => runValidationTasks("anio", anio)}
        errorMessage={errors.anio?.errorMessage}
        hasError={errors.anio?.hasError}
        {...getOverrideProps(overrides, "anio")}
      ></TextField>
      <TextField
        label="Potencia"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={potencia}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia: value,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.potencia ?? value;
          }
          if (errors.potencia?.hasError) {
            runValidationTasks("potencia", value);
          }
          setPotencia(value);
        }}
        onBlur={() => runValidationTasks("potencia", potencia)}
        errorMessage={errors.potencia?.errorMessage}
        hasError={errors.potencia?.hasError}
        {...getOverrideProps(overrides, "potencia")}
      ></TextField>
      <TextField
        label="Cc"
        isRequired={false}
        isReadOnly={false}
        value={cc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc: value,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.cc ?? value;
          }
          if (errors.cc?.hasError) {
            runValidationTasks("cc", value);
          }
          setCc(value);
        }}
        onBlur={() => runValidationTasks("cc", cc)}
        errorMessage={errors.cc?.errorMessage}
        hasError={errors.cc?.hasError}
        {...getOverrideProps(overrides, "cc")}
      ></TextField>
      <Heading
        children="Detalles de la compra"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <TextField
        label="Localidad vendedor"
        isRequired={false}
        isReadOnly={false}
        value={localidadVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor: value,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.localidadVendedor ?? value;
          }
          if (errors.localidadVendedor?.hasError) {
            runValidationTasks("localidadVendedor", value);
          }
          setLocalidadVendedor(value);
        }}
        onBlur={() =>
          runValidationTasks("localidadVendedor", localidadVendedor)
        }
        errorMessage={errors.localidadVendedor?.errorMessage}
        hasError={errors.localidadVendedor?.hasError}
        {...getOverrideProps(overrides, "localidadVendedor")}
      ></TextField>
      <TextField
        label="Nif vendedor"
        isRequired={false}
        isReadOnly={false}
        value={nifVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor: value,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.nifVendedor ?? value;
          }
          if (errors.nifVendedor?.hasError) {
            runValidationTasks("nifVendedor", value);
          }
          setNifVendedor(value);
        }}
        onBlur={() => runValidationTasks("nifVendedor", nifVendedor)}
        errorMessage={errors.nifVendedor?.errorMessage}
        hasError={errors.nifVendedor?.hasError}
        {...getOverrideProps(overrides, "nifVendedor")}
      ></TextField>
      <TextField
        label="Numero factura"
        isRequired={false}
        isReadOnly={false}
        value={numeroFactura}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura: value,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.numeroFactura ?? value;
          }
          if (errors.numeroFactura?.hasError) {
            runValidationTasks("numeroFactura", value);
          }
          setNumeroFactura(value);
        }}
        onBlur={() => runValidationTasks("numeroFactura", numeroFactura)}
        errorMessage={errors.numeroFactura?.errorMessage}
        hasError={errors.numeroFactura?.hasError}
        {...getOverrideProps(overrides, "numeroFactura")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Precio compra</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
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
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra: value,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
        label="Fecha compra"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={fechaCompra}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra: value,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.fechaCompra ?? value;
          }
          if (errors.fechaCompra?.hasError) {
            runValidationTasks("fechaCompra", value);
          }
          setFechaCompra(value);
        }}
        onBlur={() => runValidationTasks("fechaCompra", fechaCompra)}
        errorMessage={errors.fechaCompra?.errorMessage}
        hasError={errors.fechaCompra?.hasError}
        {...getOverrideProps(overrides, "fechaCompra")}
      ></TextField>
      <TextField
        label="Nombre vendedor"
        isRequired={false}
        isReadOnly={false}
        value={nombreVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor: value,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.nombreVendedor ?? value;
          }
          if (errors.nombreVendedor?.hasError) {
            runValidationTasks("nombreVendedor", value);
          }
          setNombreVendedor(value);
        }}
        onBlur={() => runValidationTasks("nombreVendedor", nombreVendedor)}
        errorMessage={errors.nombreVendedor?.errorMessage}
        hasError={errors.nombreVendedor?.hasError}
        {...getOverrideProps(overrides, "nombreVendedor")}
      ></TextField>
      <TextField
        label="Direccion vendedor"
        isRequired={false}
        isReadOnly={false}
        value={direccionVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor: value,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.direccionVendedor ?? value;
          }
          if (errors.direccionVendedor?.hasError) {
            runValidationTasks("direccionVendedor", value);
          }
          setDireccionVendedor(value);
        }}
        onBlur={() =>
          runValidationTasks("direccionVendedor", direccionVendedor)
        }
        errorMessage={errors.direccionVendedor?.errorMessage}
        hasError={errors.direccionVendedor?.hasError}
        {...getOverrideProps(overrides, "direccionVendedor")}
      ></TextField>
      <TextField
        label="Telefono vendedor"
        isRequired={false}
        isReadOnly={false}
        value={telefonoVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor: value,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.telefonoVendedor ?? value;
          }
          if (errors.telefonoVendedor?.hasError) {
            runValidationTasks("telefonoVendedor", value);
          }
          setTelefonoVendedor(value);
        }}
        onBlur={() => runValidationTasks("telefonoVendedor", telefonoVendedor)}
        errorMessage={errors.telefonoVendedor?.errorMessage}
        hasError={errors.telefonoVendedor?.hasError}
        {...getOverrideProps(overrides, "telefonoVendedor")}
      ></TextField>
      <Heading
        children="Detalles de la venta"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
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
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico: value,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
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
        label="Numero factura venta"
        isRequired={false}
        isReadOnly={false}
        value={numeroFacturaVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta: value,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
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
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones: value,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
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
      <SwitchField
        label="Vendido"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vendido}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido: value,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
              notas,
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
      ></SwitchField>
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
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta: value,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
      <TextAreaField
        label="Notas venta"
        isRequired={false}
        isReadOnly={false}
        value={notasVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta: value,
              fechaVenta,
              clienteID,
              alerta,
              notas,
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
      ></TextAreaField>
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
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta: value,
              clienteID,
              alerta,
              notas,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID: value,
              alerta,
              notas,
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
      <Heading
        children="Otros"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Heading>
      <CheckboxField
        label="Marcar que tiene una tarea pendiente"
        name="alerta"
        value="alerta"
        isDisabled={false}
        checked={alerta}
        defaultValue={alerta}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta: value,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.alerta ?? value;
          }
          if (errors.alerta?.hasError) {
            runValidationTasks("alerta", value);
          }
          setAlerta(value);
        }}
        onBlur={() => runValidationTasks("alerta", alerta)}
        errorMessage={errors.alerta?.errorMessage}
        hasError={errors.alerta?.hasError}
        {...getOverrideProps(overrides, "alerta")}
      ></CheckboxField>
      <TextAreaField
        label="Notas"
        isRequired={false}
        isReadOnly={false}
        value={notas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              matricula,
              marca,
              modelo,
              color,
              kilometros,
              combustible,
              cambio,
              anio,
              potencia,
              cc,
              localidadVendedor,
              nifVendedor,
              numeroFactura,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              numeroFacturaVenta,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              clienteID,
              alerta,
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
      ></TextAreaField>
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
