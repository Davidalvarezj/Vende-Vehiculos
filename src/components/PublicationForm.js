import { Button, Label, Col, FormGroup, Input, FormText } from "reactstrap";
import { useSelector } from "react-redux";
import { db } from "../firebaseconf";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseconf";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import { validatePostForm } from "../utils/validatePostForm";
import { sendData } from "../utils/sendDatatoFirestore";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const PublicationForm = ({ loading, setLoading, setModalShow }) => {
  const userStore = useSelector((state) => state.user.userAuth);
  console.log("userStore", userStore);

  const [filesize1, setFilesize1] = useState("");
  const [filesize2, setFilesize2] = useState("");
  const [filesize3, setFilesize3] = useState("");
  const [filesize4, setFilesize4] = useState("");

  const handleSubmit = async (data, { resetForm }) => {
    setModalShow(true);
    setLoading(true);
    data.Email = userStore.email;
    data.Uid = userStore.uid;
    data.PostId = "post" + Date.now();
    data.Price = Number(data.Price);
    data.Km = Number(data.Km);
    data.Year = Number(data.Year);

    try {
      await sendData(data);
    } catch (error) {
      console.log("Hay un Error envio a Base de Datos: ", error);
    }

    resetForm();
    setLoading(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          Email: userStore?.email,
          VehicleType: "Autos",
          Location: "Amazonas",
          BodyType: "Automovil",
          Brand: "Acura",
          Reference: "",
          Year: 2024,
          Km: "",
          Price: "",
          Contactname: "",
          phoneNum: "",
          Description: "Sin Descripcion Adicional",
          Image1: "",
          Image2: "",
          Image3: "",
          Image4: "",
        }}
        onSubmit={handleSubmit}
        validate={validatePostForm}
      >
        {(formProps) => (
          <Form>
            <FormGroup row>
              <Label htmlFor="VehicleType" md="2">
                Tipo de vehículo
              </Label>
              <Col md="10">
                <Field
                  as={"select"}
                  className="form-control"
                  name="VehicleType"
                >
                  <option value="Autos">Autos</option>
                  <option value="Motos">Motos</option>
                  <option value="Camiones">Camiones</option>
                  <option value="Botes">Botes</option>
                </Field>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="VehicleType" md="2">
                Ubicación
              </Label>
              <Col md="10">
                <Field as={"select"} className="form-control" name="Location">
                  <option value="Amazonas">Amazonas</option>
                  <option value="Antioquia">Antioquia</option>
                  <option value="Arauca">Arauca</option>
                  <option value="Atlántico">Atlántico</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Boyacá">Boyacá</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Caquetá">Caquetá</option>
                  <option value="Casanare">Casanare</option>
                  <option value="Cauca">Cauca</option>
                  <option value="Cesar">Cesar</option>
                  <option value="Chocó">Chocó</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Guainía">Guainía</option>
                  <option value="Guaviare">Guaviare</option>
                  <option value="Huila">Huila</option>
                  <option value="Guajira">Guajira</option>
                  <option value="Magdalena">Magdalena</option>
                  <option value="Meta">Meta</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Norte de Santander">Norte de Santander</option>
                  <option value="Putumayo">Putumayo</option>
                  <option value="Quindío">Quindío</option>
                  <option value="San Andrés y Providencia">
                    San Andrés y Providencia
                  </option>
                  <option value="Santander">Santander</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Tolima">Tolima</option>
                  <option value="Valle del Cauca">Valle del Cauca</option>
                  <option value="Vaupés">Vaupés</option>
                  <option value="Vichada">Vichada</option>
                </Field>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="BodyType" md="2">
                Tipo de Carroseria
              </Label>
              <Col md="10">
                <Field as={"select"} className="form-control" name="BodyType">
                  {formProps.values.VehicleType == "Autos" && (
                    <>
                      <option value="Automovil">Automovil</option>
                      <option value="Camioneta">Camioneta</option>
                      <option value="Pick-Up">Pick-Up</option>
                      <option value="Otro">Otro</option>
                    </>
                  )}
                  {formProps.values.VehicleType == "Motos" && (
                    <>
                      <option value="Calle">Calle</option>
                      <option value="Touring">Touring</option>
                      <option value="Off-road">Off-road</option>
                      <option value="Cuatrimoto">Cuatrimoto</option>
                      <option value="Otro">Otro</option>
                    </>
                  )}
                  {formProps.values.VehicleType == "Camiones" && (
                    <>
                      <option value="Bus">Bus</option>
                      <option value="Camion">Camion</option>
                      <option value="Maquinaria pesada">
                        Maquinaria pesada
                      </option>
                      <option value="Otro">Otro</option>
                    </>
                  )}
                  {formProps.values.VehicleType == "Botes" && (
                    <>
                      <option value="Yate">Yate</option>
                      <option value="Lancha">Lancha</option>
                      <option value="Moto acuatica">Moto acuatica</option>
                      <option value="Velero">Velero</option>
                      <option value="Otro">Otro</option>
                    </>
                  )}
                </Field>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="Brand" md="2">
                Marca
              </Label>
              <Col md="10">
                <Field as={"select"} className="form-control" name="Brand">
                  {formProps.values.VehicleType == "Autos" && (
                    <>
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
                      <option value="Otro">Otro </option>
                    </>
                  )}
                  {formProps.values.VehicleType == "Motos" && (
                    <>
                      <option value="Akt ">Akt </option>
                      <option value="Auteco">Auteco</option>
                      <option value="Bmw">Bmw</option>
                      <option value="Benelli">Benelli</option>
                      <option value="Beta">Beta</option>
                      <option value="Can-Am">Can-Am</option>
                      <option value="Ducati">Ducati</option>
                      <option value="Electric Motor">Electric Motor</option>
                      <option value="Gas Gas">Gas Gas</option>
                      <option value="Harley Davidson">Harley Davidson</option>
                      <option value="Honda">Honda</option>
                      <option value="Husqvarna">Husqvarna</option>
                      <option value="Hero ">Hero </option>
                      <option value="Husaberg">Husaberg</option>
                      <option value="Kawasaki">Kawasaki</option>
                      <option value="KTM">KTM</option>
                      <option value="Kymco">Kymco </option>
                      <option value="Lambretta">Lambretta </option>
                      <option value="Opel">Opel </option>
                      <option value="Piaggio">Piaggio </option>
                      <option value="Royal Enfield">Royal Enfield </option>
                      <option value="Sherco">Sherco </option>
                      <option value="Suzuki">Suzuki </option>
                      <option value="Triumph ">Triumph </option>
                      <option value="Victory">Victory </option>
                      <option value="Yamaha">Yamaha </option>
                      <option value="Zero">Zero </option>
                      <option value="Otro">Otro </option>
                    </>
                  )}
                  {formProps.values.VehicleType == "Camiones" && (
                    <>
                      <option value="Audi">Audi</option>
                      <option value="Agrale">Agrale</option>
                      <option value="Bmw">Bmw</option>
                      <option value="Caterpillar ">Caterpillar </option>
                      <option value="Chevrolet">Chevrolet</option>
                      <option value="Daf">Daf</option>
                      <option value="Dodge">Dodge </option>
                      <option value="Ford">Ford </option>
                      <option value="Freightliner">Freightliner</option>
                      <option value="Gmc">Gmc </option>
                      <option value="Hino">Hino</option>
                      <option value="Isuzu">Isuzu</option>
                      <option value="Iveco">Iveco</option>
                      <option value="Kenworth">Kenworth</option>
                      <option value="Mack">Mack</option>
                      <option value="Mercedes Benz">Mercedes Benz</option>
                      <option value="Mitsubishi">Mitsubishi</option>
                      <option value="Navistar">Navistar </option>
                      <option value="Rfw">Rfw</option>
                      <option value="Subaru">Subaru </option>
                      <option value="Toyota">Toyota </option>
                      <option value="Tesla Motors">Tesla Motors </option>
                      <option value="Volvo">Volvo</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Otro">Otro </option>
                    </>
                  )}
                  {formProps.values.VehicleType == "Botes" && (
                    <>
                      <option value="AB Inflatables ">AB Inflatables </option>
                      <option value="Antaris">Antaris</option>
                      <option value="Alumaweld">Alumaweld</option>
                      <option value="Arcadia Yachts">Arcadia Yachts</option>
                      <option value="Aquador">Aquador</option>
                      <option value="Barracuda">Barracuda</option>
                      <option value="BlackWater">BlackWater</option>
                      <option value="Blazer">Blazer</option>
                      <option value="BlackJack">BlackJack</option>
                      <option value="Caymas">Caymas</option>
                      <option value="Cobalt">Cobalt</option>
                      <option value="Catamaran">Catamaran</option>
                      <option value="Compass">Compass</option>
                      <option value="Deep Impact">Deep Impact</option>
                      <option value="Dominator">Dominator</option>
                      <option value="Everglades">Everglades</option>
                      <option value="Explorer">Explorer</option>
                      <option value="Fisher">Fisher</option>
                      <option value="Finseeker">Finseeker </option>
                      <option value="Goldfish">Goldfish </option>
                      <option value="Gibson">Gibson</option>
                      <option value="Hurricane">Hurricane </option>
                      <option value="Northstar">Northstar </option>
                      <option value="Ocean Yachts">Ocean Yachts </option>
                      <option value="Phoenix">Phoenix </option>
                      <option value="Quicksilver">Quicksilver </option>
                      <option value="Sportsman">Sportsman </option>
                      <option value="Sunfish">Sunfish </option>
                      <option value="Yamaha">Yamaha </option>
                      <option value="Zodiac">Zodiac </option>
                      <option value="Otro">Otro </option>
                    </>
                  )}
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
                  <option value={2024}>2024</option>
                  <option value={2023}>2023</option>
                  <option value={2022}>2022</option>
                  <option value={2021}>2021</option>
                  <option value={2020}>2020</option>
                  <option value={2019}>2019</option>
                  <option value={2018}>2018</option>
                  <option value={2017}>2017</option>
                  <option value={2016}>2016</option>
                  <option value={2015}>2015</option>
                  <option value={2014}>2014</option>
                  <option value={2013}>2013</option>
                  <option value={2012}>2012</option>
                  <option value={2011}>2011</option>
                  <option value={2010}>2010</option>
                  <option value={2009}>2009</option>
                  <option value={2008}>2008</option>
                  <option value={2007}>2007</option>
                  <option value={2006}>2006 </option>
                  <option value={2005}>2005 </option>
                  <option value={2004}>2004 </option>
                  <option value={2003}>2003 </option>
                  <option value={2002}>2002 </option>
                  <option value={2001}>2001 </option>
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
                  name="Image1"
                  type="file"
                  onChange={(e) => {
                    formProps.setFieldValue("Image1", e.target.files[0], true);
                    setFilesize1(e.target.files[0].size);
                  }}
                />
                {filesize1 > 518000 && (
                  <FormText color="danger">File size: {filesize1}</FormText>
                )}
                <ErrorMessage name="Image1">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                Foto #2
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleFile"
                  name="Image2"
                  type="file"
                  onChange={(e) => {
                    formProps.setFieldValue("Image2", e.target.files[0]);
                    setFilesize2(e.target.files[0].size);
                  }}
                />
                {filesize2 > 518000 && (
                  <FormText color="danger">File size: {filesize2}</FormText>
                )}
                <ErrorMessage name="Image2">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                Foto #3
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleFile"
                  name="Image3"
                  type="file"
                  onChange={(e) => {
                    formProps.setFieldValue("Image3", e.target.files[0]);
                    setFilesize3(e.target.files[0].size);
                  }}
                />
                {filesize3 > 518000 && (
                  <FormText color="danger">File size: {filesize3}</FormText>
                )}
                <ErrorMessage name="Image3">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                Foto #4
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleFile"
                  name="Image4"
                  type="file"
                  onChange={(e) => {
                    formProps.setFieldValue("Image4", e.target.files[0]);
                    setFilesize4(e.target.files[0].size);
                  }}
                />
                {filesize4 > 518000 && (
                  <FormText color="danger">File size: {filesize4}</FormText>
                )}
                <ErrorMessage name="Image4">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <div className="d-flex">
                  <Button type="submit" color="primary" size="lg">
                    Publicar Anuncio
                  </Button>
                  <BeatLoader
                    color={"#A6A6A6"}
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    speedMultiplier={0.5}
                    cssOverride={{ margin: 20, marginLeft: 50 }}
                  />
                </div>
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PublicationForm;
