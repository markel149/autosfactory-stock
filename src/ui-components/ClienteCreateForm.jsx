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
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Cliente, Coche } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify";
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
    Coches: [],
    ciudad: "",
    calle: "",
    codigoPostal: "",
    alerta: false,
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
    numeroFacturaVenta: "",
    precioCompra: "",
    fechaCompra: "",
    nombreVendedor: "",
    direccionVendedor: "",
    telefonoVendedor: "",
    precioVentaPublico: "",
    precioReparaciones: "",
    vendido: false,
    precioVenta: "",
    notasVenta: "",
    fechaVenta: "",
    notas: "",
    clienteID: undefined,
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [apellido1, setApellido1] = React.useState(initialValues.apellido1);
  const [apellido2, setApellido2] = React.useState(initialValues.apellido2);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [dni, setDni] = React.useState(initialValues.dni);
  const [Coches, setCoches] = React.useState(initialValues.Coches);
  const [ciudad, setCiudad] = React.useState(initialValues.ciudad);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [alerta, setAlerta] = React.useState(initialValues.alerta);
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
  const [numeroFacturaVenta, setNumeroFacturaVenta] = React.useState(
    initialValues.numeroFacturaVenta
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
  const [precioReparaciones, setPrecioReparaciones] = React.useState(
    initialValues.precioReparaciones
  );
  const [vendido, setVendido] = React.useState(initialValues.vendido);
  const [precioVenta, setPrecioVenta] = React.useState(
    initialValues.precioVenta
  );
  const [notasVenta, setNotasVenta] = React.useState(initialValues.notasVenta);
  const [fechaVenta, setFechaVenta] = React.useState(initialValues.fechaVenta);
  const [notas, setNotas] = React.useState(initialValues.notas);
  const [clienteID, setClienteID] = React.useState(initialValues.clienteID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setApellido1(initialValues.apellido1);
    setApellido2(initialValues.apellido2);
    setEmail(initialValues.email);
    setTelefono(initialValues.telefono);
    setDni(initialValues.dni);
    setCoches(initialValues.Coches);
    setCurrentCochesValue(undefined);
    setCurrentCochesDisplayValue("");
    setCiudad(initialValues.ciudad);
    setCalle(initialValues.calle);
    setCodigoPostal(initialValues.codigoPostal);
    setAlerta(initialValues.alerta);
    setMatricula(initialValues.matricula);
    setMarca(initialValues.marca);
    setModelo(initialValues.modelo);
    setColor(initialValues.color);
    setKilometros(initialValues.kilometros);
    setCombustible(initialValues.combustible);
    setCambio(initialValues.cambio);
    setAnio(initialValues.anio);
    setPotencia(initialValues.potencia);
    setCc(initialValues.cc);
    setLocalidadVendedor(initialValues.localidadVendedor);
    setNifVendedor(initialValues.nifVendedor);
    setNumeroFactura(initialValues.numeroFactura);
    setNumeroFacturaVenta(initialValues.numeroFacturaVenta);
    setPrecioCompra(initialValues.precioCompra);
    setFechaCompra(initialValues.fechaCompra);
    setNombreVendedor(initialValues.nombreVendedor);
    setDireccionVendedor(initialValues.direccionVendedor);
    setTelefonoVendedor(initialValues.telefonoVendedor);
    setPrecioVentaPublico(initialValues.precioVentaPublico);
    setPrecioReparaciones(initialValues.precioReparaciones);
    setVendido(initialValues.vendido);
    setPrecioVenta(initialValues.precioVenta);
    setNotasVenta(initialValues.notasVenta);
    setFechaVenta(initialValues.fechaVenta);
    setNotas(initialValues.notas);
    setClienteID(initialValues.clienteID);
    setErrors({});
  };
  const [currentCochesDisplayValue, setCurrentCochesDisplayValue] =
    React.useState("");
  const [currentCochesValue, setCurrentCochesValue] = React.useState(undefined);
  const CochesRef = React.createRef();
  const getIDValue = {
    Coches: (r) => JSON.stringify({ id: r?.id }),
  };
  const CochesIdSet = new Set(
    Array.isArray(Coches)
      ? Coches.map((r) => getIDValue.Coches?.(r))
      : getIDValue.Coches?.(Coches)
  );
  const cocheRecords = useDataStoreBinding({
    type: "collection",
    model: Coche,
  }).items;
  const getDisplayValue = {
    Coches: (r) => `${r?.matricula}${" - "}${r?.marca}${" "}${r?.modelo}`,
  };
  const validations = {
    nombre: [{ type: "Required" }],
    apellido1: [{ type: "Required" }],
    apellido2: [],
    email: [{ type: "Email" }],
    telefono: [],
    dni: [{ type: "Required" }],
    Coches: [],
    ciudad: [],
    calle: [],
    codigoPostal: [],
    alerta: [],
    matricula: [],
    marca: [],
    modelo: [],
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
    numeroFacturaVenta: [],
    precioCompra: [],
    fechaCompra: [],
    nombreVendedor: [],
    direccionVendedor: [],
    telefonoVendedor: [],
    precioVentaPublico: [],
    precioReparaciones: [],
    vendido: [],
    precioVenta: [],
    notasVenta: [],
    fechaVenta: [],
    notas: [],
    clienteID: [],
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
          Coches,
          ciudad,
          calle,
          codigoPostal,
          alerta,
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
          numeroFacturaVenta,
          precioCompra,
          fechaCompra,
          nombreVendedor,
          direccionVendedor,
          telefonoVendedor,
          precioVentaPublico,
          precioReparaciones,
          vendido,
          precioVenta,
          notasVenta,
          fechaVenta,
          notas,
          clienteID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            nombre: modelFields.nombre,
            apellido1: modelFields.apellido1,
            apellido2: modelFields.apellido2,
            email: modelFields.email,
            telefono: modelFields.telefono,
            dni: modelFields.dni,
            ciudad: modelFields.ciudad,
            calle: modelFields.calle,
            codigoPostal: modelFields.codigoPostal,
            alerta: modelFields.alerta,
          };
          const cliente = await DataStore.save(new Cliente(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...Coches.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Coche.copyOf(original, (updated) => {
                    updated.clienteID = cliente.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches: values,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
            };
            const result = onChange(modelFields);
            values = result?.Coches ?? values;
          }
          setCoches(values);
          setCurrentCochesValue(undefined);
          setCurrentCochesDisplayValue("");
        }}
        currentFieldValue={currentCochesValue}
        label={"Coches"}
        items={Coches}
        hasError={errors?.Coches?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Coches", currentCochesValue)
        }
        errorMessage={errors?.Coches?.errorMessage}
        getBadgeText={getDisplayValue.Coches}
        setFieldValue={(model) => {
          setCurrentCochesDisplayValue(
            model ? getDisplayValue.Coches(model) : ""
          );
          setCurrentCochesValue(model);
        }}
        inputFieldRef={CochesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Coches"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Coche"
          value={currentCochesDisplayValue}
          options={cocheRecords
            .filter((r) => !CochesIdSet.has(getIDValue.Coches?.(r)))
            .map((r) => ({
              id: getIDValue.Coches?.(r),
              label: getDisplayValue.Coches?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentCochesValue(
              cocheRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCochesDisplayValue(label);
            runValidationTasks("Coches", label);
          }}
          onClear={() => {
            setCurrentCochesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Coches?.hasError) {
              runValidationTasks("Coches", value);
            }
            setCurrentCochesDisplayValue(value);
            setCurrentCochesValue(undefined);
          }}
          onBlur={() => runValidationTasks("Coches", currentCochesDisplayValue)}
          errorMessage={errors.Coches?.errorMessage}
          hasError={errors.Coches?.hasError}
          ref={CochesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Coches")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Ciudad"
        isRequired={false}
        isReadOnly={false}
        value={ciudad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad: value,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
            };
            const result = onChange(modelFields);
            value = result?.ciudad ?? value;
          }
          if (errors.ciudad?.hasError) {
            runValidationTasks("ciudad", value);
          }
          setCiudad(value);
        }}
        onBlur={() => runValidationTasks("ciudad", ciudad)}
        errorMessage={errors.ciudad?.errorMessage}
        hasError={errors.ciudad?.hasError}
        {...getOverrideProps(overrides, "ciudad")}
      ></TextField>
      <TextField
        label="Calle"
        isRequired={false}
        isReadOnly={false}
        value={calle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle: value,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
            };
            const result = onChange(modelFields);
            value = result?.calle ?? value;
          }
          if (errors.calle?.hasError) {
            runValidationTasks("calle", value);
          }
          setCalle(value);
        }}
        onBlur={() => runValidationTasks("calle", calle)}
        errorMessage={errors.calle?.errorMessage}
        hasError={errors.calle?.hasError}
        {...getOverrideProps(overrides, "calle")}
      ></TextField>
      <TextField
        label="Codigo postal"
        isRequired={false}
        isReadOnly={false}
        value={codigoPostal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal: value,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
            };
            const result = onChange(modelFields);
            value = result?.codigoPostal ?? value;
          }
          if (errors.codigoPostal?.hasError) {
            runValidationTasks("codigoPostal", value);
          }
          setCodigoPostal(value);
        }}
        onBlur={() => runValidationTasks("codigoPostal", codigoPostal)}
        errorMessage={errors.codigoPostal?.errorMessage}
        hasError={errors.codigoPostal?.hasError}
        {...getOverrideProps(overrides, "codigoPostal")}
      ></TextField>
      <SwitchField
        label="Alerta"
        defaultChecked={false}
        isDisabled={false}
        isChecked={alerta}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta: value,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
      ></SwitchField>
      <TextField
        label="Matricula"
        value={matricula}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        label="Marca"
        value={marca}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={modelo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        label="Color"
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        type="number"
        step="any"
        value={kilometros}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={combustible}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={cambio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        type="number"
        step="any"
        value={anio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        type="number"
        step="any"
        value={potencia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={cc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
      <TextField
        label="Localidad vendedor"
        value={localidadVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={nifVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={numeroFactura}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        label="Numero factura venta"
        value={numeroFacturaVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta: value,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        label="Precio compra"
        type="number"
        step="any"
        value={precioCompra}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra: value,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        type="date"
        value={fechaCompra}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra: value,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={nombreVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor: value,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={direccionVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor: value,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        value={telefonoVendedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor: value,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
      <TextField
        label="Precio venta publico"
        type="number"
        step="any"
        value={precioVentaPublico}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico: value,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        type="number"
        step="any"
        value={precioReparaciones}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones: value,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        isChecked={vendido}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido: value,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        type="number"
        step="any"
        value={precioVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta: value,
              notasVenta,
              fechaVenta,
              notas,
              clienteID,
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
        label="Notas venta"
        value={notasVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta: value,
              fechaVenta,
              notas,
              clienteID,
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
      <TextField
        label="Fecha venta"
        type="date"
        value={fechaVenta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta: value,
              notas,
              clienteID,
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
        label="Notas"
        value={notas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas: value,
              clienteID,
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
      <Autocomplete
        label="Label"
        options={clienteRecords
          .filter(
            (r, i, arr) => arr.findIndex((member) => member?.id === r?.id) === i
          )
          .map((r) => ({
            id: r?.id,
            label: getDisplayValue.clienteID?.(r),
          }))}
        onSelect={({ id, label }) => {
          setClienteID(id);
          runValidationTasks("clienteID", id);
        }}
        onClear={() => {
          setClienteID("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido1,
              apellido2,
              email,
              telefono,
              dni,
              Coches,
              ciudad,
              calle,
              codigoPostal,
              alerta,
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
              numeroFacturaVenta,
              precioCompra,
              fechaCompra,
              nombreVendedor,
              direccionVendedor,
              telefonoVendedor,
              precioVentaPublico,
              precioReparaciones,
              vendido,
              precioVenta,
              notasVenta,
              fechaVenta,
              notas,
              clienteID: value,
            };
            const result = onChange(modelFields);
            value = result?.clienteID ?? value;
          }
          if (errors.clienteID?.hasError) {
            runValidationTasks("clienteID", value);
          }
          setClienteID(value);
        }}
        onBlur={() => runValidationTasks("clienteID", clienteID)}
        errorMessage={errors.clienteID?.errorMessage}
        hasError={errors.clienteID?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "clienteID")}
      ></Autocomplete>
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
