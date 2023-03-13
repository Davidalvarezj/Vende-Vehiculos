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
  } else if (values.Contactname.length > 25) {
    errors.Contactname = "Maximo 25 caracteres";
  }

  if (values.Description.length > 800) {
    errors.Description = "Maximo 800 caracteres";
  }

  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "El telefono de contacto solo debe tener numeros.";
  }

  if (!values.Image1) {
    errors.Image1 = "Requerido";
  } else if (
    !(
      values.Image1.type === "image/png" ||
      values.Image1.type === "image/jpeg" ||
      values.Image1.type === "image/jpg"
    )
  ) {
    errors.Image1 = "Debe ser tipo JPG, o PNG.";
  } else if (values.Image1.size > 800 * 800) {
    errors.Image1 = "Maximo 5.0 Mb";
  }

  if (!values.Image2) {
    errors.Image2 = "Requerido";
  } else if (
    !(
      values.Image2.type === "image/png" ||
      values.Image2.type === "image/jpeg" ||
      values.Image2.type === "image/jpg"
    )
  ) {
    errors.Image2 = "Debe ser tipo JPG, o PNG.";
  } else if (values.Image2.size > 800 * 800) {
    errors.Image2 = "Maximo 5.0 Mb";
  }
  if (!values.Image3) {
    errors.Image3 = "Requerido";
  } else if (
    !(
      values.Image3.type === "image/png" ||
      values.Image3.type === "image/jpeg" ||
      values.Image3.type === "image/jpg"
    )
  ) {
    errors.Image3 = "Debe ser tipo JPG, o PNG.";
  } else if (values.Image3.size > 800 * 800) {
    errors.Image3 = "Maximo 5.0 Mb";
  }
  if (!values.Image4) {
    errors.Image4 = "Requerido";
  } else if (
    !(
      values.Image4.type === "image/png" ||
      values.Image4.type === "image/jpeg" ||
      values.Image4.type === "image/jpg"
    )
  ) {
    errors.Image4 = "Debe ser tipo JPG, o PNG.";
  } else if (values.Image4.size > 800 * 800) {
    errors.Image4 = "Maximo 5.0 Mb";
  }

  console.log("values: ", values.Image4.size);

  return errors;
};
