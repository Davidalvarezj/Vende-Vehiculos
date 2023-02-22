import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ContactForm from "../components/ContactForm";
import Row from "react-bootstrap/Row";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], "terms must be accepted"),
});

const PublicarScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <h4 className="mb-5">Crear nueva publicación</h4>
        <div className="col mb-5">
          <ContactForm />
        </div>
      </div>
      <div className="row mt-5"></div>
    </div>
  );
};

export default PublicarScreen;
