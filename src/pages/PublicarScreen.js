import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaStarOfDavid } from "react-icons/fa";
import PublicationForm from "../components/PublicationForm";

const PublicarScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <h4 className="mb-5">Crear nueva publicación</h4>
        <div className="col mb-5">
          <PublicationForm />
        </div>
      </div>
      <div className="row mt-5"></div>
    </div>
  );
};

export default PublicarScreen;
