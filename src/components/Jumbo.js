import React from "react";
import Logo from "../img/Logo3.png";
import { Container, Row, Col } from "react-bootstrap";
import "./Jumbo.css";

const Jumbo = () => {
  return (
    <div className={"jumbotron-fluid jumbo-main pt-5 pb-5"} id="nosotros">
      <Container className="">
        <div className="row row-jumbo">
          <Col xs="12" md="7" className="mb-5 offset-1">
            <h2 className="m-0">Encuentra el Vehiculo de tus Sueños!</h2>
            <span className="text-primary h1">_______</span>
            <div className="row mt-3">
              <div className="col-5 ">
                <p class="fst-italic text-white mb-5 fs-5">
                  "Vende tu vehículo sin complicaciones: publica, recibe ofertas
                  y gestiona tus ventas en un solo lugar"
                </p>
              </div>
            </div>
          </Col>
          <div className="col-6 col-md-4 text-center">
            <div className="d-flex justify-content-center mb-2 d-none d-sm-block">
              <img
                src={Logo}
                alt="Logo"
                width="180"
                height="150"
                className="jumbo-logo"
              />
              <p className="text-primary mb-5 fs-5">vendevehiculos.com</p>
            </div>
            <h3 className="m-0"></h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Jumbo;
