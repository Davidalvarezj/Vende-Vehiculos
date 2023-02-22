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
  } else if (values.size < 720 * 720) {
    errors.Image1 = "Maximo 720 x 720 px";
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
    errors.Image2 = "Debe ser tipo JPG, o NPM.";
  } else if (values.Image2.size > 720 * 720) {
    errors.Image2 = "Maximo 720 x 720 px";
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
    errors.Image3 = "Debe ser tipo JPG, o NPM.";
  } else if (values.Image3.size > 720 * 720) {
    errors.Image3 = "Maximo 720 x 720 px";
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
    errors.Image4 = "Debe ser tipo JPG, o NPM.";
  } else if (values.Image4.size > 720 * 720) {
    errors.Image4 = "Maximo 720 x 720 px";
  }

  console.log("values: ", values.Image4.size);

  return errors;
};
