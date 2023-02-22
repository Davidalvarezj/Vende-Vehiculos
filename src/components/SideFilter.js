import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./SideFilter.css";

const SideFilter = () => {
  return (
    <div className="container container-main">
      <div className="row">
        <div className="col-4">
          <div className="filter-container">
            <div className="row">
              <div className="col m-5">
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-4"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Ubicación:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Select aria-label="Default select example">
                        <option>Ubicación</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">One</option>
                        <option value="5">Two</option>
                        <option value="6">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-4"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Marca:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Select aria-label="Default select example">
                        <option>Marca</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">One</option>
                        <option value="5">Two</option>
                        <option value="6">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-4"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Modelo:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Select aria-label="Default select example">
                        <option>Modelo</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">One</option>
                        <option value="5">Two</option>
                        <option value="6">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-4"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Carroseria:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Select aria-label="Default select example">
                        <option>Carroseria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Label>Precio:</Form.Label>
                  <Form.Range />
                  <Form.Label>Km:</Form.Label>
                  <Form.Range />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
