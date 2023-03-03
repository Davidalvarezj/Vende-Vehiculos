import React from "react";
import Logo from "../img/Logowhite.png";
import { Container, Row, Col } from "react-bootstrap";
import "./Jumbo.css";

const Jumbo = () => {
  return (
    <div className={"jumbotron-fluid jumbo-main pt-5 pb-5"} id="nosotros">
      <Container className="">
        <div className="row row-jumbo justify-content-center">
          <Col xs="12" md="7" className="mb-5 offset-1">
            <h2 className="m-0 mt-5">Encuentra el Vehiculo de tus Sueños!</h2>
            <span className="text-primary h4">___________</span>
            <div className="row mt-3">
              <div className="col-6 ">
                <p className="fst-italic text-white mb-0 jumbotext">
                  "Publica, recibe ofertas y gestiona tus ventas en un solo
                  lugar"
                </p>
              </div>
            </div>
          </Col>
          <div className="col-6 col-md-4 text-center">
            <div className="d-flex justify-content-center mb-2 d-none d-sm-block mt-5">
              <img
                src={Logo}
                alt="Logo"
                width="120"
                height="110"
                className="jumbo-logo"
              />
              <h5 className="text-white mb-5">www.vendevehiculos.com</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Jumbo;
