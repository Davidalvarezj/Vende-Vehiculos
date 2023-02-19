import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { useEffect } from "react";
import Logo from "../img/Logo3.png";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SignUpModal from "./signin-modals/SignUpModal";

function Navbarmain() {
  const [modalShowSignUP, setModalShowSignUP] = React.useState(false);
  const [user, setuser] = React.useState({});
  const [logoutrun, setLogoutrun] = React.useState(false);
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user.userAuth);
  console.log("userStore: ", userStore);

  useEffect(() => {
    dispatch(addUser(user));
  }, [user]);

  return (
    <>
      <SignUpModal
        show={modalShowSignUP}
        onHide={() => setModalShowSignUP(false)}
        user={user}
        setuser={setuser}
        logoutrun={logoutrun}
        setLogoutrun={setLogoutrun}
      />

      <Navbar key="md" bg="light" expand="md" className="mb-3">
        <Container>
          <NavLink className="nav-link" to="/">
            <Navbar.Brand href="#">
              <img
                src={Logo}
                alt="Logo"
                width="70"
                height="60"
                className="jumbo-logo"
              />
            </Navbar.Brand>
          </NavLink>
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
                <NavLink className="nav-link" to="/publicar">
                  Publicar
                </NavLink>
                <NavDropdown
                  title="Carros"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">
                    <NavLink className="nav-link" to="/carros">
                      Automóvil
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Camioneta</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Pick-Up</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    Buscar por Marca
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Motos"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action7">
                    {" "}
                    <NavLink className="nav-link" to="/motos">
                      Scooter
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action8">Calle</NavDropdown.Item>
                  <NavDropdown.Item href="#action9">Touring</NavDropdown.Item>
                  <NavDropdown.Item href="#action10">Off-road</NavDropdown.Item>
                  <NavDropdown.Item href="#action11">
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
                  <NavDropdown.Item href="#action3">
                    {" "}
                    <NavLink className="nav-link" to="/camiones">
                      Volquetas
                    </NavLink>
                  </NavDropdown.Item>
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
                  <NavDropdown.Item href="#action5">
                    {" "}
                    <NavLink className="nav-link" to="/account">
                      Yates
                    </NavLink>
                  </NavDropdown.Item>
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

              {!user && (
                <Button
                  className="ms-2"
                  variant="light"
                  onClick={() => setModalShowSignUP(true)}
                >
                  {
                    <span className="text-secondary">
                      <FaUserAlt /> Ingresar
                    </span>
                  }
                </Button>
              )}

              {user && (
                <Button className="ms-2" variant="light">
                  <NavDropdown
                    title={
                      <span className="text-secondary">
                        {user.displayName ? user.displayName : user.email}
                      </span>
                    }
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item href="#action3">
                      <NavLink className="nav-link" to="/account">
                        Mi Cuenta
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setLogoutrun(true)}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarmain;
