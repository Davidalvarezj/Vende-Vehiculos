export const validatePostForm = (values) => {
  const errors = {};
  const reg = /^\d+$/;

  if (!values.Reference) {
    errors.Reference = "Requerido";
  } else if (values.Reference.length < 2) {
    errors.Reference = "Debe tener almenos 2 caracteres.";
  } else if (values.Reference.length > 20) {
    errors.Reference = "Maximo 20 caracteres";
  }

  if (!reg.test(values.Km)) {
    errors.Km = "El valor de odómetro debe ser numerico";
  } else if (!values.Km) {
    errors.Km = "Requerido";
  }

  if (!reg.test(values.Price)) {
    errors.Price = "El Precio debe ser numerico";
  } else if (values.Price == 0) {
    errors.Price = "Requerido";
  }

  if (!values.Contactname) {
    errors.Contactname = "Requerido";
  } else if (values.Contactname.length < 2) {
    errors.Contactname = "Debe tener almenos 2 caracteres.";
  } else if (values.Contactname.length > 15) {
    errors.Contactname = "Maximo 15 caracteres";
  }

  if (values.Description.length > 200) {
    errors.Description = "Maximo 200 caracteres";
  }

  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "El telefono de contacto solo debe tener numeros.";
  }

  console.log(values.file);

  return errors;
};
