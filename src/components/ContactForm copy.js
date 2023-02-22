import { Button, Label, Col, FormGroup, Input, FormText } from "reactstrap";

import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import { validatePostForm } from "../utils/validatePostForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        VehicleType: "Auto",
        BodyType: "Automovil",
        Brand: "Acura",
        Reference: "",
        Year: 2024,
        Km: "",
        Price: "",
        Contactname: "",
        phoneNum: "",
        Description: "Sin Descripcion Adicional",
        file: "",
      }}
      onSubmit={handleSubmit}
      validate={validatePostForm}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="VehicleType" md="2">
            Tipo de vehículo
          </Label>
          <Col md="10">
            <Field as={"select"} className="form-control" name="vehicleType">
              <option value="Auto">Auto</option>
              <option value="Moto">Moto</option>
              <option value="Camion">Camion</option>
              <option value="Bote">Bote</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="BodyType" md="2">
            Tipo de Carroseria
          </Label>
          <Col md="10">
            <Field as={"select"} className="form-control" name="BodyType">
              <option value="Automovil">Automovil</option>
              <option value="Camioneta">Camioneta</option>
              <option value="Pick-Up">Pick-Up</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="Brand" md="2">
            Marca
          </Label>
          <Col md="10">
            <Field as={"select"} className="form-control" name="Brand">
              <option value="Acura">Acura</option>
              <option value="Alfa Romeo">Alfa Romeo</option>
              <option value="Audi">Audi</option>
              <option value="Bmw">Bmw</option>
              <option value="Cadillac">Cadillac</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Dodge">Dodge</option>
              <option value="Fiat">Fiat</option>
              <option value="Ford">Ford</option>
              <option value="Gmc">Gmc</option>
              <option value="Honda">Honda</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Jeep">Jeep</option>
              <option value="Kia">Kia</option>
              <option value="Land Rover">Land Rover</option>
              <option value="Lexus">Lexus</option>
              <option value="Mazda">Mazda</option>
              <option value="Merzedes Benz">Merzedes Benz</option>
              <option value="Mini">Mini </option>
              <option value="Mitsubishi">Mitsubishi </option>
              <option value="Nissan">Nissan </option>
              <option value="Porche">Porche </option>
              <option value="Subaru">Subaru </option>
              <option value="Toyota">Toyota </option>
              <option value="Volkswagen">Volkswagen </option>
              <option value="Volvo">Volvo </option>
              <option value="Volvo">Otro </option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="Reference" md="2">
            Referencia
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              name="Reference"
              placeholder="Mazda 626, Chevrolet Tracker Lt ..."
            />
            <ErrorMessage name="Reference">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="Year" md="2">
            Modelo
          </Label>
          <Col md="10">
            <Field as={"select"} className="form-control" name="Year">
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006 </option>
              <option value="2005">2005 </option>
              <option value="2004">2004 </option>
              <option value="2003">2003 </option>
              <option value="2002">2002 </option>
              <option value="2001">2001 </option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="Km" md="2">
            Kilometros
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              name="Km"
              placeholder="10.000 km..."
            />
            <ErrorMessage name="Km">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="Price" md="2">
            Precio $
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              name="Price"
              placeholder="$ 20'000.000"
            />
            <ErrorMessage name="Price">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="Contactname" md="2">
            Nombre de contacto
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              name="Contactname"
              placeholder="Nombre"
            />
            <ErrorMessage name="Contactname">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Telefono
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              name="phoneNum"
              placeholder="Phone Number"
            />
            <ErrorMessage name="phoneNum">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="Description" md="2">
            Comentarios Adicionales
          </Label>
          <Col md="10">
            <Field
              className="form-control"
              name="Description"
              placeholder="Ampliar descripción"
              as="textarea"
              rows="5"
            />
            <ErrorMessage name="Description">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Foto Principal
          </Label>
          <Col sm={10}>
            <Input
              id="exampleFile"
              name="file"
              type="file"
              onChange={(e) => console.log(e.currentTarget.files[0])}
              // onChange={(e) =>
              //   Formik.setFieldValue("image", e.currentTarget.files[0])
              // }
            />
            <ErrorMessage name="file">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Foto #2
          </Label>
          <Col sm={10}>
            <Input id="exampleFile" name="file2" type="file" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Foto #3
          </Label>
          <Col sm={10}>
            <Input id="exampleFile" name="file3" type="file" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Foto #4
          </Label>
          <Col sm={10}>
            <Input id="exampleFile" name="file4" type="file" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type="submit" color="primary" size="lg">
              Publicar Anuncio
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
