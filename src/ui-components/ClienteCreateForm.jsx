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
    Coches: (r) => `${r?.matricula ? r?.matricula + " - " : ""}${r?.id}`,
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
        label="Nombre"
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
        label="Apellido1"
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
        label="Dni"
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
