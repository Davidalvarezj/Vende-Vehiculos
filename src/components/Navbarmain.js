import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../img/Logo3.png";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SignUpModal from "./signin-modals/SignUpModal";

function Navbarmain() {
  const [modalShowSignUP, setModalShowSignUP] = React.useState(false);
  const [user, setuser] = React.useState({});

  return (
    <>
      <SignUpModal
        show={modalShowSignUP}
        onHide={() => setModalShowSignUP(false)}
        user={user}
        setuser={setuser}
      />

      <Navbar key="md" bg="light" expand="md" className="mb-3">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={Logo}
              alt="Logo"
              width="70"
              height="60"
              className="jumbo-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Publicar</Nav.Link>
                <NavDropdown
                  title="Carros"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">
                    <NavLink className="nav-link" to="/cars">
                      Automóvil
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Camioneta</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Pick-Up</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Buscar por Marca
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Motos"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">Scooter</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Calle</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Touring</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Off-road</NavDropdown.Item>
                  <NavDropdown.Item href="#action7">
                    Cuatrimoto
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Buscar por Marca
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Camiones"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">Volquetas</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Buses</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Camiones</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Maquinaria pesada
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Buscar por Marca
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Botes"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action5">Yates</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Lanchas</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Veleros</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Motos acuaticas
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Buscar por Marca
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
              <Button
                className="ms-2"
                variant="light"
                onClick={() => setModalShowSignUP(true)}
              >
                {user ? (
                  <span className="text-secondary">{user.displayName}</span>
                ) : (
                  <span className="text-secondary">
                    Ingresar <FaUserAlt />
                  </span>
                )}
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarmain;
